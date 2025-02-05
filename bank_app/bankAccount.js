class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Creating instances of BankAccount class
const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);

// Demonstrate functionality
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(50);
account1.withdraw(700); // Should display "Insufficient funds"
console.log("Account 1 balance:", account1.getBalance());

console.log("\n");

account2.displayAccountInfo();
account2.deposit(500);
account2.withdraw(200);
account2.withdraw(1500); // Should display "Insufficient funds"
console.log("Account 2 balance:", account2.getBalance());