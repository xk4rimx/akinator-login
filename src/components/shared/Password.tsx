function Password({ onChange, onEnter }: PasswordProps) {
    return (
        <div className="flex items-center justify-center">
            <input
                className="border-2 border-solid border-black px-4 py-2 rounded-lg"
                type="password"
                placeholder="Password"
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onEnter();
                    }
                }}
            />
        </div>
    );
}

interface PasswordProps {
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onEnter: () => void;
}

export default Password;
