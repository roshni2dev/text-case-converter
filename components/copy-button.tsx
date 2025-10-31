const CopyButton = ({ text }: { text: string }) => {
    const handleCopy = () => navigator.clipboard.writeText(text);

    return (
        <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-400 text-white rounded cursor-pointer hover:bg-gray-600 transition-colors duration-200"
        >
            Copy to Clipboard
        </button>
    );
}

export default CopyButton;