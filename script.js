let qna =[{
    quantity: 2,
    question: "Är tummen ett finger?",
    option1: "Ja",
    option2: "Nej",
    correctAnswer: "Ja",
},{
    quantity: 4,
    question: "Flest gjorda mål i Premier League genom tiderna?",
    option1: "Wayne Rooney", 
    option2: "Harry Kane",
    option3: "Alan Shearer",
    option4: "Sergio Agüero", 
    correctAnswer: "Alan Shearer"
},{
    type: "checkbox",
    quantity: 4,
    question: "Vilken/vilka är frukter?",
    option1: true,
    opText1: "Tomat",
    option2: false,
    opText2: "Jordgubbe",
    option3: true,
    opText3: "Äpple",
    option4: true,
    opText4: "Avokado",
    correctAnswer: true
},{
    quantity: 2,
    question: "Ingmar Stenmark eller Ingemar Stenmark?",
    option1: "Ingmar Stenmark", 
    option2: "Ingemar Stenmark",
    correctAnswer: "Ingemar Stenmark"
},{
    type: "checkbox",
    quantity: 4,
    question: "Vilka/vilken liga har Zlatan inte spelat i?",
    option1: false,
    opText1: "Bundesliga",
    option2: true,
    opText2: "Serie A",
    option3: true,
    opText3: "Superettan",
    option4: true,
    opText4: "La liga",
    correctAnswer: true
},{
    quantity: 4,
    question: "Vilket djur dödar flest människor?",
    option1: "Ormar", 
    option2: "Myggor",
    option3: "Flodhästar",
    option4: "Hundar",
    correctAnswer: "Myggor"
},{
    type: "checkbox",
    quantity: 4,
    question: "Vem/Vilka svenskar har spelat i Manchester United?",
    option1: true,
    opText1: "Henrik Larsson",
    option2: false,
    opText2: "Fredrik Ljungberg",
    option3: true,
    opText3: "Jesper Blomqvist",
    option4: false,
    opText4: "Sebastian Larsson",
    correctAnswer: true
},{
    quantity: 4,
    question: "Hur många delstater har USA?",
    option1: "49", 
    option2: "51",
    option3: "52",
    option4: "50",
    correctAnswer: "50"
},{
    type: "checkbox",
    quantity: 4,
    question: "Vilka länder är med i Skandinavien",
    option1: true,
    opText1: "Norge",
    option2: true,
    opText2: "Sverige",
    option3: false,
    opText3: "Finland",
    option4: true,
    opText4: "Danmark",
    correctAnswer: true
},{
    quantity: 4,
    question: "Hur många stjärnor har europa flaggan?",
    option1: "48", 
    option2: "8",
    option3: "18",
    option4: "12",
    correctAnswer: "12"
}];

let currentQuestion = 0;
let score = 0;
let questions = 1;
let correctAnswer = qna[0].correctAnswer;
let highscore = qna.length;
let respond = [];

const answers = document.querySelector("#answers").children;
const nextButton = document.getElementById("next");
const answer = document.querySelectorAll(".answer");
const modes = document.querySelector("#mode")
const divboxes = document.querySelectorAll(".answerBox")

let label = document.createElement("label");
let footer = document.getElementById("footer")
let correctOpt = document.querySelector(".correct");
let divbox = document.getElementsByClassName("answerBox");
let question = document.querySelector("h2").innerText = qna[0].question;
let optionA = document.querySelector("#answer0").value = qna[0].option1;
let optionB = document.querySelector("#answer1").value = qna[0].option2;
let optionC = document.querySelector("#answer2").value = qna[0].option3;
let optionD = document.querySelector("#answer3").value = qna[0].option4;
let progress = document.querySelector("#progress").innerText = `Fråga ${questions} av ${qna.length}`;

