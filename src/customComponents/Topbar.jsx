import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import useLanguage from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { IoIosKeypad } from "react-icons/io";
import { ImSpinner2 as Spinner } from "react-icons/im";

import useExecute from "@/hooks/useExecute";
import { templates } from "@/templates";

const Topbar = ({
  selectedLanguage,
  setSelectedLanguage,
  setCode,
  code,
  input,
  setOutput,
}) => {
  const languages = useLanguage();
  const { loading, execute } = useExecute();
  const [languagesArray, setLanguagesArray] = useState([]);
  useEffect(() => {
    if (languages) setLanguagesArray(Object.entries(languages));
  }, [languages]);

  const changeLanguage = (value) => {
    if (languages[value]) {
      setSelectedLanguage(value);
      setCode(templates[value]);
    }
  };

  const handleExecute = async () => {
    if (loading) return;
    const output = await execute({
      code,
      language: selectedLanguage,
      allLangs: languages,
      input,
    });
    setOutput(output);
  };

  return (
    <div className="mb-2 flex items-center justify-between">
      <Select defaultValue="javascript" onValueChange={changeLanguage}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            {languagesArray.map(([language, { version }], i) => (
              <SelectItem key={i} value={language} className="cursor-pointer">
                <span className="mr-1">
                  {language.slice(0, 1).toUpperCase() +
                    language.slice(1, language.length)}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {version}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex items-center justify-center gap-x-3">
        <Button variant="ghost" size="icon" title="Shortcuts">
          <IoIosKeypad className="h-6 w-6" />
        </Button>
        <Button
          variant="secondary"
          className="h-8"
          onClick={() => setCode(templates[selectedLanguage])}
        >
          <GrPowerReset className="h-4 w-4 mr-2" />
          Reset
        </Button>
        <Button className={`h-8 ${loading && 'opacity-60 pointer-events-none'}`} onClick={handleExecute}>
          {loading ? (
            <Spinner className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <FaPlay className="h-4 w-4 mr-2" />
          )}
          Execute
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
