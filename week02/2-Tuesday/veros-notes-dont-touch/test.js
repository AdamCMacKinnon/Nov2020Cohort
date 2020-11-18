function bubbleSort(arr) {

  console.log('called function', arr.length);
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
      console.log(arr);
    for (let j = 0; j < (arr.length - 1 - i); j++){
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;

      }
    } //end of for
  } //end of for

  return arr;
}

console.log("sorted array :", bubbleSort([5, 7, 8, 9, 5, 2, 8]));
