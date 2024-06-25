import { TaskManager } from "./taskManager";

function displayTasks(taskManager: TaskManager): void {
	const tasks = taskManager.listTasks();
	const completedTasks = tasks.filter((task) => task.completed);
	const incompleteTasks = tasks.filter((task) => !task.completed);

	console.log("Mis tareas completas:");
	completedTasks.forEach((task) => {
		console.log(`- [x] ${task.title} (id: ${task.id})`);
	});

	console.log("Mis tares pendientes:");
	incompleteTasks.forEach((task) => {
		console.log(`- [ ] ${task.title} (id: ${task.id})`);
	});
}

// USO de la APP
const testTask = new TaskManager();

testTask.addTask("Hacer la prueba de ObisData");
testTask.addTask("Quedar en ObisData");

testTask.completeTask(1);

testTask.removeTask(3);
displayTasks(testTask);
