
/*
* fill the manual list  .
* generates the html through template strings.
*/

function fillTheManualList() {

   let manual = document.querySelector('.manual');

   const dataObject = 'https://rabiscomeu.github.io/manual-de-instalacao/data/productsManual.json';

   fetch(dataObject)
      .then(response => response.json())
      .then(data => {

         data.map((el, index) => {
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
                 title="baixar - ${manualItens.title}" 
               >
                  <i class="fas fa-file-download"></i>
                  download
               </a>
         </li>
      `
            manual.innerHTML += manualContainer;
         })
      });

} fillTheManualList();
