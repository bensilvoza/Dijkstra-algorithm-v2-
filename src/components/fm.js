import Road from "./road";

function Fm(props) {
  return (
    <Road
      start=""
      end="M"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="15rem"
      distance="5km"
      top=".3rem"
      rotation="0"
    />
  );
}

export default Fm;
