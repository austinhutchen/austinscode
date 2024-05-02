import { useEffect, useRef } from 'react'; import React from 'react';
declare global {
  interface Window { webkitAudioContext: typeof AudioContext }
}
type AudioVisualizerProps = {
  stream: MediaStream | null;
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
};
export const AudioVisualizer: React.FC<AudioVisualizerProps> = () => {
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

export const TimeDomainVisualizer: React.FC<AudioVisualizerProps> = () => {
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
