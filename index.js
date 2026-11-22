const btnSubmit= document.getElementById("btnSubmit")
const perInfo=document.getElementById("per-info")
const formInput=document.getElementById("forminput")
const btnViewLess=document.getElementById("btnViewLess")

const checkEmail= ()=>{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email= document.getElementById("inpEmail").value
    const validEmail= regex.test(email)
    if (validEmail) {
        // alert("đúng địa chỉ Email") 
        perInfo.classList.remove("hide")
        formInput.classList.add("hide")
        
        
        
    }else {
        alert("sai địa chỉ Email")
    }

}
btnSubmit.addEventListener("click",checkEmail)


// ẩn hiện nút button experience
const btnViewMore= document.getElementById("btnViewMore")
const experience= document.getElementById("experience")
const contentExperience= document.getElementById("contentExperience")
let toggle =true //toggle = true => Viewmore >< false => Viewless 

const showButton= ()=>{
    if (toggle===true){
        btnViewMore.classList.remove("hide")
        
    } 
//     btnViewMore.classList.add("show")
}
const hiddenButton= ()=>{
    
    btnViewMore.classList.add("hide")
} 
const showContentExperience= ()=>{
    toggle = false
    contentExperience.classList.remove("hide")
    btnViewMore.classList.add("hide")
    btnViewLess.classList.remove("hide")
}
const hideContentExperience= ()=>{
    toggle = true
    contentExperience.classList.add("hide")
    btnViewMore.classList.remove("hide")
    btnViewLess.classList.add("hide")
}
experience.addEventListener("mouseenter",showButton)
experience.addEventListener("mouseleave",hiddenButton)
btnViewMore.addEventListener("click",showContentExperience)
btnViewLess.addEventListener("click",hideContentExperience)

// ẩn hiện nút button hobby
const btnViewMoreHobby= document.getElementById("btnViewMoreHobby")
const hobby= document.getElementById("hobby")
const contentHobby= document.getElementById("contentHobby")
let toggleHobby =true //toggle = true => Viewmore >< false => Viewless
const btnViewLessHobby=document.getElementById("btnViewLessHobby") 

const showButtonHobby= ()=>{
    if (toggleHobby===true){
        btnViewMoreHobby.classList.remove("hide")
        
    } 
//     btnViewMoreHobby.classList.add("show")
}
const hiddenButtonHobby= ()=>{
    
    btnViewMoreHobby.classList.add("hide")
} 
const showContentHobby= ()=>{
    toggleHobby = false
    contentHobby.classList.remove("hide")
    btnViewMoreHobby.classList.add("hide")
    btnViewLessHobby.classList.remove("hide")
}
const hideContentHobby= ()=>{
    toggleHobby = true
    contentHobby.classList.add("hide")
    btnViewMoreHobby.classList.remove("hide")
    btnViewLessHobby.classList.add("hide")
}
hobby.addEventListener("mouseenter",showButtonHobby)
hobby.addEventListener("mouseleave",hiddenButtonHobby)
btnViewMoreHobby.addEventListener("click",showContentHobby)
btnViewLessHobby.addEventListener("click",hideContentHobby)

// ẩn hiện nút button hocvan
const btnViewMoreHocVan= document.getElementById("btnViewMoreHocVan")
const hocvan= document.getElementById("hocvan")
const contentHocVan= document.getElementById("contentHocVan")
let toggleHocVan =true //toggle = true => Viewmore >< false => Viewless
const btnViewLessHocVan=document.getElementById("btnViewLessHocVan") 

const showButtonHocVan= ()=>{
    if (toggleHobby===true){
        btnViewMoreHocVan.classList.remove("hide")
        
    } 
//     btnViewMoreHocVan.classList.add("show")
}
const hiddenButtonHocVan= ()=>{
    
    btnViewMoreHocVan.classList.add("hide")
} 
const showContentHocVan= ()=>{
    toggleHocVan = false
    contentHocVan.classList.remove("hide")
    btnViewMoreHocVan.classList.add("hide")
    btnViewLessHocVan.classList.remove("hide")
}
const hideContentHocVan= ()=>{
    toggleHocVan = true
    contentHocVan.classList.add("hide")
    btnViewMoreHocVan.classList.remove("hide")
    btnViewLessHocVan.classList.add("hide")
}
hocvan.addEventListener("mouseenter",showButtonHocVan)
hocvan.addEventListener("mouseleave",hiddenButtonHocVan)
btnViewMoreHocVan.addEventListener("click",showContentHocVan)
btnViewLessHocVan.addEventListener("click",hideContentHocVan)

