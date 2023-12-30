//menu
let MenuBtnE1= document.getElementById("menu-btn")
let MenuBtnE2= false
let MenuIdE1= document.getElementById("menu_id")

MenuBtnE1.addEventListener("click",()=>{
    if(MenuBtnE2){
         MenuIdE1.style.display="none" 
       // MenuIdE1.classList.remove("menu_id_hidden")
         MenuBtnE2= false        
    }
    else{
       MenuIdE1.style.display="block"
       // MenuIdE1.classList.add("menu_id_hidden")
        MenuBtnE2= true
    }

})
//menu_close_btn
let MenuCloseBtnE1 = document.getElementById("menu_close_btn")

MenuCloseBtnE1.addEventListener("click",()=>
{
    MenuIdE1.style.display="none" 
  // MenuIdE1.classList.remove("menu_id_hidden")
    MenuBtnE2= false 

})
//***********Tutorial********** */
const Nested =document.getElementById("nested_container_id")
let TutorialE1= document.getElementById("tutorial")
const nestedCloseId =document.getElementById("nested_close_id")

TutorialE1.addEventListener("click",()=>{
 // TutorialE1.style.backgroundColor= "rgb(40, 42, 53)";
  //TutorialE1.style.color="white";
  Nested.classList.toggle("nested_nav_hidden")
 // nestedCloseId.classList.toggle("nested_close_id")

})
/*********course fee********** */
document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("home").style.width = "100%";
  document.getElementById("newPage").style.display = "none";
  document.getElementById("total-fee").style.display = "none";
  
});
let coursesData = [];
    let totalFee = 0;
      function addCourse(courseName, fee) {
      document.getElementById("home").style.width = "75%";
      document.getElementById("newPage").style.display = "block";
      document.getElementById("total-fee").style.display = "block";
      const index = coursesData.findIndex((course) => course.courseName === courseName);
      if (index == -1) {
      coursesData.push({ courseName, fee });
      totalFee += fee;
      updateCourseList();
      updateTotalFee();
    }
  }
    function updateCourseList() {
      const coursesElement = document.getElementById('courses');
      coursesElement.innerHTML = '';
      coursesData.forEach((course) => {
      const listItem = document.createElement('li');
      listItem.innerText = `${course.courseName} - Rs.${course.fee} `;
      coursesElement.appendChild(listItem);
    });
  }
    function updateTotalFee() {
      const totalFeeElement = document.getElementById('total-fee');
      totalFeeElement.textContent = `Total Fee: Rs.${totalFee}`;
      if(totalFee==0){
document.getElementById("newPage").style.display = "none";
document.getElementById("home").style.width = "100%";
document.getElementById("total-fee").style.display = "none";
      }
    }
      function removeCourse(courseName, fee) {
      const index = coursesData.findIndex((course) => course.courseName === courseName);
      if (index !== -1) {
        coursesData.splice(index, 1);
        totalFee -= fee;
        updateCourseList();
        updateTotalFee();
      }
    }

    function applyMediaQuery() {
      const contentDiv = document.getElementById('newPage');
  
      if (window.matchMedia("(min-width: 550px)").matches) {
           contentDiv.style.display = "none";
          document.getElementById("home").style.width = "100%";
          document.getElementById("total-fee").style.display = "none";
                                 }
                                }        
      window.addEventListener('load', applyMediaQuery);
window.addEventListener('resize', applyMediaQuery);