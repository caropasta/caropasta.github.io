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
    if (nextID === -1) {
        window.location.href = "businesscasual.html";
    }
    if (nextID === -2) {
        window.location.href = "allthebells.html";
    }
    if (nextID === -3) {
        window.location.href = "invinciblesummer.html";
    }
    if (nextID === -4) {
        window.location.href = "nochildren.html";
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
        question: "In your second year of school, you're paired with a beautiful person for a project in your intro to philosophy class. The two of you hit it off immediately and soon begin dating.",
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
                text: "> Go with them.",
                nextText: 50
            },
            {
                text: " "
            },
            {
                text: "> I'm too close to getting this promotion to leave now.",
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        question: "That's right, your job comes first. Your partner moves away, and the two of you try to make it work long distance, but it's ultimately just too challenging, and you regretfully break it off. Oh well, you had a good few years together. Besides, you never know what the future has in store for you.",
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
            },
            {
                text: " "
            },
            {
                text: "> Leave to start your own business.",
                nextText: 24
            },
        ]
    },
    {
        id: 18,
        question: "But no, there's no way you could take a risk like that in this economy. You can't entertain silly ideas like these. You stay on at your current job.",
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
        question: "Suddenly, you hear a distant blast, and then blaring sirens. You feel a stampede outside the room, and you realize that the clunky break room microwave that your company has been meaning to replace for years has finally exploded. You pull with all your strength against the copier, but you remain chained to it by your neck. You can feel the heat of the fire getting closer by the second.",
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
                nextText: -1
            }
        ]
    },
    // END
    {
        id: 24,
        question: "You've decided that you're not going to waste any more of your life at this dead-end job. You put in your two weeks notice, and soon, you're starting your own rival business. You're gonna do just what your old company did but even better.",
        options: [
            {
                text: ">> Get older.",
                nextText: 25
            }
        ]
    },
    {
        id: 25,
        question: "Your small business has been doing pretty well for a few months, but you wonder if it may be time to take it to the next level. You meet with a couple of investors, and they seem interested.",
        options: [
            {
                text: "> Make a deal with them.",
                nextText: 26
            },
            {
                text: " "
            },
            {
                text: "> Stay on by yourself for now.",
                nextText: 39
            }
        ]
    },
    {
        id: 26,
        question: "You decide that this new push is just what the company needs. You bring on the investors, and soon, the business is doing better than ever. Your company is starting to become a pretty big name. Some are even beginning to mention it in the same breath as the place that you once worked, a distant memory by now.",
        options: [
            {
                text: ">> Get older.",
                nextText: 27
            }
        ]
    },
    {
        id: 27,
        question: "Your newfound business success soon brings wealth and fame. You're getting invited to appear on morning talkshows, to give talks at bookstores. You deliver a commencement address at your alma mater.",
        options: [
            {
                text: ">>",
                nextText: 28
            }
        ]
    },
    {
        id: 28,
        question: "Afterwards, you stop by your favorite diner from back when you were still in school. You're having a sip of coffee when you catch sight of a familiar face across the room.",
        options: [
            {
                text: ">>",
                nextText: 29
            }
        ]
    },
    {
        id: 29,
        question: "It's your ex-partner, the person you were once convinced you were going to marry. You can't remember how many years it's been since you last saw them. Other than the subtle new lines on their face, they look exactly the same as you remember.",
        options: [
            {
                text: ">>",
                nextText: 30
            }
        ]
    },
    {
        id: 30,
        question: "They smile softly when they see you. They wave you over to their table, and they introduce you to their new partner and kids. Their partner gushes about how inspirational your speech was.",
        options: [
            {
                text: ">>",
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        question: "You catch up for a bit, and then you realize it's getting late, and you're going to miss your flight if you stay for much longer. You say your goodbyes and head out.",
        options: [
            {
                text: ">> Get older.",
                nextText: 32
            }
        ]
    },
    {
        id: 32,
        question: "The business keeps getting better and better, reaching new heights that you never thought possible. You spend days and nights at the office, and then a bigger office, and then an even bigger office. You're soon expanding all over the country.",
        options: [
            {
                text: ">> Get older.",
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        question: "Some days, you think about your ex-partner and their new family, the life that could've been yours. But you're far beyond that point now. You were never meant for the quiet life, anyway. You've managed to build something far bigger than yourself, something that will leave an impact for centuries after you're gone. What more could you possibly want out of life?",
        options: [
            {
                text: ">> Get older.",
                nextText: 34
            }
        ]
    },
    {
        id: 34,
        question: "One day, you get an alarming message. It's from your old boss, who you haven't spoken to in years. He's accusing you of intellectual property theft, and is threatening to sue.",
        options: [
            {
                text: "> Deny everything.",
                nextText: 35
            }
        ]
    },
    {
        id: 35,
        question: "You and he both know that you never stole anything, and he's just jealous that you're doing so much better than him now. You tell him that he can try to sue, but good luck trying to win that case. He'll need it.",
        options: [
            {
                text: ">>",
                nextText: 36
            }
        ]
    },
    {
        id: 36,
        question: "That really angers him. He challenges you to a duel.",
        options: [
            {
                text: "> Huh, ok.",
                nextText: 37
            }
        ]
    },
    {
        id: 37,
        question: "You figure you'll humor him. You accept the challenge, and the two of you meet at dawn the next day. You raise your pistols.",
        options: [
            {
                text: ">>",
                nextText: 38
            }
        ]
    },
    {
        id: 38,
        question: "Before you even have time to think, you hear a bang, and you're stumbling backwards. You barely register the crowd rushing in towards you. The world is rapidly fading out of view. There's a smile on your face as it all goes to black.",
        options: [
            {
                text: ">> END.",
                nextText: -2
            }
        ]
    },
    // END  this one is my favorite tbh
    {
        id: 39,
        question: "You decide that you don't quite want to take that step just yet. You're doing fine on your own, financially stable and with a good work life balance. You'll keep doing what you're doing for a little bit.",
        options: [
            {
                text: ">> Get older.",
                nextText: 40
            }
        ]
    },
    {
        id: 40,
        question: "One day, while grocery shopping, you run into your ex-partner. They explain that they've finished their master's and have moved back here for work. The two of you get drinks, and you express how much you regret having ended your relationship.",
        options: [
            {
                text: ">> Get older.",
                nextText: 41
            }
        ]
    },
    {
        id: 41,
        question: "Soon, the two of you are back together, and you decide to get married. It really was always meant to be.",
        options: [
            {
                text: ">> Get older.",
                nextText: 42
            }
        ]
    },
    {
        id: 42,
        question: "You and your spouse decide to have a kid, and then another one. Your business hasn't been doing too well as of late, but your partner is making enough to support all of you, and you don't mind being the one to take care of the kids.",
        options: [
            {
                text: ">> Get older.",
                nextText: 43
            }
        ]
    },
    {
        id: 43,
        question: "But one day, your partner's company is sold and they're laid off. They start looking for a new job, but in the midst of the recession, they struggle to find a decent offer, and are forced to accept a position below their qualifications. The four of you move into a smaller house.",
        options: [
            {
                text: ">> Get older.",
                nextText: 44
            }
        ]
    },
    {
        id: 44,
        question: "Your partner isn't making nearly as much as they used to, and your business is practically bankrupt. Your partner begs you to sell your company and get another job.",
        options: [
            {
                text: "> I have to do what's best for my family.",
                nextText: 45
            },
            {
                text: " "
            },
            {
                text: "> I can't abandon my passion.",
                nextText: 53
            }
        ]
    },
    {
        id: 45,
        question: "It's sad to see your business go, but your family has always come first. Besides, you've learned all kinds of skills from this venture, and you're ultimately proud of yourself for trying something new even if it didn't work out in the end. You find a new place to work, and the pay isn't the best, but it's enough to sustain the four of you.",
        options: [
            {
                text: ">> Get older.",
                nextText: 46
            }
        ]
    },
    {
        id: 46,
        question: "Your kids head off to college. You spend your days working diligently, and your evenings watching sitcoms with your partner as the two of you gossip about your coworkers. You take up painting as a hobby, and you find that you're quite good at it. You start surprising your friends and family with hand-painted pieces as gifts.",
        options: [
            {
                text: ">> Get older.",
                nextText: 47
            }
        ]
    },
    {
        id: 47,
        question: "After decades of hard work, you've saved up enough money to retire. You've watched your kids graduate college and get jobs, and then have kids of their own. They all come back to visit during the holidays, and you feel incredibly lucky to have this life.",
        options: [
            {
                text: ">> Get older.",
                nextText: 48
            }
        ]
    },
    {
        id: 48,
        question: "One day, you realize that you've gotten quite old. Some of your closest friends have begun to pass away, and you may be next.",
        options: [
            {
                text: ">> Get older.",
                nextText: 49
            }
        ]
    },
    {
        id: 49,
        question: "In the end, you pass away peacefully at home in your sleep. Your house is filled with your loved ones and your paintings up until the very end.",
        options: [
            {
                text: ">> END.",
                nextText: -3
            }
        ]
    },
    // END
    {
        id: 50,
        question: "You love your partner and want to be with them, and you're not that attached to your job anyways. You move across the country with them, and find a new job in your new city.",
        options: [
            {
                text: ">> Get older.",
                nextText: 51
            }
        ]
    },
    {
        id: 51,
        question: "Your partner soon completes their master's, and the two of you decide to settle down and get married.",
        options: [
            {
                text: ">> Get older.",
                nextText: 52
            }
        ]
    },
    {
        id: 52,
        question: "You've been working and saving up money for a few years now, and soon, you and your partner decide you're financially stable enough to have kids. You welcome a beautiful baby girl, and then another one.",
        options: [
            {
                text: ">> Get older.",
                nextText: 46
            }
        ]
    },
    // jump to kids college
    {
        id: 53,
        question: "This business has always been your dream, and you're determined to make it work no matter what. You promise your partner that things will start looking up soon.",
        options: [
            {
                text: ">> Get older.",
                nextText: 54
            }
        ]
    },
    {
        id: 54,
        question: "You begin to spend longer and longer days at the office. You find that you're barely seeing your kids anymore. But you know that you're doing this for them, so you keep going.",
        options: [
            {
                text: ">> Get older.",
                nextText: 55
            }
        ]
    },
    {
        id: 55,
        question: "Business has been starting to look better, but you keep hard at work, lest you lose the progress that you've made. One day, you meet with a new potential investor, and the two of you decide together to take your business to the next level.",
        options: [
            {
                text: "> Take your business to the next level.",
                nextText: 56
            }
        ]
    },
    {
        id: 56,
        question: "You excitedly tell your partner the news, but you find that they're far less enthused. They say, what about the kids? How are you going to do that and still have time for the kids?",
        options: [
            {
                text: "> You don't understand. I'm doing this for the kids.",
                nextText: 57
            }
        ]
    },
    {
        id: 57,
        question: "Your partner sighs, and says that they should've realized by now that you're always just going to do what you want.",
        options: [
            {
                text: ">> Get older.",
                nextText: 58
            }
        ]
    },
    {
        id: 58,
        question: "Your business is doing great now. You've successfully earned enough to send both of your kids to college. But now that they're gone, you find that you and your partner barely have reason to speak to one another.",
        options: [
            {
                text: ">> Get older.",
                nextText: 59
            }
        ]
    },
    {
        id: 59,
        question: "Months and years go by. Your kids graduate and get jobs. Meanwhile, you've never felt more distant from your partner. You argue with them about what show to put on, and they scold you for drinking all the milk.",
        options: [
            {
                text: "> Get a divorce.",
                nextText: 60
            }
        ]
    },
    {
        id: 60,
        question: "But you can't divorce, your partner says through tears. You're the love of their life. You don't have anything except for each other.",
        options: [
            {
                text: ">> Get older.",
                nextText: 61
            }
        ]
    },
    {
        id: 61,
        question: "The years keep going by. You retire. You and your partner are still together. Your kids start having their own kids, and they all come back to visit during the holidays.",
        options: [
            {
                text: ">>",
                nextText: 62
            }
        ]
    },
    {
        id: 62,
        question: "You wonder when it was that you started knowing so little about your kids. Your partner happily chats with them, and all you can do is sit by and watch.",
        options: [
            {
                text: ">> Get older.",
                nextText: 63
            }
        ]
    },
    {
        id: 63,
        question: "You snap at your partner for not cleaning the floors correctly after you've told them so many times how you're supposed to do it. They accuse you of sabotaging their efforts to start eating healthier.",
        options: [
            {
                text: ">> Get older.",
                nextText: 64
            }
        ]
    },
    {
        id: 64,
        question: "You've gotten quite old.",
        options: [
            {
                text: ">> Get older.",
                nextText: 65
            }
        ]
    },
    {
        id: 65,
        question: "You realize that your days are numbered. Your partner passes away, and a month later, you follow. You wonder who's going to be at your funeral.",
        options: [
            {
                text: ">> END.",
                nextText: -4
            }
        ]
    },
    // END

    // {
    //     id: 66,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 67
    //         }
    //     ]
    // },
    // {
    //     id: 67,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 68
    //         }
    //     ]
    // },
    // {
    //     id: 68,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 69
    //         }
    //     ]
    // },
    // {
    //     id: 69,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 70
    //         }
    //     ]
    // },
    // {
    //     id: 70,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 71
    //         }
    //     ]
    // },
    // {
    //     id: 71,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 72
    //         }
    //     ]
    // },
    // {
    //     id: 72,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 73
    //         }
    //     ]
    // },
    // {
    //     id: ,
    //     question: "",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 
    //         }
    //     ]
    // },
]

startGame()