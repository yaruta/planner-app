"use client";
import { useState } from "react";
import Card from "../ui/Card";
import { Circle, CheckCircle } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish project", completed: false },
    { id: 3, text: "Read a book", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <Card>
      <h2 className="text-md font-semibold mb-4">To-Do List</h2>
      <section>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center rounded-lg cursor-pointer transition-colors duration-300 ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? (
                <CheckCircle className="text-green-500 mr-3" />
              ) : (
                <Circle className="text-gray-400 mr-3" />
              )}
              <span
                className={`text-sm ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
}
