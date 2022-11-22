function Road(props) {
  return (
    <div
      style={{
        display: "inline-flex",
        position: props.position === undefined ? "relative" : props.position,
        width: props.width,
        backgroundColor: props.backgroundColor,
        color: props.color,
        visibility:
          props.visibility === undefined ? "visible" : props.visibility,
        fontFamily: "Montserrat",
        borderTop: "1px solid gray",
        borderBottom: "1px solid gray",
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        justifyContent: "space-between",
        transform: `rotate(${props.rotation}deg)`,
      }}
    >
      <p style={{ margin: "0" }}>{props.start}</p>
      <p style={{ margin: "0", color: "lightgray" }}>{props.distance}</p>
      <p style={{ margin: "0" }}>{props.end}</p>
    </div>
  );
}

export default Road;
