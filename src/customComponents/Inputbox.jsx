import React from "react";

const Inputbox = ({ setInput }) => {
  return (
    <div className="ring-2 w-full h-full p-5">
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className="h-full outline-none focus:ring-4 ring-muted rounded-lg transition-all w-full bg-muted/40 resize-none text-foreground/70 p-5 placeholder:text-foreground/30 text-sm"
        placeholder="Input goes here...."
      />
    </div>
  );
};

export default Inputbox;
