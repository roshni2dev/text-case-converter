const CopyButton = ({ text }: { text: string }) => {
    const handleCopy = () => navigator.clipboard.writeText(text);

    return (
        <button
            onClick={handleCopy}
            className="px-4 py-3 font-semibold text-indigo-600 border-2 border-indigo-600 rounded cursor-pointer hover:bg-indigo-600 hover:border-indigo-600  hover:text-white transition-colors duration-200"
        >
            Copy to Clipboard
        </button>
    );
}

export default CopyButton;