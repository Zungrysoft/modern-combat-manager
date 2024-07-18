# You can put in relationships as one-way connections and then use this script to conveniently fill in the other side of the connection

import json
import sys

def main():
    if (len(sys.argv) != 2):
        print(f"Usage: {sys.argv[0]} [file path]")
        exit()

    file_path = sys.argv[1]

    with open(file_path, "r") as f:
        data = json.load(f)

        for char in data:
            for connection in data[char]["connections"]:
                if char not in data[connection]["connections"]:
                    name1 = data[char]["name"]
                    name2 = data[connection]["name"]
                    relationship = data[char]['connections'][connection]['relationship']

                    print(f"{name1} {relationship} {name2}")
                    print(f"{name2} ______________ {name1}")
                    relationship_string = input() or relationship
                    # relationship_level = int(input() or "3")
                    relationship_level = data[char]["connections"][connection]["level"]
                    data[connection]["connections"][char] = {
                        "relationship": relationship_string,
                        "level": relationship_level,
                    }
                    print()

        # TODO: Run other checks that confirm integrity of data

    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)
main()