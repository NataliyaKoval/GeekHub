const main = document.querySelector('[data-main]');
const inners = document.querySelectorAll('[data-inner]')
const deleteButton = document.querySelectorAll('[data-delete]');
let offsetX;
let offsetY;

for(let i = 0; i < inners.length; i++){
    inners[i].addEventListener('click', showOrHideDeleteButton);
  }
  
for(let i = 0; i < inners.length; i++){
    inners[i].addEventListener('click', beDraggable);
}

function showOrHideDeleteButton(event) {
    if (event.detail === 1) {
        event.currentTarget.lastChild.classList.remove('hide');
    } else if (event.detail === 2) {event.currentTarget.lastChild.classList.add('hide');
    }
}

for(let i = 0; i < deleteButton.length; i++){
    deleteButton[i].addEventListener('click', deleteElement);
}

function deleteElement(event) {
    event.currentTarget.parentElement.classList.add('hide');
}

function beDraggable(event) {
    if (event.detail === 1) {
        event.currentTarget.setAttribute('draggable', true);
    } else if (event.detail === 2) {event.currentTarget.setAttribute('draggable', false);
    }
}

main.addEventListener('dragover', function(event) {
    event.preventDefault();
})

for(let i = 0; i < inners.length; i++){
    inners[i].addEventListener('dragstart', getStartCoordinates);
}

function getStartCoordinates(event) {
    event.currentTarget.offsetX = event.offsetX;
    event.currentTarget.offsetY = event.offsetY;
}

for(let i = 0; i < inners.length; i++){
    inners[i].addEventListener('drag', move);
}

function move(event) {
    let limits = {
        top: main.offsetTop,
        right: main.offsetWidth + main.offsetLeft - event.currentTarget.offsetWidth,
        bottom: main.offsetHeight + main.offsetTop - event.currentTarget.offsetHeight,
        left: main.offsetLeft
      };

    let newLocation = {
      x: null,
      y: null
    };

    if (event.pageX < limits.left) {
      newLocation.x = limits.left;
    } else if (event.pageX > limits.right) {
      newLocation.x = limits.right;
    } else if (event.pageX > limits.left && event.pageX < limits.right) {
      newLocation.x = event.pageX - event.currentTarget.offsetX;
    }
    
    if (event.pageY > limits.bottom) {
      newLocation.y = limits.bottom;
    } else if (event.pageY > limits.top) {
      newLocation.y = event.pageY - event.currentTarget.offsetY;
    }
    
    event.currentTarget.style.left = newLocation.x + 'px';
    event.currentTarget.style.top = newLocation.y + 'px';
  }

