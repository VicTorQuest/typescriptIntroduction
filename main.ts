interface User {
    type: 'user';
    name: string;
    username: string;
    id: number;
    department: string;
}


interface Admin{ 
    type: 'admin';
    name: string;
    username: string;
    id: number;
    role: string;
}


export type Person = User | Admin

export const persons: Person[] = [
    {type: 'user', name: 'Victor Okolie', username: 'Quest', id: 1, department: 'Web 3'},
    {type: 'user', name: 'Kevin Durant', username: 'EasyMoneySniper', id: 2, department: 'Backend'},
    {type: 'admin', name: 'Lebron James', username: 'KingJames23', id: 3, role: 'Administrator'},
    {type: 'user', name: 'Stephen Curry', username: 'BabyFaceAssasin', id: 4, department: 'Frontend'},
    {type: 'admin', name: 'Leonel Messi', username: 'LM102022worldCup', id: 5, role: 'Co-ordinator'}
]

export const logPerson = (person: Person) => {
  console.log(` - ${person.name}, ${person.id}, ${person.type === 'admin' ? person.role : person.department}`)
}

export const filterPersons = (person: Person[], personType: string, criteria:  { name: string; username: string; id: number; role?: string, department?: string}) : Person[] => {
    if (personType ==  "user") {
        console.log(persons
            .filter((person) => person.type === personType))
        return persons
        .filter((person) => person.type === personType)
    }
    console.log(person.filter((person) => person.type === personType))
    return persons
    .filter((person) => person.type === personType)
}

export const filteredUsers = filterPersons(persons, 'user', {name: 'Cristiano Ronaldo', username: "CR7suiiiiiii", id: 6, role: "Tutor"});
export const filteredAdmins = filterPersons(persons, 'admin', {name: 'Micheal Jordan', username: 'MJ23GOAT', id: 6, department: 'Tutor'});


console.log("Filtered users in Persons:");
filteredUsers.forEach(logPerson)

console.log();

console.log("Filtered admins in Persons:");
filteredAdmins.forEach(logPerson)
