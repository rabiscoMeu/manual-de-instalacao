
 import {rabiscoMeu} from "./data.js"; 
 
  /*
 * fill the social media list
 */
 
 function addSocialMedia() {
    const socialMedia = document.querySelector('.social-media');
 
    for (let li of socialMedia.children) {
 
       const media = li.getAttribute('class');
 
       li.children[0].href = rabiscoMeu.html_url[media];
       li.children[0].children[0].className = rabiscoMeu.social_icons[media];
       
    }
 
 } addSocialMedia()
 
 
