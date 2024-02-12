// <===================== concept code =====================================>
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
// let ramdom = getRandomArbitrary(1, 11);

// console.log(ramdom);

// // Game's mechanism

// for(let move = 1; move <4 ; move++) {
//     let user = parseInt(prompt("Input a Number Between 1 and 10!"));
//     console.log(user);
//     if(user < ramdom) {
//             console.log('Answe is Bigger then Your Number!');
//         } else if (user === ramdom) {
//             console.log('You Win!');
//             break;
//         } else {
//             console.log('Answe is smaller then Your Number!');
//         }
// }
// // console.log("you lost!")
// <===========================================================================>



// Add Event Listener
document.querySelector('#btn-1').addEventListener('click',() => getValue(1));
document.querySelector('#btn-2').addEventListener('click',() => getValue(2));
document.querySelector('#btn-3').addEventListener('click',() => getValue(3));
document.querySelector('#btn-4').addEventListener('click',() => getValue(4));
document.querySelector('#btn-5').addEventListener('click',() => getValue(5));
document.querySelector('#btn-6').addEventListener('click',() => getValue(6));
document.querySelector('#btn-7').addEventListener('click',() => getValue(7));
document.querySelector('#btn-8').addEventListener('click',() => getValue(8));
document.querySelector('#btn-9').addEventListener('click',() => getValue(9));
document.querySelector('#btn-10').addEventListener('click',() => getValue(10));
document.querySelector('.restart-btn').addEventListener('click', restart);


// document.querySelectorAll('.btn-target').forEach(item => 
//       item.setAttribute('disabled','') 
//   );






// // Game's mechanism
// // Random VAlue generator and counter
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let ramdom = getRandomArbitrary(1, 11);
let count = 0;
// console.log(ramdom);// to check 

// // Game's mechanism

function getValue(value) {

    count += 1;
    console.log(count)
    document.querySelector('.show_number').setAttribute('src',`images/${value}.png`);
    let user = parseInt(value);
    if (count <4){
        if(user < ramdom) {
              if(count === 3){
                    addAttributs_for_lose();
                    you_lose();
                    stopGame();
              } else {
                    hint_is_small();
              }
        } else if (user === ramdom) {
                    addAttributs_for_win();
                    you_win();
                    stopGame();
        } else  {
              if(count === 3){
                    addAttributs_for_lose ()
                    you_lose();
                    stopGame();
              } else {
                    hint_is_big();
              }
        }
            
    } else {
            return undefined;
    }

}
// // Game Rules

function stopGame() {
    document.querySelectorAll('.btn-target').forEach(item => 
      item.setAttribute('disabled','') 
  );
}

function restart() {
    window.location.reload();
}

function addAttributs_for_lose () {
    document.querySelector('.show_result').parentElement.className =`display_result`;
    document.querySelector('.show_result').className ='show_result ruselt_image animate__animated animate__flash';
    document.querySelector('.show_number').setAttribute('style',`display:none;`);
}

function addAttributs_for_win () {
    document.querySelector('.show_result').parentElement.className =`display_result`;
    document.querySelector('.show_result').className ='show_result ruselt_image animate__animated animate__shakeY';
    document.querySelector('.show_number').setAttribute('style',`display:none;`);
}

function you_win() {
  document.querySelector('.show_result').setAttribute('src',`images/you_win.png`);
  
}

function you_lose() {
  document.querySelector('.show_result').setAttribute('src',`images/you_lose.png`);
}

function hint_is_small(){
      document.querySelector('.show_result').setAttribute('src',`images/is_small.png`)
}

function hint_is_big() {
  document.querySelector('.show_result').setAttribute('src',`images/is_big.png`)
}