let nextQuestion = () => {
    currentQuestion++
    questions++ 

//Om det finns label tag så ska det döljas
    if (document.querySelector(".remove")) {
        for (let index = 0; index < divbox.length; index++) {
            document.querySelector(".remove").remove()
            answers[index].style.border = null;
            answers[index].style.backgroundColor = null;
            answers[index].style.color = null;
        }
        
    };
    // Om det är checkbox fråga
    if(currentQuestion < qna.length && qna[currentQuestion].quantity === 4 && qna[currentQuestion].type === "checkbox") { 
        nextButton.style.display = "none";
        document.querySelector("#box3").style.display = "block";
        document.querySelector("#box4").style.display = "block";
        answer.forEach((i) => {
            if(i.checked) {
                i.checked = false
            }
        })
        
        let checkAnswer = document.createElement("button");
        checkAnswer.innerText = "Check answer";
        checkAnswer.style.float = "right";
        checkAnswer.style.background = "#808080"
        checkAnswer.style.color = "#F5F5F5"
        checkAnswer.style.padding = "10px 15px";
        checkAnswer.style.fontSize = "medium";
        checkAnswer.style.border = "1px";
        checkAnswer.style.borderRadius = "7px";
        label.style.display = "inherit";
        
        for (let i = 0; i < divbox.length; i++) {
            answer[i].type = "checkbox";
            answer[i].style.width = "auto";
            answer[i].ariaPressed = null;
            
                label = document.createElement("label");
                label.setAttribute("id", `para${i}`)
                label.setAttribute("class", `remove`)
                label.setAttribute("for", `answer${i}`)
                divbox[i].append(label);          
            };  
            //svaren för checkbox svar
            document.querySelector("#para0").innerText = qna[currentQuestion].opText1;
            document.querySelector("#para1").innerText = qna[currentQuestion].opText2;
            document.querySelector("#para2").innerText = qna[currentQuestion].opText3;
            document.querySelector("#para3").innerText = qna[currentQuestion].opText4;

            footer.append(checkAnswer);

            const getCheckedAnswer = () => {
                checkAnswer.style.display = "none";
                nextButton.style.display = "block";
                let checkedScore = 0
                answer.forEach(element => {
                    if (!element.checked && element.value === "true") {
                        element.parentElement.style.border = "5px solid #00B435";
                    } 
                    else if (element.checked && element.value === "true") {
                        checkedScore++

                        element.parentElement.style.border = "5px solid #00B435";
                        element.parentElement.style.backgroundColor = "#33DE66";
                        element.parentElement.style.color = "#196B31";
                    } else if (!element.checked && element.value === "false"){
                        element.parentElement.style.border = "5px solid #BD0215";
                    }
                    else {
                        element.parentElement.style.border = "5px solid #BD0215";
                        element.parentElement.style.backgroundColor = "#F24129";
                        element.parentElement.style.color = "#690215";
                    }

                    answer.forEach(btn => {
                        btn.disabled = true;             
                    });
                    if (checkedScore === 3) {
                        score++
                    }
                });
            }
            checkAnswer.addEventListener('click', getCheckedAnswer);
            //Om det är 4 svarsalternativ
            } else if(currentQuestion < qna.length && qna[currentQuestion].quantity === 4) { 
                for (let i = 0; i < divbox.length; i++) {
                    answer[i].type = "button";
                    answer[i].style.width = null;
                    answer[i].ariaPressed = "false";
                }
                console.log(correctAnswer)
                document.querySelector("#box3").style.display = "block";
                document.querySelector("#box4").style.display = "block";
            //True o false fråga
            } else if(currentQuestion < qna.length ){
                for (let i = 0; i < divbox.length; i++) {
                    answer[i].type = "button";
                    answer[i].style.width = null;
                    answer[i].ariaPressed = "false";
                }
                document.querySelector("#box3").style.display = null;
                document.querySelector("#box4").style.display = null;
            } else {
                //när frågor är slut
                question = document.querySelector("h2").innerText = "Resultat";
                document.querySelector("#next").disabled = true;
                document.querySelector("#answers").remove();

                progress = document.querySelector("#progress").innerText = `Du fick ${score} rätt av ${qna.length} möjliga`;
                
                getScore();
            };
correctAnswer = qna[currentQuestion].correctAnswer;
        
//frågorna och svaren skrivs
question = document.querySelector("h2").innerText = qna[currentQuestion].question;

optionA = document.querySelector("#answer0").value = qna[currentQuestion].option1;
optionB = document.querySelector("#answer1").value = qna[currentQuestion].option2;
optionC = document.querySelector("#answer2").value = qna[currentQuestion].option3;
optionD = document.querySelector("#answer3").value = qna[currentQuestion].option4;

progress = document.querySelector("#progress").innerText = `Fråga ${questions} av ${qna.length}`;
    
//lägger/ta bort till correct class på varje rätt fråga så att jag kan visa svaren direkt efter att man har valt.
    for (let btn of answer) {
        btn.classList.remove("correct"); 
        btn.disabled = false
        if (correctAnswer === btn.value){
            btn.classList.add("correct");
        };
        if (modes.ariaPressed === "true") {
            btn.style.color = "#E6DBBA";
            btn.style.backgroundColor = "#000017";
            btn.style.border = "#1C00AF solid 1px";             
        } else {
                btn.style.color = null;
                btn.style.backgroundColor = null;
                btn.style.border = null;             
            }
        };   
    };
    //Vad som ska hända efter knappval
    answer[0].addEventListener('click', () => {
        if (document.querySelector("#answer0").checked && answer[0] === "checkbox") {
        }
         else if (document.querySelector("#answer0").value === correctAnswer) {
            score++
                answer[0].style.border = "5px solid #00B435";
                answer[0].style.backgroundColor = "#33DE66";
                answer[0].style.color = "#196B31";
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            } else {
                answer[0].style.border = "5px solid #BD0215";
                answer[0].style.backgroundColor = "#F24129";
                answer[0].style.color = "#690215";
                document.querySelector(".correct").style.border = "5px solid #00B435";
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            }
        });
        answer[1].addEventListener('click', () => {
            if (document.querySelector("#answer1").checked && answer[1] === "checkbox") {

            }
            else if (document.querySelector("#answer1").value === correctAnswer) {
                score++
                answer[1].style.border = "5px solid #00B435";
                answer[1].style.backgroundColor = "#33DE66";
                answer[1].style.color = "#196B31";
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            } else {
                answer[1].style.border = "5px solid #BD0215";
                answer[1].style.backgroundColor = "#F24129";
                answer[1].style.color = "#690215";
                document.querySelector(".correct").style.border = "5px solid #00B435";
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            }
        });
        answer[2].addEventListener('click', () => {
            if (document.querySelector("#answer2").checked && answer[2] === "checkbox") {
            }
            else if (document.querySelector("#answer2").value === correctAnswer) {
                score++
                answer[2].style.border = "5px solid #00B435";
                answer[2].style.backgroundColor = "#33DE66";
                answer[2].style.color = "#196B31";
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            } else {
                answer[2].style.border = "5px solid #BD0215";
            answer[2].style.backgroundColor = "#F24129";
            answer[2].style.color = "#690215";
            document.querySelector(".correct").style.border = "5px solid #00B435";
            
            answer.forEach(btn => {
                btn.disabled = true;
            });
        }
    });
    answer[3].addEventListener('click', () => {
        if (document.querySelector("#answer3").checked && answer[3] === "checkbox") {
        }
        else if (document.querySelector("#answer3").value === correctAnswer) {
            score++
            answer[3].style.border = "5px solid #00B435";
            answer[3].style.backgroundColor = "#33DE66";
            answer[3].style.color = "#196B31";
            
            answer.forEach(btn => {
                btn.disabled = true;
            });
        } else {
            answer[3].style.border = "5px solid #BD0215";
            answer[3].style.backgroundColor = "#F24129";
            answer[3].style.color = "#690215";
            document.querySelector(".correct").style.border = "5px solid #00B435";
            
            answer.forEach(btn => {
                btn.disabled = true;
            });
        }
    });
  //hämtar svar och skriver ut det
    let getScore = () => {
        if (modes.ariaPressed === "false") {
            document.querySelector("#container").style.border = "2px solid black";
            document.querySelector("#container").style.borderRadius = "20px";
        } else {
            document.querySelector("#container").style.border = "2px solid #E6DBBA";
            document.querySelector("#container").style.borderRadius = "20px";
        }
        
        if(score > highscore * 0.75) {
            let procentText = document.createElement("h1");
            let procent = score / highscore * 100;
            procentText.innerText = `${procent}%`
            document.querySelector("#question").append(procentText);
            procentText.style.padding = "0px"
            procentText.style.color = "#00B435"

            document.querySelector("#result").innerText = "MYCKET VÄL GODKÄNT";
            document.querySelector("#result").style.color = "#00B435";
        } else if (score > highscore * 0.5) {
            let procentText = document.createElement("h1");
            let procent = score / highscore * 100;
            procentText.innerText = `${procent}%`
            document.querySelector("#question").append(procentText);
            procentText.style.padding = "0px"
            procentText.style.color = "#FF8D0D"

            document.querySelector("#result").innerText = "GODKÄNT";
            document.querySelector("#result").style.color = "#FF8D0D";
        } else {
            let procentText = document.createElement("h1");
            let procent = score / highscore * 100;
            procentText.innerText = `${procent}%`
            document.querySelector("#question").append(procentText);
            procentText.style.padding = "0px"
            procentText.style.color = "#BD0114"

            document.querySelector("#result").innerText = "UNDERKÄNT";
            document.querySelector("#result").style.color = "#BD0114";
        }
        
    };
    //byte mellan lightMode och DarkMode
    let switchModes = () => {
        if (modes.ariaPressed === "false") {
            modes.ariaPressed = "true";
            modes.innerText = "Light mode"
           for (let btn of answer) {
                btn.style.color = "#E6DBBA";
                btn.style.backgroundColor = "#000017";
                btn.style.border = "#1C00AF solid 1px";
            };    
            document.querySelector("body").style.backgroundColor = "#000017";
            document.querySelector("body").style.color = "#E6DBBA";  
        } else if (modes.ariaPressed === "true"){
            modes.ariaPressed = "false";
            modes.innerText = "Dark mode"          
            answer.forEach((btn) => {
                btn.style.color = null;
                btn.style.backgroundColor = null;
                btn.style.border = null;
            });
            
            document.querySelector("body").style.backgroundColor = null;
            document.querySelector("body").style.color = null;
        };
    };
    nextButton.addEventListener('click', nextQuestion);
    modes.addEventListener('click', switchModes);

    