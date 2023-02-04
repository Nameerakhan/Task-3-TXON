window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#task"); 
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const task = input.value.trim();
  
      if (!task) {
        alert("Please enter a task");
        return;
      }
  
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
  
      const taskContentEl = document.createElement("div");
      taskContentEl.classList.add("content");
  
      taskEl.appendChild(taskContentEl);
  
      const taskInputEl = document.createElement("input");
      taskInputEl.classList.add("text");
      taskInputEl.type = "text";
      taskInputEl.value  = task;
      taskInputEl.setAttribute("readonly", "readonly");
  
      taskContentEl.appendChild(taskInputEl);
  
      const taskActionsEl = document.createElement("div");
      taskActionsEl.classList.add("actions");
  
      const taskEditEl = document.createElement("button");
      taskEditEl.classList.add("Edit");
      taskEditEl.innerHTML = "Edit";
  
      const taskDeleteEl = document.createElement("button");
      taskDeleteEl.classList.add("Delete");
      taskDeleteEl.innerHTML = "Delete";
  
      taskActionsEl.appendChild(taskEditEl);
      taskActionsEl.appendChild(taskDeleteEl);
  
      taskEl.appendChild(taskActionsEl);
  
      listEl.appendChild(taskEl);
  
      input.value = "";
  
      taskEditEl.addEventListener('click', () => {
        if (taskEditEl.innerText.toLowerCase() === "edit") {
          taskInputEl.removeAttribute("readonly");
          taskInputEl.focus();
          taskEditEl.innerText = "Save";
        } else {
          taskInputEl.setAttribute("readonly", "readonly");
          taskEditEl.innerText = "Edit";
        }
      });
  
      taskDeleteEl.addEventListener('click', () => {
        listEl.removeChild(taskEl);
      });
    });
  });
