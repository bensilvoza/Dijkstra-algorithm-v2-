import Road from "./road";

function Is(props) {
  return (
    <Road
      start=""
      end="S"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="25rem"
      right="3rem"
      rotation="90"
    />
  );
}

export default Is;
