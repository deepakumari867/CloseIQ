import { useRef, useState } from "react";

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStarted(true);
    } catch (err) {
      alert("Browser blocked camera. Check site permissions.");
      console.log(err);
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/jpeg");
    onCapture(image);
  };

  return (
    <div>
      {!started && (
        <button
          onClick={startCamera}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Camera
        </button>
      )}

      {started && (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-[300px] mt-4 rounded-xl"
          />

          <button
            onClick={captureImage}
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
          >
            Detect Outfit
          </button>
        </>
      )}

      <canvas ref={canvasRef} hidden />
    </div>
  );
}
