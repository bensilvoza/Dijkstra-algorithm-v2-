import Road from "./road";

function Zs(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="5km"
      top="28.8rem"
      right="-1.5rem"
      rotation="0"
    />
  );
}

export default Zs;
