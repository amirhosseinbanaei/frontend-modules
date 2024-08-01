"use client";
import React, {
  useRef,
  ReactElement,
  cloneElement,
} from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface ScrollAnimationWrapperProps {
  children: ReactElement;
  initialClassName: string;
  animationClassName: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animationClassName,
  initialClassName,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);

  const combinedClassName = `${isIntersecting ? animationClassName : initialClassName}`;

  return cloneElement(children, {
    ref,
    className: `${children.props.className ?? ""} ${combinedClassName}`.trim(),
  });
};

export default ScrollAnimationWrapper;