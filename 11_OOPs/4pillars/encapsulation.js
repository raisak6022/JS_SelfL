// Explaination of the Encapsulation
// Explanation: Encapsulation is like putting your data and the methods that work on that data together in a box. This box is called a class. It helps keep your code organized and prevents other parts of the code from directly messing with the data.

class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}

let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance); // Output: 1300
