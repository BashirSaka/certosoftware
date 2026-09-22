import { Link } from "react-router-dom";

export default function Button({
  text,
  children,
  className = "",
  to,
  onClick,
  type = "button",
  ...props
}) {
  const content = children ?? text;

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`inline-block text-center transition-all ${className}`}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer transition-all ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}