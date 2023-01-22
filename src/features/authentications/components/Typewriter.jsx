import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Typewriter({ text, delay, variant, onEnd, isStopped }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        if(!isStopped) {
        setDisplayText('')
        setIndex(index + 1);
        setDisplayText(text.slice(0, index));
        }
      }, delay);
      return () => clearInterval(interval);
    }, [index, text, delay, isStopped]);

    useEffect(() => {
      if (index > text.length) {
        onEnd();
        setIndex(0);
        setDisplayText(text);
      }
    }, [index, text, onEnd, isStopped]);

    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor(!showCursor);
      }, 500);
      return () => clearInterval(cursorInterval);
    }, [showCursor, isStopped]);


  return (
    <Text style={variant === "small" ? styles.text : styles.bigText}>
      {isStopped && displayText ? text : displayText}
      {showCursor && !isStopped && <Text style={styles.cursor}>|</Text>}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontFamily: "Raleway_600SemiBold"
  },
  cursor: {
    color: '#1E90FF',
  },
  bigText: {
    fontSize: 44,
    textAlign: "center",
    color: "#1E90FF",
    fontWeight: '900',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  }
});
