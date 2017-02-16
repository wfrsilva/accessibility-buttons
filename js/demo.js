var accessibilityButtons=function(t){"use strict";function e(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}function a(){return function(){var t=this;e(s,t.getAttribute("id"))?(s.classList.remove(t.getAttribute("id")),"accessibility-font"===t.getAttribute("id")?(t.innerHTML=n.font.nameButtonIncrease,t.setAttribute("aria-label",n.font.ariaLabelButtonIncrease),localStorage.removeItem("accessibility_font")):(t.innerHTML=n.contrast.nameButtonAdd,t.setAttribute("aria-label",n.contrast.ariaLabelButtonAdd),localStorage.removeItem("accessibility_contrast"))):(s.classList.add(t.getAttribute("id")),"accessibility-font"===t.getAttribute("id")?(d||localStorage.setItem("accessibility_font",!0),t.innerHTML=n.font.nameButtonDecrease,t.setAttribute("aria-label",n.font.ariaLabelButtonDecrease)):(m||localStorage.setItem("accessibility_contrast",!0),t.innerHTML=n.contrast.nameButtonRemove,t.setAttribute("aria-label",n.contrast.ariaLabelButtonRemove)))}}var n={font:{nameButtonIncrease:"+A",ariaLabelButtonIncrease:"Increase Font",nameButtonDecrease:"-A",ariaLabelButtonDecrease:"Decrease Font"},contrast:{nameButtonAdd:"Add Contrast",ariaLabelButtonAdd:"Add Contrast",nameButtonRemove:"Remove Contrast",ariaLabelButtonRemove:"Remove Contrast"}};if(t)for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];for(var r in o)o.hasOwnProperty(r)&&(n[i][r]=o[r])}var s=document.body,c=document.getElementById("accessibility-font"),l=document.getElementById("accessibility-contrast"),u=document.getElementsByClassName("js-acessibility"),d=localStorage.accessibility_font,m=localStorage.accessibility_contrast;d&&c?(s.classList.add("accessibility-font"),c.innerHTML=n.font.nameButtonDecrease,c.setAttribute("aria-label",n.font.ariaLabelButtonDecrease)):c&&(c.innerHTML=n.font.nameButtonIncrease,c.setAttribute("aria-label",n.font.ariaLabelButtonIncrease)),m&&l?(s.classList.add("accessibility-contrast"),l.innerHTML=n.contrast.nameButtonRemove,l.setAttribute("aria-label",n.contrast.ariaLabelButtonRemove)):l&&(l.innerHTML=n.contrast.nameButtonAdd,l.setAttribute("aria-label",n.contrast.ariaLabelButtonAdd));for(var b=0;b<u.length;b++)u[b].addEventListener("click",a())},ready=function(t){"use strict";"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)};ready(function(){"use strict";accessibilityButtons({font:{nameButtonIncrease:"Click me and things will be great",nameButtonDecrease:"Click me and things will turn to normal size"},contrast:{nameButtonAdd:"Click me and things will be darken",nameButtonRemove:"Click me and things will be clean again"}}),document.getElementById("year").innerHTML=(new Date).getFullYear()}),function(t,e,a,n,i,o,r){t.GoogleAnalyticsObject=i,t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].l=1*new Date,o=e.createElement(a),r=e.getElementsByTagName(a)[0],o.async=1,o.src=n,r.parentNode.insertBefore(o,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-32351360-4","auto"),ga("send","pageview");