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

// async function askQuestion(
//     rl: readline.Interface,
//     question: string
// ): Promise<boolean> {
//     const answer = await new Promise<string>((resolve) => {
//         rl.question(`${question} (y/n): `, resolve);
//     });
//     return answer.toLowerCase() === "y";
// }

// const main = async () => {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     let currentUsernames = [...usernames];
//     const questions = createQuestions();

//     while (currentUsernames.length > 1) {
//         const question = chooseOptimalQuestion(
//             questions,
//             currentUsernames
//         );
//         const answer = await askQuestion(
//             rl,
//             question.question
//         );

//         const previousLength = currentUsernames.length;
//         currentUsernames = currentUsernames.filter(
//             (username) => question.func(username) === answer
//         );

//         const eliminatedCount =
//             previousLength - currentUsernames.length;
//         console.log(
//             eliminatedCount > 0
//                 ? `${eliminatedCount} usernames eliminated.`
//                 : "No usernames eliminated."
//         );
//     }

//     console.log("Your username is:", currentUsernames[0]);
//     rl.close();
// };

// main().catch(console.error);
