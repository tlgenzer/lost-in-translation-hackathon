// Define a list of sentences and their corresponding languages
let sentences = []
async function getData()
{
    const res = await fetch("./Sentences.json")
    sentences=await res.json()
}

let count = 0;

function winCheck(userLanguage, correctLanguage)
{

    console.log("wincheck")
    // Check if the user's answer is correct and provide feedback
    if (userLanguage.toLowerCase() === correctLanguage.toLowerCase()) {
        //alert("Correct!");
        document.getElementById("win").innerHTML="Correct"
        count++


    } else {
        //alert(`Sorry, the correct answer was ${correctLanguage}.`);
        document.getElementById("win").innerHTML=`Sorry, the correct answer was ${correctLanguage}.`
        //SAVE COUNT TO DATABASE
        count = 0;
    }
    console.log(count)
}


function sentenceSelect() {
    // Select a random sentence from the list
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex].sentence;
    const correctLanguage = sentences[randomIndex].language;
    let corrSentence= {sentence: '',language: ''};
    corrSentence.sentence = randomSentence;
    corrSentence.language = correctLanguage;
    return corrSentence;
}

function sentencePrompt(){
    // Prompt the user to input the corresponding language
    const sen = sentenceSelect()
    document.getElementById("sentenceID").innerHTML = sen.sentence;
   //const userLanguage = prompt(`What language is this sentence written in? \n\n"${sen.sentence}"`);

    //winCheck(userLanguage, sen.language);
    let button = document.getElementById("submit")
    button.addEventListener('click', function() {
        const userLanguage = document.getElementById("text-input").value;
        console.log(userLanguage)
        winCheck(userLanguage,sen.language);
        document.getElementById("text-input").value = ""
        document.getElementById("countID").innerHTML = `Streak: ${Number(count)}`;
    }
    )

    console.log(count)


}
async function main()
{
    await getData();
    sentencePrompt()
    while(count>0){
        sentencePrompt()
    }


}


main();


/*var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
        alert("1") // Chrome
    }
    else {
        alert("2") // Safari
    }
}*/


