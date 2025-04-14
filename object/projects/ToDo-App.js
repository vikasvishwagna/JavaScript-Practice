let tasks = [];
let taskId = 1;

// Add a new task
function addTask(taskText) {
  const newTask = {
    id: taskId++,
    task: taskText,
    completed: false
  };
  tasks.push(newTask);
  console.log("Task added:", newTask);
}

// View all tasks
function viewTasks() {
  console.log("\n📋 To-Do List:");
  if (tasks.length === 0) {
    console.log("No tasks yet!");
    return;
  }

  tasks.forEach(task => {
    let status = task.completed ? "✅" : "❌";
    console.log(`ID: ${task.id}, Task: ${task.task}, Completed: ${status}`);
  });
}

// Mark a task as completed
function markAsCompleted(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
    console.log(`✔️ Task ID ${id} marked as completed.`);
  } else {
    console.log(`❗ Task ID ${id} not found.`);
  }
}

// Delete a task
function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    const deleted = tasks.splice(index, 1)[0];
    console.log(`🗑️ Task deleted:`, deleted);
  } else {
    console.log(`❗ Task ID ${id} not found.`);
  }
}

// 💡 Demo usage
addTask("Learn JavaScript");
addTask("Build a To-Do App");
viewTasks();

markAsCompleted(1);
viewTasks();

deleteTask(2);
viewTasks();

/**To-Do List App 
🧾 Features:
Add task

Mark task as done

Delete task

List all tasks
 */