const workers = [
    { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: false, hireDate: '2023-01-15' },
    { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: true, hireDate: '2024-02-01' },
    { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: false, hireDate: '2020-03-05' },
    { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: false, hireDate: '2022-06-10' },
    { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: false, hireDate: '2021-08-20' },
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

// challenge 19 =================================================================================================================

// function displayer() {
//     document.querySelector('body').innerHTML = "";
//     workers.forEach(ele => {
//         document.querySelector('body').innerHTML += `
//     <div>
//         <span>${ele.name}</span>___________________<button class="btn">Delete</button>
//     </div>
//     <br>`;
//     })
//     deleteWorker();
// }

// function deleteWorker(){
//     document.querySelectorAll('.btn').forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             let targetName = btn.previousElementSibling.innerHTML;
//             workers.forEach(worker => {
//                 if (worker.name.includes(targetName)){
//                     workers.splice(workers.indexOf(worker), 1);
//                     btn.parentElement.outerHTML = "";
//                 }
//             })
//             console.log(workers);
//             // displayer();
//         })
//     })
// }

// displayer();

// challenge 20 =================================================================================================================

// let workersnames = workers.map(worker => worker.name);
// workersnames[0] = "hafidd"
// console.log(workersnames);
// console.log(workers);

// let colonedArr = structuredClone(workers);
// colonedArr[0].salary = 2;
// colonedArr[0].name = "hafid";
// console.log("coloned: ", colonedArr);
// console.log("original: ", workers);

// challenge 21 =================================================================================================================

// workers.map(worker => worker.salary += worker.salary * 0.1);
// console.log("after", workers);


// challenge 22 =================================================================================================================

// let paris = [];
// workers.reduce((sum, n) => (n.city == "Paris")? paris.push(n): sum, 0);
// console.log("paris: ", paris);

// let lyon = [];
// workers.reduce((sum, n) => (n.city == "Lyon")? lyon.push(n): sum, 0);
// console.log("lyon: ", lyon);

// let marseille = [];
// workers.reduce((sum, n) => (n.city == "Marseille")? marseille.push(n): sum, 0);
// console.log("marseille: ", marseille);

// challenge 23 =================================================================================================================

// if(workers.some(worker => !worker.active ))
//     document.querySelector("body").innerHTML += "<br><br><br><br><h1>Some thing is wrong</h1>";

// challenge 24 =================================================================================================================

// if(workers.every(worker => worker.salary > 30000))
//     document.querySelector("body").innerHTML = "<br><br><br><br><h1>✓ All employees earn more than $30,000</h1>";

// challenge 25 =================================================================================================================

// let coloned = structuredClone(workers)
// coloned[0].salary = 70000;
// console.log("cloned:", coloned[0])
// console.log("original: ", workers[0])

// challenge 26 =================================================================================================================

// document.querySelector("body").innerHTML = `<input>`;
// document.querySelector("body").innerHTML += `<div><div>`;
// let dev = document.querySelector("div");
// let input = document.querySelector("input");
// console.log(dev)
// input.addEventListener("input", (e) => {
//     console.log(input.value)
//     dev.innerHTML = "";
//     workers.forEach(Worker => {
//         if(Worker.name.includes(input.value) || Worker.role.includes(input.value)){
//             dev.innerHTML += `${Worker.name} | ${Worker.role}<br>`;
//         }
//     })
// })

// challenge 27 =================================================================================================================

// let selector = document.getElementById('roles-select');
// let list = document.createElement("div");
// document.querySelector("body").appendChild(list);

// function printer(array) {
//     list.innerHTML = "";
//     array.forEach(ele => {
//         list.innerHTML += `
//                     <div>
//                         ${ele.name} | ${ele.role}
//                     </div>
//                     <br>`;
//     })
// }
// printer(workers);

// selector.addEventListener("change", () => {
//     console.log(selector.value);
//     switch (selector.value) {
//         case "All roles":
//             printer(workers);
//             break;
//         default:
//             let theOnes = workers.filter(worker => worker.role == selector.value);
//             printer(theOnes);
//     }
// })

// challenge 28 =================================================================================================================

// let tbody = document.querySelector("tbody");
// workers.forEach((worker, id) => {
//     tbody.innerHTML += `
//             <tr>
//                 <td>${worker.id}</td>
//                 <td>${worker.name}</td>
//                 <td>${worker.role}</td>
//                 <td>${worker.city}</td>
//                 <td>$${worker.salary}</td>
//             </tr>`
// })

// challenge 29 =================================================================================================================

// function tableDisplayer() {
//     let tbody = document.querySelector("tbody");
//     tbody.innerHTML = "";
//     workers.forEach((worker, id) => {
//         tbody.innerHTML += `
//             <tr>
//                 <td>${worker.name}</td>
//                 <td>${worker.role}</td>
//                 <td>$${worker.salary}</td>
//             </tr>`
//     })
// }
// tableDisplayer();

// document.querySelectorAll(".clickable-headers").forEach(hd => {
//     hd.addEventListener('click', () => {
//         console.log(hd.innerHTML)
//         switch(hd.innerHTML){
//             case "NAME":
//                 workers.sort((a, b) => a.name.localeCompare(b.name))
//                 tableDisplayer();
//                 break;
//             default:
//                 workers.sort((a, b) => a.salary - b.salary)
//                 tableDisplayer();
//         }
//     })
// })

// challenge 30 =================================================================================================================

// let newHires = [
//                 { id: 1, name: 'XXXXX xxxxx', role: 'Manager', city: 'Rabat', salary: 60000, active: false, hireDate: '2025-01-15' },
//                 { id: 3, name: 'YYYYY yyyyy', role: 'Developer', city: 'Safi', salary: 48000, active: true, hireDate: '2025-02-01' }
//             ]
// let allWorkers = workers.concat(newHires) // concat merges two or more arrays and returns the result without effecting the original arrays
// document.querySelector("body").innerHTML = `<p>original: ${workers.length} workers</p><p>New hires: ${newHires.length} workers</p><p>All workers:</p><ul></ul>`;
// allWorkers.forEach(worker => document.querySelector("ul").innerHTML += `<li>${worker.name}</li>`);

// challenge 31 =================================================================================================================

// document.querySelector("body").innerHTML = "<button class='save-btn'>Save to local storage</button>";
// document.querySelector("button").addEventListener('click', () => {
//     localStorage.setItem("workers", JSON.stringify(workers));
//     console.log(localStorage);
// })

// challenge 32 =================================================================================================================

// localStorage.setItem("workers", JSON.stringify(workers)); // to store
// document.querySelector("body").innerHTML = "<button class='save-btn'>Load from local storage</button>";
// document.querySelector("button").addEventListener('click', () => {
//     let fromStorage = JSON.parse(localStorage.getItem("workers")); // to load from localStorage
//     console.log(fromStorage);
// })

// challenge 33 =================================================================================================================

// document.querySelector("body").innerHTML = "<ul></ul>";
// workers.reduce((sum, n) => document.querySelector("ul").innerHTML += `<li>${n.name} | ${n.role}</li>`, 0);

// challenge 34 =================================================================================================================

// document.querySelector("body").innerHTML = "<ul></ul>";
// workers.forEach(worker => {
//     let {name, city, salary} = worker;
//     console.log(name + "--" + city + "--" + salary);
// })


// challenge 35 =================================================================================================================

// Object.freeze(workers[0]);
// // workers[0].salary = 3223;
// // console.log(workers[0]);
// document.querySelector('body').innerHTML = `<button class="save-btn">Try edit ${workers[0].name} name</button>`;
// document.querySelector("button").addEventListener('click', () => {
//     let userInput = prompt(`edit ${workers[0].name} name`);
//     try {
//         workers[0].name = userInput;
//         throw new Error("You can not edit on this object (object has been frozen)");
//     } catch (error) {
//         console.error(error);
//     }
//     console.log("user input: ", userInput);
//     console.log("original object: ", workers[0]);
// })

// challenge 36 =================================================================================================================

// let unique = new Set(workers.map(worker => worker.city));
// console.log("Unique cities: ");
// unique.forEach(item => console.log(item));

// challenge 37 =================================================================================================================

// let after2024 = workers.filter(worker => worker.hireDate > "2024-01-01");
// after2024.forEach(worker => console.log(worker.name + "-hired: " + worker.hireDate));

// challenge 38 =================================================================================================================

// document.getElementById('form').addEventListener("submit", (e) => {
//     e.preventDefault();
//     let salaryRegex = /^\d{1,5}$/;
//     if(salaryRegex.test(document.getElementById("worker-salary").value.trim())){ // only to check the salary
//         console.log('been here')
//         workers.push({
//             id: ++ID,
//             name: document.getElementById("worker-name").value,
//             role: document.getElementById("worker-role").value,
//             city: "rabat",
//             salary: document.getElementById("worker-salary").value
//         })
//         document.getElementById("form").reset();
//     }
//     else
//         console.error("invalide salary!");
//     console.log("original array: ", workers);
// })

// challenge 39 =================================================================================================================

// let newArr = workers.toSpliced(workers.indexOf(workers.find(worker => worker.name == "Claire Bernard")), 1);
// console.log("new array: ", newArr);
// console.log("original: ", workers);

// challenge 40 =================================================================================================================

// let chained = workers.filter(worker => worker.role == "Manager").map(worker => {return {name: worker.name, salary: worker.salary}}).sort((a, b) => a.name.localeCompare(b.name));
// console.log(chained);