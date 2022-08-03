export interface ITiming {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;

  toStringFormatted(padNumbers: boolean): string;
}
