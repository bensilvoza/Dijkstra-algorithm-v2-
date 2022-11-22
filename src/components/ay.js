import Road from "./road";

function Ay(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="5km"
      top="1.5rem"
      right="-22.5rem"
      rotation="0"
    />
  );
}

export default Ay;
