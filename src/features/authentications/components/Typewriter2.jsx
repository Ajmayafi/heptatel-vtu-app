import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Typewriter2({ text, delay, variant, onEnd, isStopped }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        if(!isStopped) {
        setDisplayText('')
        setIndex(index + 1);
      setDisplayText(text.slice(0, index));
        }else {
          setDisplayText("")
        }
    }, delay);
    
    return () => clearInterval(interval);
  }, [index, text, delay, isStopped]);

  useEffect(() => {
    if (index > text.length) {
        onEnd()
        setShowCursor(false)
      setIndex(0);
      setDisplayText(text)
    }
  }, [index, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if(!isStopped) {
        setShowCursor(!showCursor);
      }
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [showCursor, isStopped]);

  return (
    <Text style={styles.text}>
      {displayText}
      {showCursor && <Text style={styles.cursor}>|</Text>}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 44,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontFamily: "Raleway_600SemiBold",
    color: "#1E90FF",
  },
  cursor: {
    color: '#1E90FF',
  }
});


