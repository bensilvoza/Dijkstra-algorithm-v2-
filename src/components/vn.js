import Road from "./road";

function Vn(props) {
  return (
    <Road
      start=""
      end="N"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="15rem"
      distance="5km"
      top="41.5rem"
      right="31.6rem"
      rotation="0"
    />
  );
}

export default Vn;
