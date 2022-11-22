import Road from "./road";

function Nu(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="30rem"
      distance="10km"
      top="29.4rem"
      right="6rem"
      rotation="335"
    />
  );
}

export default Nu;
