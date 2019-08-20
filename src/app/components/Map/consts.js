const getCoordinatePercentage = (map, x, y) => ({
  x: (1 / map.width) * x,
  y: (1 / map.height) * y,
});

// Original map size.
export const MAP = {
  width: 8273,
  height: 3780,
};

// These are the x,y coordinates for each segment.
// They are percentage values taken from the top left of the original map.
export const SEGMENT_COORDINATES = [
  getCoordinatePercentage(MAP, 180, 180),
  getCoordinatePercentage(MAP, 1587, 595),
  getCoordinatePercentage(MAP, 3939, 2370),
  getCoordinatePercentage(MAP, 5397, 2347),
  getCoordinatePercentage(MAP, 6765, 2224),
];

// Percentage values of the segment in relation to the map.
export const MAP_SEGMENT = {
  width: 0.16025,
  height: 0.22049972642713841,
};
