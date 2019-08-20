import {MAP, MAP_SEGMENT, SEGMENT_COORDINATES} from "./consts";

export const getScaledMap = (screenWidth, screenHeight) => {
  const segmentWidth = MAP.width * MAP_SEGMENT.width;
  const segmentHeight = MAP.height * MAP_SEGMENT.height;
  const scale = Math.min(screenWidth / segmentWidth, screenHeight / segmentHeight);
  return {
    width: MAP.width * scale,
    height: MAP.height * scale,
  };
};

export const getSegmentSize = map => ({
  width: map.width * MAP_SEGMENT.width,
  height: map.height * MAP_SEGMENT.height,
});

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
