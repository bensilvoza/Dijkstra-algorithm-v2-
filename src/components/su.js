import Road from "./road";

function Su(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="26rem"
      distance="8km"
      top="25.7rem"
      right="-3rem"
      rotation="355"
    />
  );
}

export default Su;
