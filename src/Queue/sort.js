const stableSort = (arr, n) => {
  for(let i = 1, len = arr.length; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    let item = arr[j];

    while(j >= 0 && item.date[n] > key.date[n]) {
      arr[j + 1] = arr[j];
      j--;
      item = arr[j];
    }   

    arr[j + 1] = key;
  }
};

const radix = (arr) => {
  let result = [...arr],
    eg = arr[0];

  for(let i = eg.date.length - 1; i >= 0; i--) {
    stableSort(result, i); 
  }
  
  return result
};

export { radix };
