import  { useEffect, useRef } from 'react';
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
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
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

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for(let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          ctx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
          ctx.fillRect(x,canvas.height-barHeight/2,barWidth,barHeight/2);

          x += barWidth + 1;
        }
      };

      draw();
    })
    .catch(err => console.log(err));
}, []);

  return <canvas ref={canvasRef} />;
};

export default AudioVisualizer;