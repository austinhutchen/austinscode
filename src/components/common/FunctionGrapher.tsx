// src/components/FunctionGrapher.tsx
import React, { useState } from "react";
import Plot from "react-plotly.js";
import { compile, range } from "mathjs";

export const FunctionGrapher: React.FC = () => {
  const [expression, setExpression] = useState("sin(x)");
  const [xValues, setXValues] = useState<number[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);

  const draw = (exprText: string) => {
    try {
      const expr = compile(exprText);
      const xs = range(-10, 10, 0.5).toArray() as number[];
      const ys = xs.map((x) => expr.evaluate({ x }));
      setXValues(xs);
      setYValues(ys);
    } catch (err) {
      alert("Error in expression: " + err);
      console.error(err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    draw(expression);
  };

  return (
  <>
       <a rel="noopener noreferrer" href="https://github.com/austinhutchen/functionGrapher">  <h2 className="hlight"> Function Graphing Engine (Typescript DESMOS clone)</h2></a>
      <div className="projDesc">
<div className="fadeSide">
      <p>A function plotting engine to graph 2-d functions. </p>
        </div>
      </div>


    <div style={{ display:'inline-block',flexDirection:'column',justifyContent:'center',alignItems:'center',overflow:'hidden',borderRadius:'2svw',border:'2px solid white',  overflow: 'hidden'}}>


      <form onSubmit={handleSubmit}>
        <label>
          f(x) ={" "}
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="e.g., sin(x) + x^2"
          />
        </label>
        <button type="submit">Plot</button>
      </form>

      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: "scatter",
            mode: "lines",
            marker: { color: "blue" },
          },
        ]}
        layout={{ title: `Plot of f(x) = ${expression}` }}
        style={{width: "75svw", height: "55svh" }}
      />
    </div>
    </>
  );
};

