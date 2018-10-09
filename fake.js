
function FrontEndDeveloper(name) {
    this.name = name;
}

FrontEndDeveloper.prototype = {
    briefSummary: {
        about: "Minimalist who loves technology and creative innovation",
        strengths: ["creative", "passionate", "organized", "detail oriented", "hard-working", "problem solver"],
        hobbies: ["yoga", "dance", "hike", "travel", "photography", "watching the office and impractical jokers"]
    },
    contact: {
        email: "sashakyunghwa@gmail.com",
        linkedIn: "https://www.linkedin.com/in/sashakyunghwa",
        github: "http://github.com/sashakyunghwa"
    }
};

const hired = new FrontEndDeveloper('Sasha Kyung-Hwa Ross');

