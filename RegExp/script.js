/* Using the Test Method */
let myString = "Hello my name is Andrey!";

let regExp = /Hello/;

/* JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. */

let result = regExp.test(myString);
console.log(result);

function checkRegExp() {
    if (result === true) {
        console.log(`String "myString" is contains: ${regExp}`);
    } else {
        console.log(`String "myString" is not contains: ${regExp}`);
    }
}

checkRegExp(myString);

/* Match a Literal String with Different Possibilities
* let regExp = /Hello|privet|is|other/;
*
* Ignore Case While Matching
* let regExp = /freeCodeCamp/i;
*
* Extract Matches
* You can also extract the actual matches you found with the .match() method.
* let extractStr = "Extract the word 'coding' from this string.";
* let codingRegex = /coding/;
* let result = extractStr.match(codingRegex);
*
* Find More Than the First Match
* let twinkleStar = "Twinkle, twinkle, little star";
* let starRegex = /twinkle/ig;
* let result = twinkleStar.match(starRegex);
*
* Match Anything with Wildcard Period
* For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
* let exampleStr = "Let's have fun with regular expressions!";
* let unRegex = /.un/;
* let result = unRegex.test(exampleStr);
*
* Match Single Character with Multiple Possibilities
* let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
* let vowelRegex = /[aeiou]/gi;
* let result = quoteSample.match(vowelRegex);
*
* Match Letters of the Alphabet
* let quoteSample = "The quick brown fox jumps over the lazy dog.";
* let alphabetRegex = /[a-z]/gi;
* let result = quoteSample.match(alphabetRegex);
*
* Match Numbers and Letters of the Alphabet
* let quoteSample = "Blueberry 3.141592653s are delicious.";
* let myRegex = /[h-s2-6]/ig;
* let result = quoteSample.match(myRegex);
*
* Match Single Characters Not Specified
* let quoteSample = "3 blind mice.";
* let myRegex = /[^0-9aeiou]/gi;
* let result = quoteSample.match(myRegex);
*
* Match Characters that Occur One or More Times
* let difficultSpelling = "Mississippi";
* let myRegex = /s+/g;
* let result = difficultSpelling.match(myRegex);
*/
// Match Characters that Occur Zero or More Times
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
/*
* Find Characters with Lazy Matching
* You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t,
* ends with i, and has some letters in between.
* Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string
* possible to fit the pattern.
* However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex
* of /t[a-z]*?i/ returns ["ti"].
* let text = "<h1>Winter is coming</h1>";
* let myRegex = /<.h*?1>/;
* let result = text.match(myRegex);
*
* Match Beginning String Patterns
* let rickyAndCal = "Cal and Ricky both like racing.";
* let calRegex = /^Cal/;
* let result = calRegex.test(rickyAndCal);
*
* Match Ending String Patterns
* You can search the end of strings using the dollar sign character $ at the end of the regex.
* let caboose = "The last car on a train is the caboose";
* let lastRegex = /caboose$/;
* let result = lastRegex.test(caboose);
*
* Match All Letters and Numbers
* 
*
*  */
