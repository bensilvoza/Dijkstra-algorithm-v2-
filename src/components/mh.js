import Road from "./road";

function Mh(props) {
  return (
    <Road
      start=""
      end="H"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="17rem"
      distance="6km"
      top=".3rem"
      rotation="0"
    />
  );
}

export default Mh;
