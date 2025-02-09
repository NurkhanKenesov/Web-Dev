let calculator = {
    // ... your code ...
    read() {
        a = +prompt("First number: ", "");
        b = +prompt("Second number: ", "");
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );