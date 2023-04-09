const textElement = document.getElementById("question")
const optionsElement = document.getElementById("options")

function startGame() {
    display(0)
}

function display(i) {
    const stage = stages.find(stage => stage.id === i)
    textElement.innerText = stage.question
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild)
    }

    stage.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("opt")
            button.addEventListener("click", () => selectOption(option))
            optionsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return true
}

function selectOption(option) {
    const nextID = option.nextText
    if (nextID === 24) {
        window.location.href = "businesscasual.html";
    }
    display(nextID)
}

const stages = [
    {
        id: 0,
        question: "You've been born. Congrats!",
        options: [
            {
                text: "> What is this?",
                nextText: 1
            },
            {
                text: " "
            },
            {
                text: "> Everything hurts?",
                nextText: 1
            }
        ]
    },
    {
        id: 1,
        question: "Don't worry about it. Why don't you focus on developing your synapses?",
        options: [
            {
                text: ">> Develop your synapses.",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        question: "That's a bit better, isn't it?",
        options: [
            {
                text: "> I know how to talk now.",
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        question: "Your parents enroll you in a prestigious academy for precocious young toddlers. For the first time, you learn what it's like to interact with people besides your family members. You begin to understand the feeling of having peers, an experience that will follow you throughout your life.",
        options: [
            {
                text: ">> Get older.",
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        question: "Soon, you're old enough to start real school.",
        options: [
            {
                text: ">>",
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        question: "One day at recess, a kid in your class comes up to you. He tells you that your outfit is weird and your face looks like if an old man was a baby. What do you do?",
        options: [
            {
                text: "> Do nothing.",
                nextText: 6
            },
        ]
    },
    {
        id: 6,
        question: "A girl nearby overhears what he said to you. She immediately comes over and tells off the bully. He sheepishly apologizes, and admits that it was actually his own face that he was insecure about. The three of you get to talking, and you realize that you actually have a lot in common with them. Maybe this is going to be the start of a lifelong friendship.",
        options: [
            {
                text: ">> Get older.",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        question: "You make it through elementary school, and then middle school, and it goes by in a blur, perhaps like it has only been a minute or so since you started. Now that you're entering high school, it seems that you have more agency than ever. You get to choose your own classes now, go out with your friends when you want, and you're just starting to realize the existential anxiety that comes along with having to make all of your own decisions for the rest of your life.",
        options: [
            {
                text: ">>",
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        question: "Your teachers have realized your potential for brilliance, and they start recommending you for the advanced classes next year.",
        options: [
            {
                text: "> Sign up for advanced classes.",
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        question: "You sign up for the advanced classes. Before you know it, your senior year is ending. You're graduating at the top of your class, and you've been accepted into one of the most prestigious universities in the country.",
        options: [
            {
                text: ">> Get older.",
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        question: "You're starting college, and it's a big step up from high school. There seems to be more choices to make than ever before in your life.",
        options: [
            {
                text: ">> Get older.",
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        question: "In your second year of school, you're paired with a beautiful person of your preferred gender for a project in your intro philosophy class. The two of you hit it off immediately and soon begin dating.",
        options: [
            {
                text: ">> Get older.",
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        question: "Weeks turn into months. Before you know it, you and your partner are celebrating your one year anniversary. You're almost certain that you want to spend the rest of your life with this person. Your college years are going by faster than you could've ever expected. You're studying hard and getting good grades, but you're not forgetting to live your life, either. You know you're going to value the memories you make for the rest of your life.",
        options: [
            {
                text: ">> Get older.",
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        question: "One day, you're hanging out in your apartment with your partner and friends. Everyone is talking and laughing. You look around, and you realize that you've never felt more content. You think that you could maybe live in this moment forever, experience this over and over again for the rest of eternity.",
        options: [
            {
                text: ">> Get older.",
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        question: "But your college days are numbered, and you soon find that you're about to graduate. You've got a job offer with a decent salary and benefits. Maybe not exactly the type of job you envisioned yourself doing as a kid, but it doesn't have to be forever. You'll spend a few years saving up money, and then use this as a stepping stone to an even better job, one that you'll truly enjoy.",
        options: [
            {
                text: "> Take the job.",
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        question: "You've been working here for a few months now, and it hasn't been so bad. Plus, your boss is impressed by the work you've been doing, and promises a promotion soon if you keep it up. One day, your partner announces that they've decided to go to grad school on the other side of the country.",
        options: [
            {
                text: "> I'm too close to getting this promotion to leave now.",
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        question: "That's right, your job comes first. Your partner moves away, and the two of you try to make it work long distance, but it's ultimately just too challenging for the two of you, and you regretfully break it off. Oh well, the two of you had a good few years together. Besides, you never know what the future has in store for you.",
        options: [
            {
                text: ">> Get older.",
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        question: "Months pass, and then years. You haven't seen any signs of the promotion you've been promised for so long. Soon, you realize that your boss actually hasn't been listening to any of your ideas for how to improve the business. You're starting to think that maybe you could do this much better yourself.",
        options: [
            {
                text: "> Keep going.",
                nextText: 18
            }
        ]
    },
    {
        id: 18,
        question: "But no, there's no way you could take a risk like that in this economy. You can't entertain silly ideas like that. You stay on at your current job.",
        options: [
            {
                text: ">> Get older.",
                nextText: 19
            }
        ]
    },
    {
        id: 19,
        question: "Years go by. You find yourself becoming more and more comfortable in your monotonous life. You've never quite found the passion within yourself for this career, but at this point, you've forgotten what passion even feels like. Every day, you go to meetings, take notes, answer emails, and engage in pleasant idle talk with your coworkers.",
        options: [
            {
                text: ">> Get older.",
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        question: "One day, you're making copies in the copy room as per usual, when the copier malfunctions and your tie gets caught.",
        options: [
            {
                text: "> Pull it out.",
                nextText: 21
            }
        ]
    },
    {
        id: 21,
        question: "It won't come out.",
        options: [
            {
                text: ">>",
                nextText: 22
            }
        ]
    },
    {
        id: 22,
        question: "Suddenly, you hear a distant blast, and then blaring sirens. You feel a stampede outside the room, and you realize that the clunky break room microwave that you've all been meaning to replace for years has finally exploded. You pull with all your strength against the copier, but your neck remains chained to it. You can feel the heat of the fire getting closer by the second.",
        options: [
            {
                text: ">>",
                nextText: 23
            }
        ]
    },
    {
        id: 23,
        question: "Any last words?",
        options: [
            {
                text: "> This was my favorite tie.",
                nextText: 24
            }
        ]
    },
]

startGame()