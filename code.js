function binarySearch(list, element) {
    let l = 0; // Left bound
    let r = list.length - 1; // Right bound

    while (l <= r) {
        const m = Math.floor((l + r) / 2); // The middle of the bounds

        if (list[m] === element) {
            return m;
        } else if (list[m] < element) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return -1;
}
