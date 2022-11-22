import Road from "./road";

function Sn(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="35rem"
      right="12.5rem"
      rotation="86"
    />
  );
}

export default Sn;
