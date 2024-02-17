"use strict";
var _a;
var UserList = [];
var IDcount = 1;
function addUser(name, age, poste, salary) {
    let newUser = {
        id: IDcount,
        name: name,
        age: parseInt(age),
        poste: poste,
        salary: parseInt(salary)
    };
    IDcount++;
    UserList.push(newUser);
}
function addToTable(user) {
    let table = document.querySelector("table");
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
(_a = document.getElementById("newUserForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    e.preventDefault();
    let newName = document.getElementById("nom");
    let newAge = document.getElementById("age");
    let newPoste = document.getElementById("poste");
    let newSalary = document.getElementById("salaire");
    addUser(newName === null || newName === void 0 ? void 0 : newName.innerText, newAge === null || newAge === void 0 ? void 0 : newAge.innerText, newPoste === null || newPoste === void 0 ? void 0 : newPoste.innerText, newSalary === null || newSalary === void 0 ? void 0 : newSalary.innerText);
    addToTable(UserList[UserList.length - 1]);
});
//# sourceMappingURL=index.js.map