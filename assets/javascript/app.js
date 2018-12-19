//Magical Trivia pseudocode

//HTML elements
    //bootstrap 
        //jumbotron
        //footers
        //buttons
        //cards/boxes
    

//Needed:
    //theme
    //theme music
    //timed questions
    //determine how much time per question
    //timer
    //question and answer array
    //when question pops up, answers display
    //when answered, new question and reset timer

var questions = [
    {
        question: "In Harry Potter by JK Rowling, what was the core of Harry Potter's wand?",
        choice: ["Dragon Heartstring", "Unicorn Hair", "Phoenix Feather", "Veela Hair"],
        answer: 2,
    },
    {
        question: "In Harry Potter by JK Rowling, what were the names of Molly Weasley's brothers?",
        choice: ["Gideon and Fabian Prewett", "Gregory and Florean Fortescue", "George and Frank Fortescue", "Graham and Fred Prewett"],
        answer: 0,
    },
    {
        question: "In Harry Potter by JK Rowling, what color is Tonks' hair when we first meet her?",
        choice: ["Yellow","Pink","Blue","Purple"],
        answer: 3,
    },
    {
        question: "In the 1993 film Hocus Pocus, what are the Sanderson sisters' names?",
        choice: ["Sarah, Wendy, Marie", "Winnie, Marie, Susan", "Winnie, Mary, Sarah", "Wendy, Susan, Mary"],
        answer: 1,
    },
    {
        question: "In the 1993 film Hocus Pocus, what was the cat's name?",
        choice: ["Thackery Binx", "Zachary Linx", "Zachary Binx", "William Thackeray Binx"],
        answer: 0,
    },
    {
        question: "In the Mistborn series by Brandon Sanderson, the magic system is based upon the ingestion of what substance?",
        choice: ["Food", "Gemstone dust", "Metals", "Special Powders"],
        answer: 2,
    },
    {
        question: "Finish this line from the Lord of the Rings, by J.R.R. Tolkien: 'One ring to rule them all, one ring to find them...",
        choice: ["one ring to take them all, and with Smeagol bind them", "one ring to bring them all, and in the fires bind them", "one ring to get them all, and with fabulous elf-hair bind them", "one ring to bring them all, and in the darkness bind them"],
        answer: 3,
    },
    {
        question: "Many of the books by Brandon Sanderson are set within the same realm.  What is this realm called?",
        choice: ["The Cosmos", "Scadrial", "The Universe", "The Cosmere" ],
        answer: 3,
    },
    {
        question: "In the Lion, the Witch, and the Wardrobe series by C.S. Lewis, what was the Lion's name?",
        choice: ["Asimov", "Asand", "Aslan", "Aslon"],
        answer: 2,
    },
    {
        question: "When the Golden Compass, by Philip Pullman, was made into a movie, it was popularly seen as opposing which subsect of Christianity?",
        choice: ["Protestant", "Baptist", "Lutheran", "Catholic"],
        answer: 3,
    },
    {
        question: "In the Eragon series by Christopher Paolini, what was Eragon's dragon's name?",
        choice: ["Saphira", "Ruby", "Solanna", "Selene"],
        answer: 0,
    },
    {
        question: "In Stardust by Neil Gaiman, what did Tristan promise to bring his love?",
        choice: ["A ring", "A silver penny", "A necklace", "A star"],
        answer: 3,
    },
    {
        question: "In the 1984 film Neverending Story, what is the name of Atreyu's luckdragon?",
        choice: ["Valcon", "Valkyrie", "Falcon", "Falcor"],
        answer: 3,
    },
    {
        question: "In A Discovery of Witches by Deborah Harkness, what are the 3 types of supernatural human-ish creatures Diana encounters?",
        choice: ["Demons, werewolves, witches", "Witches, vampires, sirens", "Vampires, daemons, witches", "Witches, daemons, zombies"],
        answer: 2,
    },
    {
        question: "In Sarah J. Maas's Throne of Glass Series, the infamous assassin Celaena Sardothien gets thrown into which salt mine?",
        choice: ["Endovier", "Rifthold", "Bellhaven", "Terrasen"],
        answer: 0,
    },
    {
        question: "What does Sabriel do for a job in the series by Garth Nix?",
        choice: ["Raises the dead", "Guards the king", "Puts down the dead", "Guards the queen"],
        answer: 2,
    },
    {
        question: "In the Name of the Wind by Patrick Rothfuss, Kvothe says, 'There are three things all wise men fear: the sea in a storm, a night with no moon, and the anger of a _______ man.",
        choice: ["gentle", "naked", "kind", "unpredictable"],
        answer: 0,
    },
    {
        question: "You remind me of the babe!  What babe?",
        choice: ["The babe with the voodoo", "The babe with the colic", "The babe with the magic", "The babe with the power"],
        answer: 3,
    },
    {
        bonusQuestion: "How long have we been waiting for the final book in Pat Rothfuss' Kingkiller Chronicle?",
        choice: ["Forever!", "Years and years and years and years", "Ohhh, not that long", "Why must you remind me?!"],
        answer: 0
    },
];


//create variables 
var randomQ
var timer 
var intervalId
var isCorrect = false;
var isIncorrect = false;
var clockRunning = false;
var unanswered
var correctAnswer
var incorrectAnswer

//reset timer
    function resetTimer() {
        timer = 30;
        //reset display
        $(".timerDisplay").text("");
    }

//start timer
    function startTimer() {
        if (!clockRunning) {
            intervalId = setInterval(countdown, 1000);
            running = true;
            $(".timerDisplay").text("Time Remaining: " + timer);
            alert("setting timer!");
        }
    }

//timer countdown
    function countdown() {
        $(".timerDisplay").text("Time remaining: " + timer);
        timer --;
        
        //stop once timer hits 0
	    if (timer === 0) {
            stop();
            unanswered++;
	    }	
    };

//select random question from array
    function getRandomQ() {
        randomQ = questions[Math.floor(Math.random() * questions.length)]
    };

//display random question and answers from array
    function displayRandomQ() {
        $(".QA").text(randomQ.question)

        //display answer choices with radio buttons
        $("#ac1").append(randomQ.choice[0]);
        $("#ac2").append(randomQ.choice[1]);
        $("#ac3").append(randomQ.choice[2]);
        $("#ac4").append(randomQ.choice[3]);
    };

//when radio button is selected
    //if radio button id = answer id, then..
    function checkAnswer() {

        $("input[type='radio']").click(function(){
            var radioValue = $(this).val();
            alert("you chose " + radioValue)
            alert(randomQ.answer)

            if(radioValue == randomQ.answer) {
                isCorrect = true;
                alert("you're right!");
            }

            else {
                isIncorrect = true;
                alert("wrong answer!");
            };
    
        });

    }
   


//prevent repeats


//game starts
    $(document).ready(function() {
    
    
    //on Begin click
        $(".begin").click(function() {
            //begin text disappears
            $(".begin").text("");
            //computer chooses a question   
            getRandomQ();
            //display questions and answer choices
            displayRandomQ();
            //call countdown
            startTimer();
            countdown();
            //check if answer is correct
            checkAnswer();
     
       
        });

    
        //trivia question pops up
        //if right
            //flash "Correct!" 
            //increment "correct" score
            //new question
        //if wrong
            //flash "Wrong answer!  Answer was x"
            //increment "wrong" score
            //new question
        //if unanswered
            //when time is up, new question
        //after all questions asked,
            //display final score (correct answers and incorrect answers)
            //display special message if 100% correct
            //ask "start new game?"
            //if new game clicked
                //reset scores
                //bring up new question
                //reset timer

    });
            
            