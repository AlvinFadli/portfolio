"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ReactNode } from "react";

const RevealComponent = ({
  children,
  duration = 0.3,
  fromY = 75,
  className = "",
  stagger = 0.2,
}: {
  children: ReactNode;
  duration?: number;
  fromY?: number;
  className?: string;
  stagger?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && containerRef.current) {
      const childElements = containerRef.current.children;
      gsap.fromTo(
        childElements,
        { opacity: 0, y: fromY },
        { opacity: 1, y: 0, duration, stagger }
      );
    }
  }, [isMounted, duration, fromY, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {isMounted && children}
    </div>
  );
};

export default RevealComponent;
