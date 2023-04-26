const endDate="06 April 2024 12:00:01 AM";

// Taking input from user
// const endDate=prompt("Enter a date (DD MM YY)"); 

document.getElementById("end-date").innerText=endDate;
const inputs=document.getElementsByTagName("input");

const clock=()=>{
    const end=new Date(endDate);
    const now =new Date();
    const diff=(end-now)/1000;  //convert milliseconds into seconds 
    if(diff > 0)
    {
    // convert into days
    inputs[0].value=Math.floor(diff/3600/24); 
    // convert into hours
    inputs[1].value=Math.floor(diff/3600)%24; 
    // convert into minutes
    inputs[2].value=Math.floor(diff/60)%60; 
    // convert into seconds
    inputs[3].value=Math.floor(diff%60);
    }
    else{
         return
        }
}

setInterval(()=>{
    clock()
},1000)

