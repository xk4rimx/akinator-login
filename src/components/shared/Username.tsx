function Username({ value, onChange }: UsernameProps) {
    return (
        <div className="flex items-center justify-center">
            <input
                className="border-2 border-solid border-black px-4 py-2 rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={value}
                placeholder="Username"
                disabled={value !== undefined}
                onChange={onChange}
            />
        </div>
    );
}

interface UsernameProps {
    value?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

export default Username;
