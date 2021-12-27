/**
 * Rabisco meu data
 */

 const productManual = {
        
   title: {
      wallhook: "manual de instalação - gancho de parede",
      wallCoatRack: "manual de instalação - cabideiro de parede / porta chave",
      popsicleWallHanger: "manual de instalação - cabideiro de parede picolé",
      doorHandle: "manual de instalação - puxador"      
   },

   html_url: {
      wallhook: "#gan-parede",
      wallCoatRack: "#cab-parede",
      popsicleWallHanger: "#cab-parede-pic",
      doorHandle: "#puxador",
   },

   image: {
      wallhook: "./images/manual/manual-gancho-parede.svg",
      wallCoatRack: "./images/manual/manual-cab-parede.svg",
      popsicleWallHanger: "./images/manual/manual-cab-parede-picole.svg",
      doorHandle: "./images/manual/manual-puxador.svg",
      
      description:{
         wallhook: "manual gancho de parede",
         wallCoatRack: "manual cabideiro de parede",
         popsicleWallHanger: "manual gancho de parede picolé",
         doorHandle: "manual puxador",
      }
   },

   manual_file_path: {
      wallhook: "./images/manual-pdf/manual-gancho-parede.pdf",
      wallCoatRack: "./images/manual-pdf/manual-cab-parede.pdf",
      popsicleWallHanger: "./images/manual-pdf/manual-cab-picole.pdf",
      doorHandle: "./images/manual-pdf/manual-puxador.pdf",
   },
   
   icon_title: {
       wallhook: "gancho de parede",
       wallCoatRack: "cabideiro de parede & porta chave",
       popsicleWallHanger: "cabideiro tipo picolé",
       doorHandle: "puxador",
       
       icon_src: {
          wallhook: "./images/gancho-de-parede.svg",
          wallCoatRack: "./images/cabideiro-de-parede.svg",
          popsicleWallHanger: "./images/cabideiro-de-parede-picole.svg",
          doorHandle: "./images/puxador.svg",
      }
    }
}

const rabiscoMeu = {

   html_url: {
       facebook: "https://www.facebook.com/RabiscoMeuOficial",
       instagram: "https://www.instagram.com/rabiscomeuoficial",
       pinterest: "https://br.pinterest.com/rabiscomeuoficial/",
       rabiscoMeu: "https://rabiscomeu.com.br",
       contact: "https://rabiscomeu.com.br/p/contato",
       allProducts: "https://rabiscomeu.com.br/nossos-produtos",
    },
    
    social_icons: {
       facebook: "fab fa-facebook",
       instagram: "fab fa-instagram",
       pinterest: "fab fa-pinterest",
       rabiscoMeu: "fas fa-globe",
       contact: "fas fa-envelope",
       allProducts: "fas fa-shopping-bag",
    }
 
 }

 export {productManual, rabiscoMeu};