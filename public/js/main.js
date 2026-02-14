// universal selector 
const watchVideoBtn = document.querySelector("#watch-video-btn")
const closeModalBtn = document.querySelector(".modal-close")


// pizzalar ucun yerin secilmesi
const pizzalarDiviMost = document.querySelector(".most-pizzalar")

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


document.addEventListener("DOMContentLoaded", pizzalariBackenddenGetir)

// TDZ 

// axios


async function pizzalariBackenddenGetir() {
    const unvan = "public/pizzalar.json"
    

    try {
        // web api promise fetch callback hell
        // axios
        const komputerdenGelenCavab = await fetch(unvan)
       
        const pizzalar = await komputerdenGelenCavab.json()
        

        for(let i=0; i<pizzalar.length; i++) {
            // innerText , textContent
            pizzalarDiviMost.innerHTML  += `
            
<div class="pizza   flex flex-col items-center justify-center py-[40px]">
<img src=${pizzalar[i].pizza_img} alt="" class="w-[159px]">
<h2 class="text-[25px] mt-[40px]">${pizzalar[i].pizzanin_adi}</h2>
<article class="text-[#a3a3a3] py-[20px] text-center">${pizzalar[i].pizzanin_terkibi}</article>
<div class="size flex gap-[20px]">
    <button class="w-[40px] h-[40px] rounded-[50%] border-2 border-gray-300">22</button>
    <button class="w-[40px] h-[40px] rounded-[50%] border-2 border-gray-300 active-selection">28</button>
    <button class="w-[40px] h-[40px] rounded-[50%] border-2 border-gray-300">33</button>
</div>

<!-- bu kod tailwindcss den elave edilib -->
<button command="show-modal" commandfor="dialog"
    class="rounded-md bg-orange-400 px-2.5 py-1.5 my-[20px] text-sm font-semibold text-gray-900 ">+
    Ingridients</button>

<el-dialog>
    <dialog id="dialog" aria-labelledby="dialog-title"
        class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
        <el-dialog-backdrop
            class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

        <div tabindex="0"
            class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
            <el-dialog-panel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div
                            class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" data-slot="icon" aria-hidden="true"
                                class="size-6 text-red-600">
                                <path
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 id="dialog-title" class="text-base font-semibold text-gray-900">
                                Ingredientler elave et</h3>

                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" command="close" commandfor="dialog"
                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Elave
                        et</button>
                </div>
            </el-dialog-panel>
        </div>
    </dialog>
</el-dialog>


<div class="price-add-section flex gap-[20px] py-[20px]">
    <div class="price">
       ${pizzalar[i].pizzanin_qiymeti} <sup>$</sup>
    </div>

    <div class="decrease-increase-section flex gap-[13px]">
        <button class="decrease w-[23px] h-[23px] rounded-[50%] border-2 border-gray-300 flex justify-center items-center">-</button>
        <h1 class="count">1</h1>
        <button class="increase  w-[23px] h-[23px] rounded-[50%] border-2 border-gray-300 flex justify-center items-center active-selection">+</button>
    </div>
</div>

<button class="btn-order-now-gradient w-[194px] h-[45px]">Order now</button>

</div>
            `
        }


    }


    catch(xeta) {
        console.log(xeta)
    }
}






//Turqut Sahsuvarli vs Tuqrut vs Sahsuvarli




// "" '' `` (template litreal)


// JSON - JavaScipt Object Notation