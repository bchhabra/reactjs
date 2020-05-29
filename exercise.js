const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 20]
// 1. WAP to merge only the even numbers from the two arrays to a resultant array

const result = [...array1.filter(f => f%2==0), ...array2.filter(f => f%2==0)] //write code here
console.log(result)

const array = [1, 2, 3, 4, 5]
let sum = 0 //write code here
// 2. WAP to calculate sum of all the elements in the array
array.forEach(x => sum+=x)
console.log(sum)

const employees = [
    {
        id: 1,
        role: 'Developer',
        salary: 100000
    },
    {
        id: 2,
        role: 'Developer',
        salary: 200000
    },
    {
        id: 3,
        role: 'Team Lead',
        salary: 300000
    }
]
// 3. WAP to calculate total salary
let totalSalary = 0
employees.forEach(e => totalSalary+=e.salary)
console.log('Total salary is : ' + totalSalary)

// 4. WAP to get only the ids from the employees array

const empIds = employees.map(m => m.id) // Write code here
console.log('Employee ids are : ' + empIds)

// 5. WAP to find the employee with max salary
const empWithMaxSalary = employees.sort() // Write code here TODO
console.log('Employe with max salary : ' + JSON.stringify(empWithMaxSalary, null, 2));

// 6. WAP to find the employees with Developer role
const developers = employees.filter(e => e.role == "Developer") // Write code here
console.log('Developers are : ' + JSON.stringify(developers));

// 7. WAP to create employees out of the employees array with double salary 
// and an additional field division = 'Issuining'
const issuingEmps = employees.forEach(emp => emp.salary = 2*emp.salary)// Write code here TODO
console.log('Issuing employees : ' + JSON.stringify(employees))

// 8. WAP to get only the developr's ids
const developerIds = employees.filter(e => e.role == "Developer").map(e => e.id) // Write code here
console.log('Developer ids are : ' + developerIds)

// 9. WAP to delete the employee with Team Lead role from the array
const empsWithoutTeamLead = [] // Write code here
console.log('Employees without team lead : ' + empsWithoutTeamLead) //TODO

// 10. WAP to add a new employee without changing the existing array
const newEmpList = [] //TODO
console.log('New employees are : ' + newEmpList)