function binarySearch(list, element) {
    var l = 0; // Left bound
    var r = list.length - 1; // Right bound

    while (l <= r) {
        var m = Math.floor((l + r) / 2); // The middle of the bounds

        if (list[m] == element) {
            return m;
        }

        if (list[m] < element) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1
}
