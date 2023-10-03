
function textCaseFormatter(input) {
    // Splitting the input into sentences using periods so that we get each sentence to stand alone.
    const sentences = input.split('. ');
  
    // Processing each sentence on its own.
    const formattedSentences = sentences.map((sentence) => {
      // Splitting the sentence into words using spaces as the delimiter
      const words = sentence.split(' ');
  
      // Processing each word in the sentence 
      const formattedWords = words.map((word, index) => {
        // Capitalizing the first letter of the word and make the rest lowercase
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word.toLowerCase();
        }
      });
  
      // Joining the formatted words back into a sentence using a space
      return formattedWords.join(' ');
    });
  
    // Join the formatted sentences back into a string and add periods
    const formattedString = formattedSentences.join('. ');
  
    return formattedString;
}

  
const inputString = "hello. This is a sample SENTENCE. ANOTHER sentence here.";
const formattedResult = textCaseFormatter(inputString);
console.log(formattedResult);

module.exports = textCaseFormatter

