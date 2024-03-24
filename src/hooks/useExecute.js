import React, { useState } from "react";

const useExecute = () => {
  const [loading, setLoading] = useState(false);
  const execute = async ({ code, language, allLangs, input }) => {
    try {
      setLoading(true);
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: language,
          version: allLangs[language].version,
          files: [
            {
              name: "source",
              content: code,
            },
          ],
          stdin: input,
          compile_timeout: 10000,
          run_timeout: 5000,
          compile_memory_limit: -1,
          run_memory_limit: -1,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      //toast
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading };
};

export default useExecute;
