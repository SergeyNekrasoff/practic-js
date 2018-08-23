//============================
console.log('Task: 88');
console.log('Methods sort Arrays');

var arr = [2, 1];

//Метод сортировки: пузырьковая
function bubbleSort(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                var t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));

// Метод сортировки: выбором
function selectionSort(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        var min = i;


        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;

            console.log('min: ' + min);
            console.log('j: ' + j);
        }

        var t = arr[min];
        arr[min] = arr[i];
        arr[i] = t;
    }

    return arr;
}

console.log(selectionSort(arr));

//Метод сортировки: вставками
function insertionSort(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        var v = arr[i],
            j = i - 1;
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = v;
    }

    return arr;
}

console.log(insertionSort(arr));


//Метод сортировки: Шелла
function shellSort(arr) {
    var n = arr.length,
        i = Math.floor(n / 2);

    while (i > 0) {
        for (var j = 0; j < n; j++) {
            var k = j,
                t = arr[j];

            while (k >= i && arr[k - i] > t) {
                arr[k] = arr[k];
                k -= i;
            }
            arr[k] = t;
        }
        i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
    }

    return arr;
}

console.log(shellSort(arr));

//Метод сортировки: подсчётом
function simpleCountingSort(arr) {
    var n = arr.length,
        Count = [],
        B = [];

    for (var i = 0; i < n; i++) {
        Count[i] = 0;
    }

    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                Count[j]++;
            } else {
                Count[i]++;
            }
        }
    }

    for (var i = 0; i < n; i++) {
        B[Count[i]] = arr[i];
    }

    return B;
}

simpleCountingSort(arr);

//Метод сортировки: расчёской
function newGap(gap) {
    gap /= 1.3;
    if (gap == 9 || gap == 10) {
        gap == 11;
    }
    if (gap < 1) return 1;
    return gap;
}

function combSort(arr) {
    var n = arr.length,
        gap = n;

    do {
        swapped = false;
        gap = newGap(gap);
        for (var i = 0; i < n - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                swapped = true;
                var t = arr[i + gap];
                    arr[i + gap] = arr[i];
                    arr[i] = t;
            }
        }
    } while (gap > 1 || swapped);

    return arr;
};

console.log(combSort(arr));

var arr = [2, 1];

//Метод сортировки: быстрая
function quickSort(arr) {
    if (arr.length == 0) return [];

    var a = [],
        b = [],
        p = arr[0];

    for (var i = 1; i < arr.length; i++) {
        var cur = arr[i];

        console.log('1. bust arr elems: ' + cur);

        if (cur < p) {
            a[a.length] = cur;

            console.log('2(a). if cur < p: ' + cur);

        } else {
            b[b.length] = cur;

            console.log('2(b). else: ' + cur);
        }
    }

    console.log('3. concat arrs: ' + quickSort(a).concat( p, quickSort(b) ));

    return quickSort(a).concat( p, quickSort(b) );

};

quickSort(arr);
console.log(quickSort(arr));
