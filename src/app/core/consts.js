export const PARALLAX_ARTWORK = {
  width: 2560,
  height: 1600,
};

export const PARALLAX_LAYERS = {
  // Background -> foreground
  'landing': [
    {
      x: -2.65,
      y: -13,
      width: 2560,
      height: 1600,
      range: [0, 0.3],
    },
    {
      x: 255.35,
      y: 107,
      width: 2051,
      height: 256,
      range: [0, 0.25],
    },
    {
      x: 533.35,
      y: 139,
      width: 1628,
      height: 1409,
      range: [0, 0.22],
    },
    {
      x: -14,
      y: 145,
      width: 1235,
      height: 631,
      range: [0, 0.1],
    },
    {
      x: 1491,
      y: 95,
      width: 1069,
      height: 804,
      range: [0, -0.1],
    },
    {
      x: 812,
      y: 301,
      width: 1748,
      height: 1203,
      range: [0, -0.5],
    },
    {
      x: 0.35,
      y: 790,
      width: 2560,
      height: 810,
      range: [0.5, 0],
    },
  ],
  'island-people': [
    {
      x: 0,
      y: 0,
      width: 2563,
      height: 1661,
      range: [0, 0.3],
    },
    {
      x: 0,
      y: 545,
      width: 2564,
      height: 98,
      range: [0, 0.25],
    },
    {
      x: 618,
      y: 223,
      width: 1496,
      height: 363,
      range: [0, 0.22],
    },
    {
      x: 452,
      y: 318,
      width: 1662,
      height: 696,
      range: [0, 0.10],
    },
    {
      x: 2005,
      y: 716,
      width: 628,
      height: 150,
      range: [0, -0.10],
    },
    {
      x: 0,
      y: 950,
      width: 2565,
      height: 650,
      range: [0, -0.50],
    },
    {
      x: 0,
      y: 685,
      width: 2563,
      height: 915,
      range: [0.5, 0],
    },
  ],
};

export const PRODUCTION_URL = 'https://www.cgtn.com/special/danube-life-of-a-river';

export const BACKGROUND_VELOCITY = 1.35;

export const PARALLAX_SCALE_PADDING = 0.15;
