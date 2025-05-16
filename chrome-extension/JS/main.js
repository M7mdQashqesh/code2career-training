let myLeads = [];
let inputEl = document.getElementById("input-el");
let saveBtn = document.getElementById("save-btn");
let content = document.getElementById("content");
let dataFromLocalStorage = JSON.parse(localStorage.getItem("links"));
let deleteBtn = document.getElementById("delete-btn");

saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("links", JSON.stringify(myLeads));
  renderLeads();
  inputEl.value = "";
});

if (dataFromLocalStorage) {
  myLeads = dataFromLocalStorage;
  renderLeads();
}

function renderLeads() {
  content.textContent = "";
  for (let i = 0; i < myLeads.length; i++) {
    content.innerHTML += `<li><a href="https:\\\\${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
  }
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
