import { useEffect,useState} from "react";
import '../../styles/cursor.css'; 

const CircleCursor: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 100, y: 100 });

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        const cursor = document.querySelector('.circle-cursor') as HTMLElement;
        const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);
        if (elementUnderCursor&&elementUnderCursor.classList.contains('hoverable')) {
            cursor.style.width='32px';
            cursor.style.height='32px';
        }
        else {
            
            cursor.style.width='65px';
            cursor.style.height='65px';
        }
        cursor.style.backgroundColor = 'white';
        setCursorPosition({ x: event.clientX, y: event.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
        <div className="circle-cursor" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }} />
      );
  };

  export default CircleCursor;