// ẩn hiện nút button language
const btnViewMoreLanguage= document.getElementById("btnViewMoreLanguage")
const language= document.getElementById("language")
const contentLanguage= document.getElementById("contentLanguage")
let toggleLanguage =true //toggle = true => Viewmore >< false => Viewless
const btnViewLessLanguage=document.getElementById("btnViewLessLanguage") 

const showButtonLanguage= ()=>{
    if (toggleLanguage===true){
        btnViewMoreLanguage.classList.remove("hide")
        
    } 
//     btnViewMoreLanguage.classList.add("show")
}
const hiddenButtonLanguage= ()=>{
    
    btnViewMoreLanguage.classList.add("hide")
} 
const showContentLanguage= ()=>{
    toggleLanguage = false
    contentLanguage.classList.remove("hide")
    btnViewMoreLanguage.classList.add("hide")
    btnViewLessLanguage.classList.remove("hide")
}
const hideContentLanguage= ()=>{
    toggleLanguage = true
    contentLanguage.classList.add("hide")
    btnViewMoreLanguage.classList.remove("hide")
    btnViewLessLanguage.classList.add("hide")
}
language.addEventListener("mouseenter",showButtonLanguage)
language.addEventListener("mouseleave",hiddenButtonLanguage)
btnViewMoreLanguage.addEventListener("click",showContentLanguage)
btnViewLessLanguage.addEventListener("click",hideContentLanguage)

// ẩn hiện nút button excercise
const btnViewMoreExcercise= document.getElementById("btnViewMoreExcercise")
const excercise= document.getElementById("excercise")
const contentExcercise= document.getElementById("contentExcercise")
let toggleExcercise =true //toggle = true => Viewmore >< false => Viewless
const btnViewLessExcercise=document.getElementById("btnViewLessExcercise") 

const showButtonExcercise= ()=>{
    if (toggleExcercise===true){
        btnViewMoreExcercise.classList.remove("hide")
        
    } 
//     btnViewMoreExcercise.classList.add("show")
}
const hiddenButtonExcercise= ()=>{
    
    btnViewMoreExcercise.classList.add("hide")
} 
const showContentExcercise= ()=>{
    toggleExcercise = false
    contentExcercise.classList.remove("hide")
    btnViewMoreExcercise.classList.add("hide")
    btnViewLessExcercise.classList.remove("hide")
}
const hideContentExcercise= ()=>{
    toggleExcercise = true
    contentExcercise.classList.add("hide")
    btnViewMoreExcercise.classList.remove("hide")
    btnViewLessExcercise.classList.add("hide")
}
excercise.addEventListener("mouseenter",showButtonExcercise)
excercise.addEventListener("mouseleave",hiddenButtonExcercise)
btnViewMoreExcercise.addEventListener("click",showContentExcercise)
btnViewLessExcercise.addEventListener("click",hideContentExcercise)

// ẩn hiện nút button skills
const btnViewMoreSkills= document.getElementById("btnViewMoreSkills") 
const skills= document.getElementById("skills")
const contentSkills= document.getElementById("contentSkills")
let toggleSkills =true //toggle = true => Viewmore >< false => Viewless
const btnViewLessSkills=document.getElementById("btnViewLessSkills") 

const showButtonSkills= ()=>{
    if (toggleSkills===true){
        btnViewMoreSkills.classList.remove("hide")
        
    } 
//     btnViewMoreSkills.classList.add("show")
}
const hiddenButtonSkills= ()=>{
    
    btnViewMoreSkills.classList.add("hide")
} 
const showContentSkills= ()=>{
    toggleSkills = false
    contentSkills.classList.remove("hide")
    btnViewMoreSkills.classList.add("hide")
    btnViewLessSkills.classList.remove("hide")
}
const hideContentSkills= ()=>{
    toggleSkills = true
    contentSkills.classList.add("hide")
    btnViewMoreSkills.classList.remove("hide")
    btnViewLessSkills.classList.add("hide")
}
skills.addEventListener("mouseenter",showButtonSkills)
skills.addEventListener("mouseleave",hiddenButtonSkills)
btnViewMoreSkills.addEventListener("click",showContentSkills)
btnViewLessSkills.addEventListener("click",hideContentSkills)






