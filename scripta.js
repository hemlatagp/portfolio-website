console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebara').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebara').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
else{
    document.querySelector('.ham').style.display = 'none'
    document.querySelector('.cross').style.display = 'inline'

}
 }
)