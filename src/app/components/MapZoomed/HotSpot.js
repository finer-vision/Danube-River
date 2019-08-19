import React, {forwardRef} from "react";

export default forwardRef((props, ref) => (
  <g
    ref={ref}
    transform={`translate(${props.x} ${props.y})`}
    onClick={props.onClick}
    className="MapZoomed__hotSpot"
  >
    <ellipse fill="#EB4535" cx={30} cy={29} rx={20} ry={19}/>
    <ellipse
      className="MapZoomed__hotSpot-orbit"
      stroke="#EB4535"
      strokeWidth={2}
      cx={30.5}
      cy={29.5}
      rx={30.5}
      ry={29.5}
    />
  </g>
));
