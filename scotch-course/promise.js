// Promises

// ==================
// Promise syntax
new Promise(/* executor*/ function(resolve, reject) {
  // if result is success
  resolve(your_success_value);
  // if result is fail
  reject(your_error_value);
});

// ==================
// Promises in ES5, ES6/2015, ES7/Next
// ==================
// ES6
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
          phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

// ==================
// ES7
const isMomHappy = true;

// 1nd promise
const willIGetNewPhone = new Promise(
  (resolve, reject) => {
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'balck'
      };
      resolve(phone);
    } else {
      const reason = New Error('mom is not happy');
      reject(reason);
    }
  }
);

// 2nd promise
async function showOff(phone) {
  return new Promise(
    (resolve, reject) {
      var message = 'Hey friend, I have a new ' +
          phone.color + ' ' + phone.brand + ' phone.'

      resolve(message);
    }
  );
};

// call our promises
async function askMom() {
  try {
    console.log('before aking Mom');

    let phone = await willIGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log('after asking mom');
  }
  catch (error) {
    console.log(error.message);
  }
}

(async () => {
  await askMom();
})();

// await - is call a promise
// async - is return a promise
