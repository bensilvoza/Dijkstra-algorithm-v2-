import Road from "./road";

function Ha(props) {
  return (
    <Road
      start=""
      end="A"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="0rem"
      right="-2.5rem"
      rotation="90"
    />
  );
}

export default Ha;
