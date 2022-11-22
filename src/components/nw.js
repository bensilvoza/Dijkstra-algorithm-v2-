import Road from "./road";

function Nw(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="25rem"
      distance="8km"
      top="30.8rem"
      right="-16.6rem"
      rotation="0"
    />
  );
}

export default Nw;
