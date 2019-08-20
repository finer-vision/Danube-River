import {MAP, MAP_SEGMENT, SEGMENT_COORDINATES} from "./consts";

// Get the scaled map.
// This will scale the map to match the screen's size
export const getScaledMap = (screenWidth, screenHeight) => {
  const segmentWidth = MAP.width * MAP_SEGMENT.width;
  const segmentHeight = MAP.height * MAP_SEGMENT.height;
  const scale = Math.min(screenWidth / segmentWidth, screenHeight / segmentHeight);
  return {
    width: MAP.width * scale,
    height: MAP.height * scale,
  };
};

// Get the actual segment size, in relation to the map's size, from the percentages
// This will scale the segment with the map and keep it in proportion.
export const getSegmentSize = map => ({
  width: map.width * MAP_SEGMENT.width,
  height: map.height * MAP_SEGMENT.height,
});

// Get the segments coordinate from the scaled map.
// This will keep the segment box scaled and centered inside the screen
export const getSegmentCoordinate = (screenWidth, screenHeight, segmentIndex) => {
  const scaledMap = getScaledMap(screenWidth, screenHeight);
  const segmentSize = getSegmentSize(scaledMap);
  const segmentCoordinate = {
    x: scaledMap.width * SEGMENT_COORDINATES[segmentIndex].x,
    y: scaledMap.height * SEGMENT_COORDINATES[segmentIndex].y,
  };
  return {
    x: -segmentCoordinate.x + ((screenWidth - segmentSize.width) / 2),
    y: -segmentCoordinate.y + ((screenHeight - segmentSize.height) / 2),
  };
};
