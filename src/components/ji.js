import Road from "./road";

function Ji(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="5km"
      top="20.6rem"
      right="44.6rem"
      rotation="0"
    />
  );
}

export default Ji;
