export interface ITiming {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  base: number;

  toStringFormatted(padNumbers: boolean): string;
}
