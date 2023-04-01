// create variables
// const inspireEl = document.querySelectorAll('#inspire h2');
// console.log(inspireEl[0]);
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const githubTicTacToeBtn = document.querySelector('#github-tictactoe');
const TicTacToeLiveBtn = document.querySelector('#tictactoe-live');

// track active link
let activeLink = 0;

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

// const hrefEl = document.createAttribute('href');
// const blankEl = document.createAttribute('blank');
const createProjectLinks = () => {
    // project 1
    const anchorEl = document.createElement('a');
    anchorEl.textContent = 'github';
    const hrefEl = document.createAttribute('href');
    hrefEl.value = 'https://github.com/wmsimien/TicTacToe';
    const blankEl = document.createAttribute('blank');
    blankEl.value = '_blank';
    anchorEl.setAttributeNode(hrefEl);
    anchorEl.setAttributeNode(blankEl);
    githubTicTacToeBtn.appendChild(anchorEl);
    console.log(githubTicTacToeBtn);
}

createProjectLinks();

// const goToGitHubProjcet = (e) => {
//     e.preventDefault();
//     console.log(e.target.id);
//     switch(e.target.id) {
//         case 'github-tictactoe':
         
//             const hrefEl = document.createAttribute('href');
//             hrefEl.value = 'https://github.com/wmsimien/TicTacToe';
//             const blankEl = document.createAttribute('blank');
//             blankEl.value = '_blank';
//             githubTicTacToeBtn.setAttributeNode(hrefEl);
//             githubTicTacToeBtn.setAttributeNode(blankEl);
//             break;
//         default:
//             break;
//     }

// }



// listeners for project buttons
// githubTicTacToeBtn.addEventListener('click', console.log('clicked'));
// array of inspirational quotes
// const inspireQuotes = [
//     { quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 
//       author:'― Mahatma Gandhi'
//     },
//     { quote: 'Smooth seas do not make skillful sailors.', 
//       author:'― African Proverb'
//     },
//     { quote: 'Tell me and I forget, teach me and I may remember, involve me and I learn.', 
//       author:'― Benjamin Franklin'
//     },
// ];

// const runQuotes = () => {
//     for (let i = 0; i < inspireQuotes.length; i++) {
//         // inspireEl[0].textContent = `${inspireQuotes[i].quote}`;
//         console.log(inspireQuotes[i].quote);
//     }
    // inspireQuotes.forEach(quote => {
        // console.log(`${quote.quote}`);
            // console.log(`${quote.author}`);
        // inspireEl[0].textContent = '';
        // inspireEl[0].textContent = `${quote.quote}`;
        // setInterval(runQuotes, 2000);
        // inspireEl[0].textContent = '';
    // });
// }
// setInterval(runQuotes, 2000);
// runQuotes();