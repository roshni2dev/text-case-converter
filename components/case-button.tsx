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
        "px-4 py-3 rounded transition-colors font-semibold duration-200 text-white cursor-pointer";
    const activeClass = "bg-indigo-600";
    const inactiveClass = "bg-indigo-400 hover:bg-indigo-600";

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