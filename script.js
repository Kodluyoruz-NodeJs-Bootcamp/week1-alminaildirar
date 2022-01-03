const draggableListItems = document.querySelectorAll('.draggable-list li')
const endMessage = document.getElementById('endMessage');


let selectedId;
let dropTargetId;
let matchingCounter = 0;

addEventListeners();

function dragStart(){
    selectedId = this.id;
}

function dragEnter(){
    this.classList.add('over');

}

function dragLeave(){
    this.classList.remove('over');
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(){
    dropTargetId = this.id;
    if(checkForMatch(selectedId, dropTargetId)){
        document.getElementById(selectedId).style.display = "none";
        document.getElementById(dropTargetId).style.display = "none";
        matchingCounter++;
    }

    if(matchingCounter === 6){
        endMessage.style.display = 'block';
    }
   
    this.classList.remove('over');
}

function playAgain(){
    
    matchingCounter = 0;
    endMessage.style.display ="none"
    draggableListItems.forEach(item=> {
        document.getElementById(item.id).style.display ="block"

    })
}

function checkForMatch(selected, dropTarget){
    switch(selected){
        case 'q1':
            return dropTarget === 'a1' ? true : false;

        case 'q2':
            return dropTarget === 'a2' ? true : false;

        case 'q3':
            return dropTarget === 'a3' ? true : false;

        case 'q4':
            return dropTarget === 'a4' ? true : false;

        case 'q5':
            return dropTarget === 'a5' ? true : false;

        case 'q6':
            return dropTarget === 'a6' ? true : false;
        
        default:
            return false;
    }
}



function addEventListeners(){
    draggableListItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}








    
