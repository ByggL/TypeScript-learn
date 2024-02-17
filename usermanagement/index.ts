

type User = {
    id: number;
    name: string;
    age: number;
    poste: string;
    salary: number;
};

var UserList : User[] = [];
var IDcount = 1;

function addUser(name: string, age: string, poste: string, salary: string) : void {
    let newUser: User = {
        id: IDcount,
        name: name,
        age: parseInt(age),
        poste: poste,
        salary: parseInt(salary)
    };
    IDcount++;

    UserList.push(newUser);
}

function addToTable(user: User) : void {
    let table = document.querySelector("table") as HTMLElement;

    let tr = document.createElement("tr");
    
    let tdID = document.createElement("td");
    tdID.innerHTML = user.id.toString();
    tr.appendChild(tdID);
    let tdName = document.createElement("td");
    tdName.innerHTML = user.name;
    tr.appendChild(tdName);
    let tdAge = document.createElement("td");
    tdAge.innerHTML = user.age.toString();
    tr.appendChild(tdName);
    let tdPoste = document.createElement("td");
    tdPoste.innerHTML = user.poste;
    tr.appendChild(tdName);
    let tdSalary = document.createElement("td");
    tdSalary.innerHTML = user.salary.toString();
    tr.appendChild(tdName);
    
    table.appendChild(tr);
}

document.getElementById("newUserForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    let newName = document.getElementById("nom");
    let newAge = document.getElementById("age");
    let newPoste = document.getElementById("poste");
    let newSalary = document.getElementById("salaire");

    addUser(newName?.innerText as string,newAge?.innerText as string,newPoste?.innerText as string,newSalary?.innerText as string);
    addToTable(UserList[UserList.length-1] as User);
})