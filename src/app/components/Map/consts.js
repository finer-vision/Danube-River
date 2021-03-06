import config from "../../core/config";

export const getPercentage = (map, value, axis = 'x') => {
  const dimension = axis === 'x' ? map.width : map.height;
  return (1 / dimension) * value;
};

const getCoordinatePercentage = (map, x, y) => ({
  x: getPercentage(map, x, 'x'),
  y: getPercentage(map, y, 'y'),
});

// Original map size.
export const MAP = {
  width: 9017,
  height: 4120,
};

export const ZOOMED_MAP = {
  outerWidth: 2560,
  outerHeight: 1440,
  width: 1440,
  height: 900,
  x: 560,
  y: 270,
  riverWidth: 1317,
  riverHeight: 503,
  riverX: 629.75,
  riverY: 494,
};

export const MAP_RATIO_W = ZOOMED_MAP.outerWidth / ZOOMED_MAP.outerHeight;
export const MAP_RATIO_H = ZOOMED_MAP.outerHeight / ZOOMED_MAP.outerWidth;
export const MAP_SCALE_W = (1 / ZOOMED_MAP.width) * ZOOMED_MAP.outerWidth;
export const MAP_SCALE_H = (1 / ZOOMED_MAP.height) * ZOOMED_MAP.outerHeight;
export const MAP_SCALE_W_INVERSE = (1 / ZOOMED_MAP.outerWidth) * ZOOMED_MAP.width;
export const MAP_SCALE_H_INVERSE = (1 / ZOOMED_MAP.outerHeight) * ZOOMED_MAP.height;

export const HOT_SPOT_OFFSET_X = 210.247258;

export const MAP_VIEW_BOX = {
  width: 1322,
  height: 505,
};

// These are the x,y coordinates for each segment.
// They are percentage values taken from the top left of the original map.
export const SEGMENT_COORDINATES = [
  getCoordinatePercentage(MAP, 200, 200),
  getCoordinatePercentage(MAP, 1730, 650),
  getCoordinatePercentage(MAP, 4301, 2587),
  getCoordinatePercentage(MAP, 5886, 2561),
  getCoordinatePercentage(MAP, 7380, 2430),
];

// The map consists of multiple tile images, for each segment, for efficiency.
// Here is where the coordinates are defined.
export const TILE_COORDINATES = [
  getCoordinatePercentage(MAP, 0, 0),
  getCoordinatePercentage(MAP, 1670, 0),
  getCoordinatePercentage(MAP, 3248, 2335),
  getCoordinatePercentage(MAP, 5787, 2184),
  getCoordinatePercentage(MAP, 7354, 2208),
];

// Percentage values of the segment in relation to the map.
export const MAP_SEGMENT = {
  width: getPercentage(MAP, 1440, 'x'),
  height: getPercentage(MAP, 900, 'y'),
};

export const CLOUDS_ANIMATION_TIME = 3000 * 1.1;

export const MAP_SWAP_AFTER_ANIMATION_PROGRESS = 0.3;

export const SCROLL_THROTTLING = 2000;

export const DEFAULT_ACTIVE_ITEM = {...config.articles[0]};
