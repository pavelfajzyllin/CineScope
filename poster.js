const ACTIVE_POSTER_CLASSNAME = 'poster_on';

const postersNode = Array.from(document.querySelectorAll('.js-poster'));
const btnPosterLeftNode = document.querySelector('.js-vector-left');
const btnPosterRightNode = document.querySelector('.js-vector-right');
let activeId;


const setImg = () => {
    postersNode[0].classList.add('poster_on');
}
setImg();

let count = 0;

btnPosterRightNode.addEventListener('click', () => {
    nextPoster();
})

function nextPoster () {
    const max = postersNode.length-1;
    if (count === max) {
        count = 0;
        postersNode[max].classList.remove('poster_on');
        postersNode[count].classList.add('poster_on');

    } else {
        count += 1;
        postersNode[count-1].classList.remove('poster_on');
        postersNode[count].classList.add('poster_on');
        console.log(count)
        

}
}

btnPosterLeftNode.addEventListener('click', () => {
    prewPoster();
})

function prewPoster () {
    const max = postersNode.length-1;
    if (count === 0) {
        count = max;
        postersNode[0].classList.remove('poster_on');
        postersNode[max].classList.add('poster_on');
    } else{
        count -= 1;
        postersNode[count+1].classList.remove('poster_on');
        postersNode[count].classList.add('poster_on');
    }

}