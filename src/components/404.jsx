import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  const root = useRef(null);
  const title = useRef(null);
  const quote = useRef(null);
  const button = useRef(null);
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(title.current, {
        y: 30,
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          quote.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          button.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );

      // Floating title
      gsap.to(title.current, {
        y: "-=22",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Blob motion
      gsap.to(blob1.current, {
        x: 60,
        y: -40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2.current, {
        x: -50,
        y: 50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    // 🎯 Advanced cursor parallax
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(title.current, { x, y, duration: 0.4 });
      gsap.to(blob1.current, { x: x * 1.4, y: y * 1.4, duration: 0.8 });
      gsap.to(blob2.current, { x: -x * 1.2, y: -y * 1.2, duration: 1 });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={root} className="nf-pro-container">
      <div ref={blob1} className="nf-blob nf-blob-1" />
      <div ref={blob2} className="nf-blob nf-blob-2" />

      <h1 ref={title} className="nf-pro-title">404</h1>

      <p ref={quote} className="nf-pro-quote">
        This route exists in theory — just not in production.
      </p>

      <Link to="/" ref={button} className="nf-pro-button">
       Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
