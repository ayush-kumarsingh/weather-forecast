// for weather animation of line
var box = document.querySelector('.list_item1');
box.addEventListener('mouseenter', () => {
  var line = document.querySelector('.hr_line1');
  line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
  var line = document.querySelector('.hr_line1');
  line.classList.remove('w-full');
})

//for technical animation of line
var box = document.querySelector('.list_item2');
box.addEventListener('mouseenter', () => {
  var line = document.querySelector('.hr_line2');
  line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
  var line = document.querySelector('.hr_line2');
  line.classList.remove('w-full');
})

//for about animation of line
var box = document.querySelector('.list_item3');
box.addEventListener('mouseenter', () => {
  var line = document.querySelector('.hr_line3');
  line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
  var line = document.querySelector('.hr_line3');
  line.classList.remove('w-full');
})

//for contact us animation of line
var box = document.querySelector('.list_item4');
box.addEventListener('mouseenter', () => {
  var line = document.querySelector('.hr_line4');
  line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
  var line = document.querySelector('.hr_line4');
  line.classList.remove('w-full');
})


//opening and closing the mailbox
Close_Mailbox.addEventListener('click', () => {
  Mailbox.style.display = 'none';
})

var openlink = document.querySelector('a[href="#mailbox"]');
openlink.addEventListener('click', () => {
  Mailbox.style.display = 'block';
})




// Make the DIV element draggable:
dragElement(document.getElementById("Mailbox"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById('MailNav')) {
    // if present, the header is where you move the DIV from:
    document.getElementById('MailNav').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
