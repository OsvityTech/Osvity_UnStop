import { useState, useEffect } from "react"; // ✅ Moved to the top

const BASE_WIDTH_WEB = 1440;
const BASE_HEIGHT_WEB = 1024;
const BASE_WIDTH_MOBILE = 375;
const BASE_HEIGHT_MOBILE = 667;

const isMobile = () => window.innerWidth <= 600;

export const scaleWidth = (size) => {
  const screenWidth = window.innerWidth;
  const baseWidth = isMobile() ? BASE_WIDTH_MOBILE : BASE_WIDTH_WEB;
  return (size * screenWidth) / baseWidth;
};

export const scaleHeight = (size) => {
  const screenHeight = window.innerHeight;
  const baseHeight = isMobile() ? BASE_HEIGHT_MOBILE : BASE_HEIGHT_WEB;
  return (size * screenHeight) / baseHeight;
};

export const scaleFont = (size) => {
  const baseWidth = isMobile() ? BASE_WIDTH_MOBILE : BASE_WIDTH_WEB;
  const baseHeight = isMobile() ? BASE_HEIGHT_MOBILE : BASE_HEIGHT_WEB;
  const scaleFactor = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
  return size * scaleFactor;
};

export const useScaleFactor = () => {
  const [widthFactor, setWidthFactor] = useState(() => window.innerWidth / (isMobile() ? BASE_WIDTH_MOBILE : BASE_WIDTH_WEB));
  const [heightFactor, setHeightFactor] = useState(() => window.innerHeight / (isMobile() ? BASE_HEIGHT_MOBILE : BASE_HEIGHT_WEB));

  useEffect(() => {
    const handleResize = () => {
      setWidthFactor(window.innerWidth / (isMobile() ? BASE_WIDTH_MOBILE : BASE_WIDTH_WEB));
      setHeightFactor(window.innerHeight / (isMobile() ? BASE_HEIGHT_MOBILE : BASE_HEIGHT_WEB));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { widthFactor, heightFactor };
};

export const scaleLeft = (size) => {
  const screenWidth = window.innerWidth;
  const baseWidth = isMobile() ? BASE_WIDTH_MOBILE : BASE_WIDTH_WEB;
  return (size * screenWidth) / baseWidth;
};

export const scaleBottom = (size) => {
  const screenHeight = window.innerHeight;
  const baseHeight = isMobile() ? BASE_HEIGHT_MOBILE : BASE_HEIGHT_WEB;
  return (size * screenHeight) / baseHeight;
};

export const scaleRight = (size) => {
  const screenWidth = window.innerWidth;
  const baseWidth = isMobile() ? BASE_WIDTH_MOBILE : BASE_WIDTH_WEB;
  return screenWidth - (size * screenWidth) / baseWidth;
};

export const scaleTop = (size) => {
  const screenHeight = window.innerHeight;
  const baseHeight = isMobile() ? BASE_HEIGHT_MOBILE : BASE_HEIGHT_WEB;
  return (size * screenHeight) / baseHeight;
  
};
