export function pxToVWToPx(pxNumber) {
  return pxNumber * (window.innerWidth / 1920)
}

export default {
  pxToVWToPx,
}
