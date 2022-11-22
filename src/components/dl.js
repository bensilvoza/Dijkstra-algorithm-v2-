import Road from "./road";

function Dl(props) {
  return (
    <Road
      start=""
      end="L"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="6rem"
      right="51.4rem"
      rotation="90"
    />
  );
}

export default Dl;
