function UsernameGuesser() {
    return (
        <div className="flex items-center justify-center my-6">
            <div className="max-w-md border-solid border-2 border-black p-6 rounded-lg">
                <p className="text-justify">
                    Does your username contain any special
                    characters?
                </p>
                <div className="flex items-center justify-center flex-col gap-2 mt-6">
                    <button className="px-16 py-2 rounded-lg text-white bg-green-600">
                        Yes
                    </button>
                    <button className="px-16 py-2 rounded-lg text-white bg-red-800">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UsernameGuesser;
