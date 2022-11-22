import Road from "./road";

function Wq(props) {
  return (
    <Road
      start="W"
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="18.5rem"
      distance="4km"
      top="32rem"
      right="-12.6rem"
      rotation="0"
    />
  );
}

export default Wq;
