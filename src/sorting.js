function bubbleSort(arr) {
  var swapped = true;
  var tmp;
  for (var j = 0; swapped; j++) {
    swapped = false;
    for (var i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var swapIndex;
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        swapIndex = j;
      }
    }
    var tmp = arr[i];
    arr[i] = min;
    arr[swapIndex] = tmp;
  }
  return arr;
}

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    j = i

    while (j > 0 && arr[j - 1] > arr[j]) {
      var tmp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = tmp

      j -= 1
    }
  }

  return arr
}

module.exports = {
  bubbleSort: bubbleSort,
  selectionSort: selectionSort,
  insertionSort: insertionSort
}
