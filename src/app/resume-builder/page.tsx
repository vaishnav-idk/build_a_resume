"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full text-white overflow-hidden bg-black">
        <div className="grid grid-cols-3 text-white md:grid-cols-6">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-3 bg-zinc">
            <Resume />
          </div>
        </div>
      </main>
    </Provider>
  );
}
