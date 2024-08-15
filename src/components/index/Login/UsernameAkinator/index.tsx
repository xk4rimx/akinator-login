import { useEffect, useState } from "react";
import { chooseQuestion, getQuestions } from "./scripts";

const questions = getQuestions();
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

function UsernameAkinator({
    callback,
}: UsernameAkinatorProps) {
    const [usernames, setUsernames] = useState(
        defaultCredentials.map((cred) => cred.username)
    );
    const [currQuestion, setCurrQuestion] = useState(
        chooseQuestion(questions, usernames)
    );

    useEffect(() => {
        const credentials = JSON.parse(
            window.localStorage.getItem("credentials") ||
                "[]"
        );
        if (credentials.length) {
            setUsernames(
                credentials.map(
                    (cred: { username: string }) =>
                        cred.username
                )
            );
            chooseQuestion(questions, usernames);
        } else {
            window.localStorage.setItem(
                "credentials",
                JSON.stringify(defaultCredentials)
            );
        }
    }, []);

    function handleAnswer(answer: boolean) {
        if (usernames.length === 1) {
            if (answer) {
                callback(usernames[0]);
            } else {
                if (
                    confirm(
                        "It looks like you don't have an account yet. Would you like to create one?"
                    )
                ) {
                    window.location.href = "/sign-up";
                } else {
                    window.location.reload();
                }
            }
            return;
        }
        const newUsers = usernames.filter((username) =>
            answer
                ? currQuestion.func(username)
                : !currQuestion.func(username)
        );
        setUsernames(newUsers);
        setCurrQuestion(
            chooseQuestion(questions, newUsers)
        );
    }

    return (
        <div className="flex items-center justify-center my-6">
            <div className="max-w-md py-6 border-solid border-2 border-black p-6 rounded-lg text-center">
                <p className="text-justify">
                    {usernames.length === 1
                        ? `Is your username ${usernames[0]}?`
                        : currQuestion.text}
                </p>
                <div className="flex items-center justify-center flex-col gap-2 my-6">
                    <button
                        className="px-16 py-2 rounded-lg text-white bg-green-600"
                        onClick={() => handleAnswer(true)}
                    >
                        Yes
                    </button>
                    <button
                        className="px-16 py-2 rounded-lg text-white bg-red-800"
                        onClick={() => handleAnswer(false)}
                    >
                        No
                    </button>
                </div>
                <p className="font-mono text-xs">
                    Remaining usernames:{" "}
                    {usernames.join(", ")}
                </p>
            </div>
        </div>
    );
}

interface UsernameAkinatorProps {
    callback: (username: string) => void;
}

export default UsernameAkinator;
