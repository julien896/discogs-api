import React from "react";

export const PageBody = ({
  children, 
} : {
  children: React.ReactNode;
}) => {
  return (
    <div className="body">
      {children}
    </div>
  );
};

PageBody.Container = ({
  children, 
  className
} : {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    {children}
  </div>
)