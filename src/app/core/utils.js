import assets from "../../assets.json";

export const asset = pathname => pathname;

export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

export const preloadAssets = fn => new Promise(resolve => {
  const processed = [];
  const totalAssets = assets.length;
  const processImage = img => {
    processed.push(img);
    fn && fn((100 / totalAssets) * processed.length);
    processed.length === totalAssets && resolve();
  };

  for (let i = 0; i < assets.length; i++) {
    const asset = assets[i];
    const img = new Image();
    img.onload = () => processImage(img);
    img.onerror = () => processImage(img);
    img.ontimeout = () => processImage(img);
    img.src = asset;
  }
});

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
