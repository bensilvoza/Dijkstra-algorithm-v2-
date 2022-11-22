import Road from "./road";

function Pu(props) {
  return (
    <Road
      start=""
      end="U"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="17rem"
      distance="7km"
      top="20.7rem"
      right="3.3rem"
      rotation="40"
    />
  );
}

export default Pu;
