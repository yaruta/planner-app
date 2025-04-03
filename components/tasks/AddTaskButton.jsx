"use client";

import { useDispatch } from "react-redux";
import { uiActions } from "@/store/ui-slice";

export default function AddTaskButton() {
  const dispatch = useDispatch();

  const toggleTaskForm = () => {
    dispatch(uiActions.toggleTaskForm());
  };
  return (
    <button
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      onClick={toggleTaskForm}
    >
      Add Task
    </button>
  );
}
