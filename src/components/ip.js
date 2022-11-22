import Road from "./road";

function Ip(props) {
  return (
    <Road
      start=""
      end=""
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="5km"
      top="15.5rem"
      right="-16rem"
      rotation="344"
    />
  );
}

export default Ip;
