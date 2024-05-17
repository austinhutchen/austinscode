import { useEffect, useRef, useState } from 'react'; 
import React from 'react';

declare global {
  interface Window { webkitAudioContext: typeof AudioContext }
}

type AudioVisualizerProps = {
  stream: MediaStream | null;
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
};

export const AudioVisualizer: React.FC<AudioVisualizerProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Web Audio API not supported in this browser');
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(setStream)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !stream) return;
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const analyser = audioContext.createAnalyser();
          analyser.fftSize = 8192; // Reduce fftSize for better performance
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength); // Create dataArray once
  
          const source = audioContext.createMediaStreamSource(stream);
          source.connect(analyser); // Connect the source to the GainNode
  
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
  
          const draw = () => {
            requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);
            ctx.fillStyle = 'rgba(0, 0, 0,0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
  
            const barWidth:number = 1;
            let barHeight;
            let x = 0;
  
            for(let i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i]/1.4;
              ctx.fillStyle = 'rgba(173,216,240,1)';
              ctx.fillRect(x,canvas.height-barHeight/2,barWidth,barHeight);
  
              x += barWidth + 1;
            }
          };
  
          draw();
        }
      });
    });
  
    observer.observe(canvas);
  
    return () => observer.unobserve(canvas);
  }, [stream]);

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
    analyser.fftSize = 8192;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices.getUserMedia({
      audio: true
    })
      .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);

        const gainNode = audioContext.createGain();
        gainNode.gain.value = 3.0; // increase the volume by a factor of 2
        source.connect(gainNode);
        gainNode.connect(analyser);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const sliceWidth: number =  1;
        // Create an offscreen canvas
        const offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;
        const offscreenCtx = offscreenCanvas.getContext('2d');

        const draw = () => {
          requestAnimationFrame(draw);

          analyser.getByteTimeDomainData(dataArray);

          if (!offscreenCtx) {
            return;
          }

          // Draw the previous frame of the canvas to the left of the new slice
          offscreenCtx.drawImage(offscreenCanvas, -sliceWidth, 0);

          // Clear the rightmost area of the offscreen canvas
          offscreenCtx.fillStyle = 'rgb(200, 200, 200)';
          offscreenCtx.fillRect(offscreenCanvas.width - sliceWidth, 0, sliceWidth, offscreenCanvas.height);

          offscreenCtx.lineWidth = 2;
          offscreenCtx.strokeStyle = 'rgb(0, 0, 0)';

          offscreenCtx.beginPath();

          const v = dataArray[dataArray.length - 1] / 128.0;
          const y = v * offscreenCanvas.height / 2;

          // Draw the new line segment at the right edge of the offscreen canvas
          offscreenCtx.moveTo(offscreenCanvas.width - sliceWidth, offscreenCanvas.height / 2);
          offscreenCtx.lineTo(offscreenCanvas.width, y);
          offscreenCtx.stroke();

          // Copy the offscreen canvas onto the displayed canvas
          ctx.drawImage(offscreenCanvas, 0, 0);
        };

        draw();
      })
      .catch(err => console.log(err));
  }, []);

  return <canvas ref={canvasRef} />;
};
