import { Task } from "./interfaces/task.interfaces";

export class TaskManager {
	private tasks: Task[] = [];
	private nextId: number = 1;

	addTask(title: string): void {
		const newTask: Task = {
			id: this.nextId,
			title,
			completed: false,
		};
		this.tasks.push(newTask);
		this.nextId++;
	}

	removeTask(id: number): void {
		const taskIndex = this.tasks.findIndex((task) => task.id === id);
		if (taskIndex === -1) {
			console.error(`Tarea no encontrada: ${id}`);
			return;
		}
		this.tasks.splice(taskIndex, 1);
	}

	completeTask(id: number): void {
		const task = this.tasks.find((task) => task.id === id);
		if (!task) {
			console.error(`Tarea no encontrada: ${id}`);
			return;
		}
		task.completed = true;
	}

	listTasks(): Task[] {
		return this.tasks;
	}
}
