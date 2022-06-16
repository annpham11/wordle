
    const guessedWords = [[]]; //collects are the words in an array, each word will contain an array that contains each letter
    const keys = document.querySelectorAll(".keyboard-row button");
    const word = "DREAM";
    let currentLettersArr = []

    // iterate over each key and add an onclick handler 
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => { // target gets our actual letter
            const letter = target.textContent;
            
            const currentRow = guessedWords.length - 1;

            if (guessedWords[currentRow].length === 5) {
                if (letter === 'Enter') {
                    handleSubmitWord()
                }

               return; 
            } 

            if (letter ==='Del') {
                console.log('Del')
            }



            updateGuessedWords(letter);
        };
    }  
 
        //this will tell the number of guessed words so far
    function getCurrentWordArr() { 
        const currentRow = guessedWords.length - 1; //returns the actual array that we're updating 
        const currentLetters = guessedWords[currentRow].length;


        if (currentLetters < 5) {
            return guessedWords[currentRow];
        } 

        guessedWords.push([])
        return guessedWords[currentRow + 1];
    }

     
    function updateGuessedWords(letter) {
        let currentLettersArr = getCurrentWordArr();

        if(currentLettersArr && currentLettersArr.length < 5) {
            currentLettersArr.push(letter)
            console.log(currentLettersArr)

            const row = guessedWords.length - 1
            const column = currentLettersArr.length - 1; 

            const availableSpace = document.getElementById(row + '-' + column); // lets us know if the 'tiles' are available
            availableSpace.textContent = letter; 
        }        
    } 

    function handleSubmitWord() {
        let currentLettersArr = guessedWords[guessedWords.length - 1]
        console.log(currentLettersArr)

        //const currentWord = currentLettersArr.join('') 

       let answerLetters = word.split('')
       console.log(answerLetters)
       
       const row = guessedWords.length - 1 
       

       for (let i = 0; i < currentLettersArr.length; i++) {
            const letterSpace = document.getElementById(row + '-' + i);

            if (answerLetters[i] === currentLettersArr[i]) { 
                letterSpace.classList.add('correct')
            } else if (answerLetters.includes(currentLettersArr[i])) {
                letterSpace.classList.add('present')

            } else {
            letterSpace.classList.add('absent') 
            } 
           
       }

       



       }

    


    // seperate function 

    //if (currentWord === word) {
        //alert("Congratulations!")
    //}
     