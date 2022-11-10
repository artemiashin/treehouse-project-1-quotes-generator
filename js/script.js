/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
{
  quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
  source: 'Martin Fowler'
},
{
  quote: 'The two most powerful warriors are patience and time',
  source: 'Leo Tolstoy',
  citation: 'War and Peace. Book Thirteen: 1812. Chapter XVII'
},
{
  quote: 'A man who dares to waste one hour of life has not discovered the value of life',
  source: 'Charles Darwin'
},
{
  quote: 'Your time is limited, so don\'t waste it living someone else\'s life',
  source: 'Steve Jobs',
  year: '2001'
},
{
  quote: 'The only way to learn a new programming language is by writing programs in it',
  source: 'Dennis Ritchie'
},
{
  quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight',
  source: 'Bill Gates'
},
{
  quote: 'Never trust a computer you can\'t throw out a window',
  source: 'Steve Wozniak'
}
]
 
/* `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  //generate random number from 0 to array length
  let numberRandom = Math.floor(Math.random() * Object.keys(arr).length);
  let quoteResult = arr[numberRandom]; // get random quote from array
  return quoteResult; 
}

/***
 * `printQuote` function
***/

const printQuote = () => {
  
  let quoteForPrint = getRandomQuote(quotes); // get random quote from quotes array
  let sourceForPrint = quoteForPrint.source; // begin constructing variable with quotes source
  
  // then adding citation or year if they are defined
  if (quoteForPrint.citation !== undefined) {
    sourceForPrint += `<span class="citation">${quoteForPrint.citation}</span>`;
  }
  
  if (quoteForPrint.year !== undefined) {
    sourceForPrint += `<span class="year">${quoteForPrint.year}</span>`;
  }
  
  // change html of a page to show qoute and source information
  document.querySelector('.quote').innerHTML = quoteForPrint.quote;
  document.querySelector('.source').innerHTML = sourceForPrint;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);