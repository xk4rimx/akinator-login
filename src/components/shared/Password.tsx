function Password({ onChange }: PasswordProps) {
    return (
        <div className="flex items-center justify-center">
            <input
                className="border-2 border-solid border-black px-4 py-2 rounded-lg"
                type="password"
                placeholder="Password"
                onChange={onChange}
            />
        </div>
    );
}

interface PasswordProps {
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

export default Password;
