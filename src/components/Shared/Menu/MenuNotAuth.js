import React from 'react'
const MenuNotAuth = () => {

  const handleOpen = () =>{
    const element = document.getElementsByClassName("second-menu")[0];
    if(element.style.display == 'none')
      element.style.display = "block";
    else 
    element.style.display = "none";
    
  }

  return (
    <div className ="menu">
        <div className="main_menu">
          <img src="https://cdn-icons-png.flaticon.com/512/660/660376.png" alt="" onClick ={handleOpen}/>
        </div>
       <div className="second-menu">
         asdas
       </div>
    </div>
  )
}

export default MenuNotAuth