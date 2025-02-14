"use client";
import { ThemeContext } from "@/context/ThemeContext";
// import { ThemeContext } from "@/components/React_Reducer/ThemeContext";
import React, { useContext } from "react";

const UseContextExample = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);
  return (
    <div>
      <p className="text-lg">Current Theme: {state.theme}</p>
      <p style={{ fontSize: state.fontSize }}>Font size: {state.fontSize}px</p>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        Change Theme
      </button>
      <button
        onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 20 })}
      >
        Change Font Size
      </button>
    </div>
  );
};

export default UseContextExample;
