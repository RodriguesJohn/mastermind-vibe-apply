import { useState, useEffect } from 'react';

interface TextTypeProps {
  text?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  texts?: string[];
  deletingSpeed?: number;
  variableSpeedEnabled?: boolean;
  variableSpeedMin?: number;
  variableSpeedMax?: number;
  cursorBlinkDuration?: number;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text = [],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "_",
  texts = [],
  deletingSpeed = 50,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Use texts prop if provided, otherwise use text prop
  const allTexts = texts.length > 0 ? texts : text;

  useEffect(() => {
    if (allTexts.length === 0) return;

    const currentText = allTexts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        const speed = variableSpeedEnabled
          ? Math.random() * (variableSpeedMax - variableSpeedMin) + variableSpeedMin
          : typingSpeed;
        
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % allTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, allTexts, typingSpeed, pauseDuration, deletingSpeed, variableSpeedEnabled, variableSpeedMin, variableSpeedMax]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkDuration * 1000);

    return () => clearInterval(interval);
  }, [showCursor, cursorBlinkDuration]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span style={{ opacity: cursorVisible ? 1 : 0 }}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
