
let one = document.getElementsByClassName("clock-item")
let changeTime = document.getElementsByClassName("one")
function clockstart(){
    let AMPM = "";
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();


    if (hrs < 12){
        changeTime[0].innerHTML = "GRAB SOME HEALTY PART"
    }
    else if(hrs > 12 && hrs <= 16){
        changeTime[0].innerHTML = "LET'S HAVE LUNCH" 
    }
    else if (hrs >= 16 && hrs <= 20){
        changeTime[0].innerHTML = "STOP YAWNING, TEA.."
    }
    else{
        changeTime[0].innerHTML = "Good Night Take Care!"
    };
  
    if (hrs >12){
        hrs -= 12
        AMPM = "PM"
    }
    else{
        AMPM = "AM"
    };
// ..................greeting.........
 hrs=hrs<10 ? "0" + hrs : hrs;
 mins=mins<10 ? "0" + mins : mins;
 secs=secs<10 ? "0" + secs : secs;


   
    one[0].innerHTML = `${hrs}`
    one[1].innerHTML = `${mins}`
    one[2].innerHTML = `${secs}`
    one[3].innerHTML = `${AMPM}`
}
// clockstart();

setInterval(() => {
    clockstart();
}, 1000);



let morningTime = document.querySelectorAll('select')
let morningText = document.getElementById('greet')
let morningImg = document.getElementsByClassName('container1')
let morningUpdate  = document.getElementsByClassName('routinetext')


function setalarm(){
    let time = new Date();
    let hrs = time.getHours();
    console.log(morningTime[0]);
    console.log(morningTime[1].value);
    console.log(morningTime[2].value);
    console.log(morningTime[3].value);
    console.log(hrs);

    let indexMorning = morningTime[0].selectedIndex;
    let indexMorning1 = morningTime[1].selectedIndex;
    let indexMorning2 = morningTime[2].selectedIndex;
    let indexMorning3 = morningTime[3].selectedIndex;
    // console.log(indexMorning);
    let item = morningTime[0].options[indexMorning];
    let item1 = morningTime[1].options[indexMorning1];
    let item2 = morningTime[2].options[indexMorning2];
    let item3 = morningTime[3].options[indexMorning3];
    // console.log(item);
    morningUpdate[0].innerHTML = "Wake up Time:"+ item.textContent
    morningUpdate[1].innerHTML = "Lunch Time:"+ item1.textContent
    morningUpdate[2].innerHTML = "Nap Time:"+ item2.textContent
    morningUpdate[3].innerHTML = "Night Time:"+ item3.textContent

    
    if(parseInt(morningTime[0].value) === hrs){
        morningText.innerHTML = "Good Morning!! Wake up!";
        morningImg[0].src = "./component.png"
    }
    else if(parseInt(morningTime[1].value) === hrs){
        morningText.innerHTML = "Good Afternoon!! Have your Diet";
        morningImg[0].src = "./Componentt.png"
    }
    else if(parseInt(morningTime[2].value) === hrs){
        morningText.innerHTML = "Good Evening!! Have Some Coffee"
        morningImg[0].src = "./lunch_image.png"
    }
    else if(parseInt(morningTime[3].value) === hrs){
        morningText.innerHTML = "Good Night!! Sleep well"
        morningImg[0].src = "./goodnight_image.png"
    }

}