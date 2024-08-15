function Footer({ isRegister }: FooterProps) {
    let text = "Don't have an account yet?";
    let href = "/sign-up";
    let anchorText = "Sign up now!";

    if (isRegister) {
        text = "Already have an account?";
        href = "/";
        anchorText = "Login now!";
    }
    return (
        <footer className="text-center my-6">
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
