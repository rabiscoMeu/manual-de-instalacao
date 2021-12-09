
/*
* fill the manual list  
*/
import {productManual} from "./data.js"; 

function fillTheManualList() {

   const manual = document.querySelector('.manual');

   for (let li of manual.children) {

      const manualItens = li.getAttribute('class');
      li.children[0].textContent = productManual.title[manualItens]
      li.children[1].src = productManual.image[manualItens];  
      li.children[1].alt = productManual.image.description[manualItens];     
      li.children[2].href = productManual.manual_file_path[manualItens];
      li.children[2].download = productManual.title[manualItens];     
   }

} fillTheManualList();
