import React from "react";
import styles from "./ResponsiveImage.module.css";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  srcSet?: string;
  sizes?: string;
  priority?: boolean; // true = eager (above‑fold), false = lazy (default)
  className?: string;
  aspectRatio?: string; // e.g. "16/9" or "1"
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  priority = false,
  className = "",
  aspectRatio,
}) => {
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : undefined;

  const style: React.CSSProperties = {};
  if (aspectRatio) {
    style.aspectRatio = aspectRatio;
  }
  style.width = "100%";
  style.height = "auto";

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      {...(srcSet ? { srcSet } : {})}
      {...(sizes ? { sizes } : {})}
      width={width}
      height={height}
      className={`${styles.image} ${className}`.trim()}
      style={style}
    />
  );
};
