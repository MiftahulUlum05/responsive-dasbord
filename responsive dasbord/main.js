const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', ()=>{
  sideBar.style.top = '0';
});

menuClose.addEventListener('click', ()=>{
  sideBar.style.top = '-60vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(Element => {
  Element.addEventListener('click', ()=>{
    if(activeItem) {
      activeItem.removeAttribute('id');
    }

    Element.setAttribute('id', 'active');
    activeItem = Element;
  })
})