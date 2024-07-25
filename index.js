function fibs(n) {
    let endArray = [];
    if (n <= 0 || n === 1) {
        return endArray = [0]
    } else if (n === 2) {
        return endArray = [0, 1]
    } else {

        endArray = [0, 1]
    
       for (let i = 2; i < n; i++) {
        
            endArray[i] = endArray[i - 1] + endArray[i - 2]
        
        }

        return endArray

    }
}

console.log(fibs(8))

function generateFibonacci(n) {
    if (n <= 0) {
        return
    }
    if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
  
    // Recursive case: generate the Fibonacci sequence up to n
    let fibSequence = generateFibonacci(n - 1);
    fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    return fibSequence;
  }
  
  // Example usage
  console.log(generateFibonacci(10)); // Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



  const mergeSort = (array) => {
    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Find the middle index
    const middle = Math.floor(array.length / 2);
    // Divide the array into left and right halves
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle);
  
    // Recursively sort both halves
    const leftSorted = mergeSort(leftSide);
    const rightSorted = mergeSort(rightSide);
  
    // Merge the sorted halves together
    return merge(leftSorted, rightSorted);
  };
  
  const merge = (left, right) => {
    const result = [];
  
    // While both arrays have elements, compare and add the smallest to the result
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift()); // Remove the first element from left and add it to the result
      } else {
        result.push(right.shift()); // Remove the first element from right and add it to the result
      }
    }
  
    // Add any remaining elements from either left or right
    result.push(...left);
    result.push(...right);
  
    return result;
  };
  
  // Example usage:
  console.log(mergeSort([5, 3, 8, 10, 4, 1])); // Output: [1, 3, 4, 5, 8, 10]  