function Footer({ isRegister }: FooterProps) {
    let text = "Don't see your username above?";
    let href = "/sign-up";
    let anchorText = "Sign up now!";

    if (isRegister) {
        text = "Already have an account?";
        href = "/";
        anchorText = "Login now!";
    }

    return (
        <footer className="text-center m-6">
            <span>
                {text}{" "}
                <a
                    className="underline text-blue-800"
                    href={href}
                >
                    {anchorText}
                </a>
            </span>
        </footer>
    );
}

interface FooterProps {
    isRegister: boolean;
}

export default Footer;
