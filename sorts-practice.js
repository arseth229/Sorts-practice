function bubbleSort(arr) {
    let sorts = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            console.log(arr.join(','))
            sorts++
        }
        if ((sorts > 0) && (i === arr.length - 1)) {
            i = -1;
            sorts = 0;
        }
    }
    return arr;
}

function selectionSort (arr) {
   let pointer = 0;
   while(pointer < arr.length) {
    let minVal = Infinity;
    let minIndex = 0;

    for (let i = pointer; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIndex = i;
        }
    }

    for (let j = minIndex; j > pointer; j--) {
        arr[j] = arr[j - 1];
    }
    arr[pointer] = min;

    pointer++

   }
}

function insertionSort (arr) {
    let div = 1;
    while (div < arr.length) {

        for (let i = div; i > 0; i--) {
            if (arr[i - 1] < arr[i]) {
                i = 0;
            } else {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            }
        }
        div++;
    }
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))


    return merge(left, right)
}

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {

        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = arr.filter(ele => ele < pivot);
    const right = arr.filter(ele => ele >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
};