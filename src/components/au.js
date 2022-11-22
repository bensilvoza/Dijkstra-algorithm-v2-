import Road from "./road";

function Au(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="20rem"
      distance="7km"
      top="13rem"
      right="-34.5rem"
      rotation="281"
    />
  );
}

export default Au;
