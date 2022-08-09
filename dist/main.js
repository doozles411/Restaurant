(()=>{"use strict";function e(e,t){const n=document.createElement("button");return n.classList.add(e),n.textContent=t,n}const t=function(){const e=document.querySelector(".main");e.innerHTML="";const t=function(){const e=document.createElement("div");e.classList.add("description");const t=document.createElement("h1");t.textContent="Zia Teresa";const n=document.createElement("div");n.classList.add("description-text");const a=document.createElement("p");a.textContent="A menu for everyone";const c=document.createElement("p");c.textContent="Offering a la carte, set menus, and bespoke pizzas",n.appendChild(a),n.appendChild(c);const s=document.createElement("h2");return s.textContent="Benvenuto alla famiglia!",e.appendChild(t),e.appendChild(n),e.appendChild(s),e}(),n=function(){const e=document.createElement("div");e.classList.add("bottom-section");const t=document.createElement("div");t.classList.add("address");const n=document.createElement("i");n.classList.add("fa-solid","fa-location-dot","fa-lg");const a=document.createElement("p");a.textContent="Upstairs 115 West 49th St, New York City",t.appendChild(n),t.appendChild(a);const c=document.createElement("div");c.classList.add("hours");const s=document.createElement("i");s.classList.add("fa-solid","fa-clock","fa-lg");const d=document.createElement("div");d.classList.add("hours-text");const o=document.createElement("p");o.textContent="Monday to Wednesday 12:30pm to 9pm";const i=document.createElement("p");i.textContent="Thursday to Saturday 12:30pm to 11pm";const l=document.createElement("p");return l.textContent="Sunday 12pm to 8:30pm",d.appendChild(o),d.appendChild(i),d.appendChild(l),c.appendChild(s),c.appendChild(d),e.appendChild(t),e.appendChild(c),e}();!function(){const e=document.getElementById("active");e&&e.removeAttribute("id"),document.querySelector(".home-link").setAttribute("id","active")}(),e.appendChild(t),e.appendChild(n)},n=function(){const e=document.querySelector(".main");e.innerHTML="";const t=function(){const e=document.createElement("div");return e.classList.add("contact-main"),e.innerHTML='\n        <div class="contact-title">\n            <h2 class="contact-header">Contact Us</h1>\n            <img class="spaghetti" src="../resources/spaghetti.jpeg">\n        </div>\n        <div class="contact-map">\n            <iframe \n                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4455970045587!2d-73.98424128460488!3d40.75999197932671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ff4d04f7c1%3A0x549c9540889c943d!2s115%20W%2049th%20St%2C%20New%20York%2C%20NY%2010019!5e1!3m2!1sen!2sus!4v1660074280277!5m2!1sen!2sus" \n                width="100%" \n                height="450" \n                style="border:0;" \n                allowfullscreen="" \n                loading="lazy" \n                referrerpolicy="no-referrer-when-downgrade">\n            </iframe>\n        </div>\n        <div class="contact-info">\n            <div class="contact-logo">\n                <h1 class="zia-logo">Zia</h1>\n                <h1 class="teresa-logo">Teresa</h1>\n                <img class="original" src="../resources/theOG.jpg">\n            </div>\n            <div class="zia-info">\n                <div class="contact-address">\n                    <i class="fa-solid fa-location-dot fa-lg"></i>\n                    <p>115 West 49th St, New York, NY 10019</p>\n                </div>\n                <div class="contact-hours">\n                    <i class="fa-solid fa-clock fa-lg"></i>\n                    <div class="hours-text">\n                        <p>Monday to Wednesday 12:30pm to 9pm</p>\n                        <p>Thursday to Saturday 12:30pm to 11pm</p>\n                        <p>Sunday 12pm to 8:30pm</p>\n                    </div>\n                </div>\n                <div class="contact-phone">\n                    <i class="fa-solid fa-phone fa-lg"></i>\n                    <p>(212) 759-5942</p>\n                </div>\n            </div>\n        </div>\n        <div class="contact-form">\n            <div class="message-form">\n                <div class="message-title">\n                    <i class="fa-solid fa-envelope fa-sm"></i>\n                    <p>Message Us</p>\n                </div>\n                <form method="post" action="mailto:zia-teresa@mail.com?Subject=Hello">\n                    <div class="input">\n                        <input type="text" required>\n                        <span>Name</span>\n                    </div>\n                    <div class="input">\n                        <input type="email" required>\n                        <span>Email</span>\n                    </div>\n                    <div class="input">\n                        <textarea required></textarea>\n                        <span>Type a message...</span>\n                    </div>\n                    <input type="submit" value="Send">\n                </form>\n            </div>\n            <img class="original-text" src="../resources/ziaTeresa.jpeg">\n        </div>\n    ',e}();!function(){const e=document.getElementById("active");e&&e.removeAttribute("id"),document.querySelector(".contact-link").setAttribute("id","active")}(),e.appendChild(t)};(function(){const t=document.createElement("div");t.classList.add("container");const n=function(){const t=document.createElement("div");t.classList.add("navbar");const n=e("home-link","Home"),a=e("menu-link","Menu"),c=e("contact-link","Contact");return t.appendChild(n),t.appendChild(a),t.appendChild(c),t}();t.appendChild(n);const a=function(){const e=document.createElement("div");return e.classList.add("main"),e}();t.appendChild(a);const c=function(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("p");t.textContent="Zia Teresa © 2022 | All Rights Reserved";const n=document.createElement("a");n.setAttribute("href","https://github.com/doozles411"),n.setAttribute("target","_blank");const a=document.createElement("i");return a.classList.add("fa-brands","fa-github-alt"),n.appendChild(a),t.appendChild(n),e.appendChild(t),e}();t.appendChild(c),document.getElementById("content").appendChild(t)})(),t(),function(){const e=document.querySelector(".home-link"),a=(document.querySelector(".menu-link"),document.querySelector(".contact-link"));e.addEventListener("click",t),a.addEventListener("click",n)}()})();