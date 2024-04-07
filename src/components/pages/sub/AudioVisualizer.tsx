import { useEffect, useRef, useState } from 'react';
declare global {
  interface Window { webkitAudioContext: typeof AudioContext }
}
const AudioVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Web Audio API not supported in this browser');
      return;
    }

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024; // Reduce fftSize for better performance
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength); // Create dataArray once

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const draw = () => {
          requestAnimationFrame(draw);

          analyser.getByteFrequencyData(dataArray); // Reuse dataArray

          ctx.fillStyle = 'rgb(0, 0, 0)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          const barWidth = (canvas.width / bufferLength) * 2.5;
          let barHeight;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
            ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

            x += barWidth + 1;
          }
        };

        draw();
      })
      .catch(err => console.log(err));
  }, []);

  return <canvas ref={canvasRef} />;
};

export const TimeDomainVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Web Audio API not supported in this browser');
      return;
    }

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const draw = () => {
          requestAnimationFrame(draw);

          analyser.getByteTimeDomainData(dataArray);

          ctx.fillStyle = 'rgb(200, 200, 200)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgb(0, 0, 0)';

          ctx.beginPath();

          const sliceWidth = canvas.width * 1.0 / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = v * canvas.height / 2;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }

            x += sliceWidth;
          }

          ctx.lineTo(canvas.width, canvas.height / 2);
          ctx.stroke();
        };

        draw();
      })
      .catch(err => console.log(err));
  }, []);

  return <canvas ref={canvasRef} />;
};
// Star Map Component
const StarMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set the background to black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw stars on the canvas (this is a simplification)
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillStyle = 'white';
      ctx.fillRect(x, y, 1, 1);
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

// Plant Growth Simulator Component
const PlantGrowthSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [plantHeight, setPlantHeight] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create a gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a plant on the canvas (this is a simplification)
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.lineTo(canvas.width / 2, canvas.height - plantHeight);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  }, [plantHeight]);

  useEffect(() => {
    // Grow the plant over time
    const intervalId = setInterval(() => {
      setPlantHeight(prevHeight => prevHeight + 1);
    }, 1000); // Increase the plant height by 1 every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

// Main Component
export const NatureComponent = () => {
  return (
    <div>
      <StarMap />
      <PlantGrowthSimulator />
    </div>
  );
};


export default AudioVisualizer;