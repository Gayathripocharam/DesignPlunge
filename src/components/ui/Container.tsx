// src/components/ui/Container.tsx
import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className={`container-max ${className}`} {...rest}>
      {children}
    </div>
  );
};
