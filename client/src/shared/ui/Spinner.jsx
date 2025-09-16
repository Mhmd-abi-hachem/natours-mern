import React, { useEffect, useRef } from "react";

const Spinner = ({ size = 6.4, color = "#55c57a" }) => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const spinner = spinnerRef.current;
    let animationId;
    let rotation = 0;

    const animate = () => {
      rotation = (rotation + 10) % 360;
      spinner.style.transform = `rotate(${rotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const styles = {
    spinner: {
      margin: "4.8rem auto",
      width: `${size}rem`,
      height: `${size}rem`,
      borderRadius: "50%",
      background: `
        radial-gradient(farthest-side, ${color} 94%, transparent) top/10px 10px no-repeat,
        conic-gradient(transparent 30%, ${color})
      `,
      WebkitMask:
        "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)",
      mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)",
    },
  };

  return <div ref={spinnerRef} style={styles.spinner} />;
};

export default Spinner;
