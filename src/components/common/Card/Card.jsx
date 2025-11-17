import { cardSizes } from "./cardSizes";

export default function Card({ size = "1x1", children, className = "" }) {
  const gridClasses = cardSizes[size] || "";

  return (
    <div
      className={`
      ${gridClasses}
      rounded-3xl

      backdrop-blur-xl
      bg-white/10
      border border-white/20
      shadow-lg
      ${className}
    `}
    >
      {children}
    </div>
  );
}
