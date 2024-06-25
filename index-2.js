let ball=1;
let total=0;
let pc=1;
let pc_score=0;
let ball2=1;
//const previous = document.getElementsByClassName("box");
//console.log(previous);
const p = localStorage.getItem("totals");
console.log(p);
const change=()=>{
    console.log(localStorage.getItem("PC"))
    if(localStorage.getItem("PC")=="false" ||localStorage.getItem("PC")==null ){
        console.log("heeeeeeeeeee")
        
            const element=document.getElementsByClassName(`ball-${ball}`)[0];
            const input=document.getElementById("score");
            const value=parseInt(input.value,10);
            if(value>=1 && value<=6){
                element.textContent=value;
                
                let pc=Math.floor(Math.random() * 6) + 1;
                const element_2=document.getElementsByClassName(`ballc-${ball}`)[0];
                element_2.textContent=pc;
                const box=document.getElementsByClassName("box")[0];
                console.log(box)
                if(pc==value){
                      box.textContent=0;
                      total=0;
                }
                else{
                    total+=value;
                    box.textContent=total;
                }
                ball++;
                if(ball>6){
                    setTimeout(()=>{
                       
                        const box_2=document.getElementsByClassName("box-2")[0];
                        box_2.textContent=value;
                        localStorage.setItem("totals", total);
                       
                        window.location.reload();
                        alert("now computer has to bat");
                        localStorage.setItem("PC",true);
                        
                        pc=2;

                        setTimeout(()=>{localStorage.setItem("PC",true);},2000);

                        
                    },2000)
                    
                }
                
            }
            else{
                alert("enter a valid run");
            }
        }
        else{
            const element=document.getElementsByClassName(`ball-${ball2}`)[0];
            const input=document.getElementById("score");
            const value=parseInt(input.value,10);
            if(value>=1 && value<=6){
                element.textContent=value;
                
                let pc=Math.floor(Math.random() * 6) + 1;
                const element_2=document.getElementsByClassName(`ballc-${ball2}`)[0];
                element_2.textContent=pc;
                const box2=document.getElementsByClassName("box-2")[0];
                console.log(box2)
                if(pc==value){
                      box2.textContent=0;
                      pc_score=0;
                }
                else{
                    pc_score+=pc;
                    box2.textContent=pc_score;
                }
                ball2++;
                if(ball2>6){
                    setTimeout(()=>{
                       
                           if(pc_score>parseInt(localStorage.getItem("totals"), 10)){
                                 alert("Computer Won");
                                 localStorage.removeItem("totals");
                           localStorage.removeItem("total");
                           localStorage.removeItem("PC");
                           window.location.reload();

                           }
                           else if(pc_score<parseInt(localStorage.getItem("totals"), 10)){
                                  alert("you have won");
                                  localStorage.removeItem("totals");
                           localStorage.removeItem("total");
                           localStorage.removeItem("PC");
                           window.location.reload();
                           }
                           else{
                            alert("it is a draw");
                            localStorage.removeItem("totals");
                           localStorage.removeItem("total");
                           localStorage.removeItem("PC");
                           window.location.reload();
                           }
                           

                        
                    },2000)
                    
                }
                
            }
            else{
                alert("enter a valid run");
            }
                
        }          

}

document.addEventListener("DOMContentLoaded", function () {
    //alert("You have to Bat First");
   
    const previousTotal = parseInt(localStorage.getItem("totals"), 10);
    if (!isNaN(previousTotal)) {
        const previous = document.querySelector(".box");
        previous.textContent = previousTotal;
    }
});

