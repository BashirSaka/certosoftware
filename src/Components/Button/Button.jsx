
export default function Button({ text, className }) {
  return (
    <p className={`rounded-4xl  ${className}`}>
      {text}
    </p>
  );
}