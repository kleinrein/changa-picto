import os
import json

GENERATE_PATH = os.path.dirname(os.path.abspath(__file__))


def generate_json():
    print("Generating json")
    svg_path = os.path.join(GENERATE_PATH, '../web/src/images/svg/')
    filenames = [filename for filename in os.listdir(svg_path)]
    return json.dumps(filenames)


def save_json():
    json = generate_json()
    json_path = os.path.join(GENERATE_PATH, '../web/src/html/data/changas.json')
    with open(json_path, 'w') as file:
        file.write(json)


save_json()
