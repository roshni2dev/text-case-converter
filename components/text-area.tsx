const TextArea = ({
    text,
    setText,
}: {
    text: string;
    setText: (value: string) => void;
}) => {
    return (
        <textarea
            className="w-full p-4 border border-gray-400 rounded-md shadow-sm h-full mb-6 text-gray-800 focus:outline-none focus:ring-0 focus:border-gray-400"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste your text here..."
        />
    );
}

export default TextArea