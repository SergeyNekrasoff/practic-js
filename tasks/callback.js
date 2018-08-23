var allUserData = [];

// определение функции logStuff для вывода в консоль
function logStuff(userData) {
    if (typeof userData === 'string') {
        console.log(userData);
    } else if (typeof userData === ‘object’) {
        for (var item in userData) {
            console.log(item + ‘: ‘ + userData[item]);
        }
    }
}

// Функция, принимающая два параметра, одним из которых является коллбэк 
function getInput(options, callback) {
    allUserData.push(options);
    callback(options);
}

// Пример вызова функции getInput с коллбком
getInput({ name: 'Rich', speciality: 'JavaScript' }, logStuff);
