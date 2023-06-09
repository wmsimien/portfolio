// create variables
const heroHeading = document.querySelector('#hero-heading');
const heroAuthor = document.querySelector('#hero-author');
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const githubTicTacToeBtn = document.querySelector('#github-tictactoe');
const TicTacToeLiveBtn = document.querySelector('#tictactoe-live');
const galaxayAPIBtn = document.querySelector('#github-galaxy');
const wayfarerBtn =document.querySelector('#github-wayfarer');
const p2pBtn_client =document.querySelector('#github-p2p_client');
const p2pBtn_api =document.querySelector('#github-p2p_api');

// track active nav link
let activeLink = 0;
// display appropriate section of page
links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            // remove and add active attribute accordingly
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            // give delay
            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
                console.log(sections[i])
            }, 1000);
        }
    })
})

const createProjectBtn = (text, value, eleBtn) => {
    const anchorEl = document.createElement('a');
    anchorEl.textContent = text;
    const hrefEl = document.createAttribute('href');
    hrefEl.value = value;
    const blankEl = document.createAttribute('blank');
    blankEl.value = '_blank';
    anchorEl.setAttributeNode(hrefEl);
    anchorEl.setAttributeNode(blankEl);
    eleBtn.appendChild(anchorEl);
}

// create projects info
const createProjectLinks = () => {
    // project 1 - GitHub and Live Buttons
    createProjectBtn('github', 'https://github.com/wmsimien/TicTacToe', githubTicTacToeBtn);
    createProjectBtn('live', 'https://wmsimien.github.io/TicTacToe/', TicTacToeLiveBtn);
    // project 2 - GitHub button only
    createProjectBtn('github', 'https://github.com/wmsimien/AudioGalaxy-stream-APIs', galaxayAPIBtn);
    // project 3 - GitHub button only
    createProjectBtn('github', 'https://github.com/wmsimien/wayfarer', wayfarerBtn);
    // project 4 (Capstone) - GitHub button only
    createProjectBtn('github-api', 'https://github.com/wmsimien/p2p-api', p2pBtn_api);
    createProjectBtn('github-client', 'https://github.com/wmsimien/p2p-application', p2pBtn_client);
}

// call function to create the project links, etc.
createProjectLinks();

// array of inspirational quotes
const inspireQuotes = [
    { quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 
      author:'― Mahatma Gandhi'
    },
    { quote: 'Smooth seas do not make skillful sailors.', 
      author:'― African Proverb'
    },
    { quote: 'Tell me and I forget, teach me and I may remember, involve me and I learn.', 
      author:'― Benjamin Franklin'
    },
];

let currentQuote = 0;
const runQuotes = () => {
    if (currentQuote < inspireQuotes.length) {
        heroHeading.textContent = inspireQuotes[currentQuote].quote;
        heroAuthor.textContent = inspireQuotes[currentQuote].author;
        currentQuote++;
    } else {
        currentQuote = 0;
    }
};
setInterval(runQuotes, 5000);
// runQuotes();
