import React, { useCallback, useState } from "react";
import style from "./index.module.scss";

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <div className={style.inputPlus}>
      <input
        type="text"
        className={style.inputPlusValue}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        placeholder="Add task now"
      />
      <button
        onClick={addTask}
        aria-label="Add"
        className={style.inputPlusButton}
      />
    </div>
  );
};
