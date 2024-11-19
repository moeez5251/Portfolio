import React, { useEffect, useRef } from "react";
import paper from "paper";

const CustomCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    paper.setup(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      paper.view.viewSize = new paper.Size(canvas.width, canvas.height);
      paper.project.clear();
    };

    resizeCanvas();

    let clientX = 100;
    let clientY = 100;
    let lastX = 0;
    let lastY = 0;
    let group;

    const initCursor = () => {
      const strokeColor = "rgba(186, 46, 47, 0.8)";
      const strokeWidth = 3;
      const segments = 8;
      const radius = 12;

      const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();

      group = new paper.Group([polygon]);
      group.applyMatrix = false;

      const lerp = (a, b, n) => (1 - n) * a + n * b;

      paper.view.onFrame = () => {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      };
    };

    initCursor();

    const trackMouse = (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
    };

    document.addEventListener("mousemove", trackMouse);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      document.removeEventListener("mousemove", trackMouse);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="cursor-canvas"
      ></canvas>
    </div>
  );
};

export default CustomCursor;
