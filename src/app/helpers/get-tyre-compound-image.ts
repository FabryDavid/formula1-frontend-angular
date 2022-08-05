import { TireCompound } from '../enums/tire-compound';

export default function (compound: TireCompound) {
  switch (compound) {
    case TireCompound.SOFT:
      return 'assets/images/tires/soft.svg';
    case TireCompound.MEDIUM:
      return 'assets/images/tires/medium.svg';
    case TireCompound.HARD:
      return 'assets/images/tires/hard.svg';
    case TireCompound.INTER:
      return 'assets/images/tires/inter.svg';
    case TireCompound.WET:
      return 'assets/images/tires/rain.svg';
    default:
      return null;
  }
}
