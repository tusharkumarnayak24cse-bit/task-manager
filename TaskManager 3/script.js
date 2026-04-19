let tasks = [];
let deleted = [];
let id = 1;

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function load() {
  let data = localStorage.getItem("tasks");
  if (data) {
    tasks = JSON.parse(data);
    id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    render(tasks);
  }
}

function addTask() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let priority = document.getElementById("priority").value;

  if (!name || !date) {
    msg("Fill all fields", true);
    return;
  }

  tasks.push({
    id: id++,
    name,
    date,
    priority,
    status: "Pending"
  });

  save();
  render(tasks);
  msg("Task Added");
}

function del(id) {
  let index = tasks.findIndex(t => t.id === id);
  deleted.push(tasks[index]);
  tasks.splice(index, 1);

  save();
  render(tasks);
}

function undo() {
  if (deleted.length === 0) return;

  tasks.push(deleted.pop());
  save();
  render(tasks);
}

function done(id) {
  let t = tasks.find(x => x.id === id);
  t.status = t.status === "Done" ? "Pending" : "Done";

  save();
  render(tasks);
}

function edit(id) {
  let t = tasks.find(x => x.id === id);
  let newName = prompt("Edit task", t.name);

  if (newName) {
    t.name = newName;
    save();
    render(tasks);
  }
}

function searchTask() {
  let q = document.getElementById("search").value.toLowerCase();
  let result = tasks.filter(t => t.name.toLowerCase().includes(q));
  render(result);
}

function sortPriority() {
  let order = { High: 0, Medium: 1, Low: 2 };
  let sorted = [...tasks].sort((a,b)=>order[a.priority]-order[b.priority]);
  render(sorted);
}

function sortDeadline() {
  let sorted = [...tasks].sort((a,b)=>new Date(a.date)-new Date(b.date));
  render(sorted);
}

function showAll() {
  render(tasks);
}

function render(arr) {
  let list = document.getElementById("list");
  list.innerHTML = "";

  if (arr.length === 0) {
    list.innerHTML = "No Tasks";
    return;
  }

  arr.forEach(t => {
    let div = document.createElement("div");

    let overdue = new Date(t.date) < new Date() && t.status !== "Done";

    div.className = "task " + 
      (t.status === "Done" ? "done" : "") + 
      (overdue ? " overdue" : "");

    div.innerHTML = `
      <div>
        <b>${t.name}</b><br>
        ${t.date} | ${t.priority}
      </div>
      <div>
        <button onclick="done(${t.id})">✔</button>
        <button onclick="edit(${t.id})">✎</button>
        <button onclick="del(${t.id})">✕</button>
      </div>
    `;

    list.appendChild(div);
  });

  updateStats();
}

function updateStats() {
  document.getElementById("total").innerText = tasks.length;
  document.getElementById("done").innerText =
    tasks.filter(t=>t.status==="Done").length;
  document.getElementById("pending").innerText =
    tasks.filter(t=>t.status==="Pending").length;
}

function msg(text, err=false) {
  let m = document.getElementById("msg");
  m.innerText = text;
  m.style.color = err ? "red" : "lightgreen";

  setTimeout(()=>m.innerText="",2000);
}

(function(){
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("date").value = today;
  load();
})();