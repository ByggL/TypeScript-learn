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
(_a = document.getElementById("newUserForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    let newName = document.getElementById("nom");
    let newAge = document.getElementById("age");
    let newPoste = document.getElementById("poste");
    let newSalary = document.getElementById("salaire");
    addUser(newName === null || newName === void 0 ? void 0 : newName.innerText, newAge === null || newAge === void 0 ? void 0 : newAge.innerText, newPoste === null || newPoste === void 0 ? void 0 : newPoste.innerText, newSalary === null || newSalary === void 0 ? void 0 : newSalary.innerText);
});
//# sourceMappingURL=index.js.map