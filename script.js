const myprojects = [
    {
        title: "JavaScript Calculator",
        description: "A functional calculator built using JavaScript with interactive UI.",
        link: "https://nobody-important88.github.io/calc-retake/"
    },
    {
        title: "Number Guess game",
        description: "Responsive layout project demonstrating CSS Flexbox skills.",
        link: "https://nobody-important88.github.io/Numguesser/"
    },
    {
        title: "Unit Conversion APP",
        description: "This multi-page personal portfolio website built with HTML and CSS.",
        link: "https://nobody-important88.github.io/unit-converter-retake/"
    },{
        title: "MonthlyBudget Planner",
        description: "A functional calculator built using JavaScript with interactive UI.",
        link: "https://nobody-important88.github.io/budget-planner-retake/"
    },
    {
        title: "Voting App",
        description: "Responsive layout project demonstrating CSS Flexbox skills.",
        link: "https://nobody-important88.github.io/voting-app-javascript/"
    },
    {
        title: "Task Manager App",
        description: "This multi-page personal portfolio website built with HTML and CSS.",
        link: "https://nobody-important88.github.io/Task-manager-project/"
    },{
        title: "Age Counter App",
        description: "A functional calculator built using JavaScript with interactive UI.",
        link: ""
    },
    {
        title: "Tech Ecommerce webPage",
        description: "Responsive layout project demonstrating CSS Flexbox skills.",
        link: "https://nobody-important88.github.io/webpage-tech/"
    },
    {
        title: "Event Speaker Webpage",
        description: "This multi-page personal portfolio website built with HTML and CSS.",
        link: "https://nobody-important88.github.io/Speakers-project/"
    },{
        title: "Employee Management system",
        description: "A functional calculator built using JavaScript with interactive UI.",
        link: ""
    },
    {
        title: "Text Formatter App",
        description: "Responsive layout project demonstrating CSS Flexbox skills.",
        link: "https://nobody-important88.github.io/Text-formatter/"
    },
    {
        title: "Book Manager App",
        description: "This multi-page personal portfolio website built with HTML and CSS.",
        link: "https://nobody-important88.github.io/bookshelf/"
    },{
        title: "Expense Tracker APP",
        description: "A functional calculator built using JavaScript with interactive UI.",
        link: "https://nobody-important88.github.io/expense-tracker/"
    },
    {
        title: "Image/Emoji Grid APP - 2D Arrays",
        description: "Responsive layout project demonstrating CSS Flexbox skills.",
        link: ""
    },
    {
        title: "Classroom Seating APP",
        description: "This multi-page personal portfolio website built with HTML and CSS.",
        link: ""
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
        <a href="${project.link}" style="color:Black;">View Project</a>
    `;

    container.appendChild(article);
});
