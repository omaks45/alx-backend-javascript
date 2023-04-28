export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('position outside the range');
  }

  const buffer = new ArrayBuffer(length);
  const Int8 = new Int8Array(buffer, 0, length);
  Int8.set([value], position);
  return new DataView(buffer);
}
