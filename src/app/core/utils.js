export const url = pathname => {
  return pathname;
};

export const asset = pathname => {
  return url(pathname);
};

export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

export const getOffset = element => {
  const bound = element.getBoundingClientRect();
  const html = document.documentElement;
  return {
    top: bound.top + window.pageYOffset - html.clientTop,
    left: bound.left + window.pageXOffset - html.clientLeft
  };
};
