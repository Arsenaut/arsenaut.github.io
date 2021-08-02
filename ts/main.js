(()=>{var m=class{constructor(t,i=1){this.items=[];if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=i,m.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let i=t.querySelectorAll("figure");for(let r of i){let o=r.querySelector("figcaption"),n=r.querySelector("img"),l={w:parseInt(n.getAttribute("width")),h:parseInt(n.getAttribute("height")),src:n.src,msrc:n.getAttribute("data-thumb")||n.src,el:r};o&&(l.title=o.innerHTML),this.items.push(l)}}static createGallery(t){let i=t.querySelectorAll("figure"),r=[];for(let o of i)r.length?o.previousElementSibling===r[r.length-1]?r.push(o):r.length&&(m.wrap(r),r=[o]):r=[o];r.length>0&&m.wrap(r)}static wrap(t){let i=document.createElement("div");i.className="gallery";let r=t[0].parentNode,o=t[0];r.insertBefore(i,o);for(let n of t)i.appendChild(n)}open(t){let i=document.querySelector(".pswp"),r=new window.PhotoSwipe(i,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:o=>{let n=this.items[o].el.getElementsByTagName("img")[0],l=window.pageYOffset||document.documentElement.scrollTop,a=n.getBoundingClientRect();return{x:a.left,y:a.top+l,w:a.width}}});r.init()}bindClick(){for(let[t,i]of this.items.entries()){let r=i.el.querySelector("a");r.addEventListener("click",o=>{o.preventDefault(),this.open(t)})}}},h=m,s={};if(localStorage.hasOwnProperty("StackColorsCache"))try{s=JSON.parse(localStorage.getItem("StackColorsCache"))}catch(e){s={}}async function u(e,t,i){if(!e)return await Vibrant.from(i).getPalette();if(!s.hasOwnProperty(e)||s[e].hash!==t){let r=await Vibrant.from(i).getPalette();s[e]={hash:t,Vibrant:{hex:r.Vibrant.hex,rgb:r.Vibrant.rgb,bodyTextColor:r.Vibrant.bodyTextColor},DarkMuted:{hex:r.DarkMuted.hex,rgb:r.DarkMuted.rgb,bodyTextColor:r.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(s))}return s[e]}var P=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},T=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let i=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},k=(e,t=500)=>window.getComputedStyle(e).display==="none"?T(e,t):P(e,t);function p(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{if(document.getElementById("main-menu").classList.contains("transiting"))return;document.body.classList.toggle("show-menu"),k(document.getElementById("main-menu"),300),e.classList.toggle("is-active")})}function C(e,t,i){var r=document.createElement(e);for(let o in t)if(o&&t.hasOwnProperty(o)){let n=t[o];o=="dangerouslySetInnerHTML"?r.innerHTML=n.__html:n===!0?r.setAttribute(o,o):n!==!1&&n!=null&&r.setAttribute(o,n.toString())}for(let o=2;o<arguments.length;o++){let n=arguments[o];n&&r.appendChild(n.nodeType==null?document.createTextNode(n.toString()):n)}return r}var y=C,g=class{constructor(t){this.localStorageKey="StackColorScheme";this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",i=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let i=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(i)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},f=g;var S={init:()=>{p();let e=document.querySelector(".article-content");e&&new h(e);let t=document.querySelector(".article-list--tile");if(t){let i=new IntersectionObserver(async(r,o)=>{r.forEach(n=>{if(!n.isIntersecting)return;o.unobserve(n.target);let l=n.target.querySelectorAll("article.has-image");l.forEach(async a=>{let d=a.querySelector("img"),b=d.src,w=d.getAttribute("data-key"),v=d.getAttribute("data-hash"),E=a.querySelector(".article-details"),c=await u(w,v,b);E.style.background=`
                        linear-gradient(0deg, 
                            rgba(${c.DarkMuted.rgb[0]}, ${c.DarkMuted.rgb[1]}, ${c.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${c.Vibrant.rgb[0]}, ${c.Vibrant.rgb[1]}, ${c.Vibrant.rgb[2]}, 0.75) 100%)`})})});i.observe(t)}new f(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){S.init()},0)});window.Stack=S;window.createElement=y;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
