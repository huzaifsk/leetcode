class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // Initialize the calculator with the given value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value; // Add the value to the result
        return this; // Return the instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value; // Subtract the value from the result
        return this; // Return the instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value; // Multiply the result by the value
        return this; // Return the instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value; // Divide the result by the value
        return this; // Return the instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value); // Raise the result to the power of the value
        return this; // Return the instance for method chaining
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result; // Return the current result
    }
}

// Example usage:
// const calculator = new Calculator(10);
// const result = calculator
    // .add(5)       // 10 + 5 = 15
    // .subtract(3)  // 15 - 3 = 12
    // .multiply(4)  // 12 * 4 = 48
    // .divide(2)    // 48 / 2 = 24
    // .power(2)     // 24^2 = 576
    // .getResult(); // Get the final result

// console.log(result); // Output: 576
