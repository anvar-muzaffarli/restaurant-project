// universal selector 
const watchVideoBtn = document.querySelector("#watch-video-btn")
const closeModalBtn = document.querySelector(".modal-close")

// Function expression, ox funksiya (arashdir: ox funksiya ile regular funksiya arasidnaki ferq (sintaksis))
const linklereActiveClassiElaveEt = () => {
    const navLinks = document.querySelector(".navigation-links")
   if(!navLinks) return;

   const linkler = navLinks.querySelectorAll("a")
//    nodeList vs HTMLCollection
// querySelectorAll - NodeList massivlere aid olan butun metodlari calishdira bilersen
// []
// getElementsByClassName - HTMLCollection massivlere aid olan metodlarla calisa bilmirsen- Bu intervyu sualidir ->
// for forEach
    // Higher ORder Function (HOC), Callback
    linkler.forEach(function(birLink){
        birLink.addEventListener("click", function(e){
            e.preventDefault()
            linkler.forEach(birLink => birLink.classList.remove("activelink"))
            birLink.classList.add("activelink")
            

        })
    })

}

document.addEventListener("DOMContentLoaded", linklereActiveClassiElaveEt) //undefined


watchVideoBtn.addEventListener("click", function(){
   document.querySelector(".watch-pizza-modal").classList.add("w-[100%]")
})

closeModalBtn.addEventListener("click", ()=> {
    document.querySelector(".watch-pizza-modal").classList.remove("w-[100%]")
} )



