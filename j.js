const inital = document.querySelector('.start');
 const guess = document.querySelector('input');
 const btn = document.querySelector('.btn');
 let score = document.querySelector('.score-1');
 score.innerHTML = 0;
 let sc = 0;
 let game = false;
 let newV = "";
 let randomV = "";

 const words = ['mouse', 'done', 'laptop', 'science', 'engineer', 'webdesiginer', 'developer', 'javascript', 'HTML', 'game','society','computer','invention','text','incorrect','window','screen','bottel','education','door','sketch','charger','weather','carrot','tiger','shoes','shocks'];

 const createWords = () => {
     let number = Math.floor(Math.random() * words.length);
     let random = words[number];
     // console.log(random.split(""));
     return random;
 }

 const jumbleWord = (el) => {
     for (let i = el.length - 1; i >= 0; i--) {
         let temp = el[i];
         let j = Math.floor(Math.random() * (i + 1));
         el[i] = el[j];
         el[j] = temp;

     }
     return el.join("");


 }

 btn.addEventListener('click', function () {
     if (!game) {
         game = true;
         inital.style.color = 'yellow';

         btn.textContent = 'Submit';
         guess.classList.toggle('hidden');
         newV = createWords();
         randomV = jumbleWord(newV.split(""));
         console.log(randomV);
         inital.innerHTML = 'Arrange The Word \'' + randomV + '\'';

     } else {

         let inputWord = guess.value;
         if (inputWord === newV) {
             console.log('correct');
             game = false;
             inital.innerHTML = `Awesome! It's correct.\n
                           It is ${newV}`;
             inital.style.color = 'darkviolet';
             sc += 5;
             score.innerHTML = sc;
             guess.classList.toggle('hidden');
             btn.innerHTML = 'Next';
             guess.value = "";

         } else {
             console.log('incorrect');
             inital.innerHTML = `Incorrect Word. '${randomV}'`;
             inital.style.color = 'red';
             btn.innerHTML = 'Try Again';
             guess.value = "";
             guess.classList.toggle('hidden');
         }

     }
 })