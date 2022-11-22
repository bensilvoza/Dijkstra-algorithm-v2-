import Road from "./road";

function Df(props) {
  return (
    <Road
      start="D"
      end="F"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="15rem"
      distance="5km"
      rotation="0"
    />
  );
}

export default Df;
