import { ISessionTime } from '../interfaces/isession-time';

export default function (sessionTime: ISessionTime) {
  return new Date(`${sessionTime.date}T${sessionTime.time}`);
}
