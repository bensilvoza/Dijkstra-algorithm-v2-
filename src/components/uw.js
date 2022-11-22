import Road from "./road";

function Uw(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="11rem"
      distance="5km"
      top="26rem"
      right="10.9rem"
      rotation="90"
    />
  );
}

export default Uw;
