/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": `${searchTerm}`,
        "Results": []
    };

    scannedTextObj.forEach((book) => {
        book.Content.forEach((content) => {
            let regex = new RegExp("\\b" + searchTerm + "\\b");
            if (regex.test(content.Text)) {
                result.Results.push({
                    "ISBN": book.ISBN,
                    "Page": content.Page,
                    "Line": content.Line,
                })
            }
        })
    })
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/*
 Disclaimer: Generative AI was used to come up with book titles, ISBNs, and content. Generative AI was not used for
 any other part of this assessment.
 */
const library = twentyLeaguesIn.concat([
    {
        "Title": "Journey to the Center of the Earth",
        "ISBN": "9780000528533",
        "Content": [
            {"Page": 1, "Line": 1, "Text": "Looking back to all that has occurred to me since that eventful day."},
            {"Page": 2, "Line": 1, "Text": "I am scarcely able to believe in the reality of my adventures."},
            {"Page": 3, "Line": 1, "Text": "They were truly so wonderful that even now I am bewildered when I think of them."},
            {"Page": 4, "Line": 1, "Text": "My uncle was a German, having married my mother's sister, an Englishwoman."},
            {"Page": 5, "Line": 1, "Text": "Being very much attached to his fatherless nephew, he invited me to study under him in his home in the fatherland."}
        ]
    },
    {
        "Title": "Around the World in Eighty Days",
        "ISBN": "9780000528534",
        "Content": [
            {"Page": 1, "Line": 1, "Text": "Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens."},
            {"Page": 2, "Line": 1, "Text": "He was one of the most noticeable members of the Reform Club."},
            {"Page": 3, "Line": 1, "Text": "People said that he resembled Byron—at least that his head was Byronic."},
            {"Page": 4, "Line": 1, "Text": "He was a true Briton, and hoped there were many like him."},
            {"Page": 5, "Line": 1, "Text": "The mansion in Saville Row, though not sumptuous, was exceedingly comfortable."}
        ]
    },
    {
        "Title": "War of the Worlds",
        "ISBN": "9780000528535",
        "Content": [
            {"Page": 1, "Line": 1, "Text": "No one would have believed in the last years of the nineteenth century."},
            {"Page": 2, "Line": 1, "Text": "That this world was being watched keenly and closely by intelligences greater than man's."},
            {"Page": 3, "Line": 1, "Text": "Yet across the gulf of space, minds that are to our minds as ours are to those of the beasts."},
            {"Page": 4, "Line": 1, "Text": "Intellects vast and cool and unsympathetic, regarded this earth with envious eyes."},
            {"Page": 5, "Line": 1, "Text": "And slowly and surely drew their plans against us."}
        ]
    },
    {
        "Title": "The Time Machine",
        "ISBN": "9780000528536",
        "Content": [
            {"Page": 1, "Line": 1, "Text": "The Time Traveller (for so it will be convenient to speak of him)."},
            {"Page": 2, "Line": 1, "Text": "Was expounding a recondite matter to us."},
            {"Page": 3, "Line": 1, "Text": "His grey eyes shone and twinkled, and his usually pale face was flushed and animated."},
            {"Page": 4, "Line": 1, "Text": "The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver."},
            {"Page": 5, "Line": 1, "Text": "Caught the bubbles that flashed and passed in our glasses."}
        ]
    }
]);

// Positive tests.
const positiveTest1 = findSearchTermInBooks("the", library);
const positiveTest1Expected = {
  SearchTerm: 'the',
  Results: [
    { ISBN: '9780000528531', Page: 31, Line: 9 },
    { ISBN: '9780000528533', Page: 2, Line: 1 },
    { ISBN: '9780000528533', Page: 5, Line: 1 },
    { ISBN: '9780000528534', Page: 2, Line: 1 },
    { ISBN: '9780000528535', Page: 1, Line: 1 },
    { ISBN: '9780000528535', Page: 3, Line: 1 },
    { ISBN: '9780000528536', Page: 4, Line: 1 },
    { ISBN: '9780000528536', Page: 5, Line: 1 }
  ]
}
if (JSON.stringify(positiveTest1) === JSON.stringify(positiveTest1Expected)) {
    console.log("PASS: Positive Test 1");
} else {
    console.log("FAIL: Positive Test 1");
}

const positiveTest2 = findSearchTermInBooks("was", library);
const positiveTest2Expected = {
  SearchTerm: 'was',
  Results: [
    { ISBN: '9780000528531', Page: 31, Line: 9 },
    { ISBN: '9780000528533', Page: 4, Line: 1 },
    { ISBN: '9780000528534', Page: 2, Line: 1 },
    { ISBN: '9780000528534', Page: 3, Line: 1 },
    { ISBN: '9780000528534', Page: 4, Line: 1 },
    { ISBN: '9780000528534', Page: 5, Line: 1 },
    { ISBN: '9780000528535', Page: 2, Line: 1 },
    { ISBN: '9780000528536', Page: 3, Line: 1 }
  ]
}
if (JSON.stringify(positiveTest2) === JSON.stringify(positiveTest2Expected)) {
    console.log("PASS: Positive Test 2");
} else {
    console.log("FAIL: Positive Test 2");
}

// Negative tests.
const negativeTest1 = findSearchTermInBooks("nonexistent", library);
const negativeTest1Expected = {
    "SearchTerm": "nonexistent",
    "Results": []
}
if (negativeTest1.Results.length == 0) {
    console.log("PASS: Negative Test 1");
} else {
    console.log("FAIL: Negative Test 1");
}

const negativeTest2 = findSearchTermInBooks("impossible", library);
const negativeTest2Expected = {
    "SearchTerm": "impossible",
    "Results": []
}
if (negativeTest2.Results.length == 0) {
    console.log("PASS: Negative Test 2");
} else {
    console.log("FAIL: Negative Test 2");
}

// Case-sensitive tests.
const caseSensitiveTest1 = findSearchTermInBooks("The", library);
const caseSensitiveTest1Expected = {
  SearchTerm: 'The',
  Results: [
    { ISBN: '9780000528531', Page: 31, Line: 8 },
    { ISBN: '9780000528534', Page: 5, Line: 1 },
    { ISBN: '9780000528536', Page: 1, Line: 1 },
    { ISBN: '9780000528536', Page: 4, Line: 1 }
  ]
}

if (JSON.stringify(caseSensitiveTest1) === JSON.stringify(caseSensitiveTest1Expected)) {
    console.log("PASS: Case Sensitive Test 1");
} else {
    console.log("FAIL: Case Sensitive Test 1");
}

const caseSensitiveTest2 = findSearchTermInBooks("the", library);
const caseSensitiveTest2Expected = {
  SearchTerm: 'the',
  Results: [
    { ISBN: '9780000528531', Page: 31, Line: 9 },
    { ISBN: '9780000528533', Page: 2, Line: 1 },
    { ISBN: '9780000528533', Page: 5, Line: 1 },
    { ISBN: '9780000528534', Page: 2, Line: 1 },
    { ISBN: '9780000528535', Page: 1, Line: 1 },
    { ISBN: '9780000528535', Page: 3, Line: 1 },
    { ISBN: '9780000528536', Page: 4, Line: 1 },
    { ISBN: '9780000528536', Page: 5, Line: 1 }
  ]
}
if (JSON.stringify(caseSensitiveTest2) === JSON.stringify(caseSensitiveTest2Expected)) {
    console.log("PASS: Case Sensitive Test 2");
} else {
    console.log("FAIL: Case Sensitive Test 2");
}