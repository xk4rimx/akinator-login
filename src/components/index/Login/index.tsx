import { useEffect, useState } from "react";

import Password from "../../../components/shared/Password";
import Submit from "../../shared/Submit";
import Username from "../../shared/Username";
import UsernameAkinator from "./UsernameAkinator";

const defaultCredentials = [
    {
        username: "skydancer99",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "lunawolf",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "techguru2024",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "greenthumb",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "runner_joe",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "nightowl",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "pixeldust",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "mountainexplorer",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "coffeeaddict42",
        password: "neverGonn@G1veYouUp",
    },
    {
        username: "happycamper",
        password: "neverGonn@G1veYouUp",
    },
];

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const credentials = JSON.parse(
            window.localStorage.getItem("credentials") ||
                "[]"
        );
        if (!credentials.length) {
            window.localStorage.setItem(
                "credentials",
                JSON.stringify(defaultCredentials)
            );
            window.location.reload();
        }
    }, []);

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

        alert("Yay! Login successful!");
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
                            onEnter={handleSubmit}
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
