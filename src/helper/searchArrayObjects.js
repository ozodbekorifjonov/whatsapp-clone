function searchArrayObjects(array, key, value) {
  if (value === null) return array;

  value = value.toLowerCase();

  const results = [];

  for (let i = 0; i < array.length; i++) {
    const objectValue = array[i][key].toString().toLowerCase();

    if (objectValue.includes(value)) {
      results.push(array[i]);
    }
  }

  return results.length > 0 ? results : [];
}

export default searchArrayObjects;
