let rootNode = document.getElementById('root');
let buttonIndex = 0;
const maxActionNum = 10;
let itemId = 0;
let tagIndex = 0;
let h1Index = 0;
let addAction = 1;
let dragYloc = 0;


const button = document.getElementById('action-submit');
const addBox = document.getElementById('add-box');
addBox.setAttribute('onclick', 'addNewAction()');

const listItems = document.getElementById('list-items');
listItems.setAttribute('ondrop', 'drop(event)');
listItems.setAttribute('ondragover', 'allowDrop(event)');

const markActionAsDone = (el) => {
  if (el.target.innerHTML === 'check_box_outline_blank') {
    el.target.innerHTML = 'check_box';  
  }
}

let editTask = (el) => {
  let listItem = el.target.parentElement;
  console.log(listItem);
  let span = listItem.querySelector('list-items');
  span.style.display = 'none';
  let containsClass = listItem.classList.contains('editMode');
  let x = span.innerText;
if(containsClass){
  listItem.style.display = 'flex';
  span.innerText = listItem.querySelector('input[type=text]').value;
  listItem.querySelector('input[type=text]').type = 'checkbox';
  span.style.display = 'block';
  listItem.parentNode.querySelector('button.delete').style.display = 'block';
  listItem.querySelector('i.edit-list.material-icons').innerText = 'edit';
} else{
    listItem.querySelector('i.edit-list.material-icons').innerText = 'save';
    listItem.querySelector('input[type=checkbox]').type = 'text';
    listItem.querySelector('input[type=text]').value = x;
    let span = listItem.querySelector('span');
    span.style.display = 'none';
    listItem.parentNode.querySelector('button.delete').style.display = 'none';
  }
  listItem.classList.toggle('editMode');
}

const deleteAction = (el) => {
  el.target.parentElement.remove();
  let warn = document.getElementsByClassName('warning')[tagIndex];
  if (warn) {
    button.setAttribute('disabled', false);
    document.getElementById('action-input').removeAttribute('disabled');
    warn.remove();
  }
}

const allCorrect = () => {
  if (document.getElementById('action-input').value === '') {
    document.getElementById('action-submit').disabled = true;
  } else {
    document.getElementById('action-submit').disabled = false;
  }
}


const listFullWarningMsg = (actionCount) => {
  
  console.log(actionCount, maxActionNum);
  if (actionCount >= maxActionNum) {
  const warningMsgDiv = document.createElement('h6');    
  const warningMsg = 'Maximum item per list are created';
  button.setAttribute('disabled', true);
  document.getElementById('action-input').setAttribute('disabled', true);
  warningMsgDiv.setAttribute('class', 'warning');
  warningMsgDiv.innerHTML = warningMsg;
  document.getElementsByTagName('h1')[h1Index].appendChild(warningMsgDiv);
  }
}

const drag = (ev) => {
  dragYloc = ev.screenY;
  ev.dataTransfer.setData('text', ev.target.id);
}

const allowDrop = (ev) => {
  ev.preventDefault();
}

const drop = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
  const dropContainer = ev.target.closest('#list-items');
  const dropElement = ev.target.closest('.listItems');
  const dropYCord = ev.screenY;
  if (dragYloc > dropYCord) {
    dropContainer.insertBefore(document.getElementById(data), dropElement);
  } else {
    const nextEl = dropElement.nextSibling;
    if (nextEl) {
      dropContainer.insertBefore(document.getElementById(data), nextEl);
    } else {
      dropContainer.appendChild(document.getElementById(data));
    }
  }    
}


const addNewAction = () => {
  const checkBox = document.getElementsByClassName('checkbox');
  let actionInputValue = document.getElementById('action-input').value;
  const editTask = document.getElementsByClassName('edit');
  const binIcon = document.getElementsByClassName('delete');
  const actionCount = checkBox.length;
  if (actionInputValue && actionCount < maxActionNum) {
    const newListItem = document.createElement('div');
    newListItem.setAttribute('class', 'listItems');
    newListItem.setAttribute('id', itemId++);
    newListItem.setAttribute('draggable', 'true');
    newListItem.setAttribute('ondragstart', 'drag(event)');
    newListItem.innerHTML = '<div class="checkbox">' + 
    '<i id="addBox" class="material-icons checkBox">check_box_outline_blank</i>' +
    actionInputValue + '<i class="material-icons edit">edit</i>' +
    '</div>' + '<i class="material-icons delete">delete</i>';
    listItems.appendChild(newListItem); 
    listFullWarningMsg(actionCount + addAction);
    checkBox[actionCount].addEventListener('click', markActionAsDone);  
    editTask[actionCount].addEventListener('click', editTask);
    binIcon[actionCount].addEventListener('click', deleteAction);
  }
}