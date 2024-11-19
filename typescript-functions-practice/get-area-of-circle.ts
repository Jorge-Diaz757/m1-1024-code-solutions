/* exported getAreaOfCircle */
function getAreaOfCircle(radius: number): number {
  const area: number = radius * radius;
  const result: number = area * Math.PI;
  return result;
}
