import React from "react";

export default function Logo({
  Icon,
  className = "",
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}) {
  return (
    <div className="relative flex items-center justify-center h-20 w-20 md:mx-6">
      <Icon
        className={`h-10 w-10 transition-transform hover:scale-120 ${className}`}
      />
    </div>
  );
}