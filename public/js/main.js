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





// YENI MOVZU - XUSUSI OLARAQ SIZDEN SORUSULACAQ




document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelector("#menuTabs")
    // console.log(tabs)
    const cards = document.querySelectorAll(".pizza-card")

    // querySelectorAll NodeList qaytarir vs getElementsByClassName HTMLCollection 
// NodeList qaytardigi coxluqda massive aid olan metodlari istifade ede bilirem. for, forEach, for of, map, filter, find
    // true ve ya false = 1
    //true + true = true
    // true + false = true (|| ve ya  or)
    if(!tabs ||  cards.length === 0) return;

    // function expression izah ele
    const setActiveTab = (activeBtn) => {
        const allBtns = document.querySelectorAll(".tab-btn")
        // harada cemlik varsa orada [] var. Harada [] varsa, onu oxutmaq ucun for ve ya onun toremeleri (forEach, map)
        // HOC Higher ORder Function
        // callback
        allBtns.forEach((btn)=> {
            const isActive = btn === activeBtn //is varsa bunun iki cavabi var ya true, ya da false
            // DOMa aid olan metodlardir
            btn.classList.toggle("active-selection", isActive)
// true ya da false "true" "false"
            btn.setAttribute("aria-selected", String(isActive))

        })
    }
// meat, vegetarian
    const applyFilter = (filter) => {
        cards.forEach(card => {
            // string metodlarindadir. Arashdirin string metodlarini ve massiv method (pop, push)
            // RegEx regular expression duzernli ifade
            // const emailQaydasi = /^\s $/

            // mushroom sea  => ["mushroom","sea"]

           
            const cats = (card.dataset.category || "").toLowerCase().split(/\s+/)
            const show = filter === "all" || cats.includes(filter)

            card.classList.toggle("hidden", !show)
        })
    }

    tabs.addEventListener("click", (e)=> {
        const btn = e.target.closest(".tab-btn")
        if(!btn) return;

        const filter = (btn.dataset.filter || "all").toLowerCase()

        setActiveTab(btn)
        applyFilter(filter)
    })


   
})

