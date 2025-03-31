import NotesForm from "@/components/tasks/NotesForm";
import PlanerNavigation from "@/components/tasks/PlanerNavigation";
import ScheduleList from "@/components/tasks/ScheduleList";
import TasksForm from "@/components/tasks/TasksForm";
import TodoList from "@/components/tasks/TodoList";

export default function TasksPage() {
  return (
    <section className="w-full h-11/12 p-6 pl-12 pr-12 m-6 rounded-lg shadow-md">
      <PlanerNavigation />
      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6 w-2/3 h-full">
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Add Task
          </button>
          <TodoList />
          <div className="flex space-x-6 w-full">
            <ScheduleList />
            <NotesForm />
          </div>
        </div>
        <div className="w-1/3">
          <TasksForm />
        </div>
      </div>
    </section>
  );
}
