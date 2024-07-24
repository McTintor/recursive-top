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

  