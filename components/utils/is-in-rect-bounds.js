export default function isInRectBounds(drag, drop) {
  const dropBounds = drop.getBoundingClientRect();
  const dragBounds = drag.getBoundingClientRect();
  if (dropBounds.top < dragBounds.top &&
      dropBounds.left < dragBounds.left &&
      dropBounds.right > dragBounds.right &&
      dropBounds.bottom > dragBounds.bottom
    ) {
    return true;
  }
  return false;
}