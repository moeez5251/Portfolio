// =======================>Theme<=============================================
let theme_icon = document.querySelector('.icon');
theme_icon.addEventListener('click', () => {
   theme_icon.classList.toggle('icon1');
   document.querySelector('body').classList.toggle('dark-theme');
});

// =======================>Navbar buttons events<=============================================

let nav = document.getElementsByClassName('nav');
nav[1].addEventListener('click', () => {
   window.scrollTo(0, 1340);
});
nav[2].addEventListener('click', () => {
   window.scrollTo(0, 500);
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

// =====================>Event Listener for pic animation<=================================
function disable(){
   document.querySelector('body').style.overflow='hidden';
}
function enable(){
   document.querySelector('body').style.overflow='';
}
disable();
window.addEventListener('load',()=>{
   setTimeout(() => {
      document.querySelector('body').removeChild(document.getElementsByClassName('loader')[0]);
      document.getElementsByClassName('Hey')[1].classList.remove('hello');
      document.getElementsByClassName('auto-typed ')[0].classList.remove('auto-typed-animation');
      document.getElementsByClassName('btns ')[0].classList.remove('btns-animation');
      document.getElementsByClassName('name ')[0].classList.remove('name-animate');
      enable();
   }, 2000);
   setTimeout(() => {
      let temp = document.getElementById('Moeez');
      temp.classList.add('pic');
   }, 2500);
});
window.onload=()=>{
window.scrollTo(0,0);
};
// =====================>Window event listner<=================================

window.addEventListener('scroll', () => {
  
// =====================>Contact form animation<=================================

   let inputs = document.getElementsByClassName('inputs');
   if (window.scrollY > 2500) {
      document.querySelector('.forms').style.left = '0px';
   }
// =====================>Timeline animation<=================================

   if (window.scrollY > 1600) {
      document.querySelector('.my-skills').style.left = '-50px';
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
let description=document.querySelector('.description');
names[0].addEventListener('click', () => {
   names[0].style.color = '#a905ed';
   names[1].style.color = 'gray';
   names[2].style.color = 'gray';
   names[3].style.color = 'gray';
   purple_color.style.top='-45%'
   description.innerHTML=`<span class="quoted-text">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
   &nbsp;&nbsp; "Hypertext Markup Language" </span>is a cornerstone of web
development and plays a crucial role in my timeline as a web developer.I can create interactive
website skeletone with HTML. 
<p class="time">2015-2022</p>
`
});
//Default Click
names[0].click();
//2nd Button
names[1].addEventListener('click', () => {
   names[1].style.color = '#a905ed';
   names[0].style.color = 'gray';
   names[2].style.color = 'gray';
   names[3].style.color = 'gray';
   purple_color.style.top='-30%'
   description.innerHTML=`<span class="quoted-text">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp; "Cascading Style Sheets" </span> is an essential component
of modern web design and a critical component of my web development timeline. I'm specialize in
crafting complex layouts or developing custom animations.
<p class="time">2016-2024</p>
`
});
//3rd Button
names[2].addEventListener('click', () => {
   names[2].style.color = '#a905ed';
   names[0].style.color = 'gray';
   names[1].style.color = 'gray';
   names[3].style.color = 'gray';
   purple_color.style.top='-17%'
   description.innerHTML=`<span class="quoted-text">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
   &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; "JavaScript" </span>JavaScript
(JS) is my superpower in the world of web development. With its
magic, I conjure up captivating animations, seamless transitions, and interactive elements that
elevate user experiences from ordinary to extraordinary.
<p class="time">2018-2025</p>
`
});
//4th Button
names[3].addEventListener('click', () => {
   names[3].style.color = '#a905ed';
   names[0].style.color = 'gray';
   names[1].style.color = 'gray';
   names[2].style.color = 'gray';
   purple_color.style.top='-12px'
  description.innerHTML=  `<span class="quoted-text">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;"
  Node JS"</span>Node.js is my go-to for server-side magic in web development. With its
event-driven architecture and non-blocking I/O, Node.js empowers me to build lightning-fast,
scalable web applications that handle thousands of concurrent connections with ease.
<p class="time">2018-2024</p>
`
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

// =====================>Media Query Styles<=================================

//For 930 px
const media_query_930 = window.matchMedia('(max-width:930px)');
function media_930(event) {
      if(event.matches){
        window.addEventListener('scroll',scroll_handler);
}
else{
   document.querySelector('.my-skills').style.left = '';
        document.querySelector('.forms').style.left = '';
        scroll_button.style.opacity = '';
         window.removeEventListener('load',scroll_handler);
}
   }
   function scroll_handler(){
      if (window.scrollY > 1094) {
         document.querySelector('.my-skills').style.left = '-160px';
      };
   if (window.scrollY > 2093) {
      document.querySelector('.forms').style.left = '0px';
   }
   if (window.scrollY>= 120) {
      scroll_button.style.opacity = '1';
      scroll_button.addEventListener('click', () => {
         window.scrollTo(0, 0);
      }
   );
   }
   else {
      scroll_button.style.opacity = '0';

   }
   }
media_930(media_query_930);
media_query_930.addEventListener('change', media_930);

//for 835px
const media_query_835 = window.matchMedia('(max-width:835px)');

function media_835(event) {
      if (event.matches) {
            window.addEventListener('scroll',scroll_handler_835);
      }
      else{
         window.removeEventListener('scroll',scroll_handler_835);
         document.querySelector('.my-skills').style.left = '';
         document.querySelector('.forms').style.left = '';


      }
   
}
function scroll_handler_835(){
      if (window.scrollY>1000) {
         document.querySelector('.my-skills').style.left = '-200px';
         
      }
      if (window.scrollY > 1976) {
         document.querySelector('.forms').style.left = '0px';
      }
}
media_835(media_query_835);
media_query_835.addEventListener('change',media_835);
// for 710 px
const media_query_710 = window.matchMedia('(max-width:710px)');

function media_710(event) {
      if (event.matches) {
            window.addEventListener('scroll',scroll_handler_710);
      }
      else{
         window.removeEventListener('scroll',scroll_handler_710);
         document.querySelector('.my-skills').style.left = '';
         document.querySelector('.forms').style.left = '';


      }
   
}
function scroll_handler_710(){
      if (window.scrollY>1460) {
         document.querySelector('.my-skills').style.left = '-240px';
         
      }
      if (window.scrollY > 3200) {
         document.querySelector('.forms').style.left = '0px';
      }
      nav[1].addEventListener('click',()=>{
            window.scrollTo(0,2647);
      });
}
media_710(media_query_710);
media_query_710.addEventListener('change',media_710);
//For 570px
const media_query_570 = window.matchMedia('(max-width:570px)');
function media_570(event) {
   if (event.matches) {
      names[0].addEventListener('click',()=>{
         purple_color.style.top='-49%';
         
      });
      names[0].click();
     names[1].addEventListener('click',()=>{
      purple_color.style.top='-35%';
     });
     names[2].addEventListener('click',()=>{
      purple_color.style.top='-20%';
     });
     names[3].addEventListener('click',()=>{
      purple_color.style.top='-8%';
     });
     window.addEventListener('scroll',scroll_handler_570);

   }
   else{
      purple_color.style.top='';


   }

}
function scroll_handler_570(){
   if (window.scrollY>2200) {
      document.querySelector('.my-skills').style.left = '-240px';
      
   }
   if (window.scrollY > 3200) {
      document.querySelector('.forms').style.left = '0px';
   }
   nav[1].addEventListener('click',()=>{
         window.scrollTo(0,2647);
   });
}
media_570(media_query_570);
media_query_570.addEventListener('change',media_570);
