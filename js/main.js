const students = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
];

console.log(students);

// (1) всі елементи менше 30
const studentFilter = filter(
                            students,
                            function(student) {
                                return student.age < 30;
                            }
);

console.log(studentFilter);

function filter(arr, callback) {
    const Array = [];
    for (const x of arr) {
        if (callback(x)) {
            Array.push(x);
        }
    }
    return Array;
}


// (2) видалити елементи які більші за 25 
const studentDelete = delItems(
                            students,
                            function(student) {
                                return student.age <= 25;
                            }
);

console.log(studentDelete)

function delItems(arr, callback) {
    const Array = [];
    for (const x of arr) {
        if (callback(x)) {
            Array.push(x);
        }
    }
    return Array;
}


// (3) видалення першого елемента
delItem(students, removingOne);

function delItem(arr, callback) {
    callback(arr);
}

function removingOne(arr) {
    arr.shift();
    console.log(arr);
}




