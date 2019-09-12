import React, {forwardRef} from "react";

export default forwardRef((props, ref) => (
  <g
    ref={ref}
    transform={`translate(${props.x} ${props.y})`}
    onPointerEnter={props.onPointerEnter}
    onPointerLeave={props.onPointerLeave}
    onClick={props.onClick}
    className={`MapZoomed__hotSpot MapZoomed__hotSpot--${props.index}`}
  >
    <ellipse
      fill="#EC8484"
      rx={20}
      ry={19}
    />
    <ellipse
      className="MapZoomed__hotSpot-orbit"
      stroke="#EC8484"
      strokeWidth={2}
      rx={20}
      ry={19}
    />
  </g>
));
