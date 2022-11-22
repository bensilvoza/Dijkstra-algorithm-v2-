import Road from "./road";

function Cy(props) {
  return (
    <Road
      start=""
      end="Y"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="-3.1rem"
      right="-41.5rem"
      rotation="90"
    />
  );
}

export default Cy;
