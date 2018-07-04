export const sortBy = (array, fieldName, direction = true) => array.sort((a, b) => {
  if (a[fieldName] === b[fieldName]) {
      return 0;
  }

  if (a[fieldName] == null) {
      return 1;
  }

  if (b[fieldName] == null) {
      return -1;
  }

  return a[fieldName] > b[fieldName] ? 1 : -1;
});
