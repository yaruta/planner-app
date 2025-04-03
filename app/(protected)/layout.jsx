"use client";
import { Provider } from "react-redux";
import store from "@/store";
import ProtectedLayout from "../protected-layout";
import Sidebar from "@/components/navigation/Sidebar";

export default function ProtectedAreaLayout({ children }) {
  return (
    <ProtectedLayout>
      <Provider store={store}>
        <main className="flex justify-between w-full h-screen overflow-y-hidden">
          <Sidebar />
          {children}
        </main>
      </Provider>
    </ProtectedLayout>
  );
}
