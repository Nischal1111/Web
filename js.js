let searchbtn = document.querySelector(".search");

document.querySelector("#searchbtn").onclick = () =>{
    searchbtn.classList.toggle("active");
    shoppingcartbtn.classList.remove("active");
    navbar.classList.remove("active");
};

let shoppingcartbtn = document.querySelector(".shoppingcart");

document.querySelector("#shoppingbtn").onclick = () =>{
    shoppingcartbtn.classList.toggle("active");
    searchbtn.classList.remove("active");
    navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menubtn").onclick = () =>{
    navbar.classList.toggle("active");
    searchbtn.classList.remove("active");
    shoppingcartbtn.classList.remove("active");
};

window.onscroll = () =>{
    searchbtn.classList.remove("active");
    shoppingcartbtn.classList.remove("active");
    navbar.classList.remove("active");
}
var swiper = new Swiper(".productslider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".reviewslider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  const login = document.querySelector(".login")
  const loginLink = document.querySelector(".login--link")
  const RegLink = document.querySelector(".register--link")
  const signLink = document.querySelector(".signup--link")

  loginLink.addEventListener("click",()=>{
    login.classList.remove("active");
    
  })
  signLink.addEventListener("click",()=>{
    login.classList.remove("active");
    
  })
  RegLink.addEventListener("click",()=>{
    login.classList.add("active");
  })

  function validate(){
            var username = document.getElementById("uname");
            var password = document.getElementById("pass");

            if(username.value.trim()==""){
                username.style.border = "solid 3px red";
                document.getElementById("labelUser")
                .style.visibility="visible";
                alert("username must be filled");
                return false;
            }else if(password.value.trim()==""){
                alert("password must be filled")
                return false;
            }else(password.value.trim().length<8)
                alert("Password too short");
              return false;
        }

  function contact(e){
    e.preventDefault();
    let user_name=document.getElementById("username").value
    let message =document.getElementById("message").value
    let email = document.getElementById("email").value;

    if (user_name.trim().length<8){
      alert("Valid Username must be filled")
      return false
    }
    if (email.trim().length<8){
      alert("Valid Email must be filled")
      return false
    }
    if (message.trim().length<10){
      alert("Message must be atleast of 10 words.")
      return false
    }
  }