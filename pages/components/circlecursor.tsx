import { useEffect,useState} from "react";
import '../../styles/cursor.css'; 

const CircleCursor: React.FC = () => {
  const [cursorSize, setCursorSize] = useState({ width: 65, height: 65 });
  const [cursorPosition, setCursorPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = document.querySelector('.circle-cursor') as HTMLElement;
      const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);
      
      if (elementUnderCursor && elementUnderCursor.classList.contains('hoverable')) {
        setCursorSize({ width: 32, height: 32 });
      } else {
        setCursorSize({ width: 65, height: 65 });
      }

      cursor.style.width = `${cursorSize.width}px`;
      cursor.style.height = `${cursorSize.height}px`;

      cursor.style.backgroundColor = 'white';
      document.body.style.cursor = "none";
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseClick = () => {
      document.body.style.cursor = "none";
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    // Set the cursor style to 'none' to ensure it's always invisible
    document.body.style.cursor = "none";

    // Return cleanup function to remove the event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, [cursorSize]); // Include cursorSize in the dependency array to update the effect when it changes

  return (
    <div className="circle-cursor" style={{ left: `${cursorPosition.x - cursorSize.width / 2}px`, top: `${cursorPosition.y - cursorSize.height / 2}px` }} />
  );
};

export default CircleCursor;
