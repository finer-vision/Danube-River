import assets from "../../assets";

export const asset = pathname => pathname;

export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

export const preloadAssets = fn => {
  const processed = [];
  const totalAssets = Object.keys(assets).length;
  const processImage = img => {
    processed.push(img);
    fn && fn((100 / totalAssets) * processed.length);
  };

  const allAssets = [];
  for (const asset in assets) {
    if (assets.hasOwnProperty(asset)) {
      allAssets.push(assets[asset]);
    }
  }

  return Promise.all(allAssets.map(async asset => {
    let img = null;
    try {
      img = await asset();
    } catch {
      // Ignore errors
    }
    processImage(img);
  }));
};

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
