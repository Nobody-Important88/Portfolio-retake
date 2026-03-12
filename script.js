const myprojects = [
    {
        title: "JavaScript Calculator",
        description: "A simple calculator that performs basic math operations like addition, subtraction, multiplication, and division.",
        link: "https://nobody-important88.github.io/calc-retake/"
    },
    {
        title: "Number Guess game",
        description: "A game where the user tries to guess the correct random number after each guess.",
        link: "https://nobody-important88.github.io/Numguesser/"
    },
    {
        title: "Unit Conversion APP",
        description: "An app that converts values between different units such as meter, kilometers, etc",
        link: "https://nobody-important88.github.io/unit-converter-retake/"
    },
    {
        title: "MonthlyBudget Planner",
        description: "A budgeting tool that helps users track income, expenses, and plan monthly spending.",
        link: "https://nobody-important88.github.io/budget-planner-retake/"
    },
    {
        title: "Voting App",
        description: "An app where users can vote between options and see which one has the most votes.",
        link: "https://nobody-important88.github.io/voting-app-javascript/"
    },
    {
        title: "Task Manager App",
        description: "A to-do list style app where users can add, edit, and remove tasks.",
        link: "https://nobody-important88.github.io/Task-manager-project/"
    },
    {
        title: "Age Counter App",
        description: "An app that calculates a person's age ",
        link: ""
    },
    {
        title: "Tech Ecommerce webPage",
        description: "A fake online store webpage displaying tech products.",
        link: "https://nobody-important88.github.io/webpage-tech/"
    },
    {
        title: "Event Speaker Webpage",
        description: "A webpage showcasing speakers for an event with profiles and event information.",
        link: "https://nobody-important88.github.io/Speakers-project/"
    },
    {
        title: "Employee Management system",
        description: "A system for adding, viewing, and managing employee information based off especific categories.",
        link: ""
    },
    {
        title: "Text Formatter App",
        description: "An app that allows users to format text with options like uppercase, lowercase, and etc.",
        link: "https://nobody-important88.github.io/Text-formatter/"
    },
    {
        title: "Book Manager App",
        description: "An app for adding and removing books in a virtual shelf either front or back of it.",
        link: "https://nobody-important88.github.io/bookshelf/"
    },
    {
        title: "Expense Tracker APP",
        description: "A tool that helps users record and monitor their daily expenses.",
        link: "https://nobody-important88.github.io/expense-tracker/"
    },
    {
        title: "Image/Emoji game",
        description: "A grid-based app that displays images or emojis using a 2D array structure.",
        link: "https://nobody-important88.github.io/emoji-game/"
    },
    {
        title: "Classroom Seating APP",
        description: "An app that organizes and displays classroom seating arrangements.",
        link: ""
    },
    {
        title: "age calculator",
        description: "A tool that calculates a person's exact age from their birthdate.",
        link: "https://nobody-important88.github.io/age-calculator/"
    },
    {
        title: "distance calc",
        description: "An app that calculates distance between two points using user input values and how much time it will take.",
        link: "https://nobody-important88.github.io/Distance-Calc/"
    },
    {
        title: "Card flipping",
        description: "An interactive card that flips to reveal content on the back side.",
        link: "https://nobody-important88.github.io/card/"
    },
    {
        title: "flashcard maker",
        description: "An app that allows users to create and review flashcards for studying.",
        link: "https://nobody-important88.github.io/flashcard/"
    }
];
const container = document.getElementById("middleinfo");

myprojects.forEach(project => {
    const article = document.createElement("article");
    article.classList.add("insides");

    article.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <br>
        <a href="${project.link}" style="color:Black;" target="_blank">View Project</a>
    `;

    container.appendChild(article);
});
