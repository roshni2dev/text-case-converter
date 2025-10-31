const ClearButton = ({
  handleClear,
}: {
  handleClear: () => void;
}) => {
  return (
    <button
      onClick={handleClear}
      className="px-4 py-3 font-semibold text-indigo-600 border-2 border-indigo-600 rounded cursor-pointer hover:bg-indigo-600 hover:border-indigo-600  hover:text-white transition-colors duration-200"
    >
      Clear
    </button>
  );
};

export default ClearButton;
