import { useEffect, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((x: number, y: number) => {
    const id = ++rippleId;
    setRipples((prev) => [...prev, { id, x, y }]);

    // Remove the ripple after animation completes (600ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        addRipple(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('touchstart', handleTouch, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('touchstart', handleTouch, true);
    };
  }, [addRipple]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
          className="click-ripple-dot"
        />
      ))}
    </div>
  );
}
