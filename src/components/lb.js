import Road from "./road";

function Lb(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="5km"
      top="7.7rem"
      right="31.6rem"
      rotation="0"
    />
  );
}

export default Lb;
