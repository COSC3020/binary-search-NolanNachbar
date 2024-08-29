function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1; 
    
    while (left <= right) {
        // Calculate the middle index
        const middle = Math.floor((left + right) / 2); 

        // Compare the middle element with the target element 
        if (list[middle] === element) {
            return middle; 
        } else if (list[middle] < element) {
            left = middle + 1; 
        } else {
            right = middle -1; 
        }
    }
    return -1;
}
