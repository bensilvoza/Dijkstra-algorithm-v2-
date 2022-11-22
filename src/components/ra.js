import Road from "./road";

function Ra(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="15rem"
      distance="6km"
      top="4.6rem"
      right="18.5rem"
      rotation="0"
    />
  );
}

export default Ra;
