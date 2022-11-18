// My Tasks Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let tasksEl = document.getElementById("tasks");

//GVar
let tasks = [];

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "add") {
    addTask();
  } else if (selection === "toggle") {
    toggleTask();
  } else if (selection === "remove") {
    removeTask();
  } else if (selection === "clear") {
    clearAll();
  }
}

// MENU FUNCTIONS
function addTask() {
  let description = prompt("enter task description ");
  tasks.push(newtask(description));
  tasksEl.innerHTML = `task added: ${description}`;
  displayall();
}

function toggleTask() {
  console.log("Toggle Task");
}

function removeTask() {
  console.log("Remove Task");
}

function clearAll() {
  console.log("Clear All");
}

//help functions
function newtask(taskdesc) {
  return {
    description: taskdesc,
    compeleted: "",
  };
}
function displayall() {
  let outputstr = "";
  for (let i = 0; i < tasks.length; i++) {
    outputstr += gettaskhtmlstr(tasks[i], i);
  }
  tasksEl.innerHTML = outputstr;
}
function gettaskhtmlstr(task, i) {
  return `
  <Div>
    ${i}: ${task.description}
  </div>
  `;
}
