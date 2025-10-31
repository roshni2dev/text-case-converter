const CaseButton=({
    type,
    activeCase,
    handleConvert,
    children,
}: {
    type: string;
    activeCase: string;
    handleConvert: (type: string) => void;
    children: React.ReactNode;
}) =>{
    const isActive = activeCase === type;
    const baseClass =
        "px-4 py-2 rounded transition-colors duration-200 text-white cursor-pointer";
    const activeClass = "bg-gray-600";
    const inactiveClass = "bg-gray-400 hover:bg-gray-600";

    return (
        <button
            onClick={() => handleConvert(type)}
            className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
        >
            {children}
        </button>
    );
}

export default CaseButton;