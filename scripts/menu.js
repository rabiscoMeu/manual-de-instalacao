const { default: productManual } = await import("../data/productsManual.json", { assert: { type: "json" } })



/*
* fill the menu list 
* generates the html through template string. 
*/

const menuProductsItens = productManual;

function addFeaturesMenuItems() {
   const menu = document.querySelector('.menu-list');

   productManual.map((el, index) => {
      const menuItens = {
         icon: el.icon_src,
         title: el.icon_title,
         alt: el.description,
         anchor: el.html_url,
      }

      const menuContainer = `
         <li>
            <img 
              src="${menuItens.icon}" 
              alt="${menuItens.alt}" 
              key="${index}"
            >
            <a 
              title="${menuItens.title}" 
              href="#${menuItens.anchor}"
            > 
               ${menuItens.title} 
            </a>
         </li>
      `
      menu.innerHTML += menuContainer;
   })

} addFeaturesMenuItems()



/**
 * open menu modal by click event
 */
 function activeMenu() {
   const openNenu = document.querySelector(".open-menu");
   const closeMenu = document.querySelector(".close-menu")

   const menu = document.querySelector('.menu')
   const itemMenu = document.querySelectorAll('.menu-list li a');

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