
 /*
 * fill the social media list
 * generates the html through template strings.
 */

 const { default: socialData } = await import("../data/socialData.json", { assert: { type: "json" } })
 
 
function addSocialMedia() {
    const socialMedia = document.querySelector('.social-media');
 
    socialData.map((el , index ) => {
      const profile = {
         title:  el.title,
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
  
} addSocialMedia();
 
 
