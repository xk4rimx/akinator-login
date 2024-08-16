interface Question {
    text: string;
    func: (username: string) => boolean;
}

function genStartEndQuestions(): Question[] {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return [
        ...Array.from(alphabet).map((char) => ({
            text: `Does your username start with the letter "${char}"?`,
            func: (username: string) =>
                username.startsWith(char),
        })),
        ...Array.from(alphabet).map((char) => ({
            text: `Does your username end with the letter "${char}"?`,
            func: (username: string) =>
                username.endsWith(char),
        })),
    ];
}

function genLengthQuestions(): Question[] {
    return Array.from({ length: 15 }, (_, i) => i + 5).map(
        (len) => ({
            text: `Does your username have ${len} characters?`,
            func: (username: string) =>
                username.length === len,
        })
    );
}

function getQuestions(): Question[] {
    return [
        {
            text: "Does your username contain any special characters?",
            func: (username: string) =>
                /[^a-z0-9]/.test(username),
        },
        {
            text: "Does your username contain any numbers?",
            func: (username: string) => /\d/.test(username),
        },
        {
            text: "Does your username contain any underscores?",
            func: (username: string) => /_/.test(username),
        },
        {
            text: "Does your username contain a vowel?",
            func: (username: string) =>
                /[aeiou]/.test(username),
        },
        ...genStartEndQuestions(),
        ...genLengthQuestions(),
    ];
}

function chooseQuestion(
    questions: Question[],
    usernames: string[]
): Question {
    return questions.reduce(
        (best, current) => {
            const { kept, eliminated } = usernames.reduce(
                (acc, username) => {
                    current.func(username)
                        ? acc.kept++
                        : acc.eliminated++;
                    return acc;
                },
                { kept: 0, eliminated: 0 }
            );
            const ratio = kept / eliminated;
            return Math.abs(ratio - 1) <
                Math.abs(best.ratio - 1)
                ? { text: current, ratio }
                : best;
        },
        { text: questions[0], ratio: Infinity }
    ).text;
}

export { chooseQuestion, getQuestions };
