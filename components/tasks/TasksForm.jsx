import Card from "../ui/Card";
import { PlusCircle, Calendar, ListIcon } from "lucide-react";

export default function TasksForm() {
  return (
    <Card className="h-full">
      <h2 className="text-xl font-normal mb-4">New Task</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none  focus:ring focus:ring-blue-200 "
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          maxLength={250}
          rows={3}
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none  focus:ring focus:ring-blue-200 resize-none"
        ></textarea>

        <div className="flex items-center space-x-2">
          <ListIcon size={20} className="text-gray-500 stroke-1" />
          <label htmlFor="list" className="text-gray-700 min-w-20">
            List
          </label>
          <select
            name="list"
            id="list"
            className="p-2 border border-gray-200 rounded-lg flex-1 focus:outline-none  focus:ring focus:ring-blue-200"
          >
            <optgroup label="Work">
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
            </optgroup>
            <optgroup label="Personal">
              <option value="Groceries">Groceries</option>
              <option value="Fitness">Fitness</option>
            </optgroup>
          </select>
          <button className="p-2 bg-white text-blue-400 hover:text-blue-600">
            <PlusCircle size={30} className="stroke-1"/>
          </button>
        </div>

        <div className="flex items-center space-x-2 border-b border-gray-200 pb-8">
          <Calendar size={20} className="text-gray-500 stroke-1" />
          <label htmlFor="due-date" className="text-gray-700 min-w-20">
            Due Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="p-2 border border-gray-200 rounded-lg flex-1 focus:outline-none  focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mt-8">
          <h3 className="text-lg mb-2">Subtasks</h3>
          <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-600">
            <PlusCircle size={20} className="stroke-1"/>
            <span className="font-thin">Add subtask</span>
          </button>
          <ul className="mt-2 space-y-1">{/* List of subtasks */}</ul>
        </div>
        <div className="flex justify-end mt-8">
          <button className="p-2 bg-green-500 rounded-lg text-white hover:bg-green-700 min-w-48">
            Create task
          </button>
        </div>
      </form>
    </Card>
  );
}
