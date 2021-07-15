# -*- coding: utf-8 -*-

"""
mapillary.utils.filter
This module contains the filter utilies for high level filtering logic
"""

# Local imports
from utils.time import date_to_unix_timestamp
from utils.format import feature_list_to_geojson

# Package imports
import haversine
import logging

logger = logging.getLogger("pipeline-logger")

def pipeline_component(func, data, exception_message, args):
    """A pipeline component which is respnonsible for sending functional arguments over
    to the selected target function - throwing a warning in case of an exception

    Usage::
        >>> # internally used in mapillary.utils.pipeline
    """

    try:
        return func(data, *args)
    except TypeError as exception:
        logger.warning(f'{exception_message}, {exception}')

def pipeline(data: dict, components: list):
    """A pipeline component that helps with making filtering easier. It provides
    access to different filtering mechanism by simplying letting users
    pass in what filter they want to apply, and the arguments for that filter

    Usage::
        >>> # assume variables 'data', 'kwargs'
        >>> pipeline(
            data=data,
            components=[
                {"filter": "image_type", "tile": kwargs["image_type"]}
                if "image_type" in kwargs
                else {},
                {"filter": "organization_id", "organization_ids": kwargs["org_id"]}
                if "org_id" in kwargs
                else {},
                {
                    "filter": "haversine_dist",
                    "radius": kwargs["radius"],
                    "coords": [longitude, latitude],
                }
                if "radius" in kwargs
                else 1000,
            ],
        )

    Import::
        >>> cd ${MAPILLARY_PROJECT_ROOT}
        >>> from tests.utils.test_filter import test_pipeline
        >>> test_pipeline(zoom=14, longitude=31, latitude=30)
        53
        0
        676
    
    Test::
        >>> pytest -m tests/
    """

    # Python treats dict objects as passed reference, thus
    # in order to not modify the previous state, we make a local copy
    __data = data.copy()

    # A mapping of different filters possible
    function_mappings = {
        'params': params,
        'max_date': max_date,
        'min_date': min_date,
        'haversine_dist': haversine_dist,
        'image_type': image_type,
        'organization_id': organization_id,
        # Simply add the mapping of a new function, 
        # nothing else will really need to changed
    }

    # Going through each of the components
    for component in components:

        # If component is simply empty, continue to next
        # iteration
        if component == {}:
            continue

        # Send to pipeline component, return data to `__data`
        __data = pipeline_component(

            # Map function respectively using the function_mappings dictionary
            func=function_mappings[f'{component["filter"]}'],

            # Send over the data
            data=__data,

            # Specify the message on the exception thrown
            exception_message=f'[pipeline - {component["filter"]}] Filter not applied, exception thrown',
            
            # Except the filter name, select the rest as args
            args=tuple(list(component.values())[1:])
            )

    # Return the data
    return feature_list_to_geojson(__data)


def max_date(data, max_timestamp):
    """Selects only the feature items that are less
    than the max_timestamp
    
    Usage::
        >>> max_date({'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry': 
        {'type': 'Point', 'coordinates': [30.98594605922699, 30.003757307208872]}, 'properties':
        { ... }, ...}]}, '2020-05-23')
    """

    return {
        'features' :[
            feature
            for feature in data["features"]
            if feature["properties"]["captured_at"] <= date_to_unix_timestamp(max_timestamp)
        ]
    }


def min_date(data, min_timestamp):
    """Selects only the feature items that are less
    than the min_timestamp
    
    Usage::
        >>> max_date({'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry': 
        {'type': 'Point', 'coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': 
        { ... }, ...}]}, '2020-05-23')
    """

    return {
        'features': [
            feature
            for feature in data["features"]
            if feature["properties"]["captured_at"] >= date_to_unix_timestamp(min_timestamp)
        ]
    }

