const val = [1, 2, 3, 4, 5];

const target = val.find(value => value === 13);
console.log(target);

const books = [
    {
        "name": 'book 1',
        "price": 100
    },
    {
        "name": 'book 2',
        "price": 50
    }
]

const book = books.filter(abook => abook.price === 50).map(somebook => somebook.name)
console.log(book);


//forEach
//map
//find
//filter


const values = [10, 15, 20, 25, 30]

const divisibleByTen = values.filter(value => (value % 10) === 0)
console.log(divisibleByTen);

const employees = [
    {
        id: 1,
        name: 'Brijesh',
        surname: 'Chhabra',
        salary: 10000
    },
    {
        id: 2,
        name: 'Someone',
        surname: 'Mishra',
        salary: 15000
    },
    {
        id: 3,
        name: 'Person',
        surname: 'Surname',
        salary: 20000
    }
]

const func = emp => {
    return Object.assign({}, emp, {
        name: emp.name + ' ' + emp.surname,
        surname: undefined
    })
}

const f1 = emp => emp.salary == 10000

//>= 15000 , only name, salary
const emps = employees.filter(f1).map(func)

console.log(JSON.stringify(emps))



const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

const result = [0, ...array1, ...array2, 11, 12]
console.log(result)

const sourceEmp = {
    "name": 'Brihesh',
    "surname": 'Chhabra'
}

const newEmp = Object.assign({}, sourceEmp, {surname: 'Some other surname',  place: 'Rajasthan'})
console.log(JSON.stringify(newEmp))






