function Submit({ text, onClick }: SubmitProps) {
    return (
        <div
            className="flex items-center justify-center my-3"
            onClick={onClick}
        >
            <button className="px-8 py-2 rounded-lg text-white bg-blue-500">
                {text}
            </button>
        </div>
    );
}

interface SubmitProps {
    text: string;
    onClick: () => void;
}

export default Submit;
