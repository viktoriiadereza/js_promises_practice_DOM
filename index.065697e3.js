document.addEventListener("DOMContentLoaded",function(){var e=function(e,n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add(n),t.textContent=e,document.body.appendChild(t)};new Promise(function(e,n){document.addEventListener("click",function(n){0===n.button&&e("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}).then(function(n){return e(n,"success")}).catch(function(n){return e(n.message,"error")}),new Promise(function(e){document.addEventListener("click",function(n){0===n.button&&e("Second promise was resolved")},{once:!0}),document.addEventListener("contextmenu",function(n){n.preventDefault(),2===n.button&&e("Second promise was resolved")})}).then(function(n){return e(n,"success")}),new Promise(function(e){var n=!1,t=!1;document.addEventListener("click",function(o){0===o.button&&(n=!0),n&&t&&e("Third promise was resolved")}),document.addEventListener("contextmenu",function(o){o.preventDefault(),2===o.button&&(t=!0),n&&t&&e("Third promise was resolved")})}).then(function(n){return e(n,"success")})});
//# sourceMappingURL=index.065697e3.js.map
