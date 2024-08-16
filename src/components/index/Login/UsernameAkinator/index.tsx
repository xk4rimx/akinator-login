import { useEffect, useState } from "react";
import { chooseQuestion, getQuestions } from "./scripts";

const questions = getQuestions();

function UsernameAkinator({
    callback,
}: UsernameAkinatorProps) {
    const [usernames, setUsernames] = useState([]);
    const [currQuestion, setCurrQuestion] = useState(
        questions[0]
    );

    useEffect(() => {
        const credentials = JSON.parse(
            window.localStorage.getItem("credentials")!
        );
        const usernames = credentials.map(
            (cred: { username: string }) => cred.username
        );
        setUsernames(usernames);
        setCurrQuestion(
            chooseQuestion(questions, usernames)
        );
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
        <div className="flex items-center justify-center m-6">
            <div className="max-w-md py-6 border-solid border-2 border-black p-6 rounded-lg">
                <p className="text-center">
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
                <p className="font-mono text-xs text-left">
                    <span className="underline">
                        Remaining usernames
                    </span>
                    : {usernames.join(", ")}
                </p>
            </div>
        </div>
    );
}

interface UsernameAkinatorProps {
    callback: (username: string) => void;
}

export default UsernameAkinator;
