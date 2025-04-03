"use client";

import { useSelector } from "react-redux";

import NotesForm from "@/components/tasks/NotesForm";
import PlanerNavigation from "@/components/tasks/PlanerNavigation";
import ScheduleList from "@/components/tasks/ScheduleList";
import TasksForm from "@/components/tasks/TasksForm";
import TodoList from "@/components/tasks/TodoList";
import AddTaskButton from "@/components/tasks/AddTaskButton";

export default function TasksPage() {
  const isTaskFormOpen = useSelector((state) => state.ui.isTaskFormOpen);

  return (
    <section className="w-full h-11/12 p-6 pl-12 pr-12 m-6 rounded-lg shadow-md">
      <PlanerNavigation />
      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6 w-2/3 h-full">
          <AddTaskButton />
          <TodoList />
          <div className="flex space-x-6 w-full">
            <ScheduleList />
            <NotesForm />
          </div>
        </div>
        <div className="w-1/3">{isTaskFormOpen && <TasksForm />}</div>
      </div>
    </section>
  );
}
