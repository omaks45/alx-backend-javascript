import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const max1 = new ClassRoom(19);
  const max2 = new ClassRoom(20);
  const max3 = new ClassRoom(34);

  const number = [max1, max2, max3];
  return (number);
}
