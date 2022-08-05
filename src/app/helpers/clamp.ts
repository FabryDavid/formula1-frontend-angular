export default function (number: number, min: number, max: number) {
  return Math.min(Math.max(number, min), max);
}
