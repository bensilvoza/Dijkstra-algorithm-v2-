import Road from "./road";

function Mr(props) {
  return (
    <Road
      start=""
      end="R"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="1.4rem"
      right="-11.5rem"
      rotation="90"
    />
  );
}

export default Mr;
