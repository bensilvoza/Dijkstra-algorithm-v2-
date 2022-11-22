import Road from "./road";

function Yx(props) {
  return (
    <Road
      start=""
      end="X"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="20rem"
      distance="7km"
      top="12rem"
      right="-13.5rem"
      rotation="90"
    />
  );
}

export default Yx;
