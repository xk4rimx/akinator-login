import { useState } from "react";

import Password from "../../../components/shared/Password";
import Submit from "../../shared/Submit";
import Username from "../../shared/Username";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setUsername(e.target.value.toLowerCase());
    }

    function handlePasswordChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        const credentials = JSON.parse(
            localStorage.getItem("credentials") || "[]"
        );

        if (username === "") {
            alert("Please enter a username.");
            return;
        }

        if (
            !/^[a-zA-Z](?!.*[_-]{2})[a-zA-Z0-9_-]{3,}[a-zA-Z0-9]$/.test(
                username
            )
        ) {
            alert(
                "Invalid username. Please try again with a different username."
            );
            return;
        }

        if (
            credentials.some(
                (cred: { username: string }) =>
                    cred.username === username
            )
        ) {
            alert(
                "Username already exists. Please try again with a different username."
            );
            return;
        }

        if (password === "") {
            alert("Please enter a password.");
            return;
        }

        localStorage.setItem(
            "credentials",
            JSON.stringify([
                ...credentials,
                { username, password },
            ])
        );
        alert(
            "Account created successfully! You can create more accounts or go back to the login page."
        );
    }

    return (
        <>
            <div className="flex items-center justify-center flex-col gap-2">
                <Username onChange={handleUsernameChange} />
                <Password
                    onChange={handlePasswordChange}
                    onEnter={handleSubmit}
                />
            </div>
            <Submit
                text="Register"
                onClick={handleSubmit}
            />
        </>
    );
}

export default Register;
