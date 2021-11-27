function chiaMang(array) {
    let arr = [];
    for (let i = 0; i < Math.floor(array.length / 3) + 1; i++) {
        if (array[i * 3] === undefined) { }

        else
            arr[i] = [array[i * 3], array[i * 3 + 1], array[i * 3 + 2]]
    }
    var filtered = arr.filter(Boolean);
    let x = [];
    for (let i = 0; i < filtered.length; i++) {
        x[i] = arr[i]
        x[i] = x[i].reverse().join("")
    }

    return x.reverse().join(".");
}

function soNumber(num) {
    let i = 0, x = [];
    while (Math.floor(num) > 0) {
        x[i] = Math.floor(num % 10);
        num /= 10; i++;
    }
    return x;
}

const catChuoi = (num) => {
    return chiaMang(soNumber(num))
}

export default catChuoi;