def features_in_bounding_box(data: dict, values: list, property: str, bbox: dict) -> dict:
    """Filter for extracting features only in a bounding box
    with certain features
    
    :param data: The GeoJSON data
    :type data: <class 'dict'>

    :param values: List of values to filter by
    :type values: <class 'list'>

    :param property: propery to filter by selected 'property', for example, 'value'
    :type property: <class 'str'>

    :param bbox: Bounding box coordinates
    example: {
        'east': 'BOUNDARY_FROM_EAST',
        'south': 'BOUNDARY_FROM_SOUTH',
        'west': 'BOUNDARY_FROM_WEST',
        'north': 'BOUNDARY_FROM_NORTH'
    }
    :type bbox: <class 'dict'>

    :return: Features that only exist within the bounding box selected for the given GeoJSON,
    firstly filtered by the params() function, that geographyically mapped against the coordinates
    provided in the BBox functon
    :rtype: <class 'dict'> (GeoJSON)

    Usage::
        >>> import mapillary as mly, utils.filter as filter, mercantile, requests
        >>> from vt2geojson.tools import vt_bytes_to_geojson
        >>> access_token = 'MLY|XXX'
        >>> mly.set_access_token(access_token)
        >>> tile_points = 'mly_map_feature_point'
        >>> bbox = { 'east': -80.13423442840576, 'south': 25.77376933762778,
        >>> 'west': -80.1264238357544, 'north': 25.788608487732198 }
        >>> filter_values = ['object--support--utility-pole','object--street-light']
        >>> tiles = list(mercantile.tiles(bbox['east'], bbox['south'],
        ...        bbox['west'], bbox['north'], 14)) # zoom must be 14
        >>> for tile in tiles:
        >>>    tile_url = 'https://tiles.mapillary.com/maps/vtp/{}/2/{}/{}/{}?access_token={}'
        ...        .format(tile_points,tile.z,tile.x,tile.y,access_token)
        >>>     response = requests.get(tile_url)
        >>>     data = vt_bytes_to_geojson(response.content, tile.x, tile.y, tile.z)
        >>>     output['features].append(utils.features_in_bounding_box(data=data,
        ...         values=filter_values, property='value', bbox=bbox)['features'])
    """

    # define an empty geojson as output
    output= { "type": "FeatureCollection", "features": [] }

    # Filtered out the features according to the list of values for the given property
    filtered_data = params(data=data, values=values, property=property)

    # For each feature in the filtered_data
    for feature in filtered_data:

        # If feature exists in bounding box
        if (feature['geometry']['coordinates'][0] > bbox['east']
        and feature['geometry']['coordinates'][0] < bbox['west']) \
        and (feature['geometry']['coordinates'][1] > bbox['south']
        and feature['geometry']['coordinates'][1] < bbox['north']):

            # Append feature to the output
            output['features'].append(feature)

    # Return output
    # Format would be,
    #   { 
    #       'type': 'FeatureCollection',
    #       'feature': [
    #           { ... },
    #           { ... },
    #           { ... },
    #           { ... }
    #       ]
    # }
    return output

def params(data: dict, values: list, property: str) -> dict:
    """Filter the features based on the existence of a specified value
    in one of the property.

    ### TODO: Need documentation that lists the 'values', specifically, it refers to 'value'
    ### TODO: under 'Detection', and 'Map feature'

    :param data: The data to be filtered
    :type data: dict

    :param values: A list of values to filter by
    :type values: list

    :param property: The specific parameter to look into
    :type property: str

    :return: A feature list
    :rtype: dict
    """

    return {
        'features': [
            feature
            for feature in data["features"]
            if feature["properties"][property] in values
        ]
    }


def haversine_dist(data: dict, radius: float, coords: list, unit: str ="m") -> dict:
    """Returns features that are only in the radius specified
    using the Haversine distance, from the haversince package
    
    :param data: The data to be filtered
    :type data: dict

    :param radius: Radius for coordinates to fall into
    :type radius: float

    :param coords: The input coordinates (long, lat)
    :type coords: list

    :param unit: Either 'ft', 'km', 'm', 'mi', 'nmi', see here https://pypi.org/project/haversine/
    :type unit: str

    :return: A feature list
    :rtype: dict    
    """

    # Define an empty geojson
    output = {"type": "FeatureCollection", "features": []}

    # Go through the features
    for feature in data["features"]:

        # If the calculated haversince distance is less than the radius ...
        if haversine.haversine(coords, feature["geometry"]["coordinates"], unit=unit) < radius:

            # ... append to the output
            output["features"].append(feature)


    # Return the output
    return output


def image_type(data: dict, type: str) -> dict:
    """The parameter might be 'all' (both is_pano == true and false), 'pano'
    (is_pano == true only), or 'flat' (is_pano == false only)
    
    :param data: The data to be filtered
    :type data: dict

    :param type: Either 'pano' (True), 'flat' (False), or 'all' (None)
    :type type: str

    :return: A feature list
    :rtype: dict
    """

    # Checking what kind of parameter is passed
    bool_for_pano_filtering = (
        # Return true if type == 'pano'
        True if type == "pano"

        # Else false if type == 'falt'
        else False if type == "flat"
        
        # Else None if type is implicity 'all'
        else None
    )

    # Since 'all' doesn't change anything, we checking if
    # variable is not None
    if bool_for_pano_filtering:

        # Return the select features
        return {
            'features': [

                # Feature only if
                feature

                # through the feature in the data
                for feature in data["features"]

                # Select only properties that are appropriate (True/False)
                if feature["properties"]["is_pano"] is bool_for_pano_filtering
            ]
        }


def organization_id(data: dict, organization_ids: list) -> dict:
    """Select only features that contain the specific organization_id
    
    :param data: The data to be filtered
    :type data: dict

    :param organization_ids: The oragnization id(s) to filter through
    :type organization_ids: list

    :return: A feature list
    :rtype: dict    
    """

    return {
        'features': [

            # Feature only if
            feature

            # through the feature in the data            
            for feature in data["features"]

            # if the found org_id is in the list of organization_ids
            if feature["properties"]["organization_id"] in organization_ids
        ]
    }