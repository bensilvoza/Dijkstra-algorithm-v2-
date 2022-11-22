// libraries
import { useState } from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { DisplayXSmall } from "baseui/typography";
import { Select } from "baseui/select";
import { Button, KIND } from "baseui/button";

// components
import Df from "../components/df";
import Fm from "../components/fm";
import Mh from "../components/mh";
import Dl from "../components/dl";
import Lj from "../components/lj";
import Jz from "../components/jz";
import Zv from "../components/zv";
import Vn from "../components/vn";
import Fb from "../components/fb";
import Bi from "../components/bi";
import Is from "../components/is";
import Sn from "../components/sn";
import Lb from "../components/lb";
import Ji from "../components/ji";
import Zs from "../components/zs";
import Mr from "../components/mr";
import Rp from "../components/rp";
import Pu from "../components/pu";
import Br from "../components/br";
import Ip from "../components/ip";
import Su from "../components/su";
import Ha from "../components/ha";
import Ra from "../components/ra";
import Au from "../components/au";
import Nu from "../components/nu";
import Hc from "../components/hc";
import Cy from "../components/cy";
import Ay from "../components/ay";
import Yx from "../components/yx";
import Xq from "../components/xq";
import Wq from "../components/wq";
import Ux from "../components/ux";
import Uw from "../components/uw";
import Nw from "../components/nw";

// utils
import gridJustifyContentCenter from "../utils/gridJustifyContentCenter";
import points from "../utils/points";
import roadColorsProperties from "../utils/roadColorsProperties";
import handleChangeRoadColorsProperties from "../utils/handleChangeRoadColorsProperties";
import graph from "../utils/graph";

