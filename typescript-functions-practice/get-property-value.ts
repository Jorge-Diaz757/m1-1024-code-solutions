/* exported getPropertyValue */
function getPropertyValue(object: any, key: string): string {
  const propertyValue: any = object[key];
  return propertyValue;
}
