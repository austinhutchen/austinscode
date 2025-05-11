// src/components/FunctionGrapher.tsx

import React, { useState } from "react";
import Plot from "react-plotly.js";
import { compile, range } from "mathjs";

type Mode = "function" | "mandelbrot" | "tinkerbell";

export const FunctionGrapher: React.FC = () => {
  const [mode, setMode] = useState<Mode>("function");
  const [expression, setExpression] = useState<string>("sin(x)");
  const [xValues, setXValues] = useState<number[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  const [zValues, setZValues] = useState<number[][]>([]);

  const drawFunction = (exprText: string): void => {
    try {
      const expr = compile(exprText);
      const xs = range(-10, 10, 0.1).toArray() as number[];
      const ys = xs.map((x) => expr.evaluate({ x }));
      setXValues(xs);
      setYValues(ys);
      setZValues([]);
    } catch (err) {
      alert("Error in expression: " + err);
      console.error(err);
    }
  };

  const drawMandelbrot = (): void => {
    const xMin = -2,
      xMax = 1,
      yMin = -1.5,
      yMax = 1.5;
    const width = 300;
    const height = 300;
    const maxIter = 50;

    const xs: number[] = Array.from({ length: width }, (_, i) => xMin + ((xMax - xMin) * i) / width);
    const ys: number[] = Array.from({ length: height }, (_, j) => yMin + ((yMax - yMin) * j) / height);
    const data: number[][] = [];

    for (let j = 0; j < height; j++) {
      const row: number[] = [];
      for (let i = 0; i < width; i++) {
        let x0 = xs[i];
        let y0 = ys[j];
        let x = 0,
          y = 0,
          iter = 0;
        while (x * x + y * y <= 4 && iter < maxIter) {
          const xtemp = x * x - y * y + x0;
          y = 2 * x * y + y0;
          x = xtemp;
          iter++;
        }
        row.push(iter);
      }
      data.push(row);
    }

    setXValues(xs);
    setYValues(ys);
    setZValues(data);
  };

  const drawTinkerbell = (): void => {
    const a = 0.9,
      b = -0.6013,
      c = 2.0,
      d = 0.5;
    let x = 0.1,
      y = 0.0;
    const xs: number[] = [];
    const ys: number[] = [];

    for (let i = 0; i < 10000; i++) {
      const xNew = x * x - y * y + a * x + b * y;
      const yNew = 2 * x * y + c * x + d * y;
      x = xNew;
      y = yNew;
      xs.push(x);
      ys.push(y);
    }

    setXValues(xs);
    setYValues(ys);
    setZValues([]);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (mode === "function") {
      drawFunction(expression);
    } else if (mode === "mandelbrot") {
      drawMandelbrot();
    } else if (mode === "tinkerbell") {
      drawTinkerbell();
    }
  };

  return (
    <>
      <a rel="noopener noreferrer" href="https://github.com/austinhutchen/functionGrapher">
        <h2 className="hlight"> Function Graphing Engine (Typescript DESMOS clone)</h2>
      </a>
      <div className="projDesc">
        <div className="fadeSide">
          <p>A function plotting engine to graph 2-d functions. </p>
        </div>
      </div>

      <div
        style={{
          display: "inline-block",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "2svw",
          border: "2px solid white",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Mode:{" "}
            <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
              <option value="function">Function</option>
              <option value="mandelbrot">Mandelbrot Set</option>
              <option value="tinkerbell">Tinkerbell Attractor</option>
            </select>
          </label>{" "}
          <br />
          {mode === "function" && (
            <label>
              f(x) ={" "}
              <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="e.g., sin(x) + x^2"
              />
            </label>
          )}
          <button type="submit">Plot</button>
        </form>

        <Plot
          data={
            mode === "function"
              ? [
                  {
                    x: xValues,
                    y: yValues,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "blue" },
                  },
                ]
              : mode === "tinkerbell"
              ? [
                  {
                    x: xValues,
                    y: yValues,
                    type: "scatter",
                    mode: "markers",
                    marker: { color: "purple", size: 1 },
                  },
                ]
              : [
                  {
                    z: zValues,
                    type: "heatmap",
                    colorscale: "Viridis",
                    showscale: false,
                  },
                ]
          }
          layout={{
            title:
              mode === "function"
                ? `Plot of f(x) = ${expression}`
                : mode === "mandelbrot"
                ? "Mandelbrot Set"
                : "Tinkerbell Attractor",
            xaxis: { title: mode === "function" ? "x" : undefined },
            yaxis: { title: mode === "function" ? "f(x)" : undefined },
          }}
          style={{ width: "75svw", height: "55svh" }}
        />
      </div>
    </>
  );
};
