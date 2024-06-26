function addTask() {
  // Erstelle ein neues label-Element für die Aufgabe
  let newTask = document.createElement("label");
  newTask.className = "task";

  // Erstelle die Checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "oneTask round-checkbox";

  // Erstelle das Texteingabefeld
  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "oneTask";

  // Füge die Checkbox als Kind-Element zum label-Element hinzu
  newTask.appendChild(checkbox);

  // Füge das Texteingabefeld als weiteres Kind-Element zum label-Element hinzu
  newTask.appendChild(textInput);

  // Füge das neue label-Element zur Aufgabenliste hinzu
  document.getElementById("taskList").appendChild(newTask);
}
