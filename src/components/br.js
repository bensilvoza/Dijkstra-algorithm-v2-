import Road from "./road";

function Br(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="5km"
      top="6.2rem"
      right="32.4rem"
      rotation="0"
    />
  );
}

export default Br;
