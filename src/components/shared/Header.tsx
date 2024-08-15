function Header({ isRegister }: HeaderProps) {
    let text = "Login";
    if (isRegister) {
        text = "Sign Up";
    }

    return (
        <header className="text-center font-semibold text-3xl mt-16 mb-8">
            <h1>{text}</h1>
        </header>
    );
}

interface HeaderProps {
    isRegister: boolean;
}

export default Header;
