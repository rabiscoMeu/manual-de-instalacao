
/*
* fill the social media list
* generates the html through template strings.
*/

function addSocialMedia() {

   const socialMedia = document.querySelector('.social-media');

   const dataObject = 'https://rabiscomeu.github.io/manual-de-instalacao/data/socialData.json';

   fetch(dataObject)
      .then(response => response.json())
      .then(data => {
         
         data.map((el, index) => {
            const profile = {
               title: el.title,
               url: el.url_profiles,
               icon: el.icons,
            }

            const socialMediaContainer = `
            <li class="${profile.title}" key="${index}">
               <a 
                 href="${profile.url}"
                 title="${profile.title}"
                 rel="external"
               >
                 <i class="${profile.icon}"></i>
               </a>
            </li>
         `
            socialMedia.innerHTML += socialMediaContainer;
         })
      })

} addSocialMedia();
