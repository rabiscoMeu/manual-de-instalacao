
/*
* fill the manual list  .
* generates the html through template strings.
*/

const { default: productManual } = await import("../data/productsManual.json", { assert: { type: "json" } })

function fillTheManualList() {

   let manual = document.querySelector('.manual');
   
   productManual.map((el, index) => {
      const manualItens = {
          title: el.title,
          image: el.image,
          alt: el.description,
          file: el.manual_file_path,
          anchor: el.html_url,
      }
      
     const manualContainer = `
         <li id="${manualItens.anchor}" key="${index}">
            <h2>${manualItens.title}</h2>
            <img src="${manualItens.image}" alt="${manualItens.alt}">
            <a 
             class="btn" 
             role="button" 
             href="${manualItens.file}" 
             download"${manualItens.title}" 
             target="_blank" 
            >
               <i class="fas fa-file-download"></i>
               download
            </a>
         </li>
      `
      manual.innerHTML += manualContainer;
   })

} fillTheManualList();