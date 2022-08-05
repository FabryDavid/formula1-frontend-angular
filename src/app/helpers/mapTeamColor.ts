export default function (color: string | undefined | null) {
  return !color || color === "#ffffff" ? "#d4d4d4" : color;
}
