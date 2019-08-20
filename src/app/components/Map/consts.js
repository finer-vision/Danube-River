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
  width: 9849,
  height: 4500,
};

// These are the x,y coordinates for each segment.
// They are percentage values taken from the top left of the original map.
export const SEGMENT_COORDINATES = [
  getCoordinatePercentage(MAP, 213, 213),
  getCoordinatePercentage(MAP, 1884, 705),
  getCoordinatePercentage(MAP, 4691, 2821),
  getCoordinatePercentage(MAP, 6423, 2792),
  getCoordinatePercentage(MAP, 8057, 2649),
];

// The map consists of multiple tile images, for each segment, for efficiency.
// Here is where the coordinates are defined.
export const TILE_COORDINATES = [
  getCoordinatePercentage(MAP, 0, 0),
  getCoordinatePercentage(MAP, 1846, 115),
  getCoordinatePercentage(MAP, 3672, 1818),
  getCoordinatePercentage(MAP, 6358, 2421),
  getCoordinatePercentage(MAP, 8035, 2347),
];

// Percentage values of the segment in relation to the map.
export const MAP_SEGMENT = {
  width: getPercentage(MAP, 1584, 'x'),
  height: getPercentage(MAP, 993, 'y'),
};
