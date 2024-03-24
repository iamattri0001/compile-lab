import React from "react";
import { Button } from "./components/ui/button";
import CodeEditor from "./customComponents/CodeEditor";
import { FaFlask } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between px-3 py-4 ring-2 ring-muted">
        <div className="flex items-center justify-center">
          <FaFlask className="text-primary mr-2 h-6 w-6" />
          <span className="text-xl">CompileLab</span>
        </div>
        <div>
          <Button variant="outline" asChild>
            <a href="https://github.com/iamattri0001/compile-lab" target="_blank">
              <FaGithub className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
        </div>
      </nav>
      <div className="p-4">
        <CodeEditor />
      </div>
    </div>
  );
};

export default App;
