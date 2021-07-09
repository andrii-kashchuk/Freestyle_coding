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
* you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w
* let quoteSample = "The five boxing wizards jump quickly.";
* let alphabetRegexV2 = /\w/g;
* let result = quoteSample.match(alphabetRegexV2).length;
*
* Match Everything But Letters and Numbers
* \W it is the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]
* let quoteSample = "The five boxing wizards jump quickly.";
* let nonAlphabetRegex = /\W+/g;
* let result = quoteSample.match(nonAlphabetRegex).length;
*
* Match All Numbers
* The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9]
* let movieName = "2001: A Space Odyssey";
* let numRegex = /\d/g;
* let result = movieName.match(numRegex).length;
*
* Match All Non-Numbers
* The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9]
* let movieName = "2001: A Space Odyssey";
* let noNumRegex = /\D/g;
* let result = movieName.match(noNumRegex).length;
*
* Restrict Possible Usernames
* Usernames can only use alpha-numeric characters.
* The only numbers in the username have to be at the end. There can be zero or more of them at the end.
* Username cannot start with the number.
* Username letters can be lowercase and uppercase.
* Usernames have to be at least two characters long. A two-character username can only use alphabet letters as
* characters.
* let username = "JackOfAllTrades";
* let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
* let result = userCheck.test(username);
* Code Explanation
* ^ - start of input
* [a-z] - first character is a letter
* [0-9]{2,0} - ends with two or more numbers
* | - or
* [a-z]+ - has one or more letters next
* \d* - and ends with zero or more numbers
* $ - end of input
* i - ignore case of input
*
* Match Whitespace
* You can also match the whitespace or spaces between letters.
* You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace,
* but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the
* character class [ \r\t\f\n\v]
* let sample = "Whitespace is important in separating words";
* let countWhiteSpace = /\s/g;
* let result = sample.match(countWhiteSpace);
*
* Match Non-Whitespace Characters
* Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage
* return, tab, form feed, and new line characters. You can think of it being similar to the character
* class [^ \r\t\f\n\v]
* let sample = "Whitespace is important in separating words";
* let countNonWhiteSpace = /\S/g;
* let result = sample.match(countNonWhiteSpace);
*
* Specify Upper and Lower Number of Matches
* ou can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are
* used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper
* number of patterns.
* let ohStr = "Ohhh no";
* let ohRegex = /oh{3,6}\sno/i;
* let result = ohRegex.test(ohStr);
*
* Specify Only the Lower Number of Matches
* let haStr = "Hazzzzah";
* let haRegex = /Haz{4,}ah/;
* let result = haRegex.test(haStr);
*
* Specify Exact Number of Matches
* let timStr = "Timmmmber";
* let timRegex = /Tim{4}ber/;
* let result = timRegex.test(timStr);
*
* Check for All or None
* let favWord = "favorite";
* let favRegex = /favou?rite/;
* let result = favRegex.test(favWord);
*
* Positive and Negative Lookahead
* let sampleWord = "astronaut";
* let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
* let result = pwRegex.test(sampleWord);
*
* Check For Mixed Grouping of Characters
* let myString = "Eleanor Roosevelt";
* let myRegex = /(Eleanor|Franklin).*Roosevelt/;
* let result = myRegex.test(myString); // Change this line
*
* Reuse Patterns Using Capture Groups
* let repeatNum = "42 42 42";
* let reRegex = /^(\d+)\s\1\s\1$/;
* let result = reRegex.test(repeatNum);
*
* Use Capture Groups to Search and Replace
* You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first
* the regex pattern you want to search for. The second parameter is the string to replace the match or a function
* to do something.
* let str = "one two three";
* let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
* let replaceText = '$3 $2 $1';
* let result = str.replace(fixRegex, replaceText);
*
* Remove Whitespace from Start and End
* let hello = "   Hello, World!  ";
* let wsRegex = /^\s+|\s+$/g;
* let result = hello.replace(wsRegex, "");
*
* More info at:
* https://regex101.com/
*  */
