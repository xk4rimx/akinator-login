import { useState } from "react";

import Password from "../../../components/shared/Password";
import Submit from "../../shared/Submit";
import Username from "../../shared/Username";
import UsernameAkinator from "./UsernameAkinator";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            !credentials.some(
                (cred: { username: string }) =>
                    cred.username === username
            )
        ) {
            alert("Username not found. Please try again.");
            return;
        }

        if (password === "") {
            alert("Please enter a password.");
            return;
        }

        if (
            !credentials.some(
                (cred: {
                    username: string;
                    password: string;
                }) =>
                    cred.username === username &&
                    cred.password === password
            )
        ) {
            alert("Incorrect password. Please try again.");
            return;
        }

        alert("Login successful!");
        window.location.href =
            "https://www.youtube.com/watch?v=xHEgHjJvR94";
    }

    return (
        <>
            {username ? (
                <>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <Username value={username} />
                        <Password
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <Submit
                        text="Login"
                        onClick={handleSubmit}
                    />
                </>
            ) : (
                <UsernameAkinator callback={setUsername} />
            )}
        </>
    );
}

export default Login;
