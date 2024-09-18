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
  const getUserMedia = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Web Audio API not supported in this browser');
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(setStream)
      .catch(console.error);
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !stream) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const analyser: AnalyserNode = audioContext.createAnalyser();
          analyser.smoothingTimeConstant = 0.1;
          analyser.fftSize = 8192 * 2; // Reduce fftSize for better performance
          // Create a BiquadFilterNode
          const filter = audioContext.createBiquadFilter();
          filter.type = 'bandpass'; // set the filter type to low-pass
          const bufferLength = analyser.frequencyBinCount;
          const dataArray: Uint8Array = new Uint8Array(bufferLength); // Create dataArray once

          const source = audioContext.createMediaStreamSource(stream);
          source.connect(analyser); // Connect the source to the GainNode
          filter.connect(analyser); // connect the filter to the analyser
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          const draw = () => {
            requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth: number = Math.ceil(canvas.width / bufferLength);
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i] / 1.5;
              ctx.fillStyle = 'rgba(173,216,240,1)';
              ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

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
  return <><button style={{}} onClick={getUserMedia}>Click & Speak! </button>
    <br />
    <canvas ref={canvasRef} style={{ width: '55svw', height: '35vh', borderRadius: '3px', border: '1px solid #0FF' }} />

  </>


};
