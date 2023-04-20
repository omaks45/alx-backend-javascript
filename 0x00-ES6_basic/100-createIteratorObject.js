export default function createIteratorObject(report) {
  const Container = [];
  for (const idx of Object.values(report.allEmployees)) {
    Container.push(idx);
  }
  return Container;
}
