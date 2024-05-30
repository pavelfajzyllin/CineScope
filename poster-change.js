const ACTIVE_POSTER_CLASSNAME = 'poster_on';

const postersNode = Array.from(document.querySelectorAll('.js-poster'));
console.log(postersNode);
const btnPosterLeftNode = document.querySelector('.js-vector-left');
const btnPosterRightNode = document.querySelector('.js-vector-right');
let activeId;

init();

function init() {
    activeId = 0;

    btnPosterLeftNode.addEventListener('click', () => {
        setActivesPosterById(getPrevId());
    });

    btnPosterRightNode.addEventListener('click', () => {
        setActivesPosterById(getNextId());
    });
}

function setActivesPosterById(id) {
    const currentId = activeId;
    activeId = id;

    postersNode[currentId].classList.remove(ACTIVE_POSTER_CLASSNAME);
    postersNode[activeId].classList.add(ACTIVE_POSTER_CLASSNAME);
}

function getPrevId() {
    return activeId === 0 ? postersNode.length - 1 : activeId - 1;
}
function getNextId() {
    return activeId === (postersNode.length - 1) ? 0 : activeId + 1;
}