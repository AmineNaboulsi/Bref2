window.onscroll = () => {
    const ActionBar = document.getElementById("actionbar")

    let scrollPosition = window.scrollY;
    if(scrollPosition===0){
        ActionBar.style.backgroundColor = "transparent"
    }else{
        ActionBar.style.backgroundColor = "#0B0C0E"

    }
  };