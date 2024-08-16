function Header({ isRegister }: HeaderProps) {
    return (
        <header className="text-center font-semibold text-3xl mt-16 mb-8">
            <h1>{isRegister ? "Sign Up" : "Login"}</h1>
        </header>
    );
}

interface HeaderProps {
    isRegister: boolean;
}

export default Header;
