function handleChangeRoadColorsProperties(roadColorsProperties, shortestPath) {
  for (let i = 0; i < shortestPath.length; i++) {
    let road = shortestPath[i];
    let reversedRoad = shortestPath[i].split("").reverse().join("");

    if (roadColorsProperties[road] !== undefined) {
      roadColorsProperties[road] = {
        backgroundColor: "dimgrey",
        color: "white",
      };
    }

    if (roadColorsProperties[reversedRoad] !== undefined) {
      roadColorsProperties[reversedRoad] = {
        backgroundColor: "dimgrey",
        color: "white",
      };
    }
  }

  return roadColorsProperties;
}

export default handleChangeRoadColorsProperties;
