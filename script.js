
    const guessedWords = [[]]; //collects are the words in an array, each word will contain an array that contains each letter
    const keys = document.querySelectorAll(".keyboard-row button");
    const word = "DREAM";
    let currentWordArr = []

    // iterate over each key and add an onclick handler 
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => { // target gets our actual letter
            const letter = target.textContent;
            console.log(letter)

            if (letter ==='Enter') {
                handleSubmitWord()
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
        let currentWordArr = getCurrentWordArr();

        if(currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter)

            const row = guessedWords.length - 1
            const column = currentWordArr.length - 1; 

            const availableSpace = document.getElementById(row + '-' + column); // lets us know if the 'tiles' are available
            availableSpace.textContent = letter; 
        }        
    } 

    function handleSubmitWord() {
        let currentWordArr = getCurrentWordArr()
        console.log(currentWordArr.length)
        if (currentWordArr.length < 4) {
            alert("Need more letters");
        } 

        const currentWord = currentWordArr.join('') 

        if (currentWord === word) {
            alert("Congratulations!")
        }

    }
     