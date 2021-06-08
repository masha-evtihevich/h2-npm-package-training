'use strict'
const lodash = require('lodash');

const data1 = [
    {
        "age": 3,
        "name": "Curtis Greene",
        "email": "curtis.greene@zaj.ca",
    },
    {
        "age": 23,
        "name": "Nikki Lowe",
        "email": "nikki.lowe@darwinium.tv",
    },
    {
        "age": 39,
        "name": "Barr Copeland",
        "email": "barr.copeland@nipaz.me",
    },
];
const data2 = [
    {
        "age": 29,
        "name": "Calhoun Woodward",
        "email": "calhoun.woodward@medmex.info",
    },
    {
        "age": 21,
        "name": "Leta Lee",
        "email": "leta.lee@qnekt.com",
    },
    {
        "age": 40,
        "name": "James Dinh",
        "email": "j.dink@erw.com",
    }
];

// Task 1
const indexUser = lodash.findIndex(data1, function (user) { return user.age === 23 })

// Task 2
const joinData = lodash.concat(data1, data2);

// Task 3
// Solution 1
const newObjOmit = user => lodash.omit(user, ['age']);
const objOmit = newObjOmit(data1[2])

// Solution 2
const newObjPick = user => lodash.pick(user, ['name', 'email'])
const objPick = newObjPick(data2[2])

// Task 4
const createNewObj = data => {
    let newObj = {}
    for (let key in data) {
        if (key !== 'age') {
            newObj[key] = data[key]
        }
    }
    return newObj
}
const objPick = createNewObj(data1[1])
