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
analyser.fftSize = 8192;

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
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient bars
      const barWidth = canvas.width / bufferLength;
      let barHeight;
      let x = 0;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#FF00FF");
      gradient.addColorStop(0.5, "#00FFFF");
      gradient.addColorStop(1, "#00FF00");

      ctx.fillStyle = gradient;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }

      // Draw frequency labels
      ctx.font = "12px Arial";
      ctx.fillStyle = "#FFF";
      ctx.textAlign = "center";
      const frequencies = [0, 500, 1000, 2000, 4000, 8000, 16000];
      frequencies.forEach((freq) => {
        const pos = (freq / 20000) * canvas.width;
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
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

      <canvas
        ref={canvasRef}
    
        style={{
          backgroundColor: "black",
          border: "1px solid #0FF",
          borderRadius: "2svw", // Rounded corners
          width: '60svw',
            height: '45svh'
        }}
      />
<br/>
    </div>

      <button onClick={getUserMedia}>Click & Speak!</button>
</>
  );
};
