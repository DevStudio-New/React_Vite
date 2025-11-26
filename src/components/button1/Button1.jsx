export default function StyledButton() {
  return (
    <button
      className={`
        bg-transparent hover:bg-lime-400
        text-blue-700 font-semibold hover:text-white
        py-2 px-4 border border-lime-500
        hover:border-transparent rounded
      `}
    >
      Button
    </button>
  );
}
