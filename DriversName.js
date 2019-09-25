let hacker1 = 'adrian';
console.log(hacker1);

let hacker2 = prompt("Whats your Name?");
console.log(`The navigators name is ${hacker2}`);

if(hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length) {
    console.log(`${hacker2} has the longest name, it has ${hacker2.length} characters`)
}else if(hacker1.length === hacker2.length){
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}


// Print all the characters of the driver’s name, separated by a space and in capitals.


let hacker1name = ""
for(let i = 0; i< hacker1.length; i++){
    hacker1name += hacker1[i].split('').join(' ') + " ";
    hacker1name = hacker1name.toUpperCase()
}
console.log(hacker1name)

console.log('*******')

function reverseName(str){
    let hacker1nameReverse = "";
    for(let letter of str){
        hacker1nameReverse = letter + hacker1nameReverse;
    }
    return hacker1nameReverse
}

console.log(reverseName(hacker1))

let comparing = []; 
comparing.push(hacker1, hacker2);
console.log(comparing)

comparing.sort()

console.log(comparing)

if(hacker1 === hacker2){
    console.log('What?! You both got the same name?')
}else if(comparing[0] === hacker2){
    console.log('Yo, the navigator goes first definitely')
}else if(comparing[0] === hacker1) {
    console.log('The driver\'s name goes first')
}


let palindrome = prompt("Write something");
 palindrome = palindrome.toLowerCase()
 palindrome = palindrome.replace(/[ ,.!?'"‘”“’]/g, '')
console.log(palindrome)

//************************************ 

let palindromeBack = str => {
    let palindromeReverse = "";
    for(let letter of str){
        palindromeReverse = letter + palindromeReverse;
    }
    return palindromeReverse
}

paliPali = palindromeBack(palindrome)

if(palindrome === paliPali){
    console.log('It is a Palindrome')
}else {
    console.log("It is not a palindrome")
}
//************************************ 


let loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"; 

let wordsCount = loremIpsum.split(' ').length


let count = (countingString, countingWord) => {
    countingString += '';

    if (countingString.length <= 0) 
    {
        return countingString.length + 1;
    }
    countingWord = countingWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return (countingString.match(new RegExp(countingWord, 'gi')) || []).length;
 
}
    console.log(wordsCount)
    console.log(count(loremIpsum, "et"));




