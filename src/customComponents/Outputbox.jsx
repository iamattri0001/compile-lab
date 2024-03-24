import React, { useEffect, useState } from "react";

const Outputbox = ({ output }) => {
  const [error, setError] = useState(false);
  const [outputData, setOutputData] = useState(null);

  useEffect(() => {
    if (output) {
      if (output?.compile?.stderr) {
        setError("Compilation error");
        console.log(output.compile.output);
        setOutputData(output?.compile?.output.split("\n"));
      } else if (output?.run?.stderr) {
        setError("Runtime error");
        setOutputData(output?.run?.output.split("\n"));
      } else {
        setError(false);
        setOutputData(output.run.output.split("\n"));
      }
    }
  }, [output]);
  return (
    <div className="h-full w-full p-5">
      <div
        className={`bg-muted h-full w-full flex ring-2 overflow-y-scroll p-5 text-sm ${
          outputData
            ? `flex-col ${error ? "ring-destructive" : "ring-transparent"}`
            : `items-center justify-center ring-transparent`
        }`}
      >
        {!output && (
          <span className="text-muted-foreground">No output to display</span>
        )}
        {outputData && (
          <h3
            className={`text-lg mb-3 ${
              error ? " text-red-500" : "text-green-500"
            }`}
          >
            {error ? error : "Executed successfully"}
          </h3>
        )}
        {outputData &&
          outputData.map((data, i) => (
            <pre
              key={i}
              className={`mb-1 text-[12px] ${
                error ? "text-red-300" : "text-primary-foreground"
              }`}
            >
              {data}
            </pre>
          ))}
      </div>
    </div>
  );
};

export default Outputbox;
