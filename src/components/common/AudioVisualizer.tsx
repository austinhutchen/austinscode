import { useEffect, useRef, useState } from 'react';
import React from 'react';

declare global {
  interface Window { webkitAudioContext: typeof AudioContext }
}

type AudioVisualizerProps = {
  stream: MediaStream | null;
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
};

export const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const getUserMedia = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(setStream)
      .catch(console.error);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !stream) return;

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 4096;

// Create a BiquadFilterNode and configure it
const filter = audioContext.createBiquadFilter();
filter.type = "lowpass";  // Approximates Chebyshev if you cascade filters
filter.frequency.value = 1000; // Adjust to the desired cutoff frequency

// Connect nodes
const source = audioContext.createMediaStreamSource(stream);
source.connect(filter);
filter.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      // Clear with black background

      ctx.fillStyle = "#333333";

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient bars
      const barWidth = canvas.width / bufferLength;
      let barHeight;
      let x = 0;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "#FF99FF"); // Light magenta
gradient.addColorStop(0.5, "#99FFFF"); // Light cyan
gradient.addColorStop(1, "#99FF99"); // Light green
ctx.fillStyle = gradient;

// Optional: Add glow for additional contrast
ctx.shadowBlur = 4;
ctx.shadowColor = "#FFFFFF"; // Bright white glow
      ctx.fillStyle = gradient;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }

      // Draw frequency labels
      ctx.font = "1.3vh Arial";
      ctx.fillStyle = "#FFF";
      const frequencies = [0, 500, 1000, 2000, 4000, 8000, 16000];
      frequencies.forEach((freq) => {
        const pos = ((freq / 20000) * canvas.width);
        ctx.fillText(`${freq} Hz`, pos, canvas.height - 10);
      });
    };

    draw();

    return () => {
      audioContext.close();
    };
  }, [stream]);

  return (
    <>
    <div style={{display:'grid',alignItems:'center',justifyContent:'center'}}>
      <button className="hlight" onClick={getUserMedia}> <h4> Enable Microphone Input</h4></button>

      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: "#333333",
          border: "1px solid #0FF",
          borderRadius: "1.5svw", // Rounded corners
          width: '50vw',
            height: '35vh'
        }}
      />
<br/>
    </div>


</>
  );
};
