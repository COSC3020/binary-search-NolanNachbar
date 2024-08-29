function binarySearch(list, target) {
    let l = 0; // Left bound
    let r = list.length - 1; // Right bound

    while (l <= r) {
        var m = Math.floor((l + r) / 2); // The middle of the bounds

        if (list[m] === target) {
            return m;
        } else if (list[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return -1
}
