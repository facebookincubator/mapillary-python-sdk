"""
mapillary.controllers.feature
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This module implements the feature extraction business logic functionalities of the Mapillary
Python SDK.

For more information, please check out https://www.mapillary.com/developer/api-documentation/

:copyright: (c) 2021 Facebook
:license: MIT LICENSE
"""

# Configs
from config.api.vector_tiles import VectorTiles

# Client
from models.client import Client

# Exception Handling
from controller.rules.verify import shape_bbox_check

# Utils
from utils.filter import pipeline
from utils.format import geojson_to_feature_object, merged_features_list_to_geojson

# Package imports
import mercantile
from vt2geojson.tools import vt_bytes_to_geojson


def get_map_features_in_shape_controller(geojson: dict, kwargs: dict) -> dict:
    """For extracting all map features within a shape

    :param geojson: The initial data
    :type geojson: dict

    :param kwargs: Kwargs to filter with
    :type kwargs: dict

    :return: GeoJSON
    :rtpe: dict
    """

    # TODO: Requirement# 10

    shape_bbox_check(kwargs=kwargs)

    return {"Message": "Hello, World!"}


def get_feature_map_key_controller(key: str, fields: list) -> dict:
    """Extracting features from the map features endpoint with specified key

    :param key: The image key
    :type key: str

    :param fields: List of possible fields
    :type fields: list

    :return: GeoJSON
    :rtype: dict
    """

    # TODO: Requirement# 11A

    # ? The checking of the fields can be done within the /config/api/, right?

    return {"Message": "Hello, World!"}


def get_feature_image_key_controller(key: str, fields: list) -> dict:
    """Extracting features from the image endpoint with specified key

    :param key: The image key
    :type key: str

    :param fields: List of possible fields
    :type fields: list

    :return: GeoJSON
    :rtype: dict
    """

    # TODO: Requirement# 11B

    # ? The checking of the fields for this endpoint are already
    # ? done within the Entity class
    # ? We should leave the checking of the fields to the /config/api/, right?

    return {"Message": "Hello, World!"}


def get_map_features_in_bbox_controller(
    bbox: dict,
    filters: dict,
    filter_values: list,
    layer: str = "points",
) -> str:
    """For extracing either map feature points or traffic signs within a bounding box

    :param bbox: Bounding box coordinates as argument
    :type bbox: dict

    :param layer: 'points' or 'traffic_signs'
    :type layer: str

    :param filter_values: a list of filter values supported by the API.
    Default is ['all'] for all filter values
    :type filter_values: list

    :param filters: Value list as argument (only one value or multiple values or “all”)
    :type filters: dict

    :return: GeoJSON
    :rtype: dict
    """

    # Instatinatin Client for API requests
    client = Client()

    # Getting all tiles within or interseting the bbox
    tiles = list(
        mercantile.tiles(
            east=bbox["east"],
            south=bbox["south"],
            west=bbox["west"],
            north=bbox["north"],
            zooms=14,
        )
    )

    # Filtered features lists from different tiles will be merged into 
    # filtered_features
    filtered_features = []

    for tile in tiles:
        # Decide which endpoint to send a request to based on the layer
        url = (
            VectorTiles.get_map_feature_point(x=tile.x, y=tile.y, z=tile.z)
            if layer == "points"
            else VectorTiles.get_map_feature_traffic_signs(x=tile.x, y=tile.y, z=tile.z)
        )

        res = client.get(url)

        # Decoding byte tiles
        data = vt_bytes_to_geojson(res.content, tile.x, tile.y, tile.z)

        # Separating feature objects from the decoded data
        unfiltered_features = geojson_to_feature_object(data)

        print(f'$' * 200+'\n\n')
        print(unfiltered_features)
        print(f'$' * 200+'\n\n')

        # ! Handle checking if resulting features lie within bbox
        # ! Handle date checking agains user input
        filtered_features.extend(pipeline(
            data=unfiltered_features,
            components=[
                {'filter': 'filter_values', 'values': filter_values, 'property': 'value'}
                # Skip filtering based on filter_values if they're not specified by the user
                if filter_values is not None
                else {},
                {'filter': 'features_in_bounding_box', 'bbox': bbox}
            ]
        ))
    print(f'{filtered_features}\n\n#################################################')
    geojson = merged_features_list_to_geojson(filtered_features)

    return geojson
