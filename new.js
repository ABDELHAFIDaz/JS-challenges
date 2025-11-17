const workers = [
    { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
    { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
    { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
    { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
    { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
];

let ID = workers.length;

// challenge 1 =================================================================================================================

// document.querySelector("body").innerHTML += `<p>Total Employees: ${workers.length}</p>`;

// challenge 2 =================================================================================================================

// document.querySelector("body").innerHTML += "<ul></ul>"
// workers.forEach(ele => document.querySelector("ul").innerHTML += `<li>${ele.name}</li>`);

// challenge 3 =================================================================================================================

// document.querySelector("body").appendChild(document.createElement("p"));
// document.querySelector("p").innerHTML = `Name: ${workers[2].name} | Role: ${workers[2].role}`;

// challenge 4 =================================================================================================================

// document.querySelector("body").innerHTML += "<ul></ul>"
// workers.forEach(ele => {
//     if(ele.active)
//         document.querySelector("ul").innerHTML += `<li>${ele.name}: <span style="color: green;">Active</span></li>`;
//     else
//         document.querySelector("ul").innerHTML += `<li>${ele.name}: <span style="color: red;">Inactive</span></li>`;
// });

// challenge 5 =================================================================================================================

// workers.forEach(ele => document.querySelector("body").innerHTML += `<button>Click to see the role of ${ele.name}</button><br><br>`)
// let btns = document.querySelectorAll("button")
// for (let i = 0; i < workers.length; i++) {
//     btns[i].addEventListener('click', (e) => {
//         alert(`Employee Role: ${workers[i].role}`);
//     })
// }

// challenge 6 =================================================================================================================

// document.querySelector("body").innerHTML ="<input>";
// document.querySelector("body").innerHTML += "<p></p>";
// document.querySelector("input").addEventListener('input', (e) => document.querySelector("p").innerHTML =`${document.querySelector("input").value}`);

// challenge 7 =================================================================================================================

// workers.forEach(ele => document.querySelector("body").innerHTML += `<div>${ele.name}</div><br><br>`);
// let divs = document.querySelectorAll("div");
// divs.forEach((div) => {
//     div.addEventListener('click', e => {
//         div.classList.toggle("ch7");
//     })
// });

// challenge 8 =================================================================================================================

// let btn = document.createElement("button");
// let box = document.createElement("div");

// document.querySelector("body").appendChild(btn);
// document.querySelector("body").appendChild(box);

// btn.innerHTML = "Toggle state";

// btn.addEventListener('click', e => box.classList.toggle("ch8"));

// challenge 9 =================================================================================================================

// let parisWorkers = workers.filter(ele => ele.city == 'Paris');
// document.querySelector("body").innerHTML += "<p>Workers from Paris:</p>";
// parisWorkers.forEach(e => document.querySelector("body").innerHTML +=  `<div>${e.name}</div><br><br>`);

// challenge 10 =================================================================================================================

// let para = document.createElement("p");
// document.querySelector("body").appendChild(para);
// para.innerHTML = "Title will update after 2 seconds...";

// let btn = document.createElement("button");
// document.querySelector("body").appendChild(btn);
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";
// btn.style.borderRadius = "5px";
// btn.innerHTML = "Trigger update";

// btn.addEventListener('click', e => {
//     para.innerHTML = "Title will update...";
//     setTimeout(() => {
//         para.innerHTML = "✓ Personnel List Updated!";
//     }, 2000);
// })

// challenge 11 =================================================================================================================

// let array = workers.forEach(e => {
//     let obj = {...{name: e.name, salray:e.salary}}
//     return obj;
// });
// console.log(array);

// challenge 12 =================================================================================================================

// let array = workers.filter(worker => worker.salary > 50000);
// array.forEach(ele => document.querySelector("body").innerHTML += `<div>${ele.name}-${ele.salary}</div>`);

// challenge 13 =================================================================================================================

// workers.forEach(ele => document.querySelector("body").innerHTML += `<div><span>${ele.name}</span> (click to see index)</div><br><br>`);
// document.querySelectorAll("div").forEach(box => {
//     box.addEventListener('click', () => {
//         let indexs = workers.filter(e => e.name == box.firstElementChild.innerHTML);
//         alert(`${box.firstElementChild.innerHTML} is at index ${workers.indexOf(indexs[0])}`);
//     })
// });

// challenge 14 =================================================================================================================

// let salarySum = workers.reduce((sum, nextEle) => sum + nextEle.salary, 0);
// document.querySelector('body').innerHTML = `Total salary of all workers is = ${salarySum}`;

// challenge 15 =================================================================================================================

// console.log("Before sorting: ", workers); // ????? why is sorted even before the sort function
// workers.sort((a, b) => a.name.localeCompare(b.name)); // localeCompare for comparing strings
// console.log("After sorting: ", workers);

// challenge 16 =================================================================================================================

// console.log(Object.keys(workers[0]));

// challenge 17 =================================================================================================================

// workers.forEach((e,index) => {
//     let keys = Object.keys(e);
//     let values = Object.values(e);
//     document.querySelector("body").innerHTML += `<h3>Worker ${index + 1}</h3>`;
//     document.querySelector('body').appendChild(document.createElement("table"));
//     keys.forEach((k, i) => {
//         document.querySelectorAll("table")[index].innerHTML += `
//         <tr>
//             <td>${k}</td>
//             <td>${values[i]}</td>
//         </tr>`
//     })
//     document.querySelector("body").innerHTML += "<br><br>";
// })

// challenge 18 =================================================================================================================

// function formHundler(e){
//     e.preventDefault();
//     let isValid = true;
//     regex = /[a-zA-Z]{2,20}/;
//     if(!regex.test(document.getElementById("worker-name").value.trim())){
//         isValid = false;
//         document.getElementById("worker-name").style.borderColor = "red";
//     }
//     else
//         document.getElementById("worker-name").style.borderColor = "black";
    
//     if(!regex.test(document.getElementById("worker-role").value.trim())){
//         isValid = false;
//         document.getElementById("worker-role").style.borderColor = "red";
//     }
//     else
//         document.getElementById("worker-role").style.borderColor = "black";

//     if(!regex.test(document.getElementById("worker-city").value.trim())){
//         isValid = false;
//         document.getElementById("worker-city").style.borderColor = "red";
//     }
//     else
//         document.getElementById("worker-city").style.borderColor = "black";

//     if(isValid){
//         addWorker();
//         document.getElementById("form").reset();
//         console.log(workers);
//     }
//     else
//         console.error("Invalid input");
// }
// document.querySelector('#form').addEventListener('submit',formHundler);

// function addWorker(){
//     workers.push({
//         id: ++ID,
//         name: document.getElementById("worker-name").value,
//         role: document.getElementById("worker-role").value,
//         city: document.getElementById("worker-city").value,
//         salary: document.getElementById("worker-salary").value,
//         active: true,
//         hireDate: '2025-11-17'
//     })
// }