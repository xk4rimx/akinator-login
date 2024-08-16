<p align="center">
  <img src="https://github.com/user-attachments/assets/284eef19-27be-4781-b01a-460f514f270c" width="650" />
</p>

# Akinator Login

Akinator Login takes a fun approach to user authentication by combining the concept of the Akinator guessing game with a login system. This project is all about making the login process more engaging by guessing the user's username through a series of targeted questions.

## Overview

The login system uses a binary search-like algorithm to quickly guess usernames, usually within just 5 questions. It's a fresh spin on the traditional login process, keeping it both functional and intriguing.

## Key Features

-   Interactive username guessing mechanism.
-   User registration.
-   Modern, responsive UI.

## Technology Stack

-   [Astro](https://astro.build/) - Static site generator.
-   [React](https://reactjs.org/) - UI component library.
-   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.

## Getting Started

To run this project locally:

1. Clone the repository: `git clone https://github.com/xk4rimx/akinator-login`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.
4. Access the app at `http://localhost:4321`.

## How It Works

1. Users create an account.
2. During login, the system asks a series of yes/no questions.
3. The algorithm eliminates non-matching usernames based on each answer.
4. When only one username remains, the system asks for confirmation, then prompts the user for their password.

## Project Context

Akinator Login was built for the "Hackathon with Lewis" event, following the theme "Functionally Dysfunctional."

## License

This project is open-source and available under [The Unlicense](https://unlicense.org/), so feel free to use, modify, and distribute it.
