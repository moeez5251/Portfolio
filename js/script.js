// =======================>Theme<=============================================
let theme_icon = document.querySelector('.icon');
theme_icon.addEventListener('click', () => {
   theme_icon.classList.toggle('icon1');
   document.querySelector('body').classList.toggle('dark-theme');
});

// =======================>Navbar buttons events<=============================================

let nav = document.getElementsByClassName('nav');
nav[1].addEventListener('click', () => {
   window.scrollTo(0, 1440);
});
nav[2].addEventListener('click', () => {
   window.scrollTo(0, 600);
});
document.getElementById('btn2').addEventListener('click', () => {
   window.scrollTo(0, 1440);

});
document.getElementById('btn1').addEventListener('click', () => {
   window.scrollTo(0, 3332);

});

// =====================>Animation<================================
var typed = new Typed('.auto-typed', {
   strings: ["WEB-DEVELOPER", "UI/UIX-DESIGNER", "FREELANCER", "SERVER-TESTER", "APP-DEVELOPER", "CONTENT-WRITER", "VIDEO-EDITOR", "PROGRAMMER"],
   typeSpeed: 100,
   backSpeed: 20,
   loop: true
});
var typed1 = new Typed('.auto', {
   strings: ["WEB-DEVELOPER", "UI/UIX-DESIGNER", "FREELANCER", "SERVER-TESTER", "APP-DEVELOPER", "CONTENT-WRITER", "VIDEO-EDITOR", "PROGRAMMER"],
   typeSpeed: 80,
   backSpeed: 80,
   loop: true
});

let cursor=document.getElementsByClassName('typed-cursor');
cursor[1].style.fontSize='24px';
cursor[1].style.fontWeight='bold';

// =====================>Default Window Scroll<================================

window.scrollTo(0, 10);
// =====================>Window event listner<=================================

window.addEventListener('scroll', () => {
   var scroll = window.scrollY;
// =====================>Event Listener for pic animation<=================================
   if (scroll <= 270 || scroll === 0) {

      setTimeout(() => {
         let temp = document.getElementById('Moeez');
         temp.classList.add('pic');
      }, 100);
   }
// =====================>Contact form animation<=================================

   let inputs = document.getElementsByClassName('inputs');
   if (window.scrollY > 2560) {
      document.querySelector('.forms').style.left = '0px';
   };
// =====================>Timeline animation<=================================

   if (window.scrollY > 1810) {
      document.querySelector('.my-skills').style.left = '0px';
   };

});

// =====================>Scroll to top button event<=================================
let scroll_button = document.querySelector('.goto-top');
window.addEventListener('scroll', () => {
   var scr = window.scrollY;

   if (scr >= 400) {
      scroll_button.style.opacity = '1';
      scroll_button.addEventListener('click', () => {
         window.scrollTo(0, 0);
      });
   }
   else {
      scroll_button.style.opacity = '0';

   }

});
// =====================>Event listners for Timeline buttons<=================================
let names = document.querySelectorAll('.names');
let purple_color = document.querySelector('.purple-color');
let time = document.querySelectorAll('.time');
let description=document.querySelectorAll('.description');
names[0].addEventListener('click', () => {
   names[0].style.color = '#a905ed';
   names[1].style.color = 'gray';
   names[2].style.color = 'gray';
   names[3].style.color = 'gray';
   var style = document.createElement('style');
   var newCSS = '.purple-color::before { top: 59px; }';
   style.innerHTML = newCSS;
   document.body.appendChild(style);
   time[0].style.color = '#a905ed';
   time[1].style.color = 'gray';
   time[2].style.color = 'gray';
   time[3].style.color = 'gray';
   description[0].style.opacity='1';
   description[1].style.opacity='0';
   description[2].style.opacity='0';
   description[2].style.opacity='0';
   description[3].style.opacity='0';
});
//Default Click
names[0].click();
//2nd Button
names[1].addEventListener('click', () => {
   names[1].style.color = '#a905ed';
   names[0].style.color = 'gray';
   names[2].style.color = 'gray';
   names[3].style.color = 'gray';
   var style = document.createElement('style');
   var newCSS = '.purple-color::before { top: 139px; }';
   style.innerHTML = newCSS;
   document.body.appendChild(style);
   time[1].style.color = '#a905ed';
   time[0].style.color = 'gray';
   time[2].style.color = 'gray';
   time[3].style.color = 'gray';
   description[1].style.opacity='1';
   description[0].style.opacity='0';
   description[2].style.opacity='0';
   description[3].style.opacity='0';
});
//3rd Button
names[2].addEventListener('click', () => {
   names[2].style.color = '#a905ed';
   names[0].style.color = 'gray';
   names[1].style.color = 'gray';
   names[3].style.color = 'gray';
   var style = document.createElement('style');
   var newCSS = '.purple-color::before { top: 220px; }';
   style.innerHTML = newCSS;
   document.body.appendChild(style);
   time[2].style.color = '#a905ed';
   time[0].style.color = 'gray';
   time[1].style.color = 'gray';
   time[3].style.color = 'gray';
   description[2].style.opacity='1';
   description[1].style.opacity='0';
   description[0].style.opacity='0';
   description[3].style.opacity='0';
});
//4th Button
names[3].addEventListener('click', () => {
   names[3].style.color = '#a905ed';
   names[0].style.color = 'gray';
   names[1].style.color = 'gray';
   names[2].style.color = 'gray';
   var style = document.createElement('style');
   var newCSS = '.purple-color::before { top: 282px; }';
   style.innerHTML = newCSS;
   document.body.appendChild(style);
   time[3].style.color = '#a905ed';
   time[1].style.color = 'gray';
   time[2].style.color = 'gray';
   time[0].style.color = 'gray';
   description[3].style.opacity='1';
   description[1].style.opacity='0';
   description[2].style.opacity='0';
   description[0].style.opacity='0';
});
// =====================>Project landspace images styling<=================================
let image = document.getElementsByClassName('project-image');
image[1].style.width = '40%'
image[3].style.width = '40%'
image[4].style.width = '40%'


// =====================>Contact form submission<=================================

let inputs = document.querySelectorAll('.inputs');
document.querySelector('form').addEventListener('submit', (event) => {
   let name = inputs[0].value;
   let email = inputs[1].value;
   let phone = inputs[2].value;
   let Message = inputs[3].value;
   event.preventDefault();// For Preventing reload on submit
// Mail sending
   emailjs.send("service_5fm08d6", "template_c8sru5i", {
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: Message
   }).then((response) => {
      console.log('SUCCESS', response.status, response.text);
      alert('Message Sent Successfully.')
      inputs[0].value = ""
      inputs[1].value = ""
      inputs[2].value = ""
      inputs[3].value = ""
   }).catch(error => {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again.');
   })

});
// =====================>For Contacting me social Medias Icons styling<=================================

let logos = document.getElementsByClassName('logos');
let names_of_logo = document.getElementsByClassName('name-of-logo');

for (let i = 0; i < 3; i++) {

   logos[i].addEventListener('mouseover', () => {
      names_of_logo[i].style.opacity = '1';
      names_of_logo[i].style.top = '-80px';
   });
   logos[i].addEventListener('mouseleave', () => {
      names_of_logo[i].style.opacity = '0';
      names_of_logo[i].style.top = '-40px';
   });

}
// =====================>HamBurger Menu<=================================

let burger = document.querySelector('.burger');
let options = document.querySelector('.options');
burger.addEventListener('click', () => {
   options.classList.toggle('burger-use');
   burger.classList.toggle('lines-burger');
});