'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account4.movements);

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(firstChar => firstChar.at(0))
      .join('');
  });
};

createUserNames(accounts);

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice method
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join method
console.log(letters.join(' - '));


// new array method ' .at() '
const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposit ${mov}`);
  else console.log(`You withdraw ${Math.abs(mov)}`);
}

console.log('------------------forEach----------------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0)
    console.log(`Movement ${i + 1}: You deposit ${mov} ${arr.at(-1)} `);
  else console.log(`You withdraw ${Math.abs(mov)}`);
});


// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`key ${key}: value ${value}`);
});

console.log('----------SET-----------');

// Set
const currenciesUnique = new Set([
  'USD',
  'GBP',
  'GEL',
  'GEL',
  'USD',
  'USD',
  'EUR',
  'EUR',
  'DOL',
  'DOL',
  'GIR',
]);

currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});


const check_Dogs = function (juliasDogs, katesDogs) {
  const dogsJuliaCorrected = juliasDogs.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(katesDogs);

  dogs.forEach((dog, i) => {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy`);
  });
};

check_Dogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
check_Dogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const obj = {};
const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// arrow function
const movementsUSD = movements.map(v => v * euroToUsd);
const movementsObj = movements.map((v, i) => ({ key: i, value: v }));

console.log(movementsObj);

console.log(movements);
console.log(movementsUSD);

const arr = [];
for (const mv of movements) {
  arr.push(mv * euroToUsd);
}
console.log(arr);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
      mov
    )} `
);
console.log(movementsDescription);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(mov => mov > 0);
const withdraw = movements.filter(mov => mov < 0);

console.log(deposit);
console.log(withdraw);

const dep = [];

for (const mov of movements) if (mov > 0) dep.push(mov);

console.log(dep);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i) {
//   console.log(`Iteration ${i} => acc is ${acc} current is => ${+cur}`);
//   return acc + cur;
// }, 0);

// arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);


const movements = [200, 450, -400, 3000, -236378, , -650, -130, 70, 1300];

// maximum value of the array

const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), 0);

const max2 = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements.at(0));

console.log(max);
console.log(max2);

*/
