import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Inputbox from "./Inputbox";
import Outputbox from "./Outputbox";
import Topbar from "./Topbar";
import { templates } from "@/templates";

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(templates["javascript"]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full rounded-lg w-full"
      >
        <ResizablePanel
          defaultSize={65}
          maxSize={85}
          minSize={50}
          className="px-5 py-3"
        >
          <Topbar
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            setCode={setCode}
            code={code}
            input={input}
            setOutput={setOutput}
          />
          <Editor
            theme="vs-dark"
            language={selectedLanguage === "c++" ? "cpp" : selectedLanguage}
            height={"75vh"}
            width={`full`}
            value={code}
            onChange={(value) => setCode(value)}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50} maxSize={80} minSize={20}>
              <Inputbox setInput={setInput} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <Outputbox output={output} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeEditor;
