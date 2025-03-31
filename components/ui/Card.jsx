export default function Card({ children, className }) {
  return (
    <article className={`bg-white shadow-md rounded-lg p-4 border-1 border-gray-100 w-full ${className}`}>
      {children}
    </article>
  );
}
