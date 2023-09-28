function addTask() {
  // Crea una nueva tarea
  var task = document.createElement("li");
  task.classList.add("task");

  // Crea un input de texto para la tarea
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Agregar tarea";
  task.appendChild(input);

  // Crea una casilla de checkbox para la tarea
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  task.appendChild(checkbox);

  // Crea un botón para eliminar la tarea
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.id = "delete";
  task.appendChild(deleteButton);

  // Agrega la tarea a la lista
  document.querySelector("#tasks").appendChild(task);

  // Asigna un evento al botón para eliminar la tarea
  deleteButton.addEventListener("click", function() {
    // Elimina la tarea de la lista
    task.remove();
  });
}

// Asigna un evento al input para agregar una tarea
document.querySelector("#add").addEventListener("click", addTask);
