import {productManual} from "./data.js"; 

/**
 * open menu modal by click event
 */
 function activeMenu() {
    const openNenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu")
 
    const menu = document.querySelector('.menu')
    const itemMenu = document.querySelectorAll('.menu a');
 
    openNenu.addEventListener('click', () => {
       menu.classList.remove('hide');
       openNenu.style.display = 'none';
    })
 
    closeMenu.addEventListener('click', () => {
       menu.classList.add('hide');
       openNenu.style.display = 'block';
    })
 
    // closes menu when link is clicked
    itemMenu.forEach(item => {
       item.addEventListener('click', () => {
          menu.classList.add('hide');
          openNenu.style.display = 'block';
       })
    })
 
 
 } activeMenu()
 
 
 /*
 * fill the menu list
 */
 
 const menuProductsItens = productManual;
 
 function addFeaturesMenuItems() {
    const menu = document.querySelector('.menu-list');
 
    for (let li of menu.children) {
 
       const menuItens = li.getAttribute('class');
      
       li.children[0].src = menuProductsItens.icon_title.icon_src[menuItens];
       li.children[0].alt = menuProductsItens.icon_title[menuItens];

       li.children[1].textContent = menuProductsItens.icon_title[menuItens];   
       li.children[1].title = menuProductsItens.icon_title[menuItens];
       li.children[1].href = menuProductsItens.html_url[menuItens];   
       
 
    }
 
 } addFeaturesMenuItems()
