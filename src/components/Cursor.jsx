import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', onMove);

    const enterHover = () => {
      cursor.style.width = '18px'; cursor.style.height = '18px';
    };
    const leaveHover = () => {
      cursor.style.width = '10px'; cursor.style.height = '10px';
    };

    const attachListeners = () => {
      const hoverEls = document.querySelectorAll('a,button,.bento-item,.play-btn');
      hoverEls.forEach(el => {
        el.addEventListener('mouseenter', enterHover);
        el.addEventListener('mouseleave', leaveHover);
      });
    };
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    return () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef} />
  );
}
