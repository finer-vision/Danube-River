export const PARALLAX_ARTWORK = {
  width: 1800,
  height: 1969,
};

const layerFactory = props => {
  const end = props.end || {};
  delete props.end;
  return {
    x: props.x || 0,
    y: props.y || 0,
    width: props.width || 0,
    height: props.height || 0,
    end: {...props, ...end},
  };
};

export const PARALLAX_LAYERS = {
  // Background -> foreground
  'landing': [
    layerFactory({
      width: 1800,
      height: 1131,
      x: 1,
      y: 0,
    }),
    layerFactory({
      width: 1795,
      height: 224,
      x: 4,
      y: 110,
      end: {
        y: 75,
      },
    }),
    layerFactory({
      width: 1145,
      height: 991,
      x: 377,
      y: 212,
      end: {
        y: 141,
      },
    }),
    layerFactory({
      width: 956,
      height: 491,
      x: 1,
      y: 203,
      end: {
        y: 90,
      },
    }),
    layerFactory({
      width: 752,
      height: 565,
      x: 1049,
      y: 124,
      end: {
        y: -3,
      },
    }),
    layerFactory({
      width: 1800,
      height: 902,
      x: 1,
      y: 307,
      end: {
        y: -3,
      },
    }),
    layerFactory({
      width: 1800,
      height: 1195,
      x: 1,
      y: 776,
      end: {
        y: 255,
      },
    }),
  ],
  'sturgeon': [
    layerFactory({
      width: 1800,
      height: 1889,
      x: 1,
      y: 1,
      end: {
        y: -83,
      },
    }),
    layerFactory({
      width: 242,
      height: 242,
      x: 778,
      y: 223,
      end: {
        y: 181,
      },
    }),
    layerFactory({
      width: 1799,
      height: 883,
      x: 1,
      y: 186,
      end: {
        y: 32,
      },
    }),
    layerFactory({
      width: 1355,
      height: 596,
      x: 446,
      y: 31,
      end: {
        y: -173,
      },
    }),
    layerFactory({
      width: 818,
      height: 448,
      x: 885,
      y: 468,
      end: {
        y: 172,
      },
    }),
    layerFactory({
      width: 1033,
      height: 717,
      x: 1,
      y: 251,
      end: {
        y: -122,
      },
    }),
    layerFactory({
      width: 1800,
      height: 1063,
      x: 1,
      y: 908,
      end: {
        y: 380,
      },
    }),
  ],
  'microplastics': [
    layerFactory({
      width: 1800,
      height: 708,
      x: 1,
      y: 416,
      end: {
        y: 1,
      },
    }),
    layerFactory({
      width: 1800,
      height: 671,
      x: 1,
      y: 0,
      end: {
        y: -230,
      },
    }),
    layerFactory({
      width: 1800,
      height: 230,
      x: 1,
      y: 430,
      end: {
        y: 276,
      },
    }),
    layerFactory({
      width: 195,
      height: 131,
      x: 842,
      y: 160,
      end: {
        y: 5,
      },
    }),
    layerFactory({
      width: 1801,
      height: 508,
      x: 0,
      y: 203,
      end: {
        y: -1,
      },
    }),
    layerFactory({
      width: 492,
      height: 169,
      x: 1,
      y: 771,
      end: {
        y: 423,
      },
    }),
    layerFactory({
      width: 1800,
      height: 1063,
      x: 1,
      y: 908,
      end: {
        y: 443,
      },
    }),
  ],
  'hydro-power': [
    layerFactory({
      width: 1800,
      height: 1969,
      x: 1,
      y: 1,
    }),
    layerFactory({
      width: 1798,
      height: 335,
      x: 2,
      y: 84,
      end: {
        y: 41,
      },
    }),
    layerFactory({
      width: 977,
      height: 366,
      x: 824,
      y: 174,
      end: {
        y: 117,
      },
    }),
    layerFactory({
      width: 1798,
      height: 860,
      x: 2,
      y: 202,
      end: {
        y: 75,
      },
    }),
    layerFactory({
      width: 1229,
      height: 416,
      x: 471,
      y: 567,
      end: {
        y: 328,
      },
    }),
    layerFactory({
      width: 1032,
      height: 1006,
      x: 0,
      y: 321,
      end: {
        y: 82,
      },
    }),
    layerFactory({
      width: 1800,
      height: 1465,
      x: 1,
      y: 506,
      end: {
        y: -1,
      },
    }),
  ],
  'rewilding': [
    layerFactory({
      width: 1800,
      height: 1561,
      x: 0,
      y: 0,
      end: {
        y: -204,
      },
    }),
    layerFactory({
      width: 1131,
      height: 432,
      x: 153,
      y: 44,
      end: {
        y: 16,
      },
    }),
    layerFactory({
      width: 1800,
      height: 331,
      x: 1,
      y: 285,
      end: {
        y: 109,
      },
    }),
    layerFactory({
      width: 1199,
      height: 712,
      x: 601,
      y: 133,
      end: {
        y: 1,
      },
    }),
    layerFactory({
      width: 1271,
      height: 628,
      x: -1,
      y: 287,
      end: {
        y: 69,
      },
    }),
    layerFactory({
      width: 621,
      height: 369,
      x: 1179,
      y: 675,
      end: {
        y: 312,
      },
    }),
    layerFactory({
      width: 1808,
      height: 1489,
      x: -8,
      y: 487,
      end: {
        y: -41,
      },
    }),
  ],
  'mila-23': [
    layerFactory({
      width: 1800,
      height: 697,
      x: 1,
      y: 443,
      end: {
        y: 91,
      },
    }),
    layerFactory({
      width: 1800,
      height: 452,
      x: 1,
      y: 1,
      end: {
        y: -174,
      },
    }),
    layerFactory({
      width: 1220,
      height: 412,
      x: 357,
      y: 2,
      end: {
        y: -124,
      },
    }),
    layerFactory({
      width: 1155,
      height: 243,
      x: 321,
      y: 225,
      end: {
        y: 49,
      },
    }),
    layerFactory({
      width: 390,
      height: 94,
      x: 1413,
      y: 505,
      end: {
        y: 287,
      },
    }),
    layerFactory({
      width: 1800,
      height: 892,
      x: 1,
      y: 267,
      end: {
        y: -254,
      },
    }),
    layerFactory({
      width: 1800,
      height: 1152,
      x: 1,
      y: 817,
      end: {
        y: 233,
      },
    }),
  ],
};

export const BACKGROUND_VELOCITY = 1.35;

export const PARALLAX_SCALE_PADDING = 0.05;
