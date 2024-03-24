import React, { useEffect, useState } from "react";

const REQUIRED_LANGS = ["javascript", "csharp", "c++", "c", "java"];

const useLanguage = () => {
  const [languages, setLanguages] = useState(null);
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch("https://emkc.org/api/v2/piston/runtimes");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        const required = {};
        data.forEach(({ language, version, runtime }) => {
          if (REQUIRED_LANGS.indexOf(language) > -1) {
            if (language !== "javascript" || runtime === "node")
              required[language] = { version, runtime };
          }
        });

        setLanguages(required);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
  }, []);

  return languages;
};

export default useLanguage;
