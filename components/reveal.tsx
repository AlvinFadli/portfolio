"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ReactNode } from "react";

const RevealComponent = ({
  children,
  duration = 0.5,
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

  useEffect(() => {
    if (containerRef.current) {
      const childElements = containerRef.current.children;
      gsap.fromTo(
        childElements,
        { opacity: 0, y: fromY },
        { opacity: 1, y: 0, duration, stagger, ease: "sine.in" }
      );
    }
  }, [duration, fromY, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default RevealComponent;