function Home() {
  let [start, setStart] = useState([]);
  let [end, setEnd] = useState([]);

  let [roadColorsPropertiesData, setRoadColorsPropertiesData] =
    useState(roadColorsProperties);

  function handleClickReset() {
    let shortestPath = [];

    // create a deep copy to prevent the original
    // version from any modification / changes
    let roadColorsPropertiesCopy = JSON.parse(
      JSON.stringify(roadColorsProperties)
    );

    let data = handleChangeRoadColorsProperties(
      roadColorsPropertiesCopy,
      shortestPath
    );

    setStart([]);
    setEnd([]);

    setRoadColorsPropertiesData({ ...data });

    return;
  }

  function handleClickFindShortestDistance() {
    // starting location and ending location is required
    if (start.length === 0 && end.length === 0) return;

    // shortest distance using Dijkstra algorithm
    let shortestDistance = graph.Dijkstra(start[0]["label"], end[0]["label"]);

    // shortestDistance
    // ['Z', 'S', 'U', 'A', 'Y']
    // connectedShortestDistance
    // ["ZS", "SU", "UA", "AY"]
    let connectedShortestDistance = [];
    for (let i = 0; i < shortestDistance.length - 1; i++) {
      let pointAToPointB = shortestDistance[i] + shortestDistance[i + 1];
      connectedShortestDistance.push(pointAToPointB.toLowerCase());
    }

    // create a deep copy to prevent the original
    // version from any modification / changes
    let roadColorsPropertiesCopy = JSON.parse(
      JSON.stringify(roadColorsProperties)
    );

    let data = handleChangeRoadColorsProperties(
      roadColorsPropertiesCopy,
      connectedShortestDistance
    );

    return setRoadColorsPropertiesData({ ...data });
  }

  return (
    <Grid overrides={gridJustifyContentCenter}>
      <Cell span={10}>
        <DisplayXSmall marginBottom={"2rem"}>
          Find the shortest distance using Dijkstra's algorithm
        </DisplayXSmall>

        {/* D - F || F - D */}
        <Df roadColor={roadColorsPropertiesData["df"]} />

        {/* F - M || M - F */}
        <Fm roadColor={roadColorsPropertiesData["fm"]} />

        {/* M - H || H - M */}
        <Mh roadColor={roadColorsPropertiesData["mh"]} />

        {/* D - L || L - D */}
        <Dl roadColor={roadColorsPropertiesData["dl"]} />

        {/* L - J || J - L */}
        <Lj roadColor={roadColorsPropertiesData["lj"]} />

        {/* J - Z || Z - J */}
        <Jz roadColor={roadColorsPropertiesData["jz"]} />

        {/* Z - V || V - Z */}
        <Zv roadColor={roadColorsPropertiesData["zv"]} />

        {/* V - N || N - V */}
        <Vn roadColor={roadColorsPropertiesData["vn"]} />

        {/* F - B || B - F */}
        <Fb roadColor={roadColorsPropertiesData["fb"]} />

        {/* B - I || I - B */}
        <Bi roadColor={roadColorsPropertiesData["bi"]} />

        {/* I - S || S - I */}
        <Is roadColor={roadColorsPropertiesData["is"]} />

        {/* S - N || N - S */}
        <Sn roadColor={roadColorsPropertiesData["sn"]} />

        {/* L - B || B - L */}
        <Lb roadColor={roadColorsPropertiesData["lb"]} />

        {/* J - I || I - J */}
        <Ji roadColor={roadColorsPropertiesData["ji"]} />

        {/* Z - S || S - Z */}
        <Zs roadColor={roadColorsPropertiesData["zs"]} />

        {/* M - R || R - M */}
        <Mr roadColor={roadColorsPropertiesData["mr"]} />

        {/* R - P || P - R */}
        <Rp roadColor={roadColorsPropertiesData["rp"]} />

        {/* P - U || U - P */}
        <Pu roadColor={roadColorsPropertiesData["pu"]} />

        {/* B - R || R - B */}
        <Br roadColor={roadColorsPropertiesData["br"]} />

        {/* I - P || P - I */}
        <Ip roadColor={roadColorsPropertiesData["ip"]} />

        {/* S - U || U - S */}
        <Su roadColor={roadColorsPropertiesData["su"]} />

        {/* H - A || A - H */}
        <Ha roadColor={roadColorsPropertiesData["ha"]} />

        {/* R - A || A - R */}
        <Ra roadColor={roadColorsPropertiesData["ra"]} />

        {/* A - U || U - A */}
        <Au roadColor={roadColorsPropertiesData["au"]} />

        {/* N - U || U - N */}
        <Nu roadColor={roadColorsPropertiesData["nu"]} />

        {/* H - C || C - H */}
        <Hc roadColor={roadColorsPropertiesData["hc"]} />

        {/* C - Y || Y - C */}
        <Cy roadColor={roadColorsPropertiesData["cy"]} />

        {/* A - Y || Y - A */}
        <Ay roadColor={roadColorsPropertiesData["ay"]} />

        {/* Y - X || X - Y */}
        <Yx roadColor={roadColorsPropertiesData["yx"]} />

        {/* U - X || X - U */}
        {/* hidden from the map */}
        <Ux />

        {/* X - Q || Q - X */}
        <Xq roadColor={roadColorsPropertiesData["xq"]} />

        {/* W - Q || Q - W */}
        <Wq roadColor={roadColorsPropertiesData["wq"]} />

        {/* U - W || W - U */}
        <Uw roadColor={roadColorsPropertiesData["uw"]} />

        {/* N - W || W - N */}
        <Nw roadColor={roadColorsPropertiesData["nw"]} />
      </Cell>

      <Cell span={10}>
        <div
          style={{
            display: "flex",
            marginTop: "33rem",
          }}
        >
          <div style={{ marginRight: "1rem" }}>
            <Select
              options={points}
              value={start}
              searchable={false}
              placeholder="Choose starting location"
              onChange={(params) => setStart(params.value)}
            />
          </div>

          <div style={{ marginRight: "1rem" }}>
            <Select
              options={points}
              value={end}
              searchable={false}
              placeholder="Choose ending location"
              onChange={(params) => setEnd(params.value)}
            />
          </div>

          <div style={{ marginRight: "1rem" }}>
            <Button onClick={handleClickFindShortestDistance}>
              Find the shortest distance
            </Button>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <Button kind={KIND.secondary} onClick={handleClickReset}>
              Reset current shortest distance
            </Button>
          </div>
        </div>
      </Cell>
    </Grid>
  );
}

export default Home;
