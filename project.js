



function generatePin(){
    var random = Math.random()*10000;
    var pin = (random +'').split('.')[0];
    if(pin.length==4){
        return pin;
    }
    else{
        return generatePin();
    }
}

// display pin

function throughPin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = generatePin();
    
}

// calculator button

const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click',function(event){
    const digit = event.target.innerText;

    if(isNaN(digit)){
        if(digit === 'C')
        {
            const typedInput = document.getElementById('typedPin');
        typedInput.value = '';
        }
    }
    else {
        const typedInput = document.getElementById('typedPin');
        typedInput.value = typedInput.value + digit;
        
    }
})

// verified pin

function typeMatching()
{
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typedPin').value;

    if ( pin === typedPin){
 const correctPin = document.getElementById('correct');
 correctPin.style.display = 'block';

//  const correctPin = document.getElementById('incorrect');
//  correctPin.style.display = 'none';
    }
    else {
         // const correctPin = document.getElementById('correct');
        // correctPin.style.display = 'none';
        
        const correctPin = document.getElementById('incorrect');
        correctPin.style.display = 'block';

       
    }
}

function displayMatchResult(correctStatus, incorrectStatus){
    const correctPin = document.getElementById('correct');
    correctPin.style.display = 'correctStatus';
   
    const correctPin = document.getElementById('incorrect');
    correctPin.style.display = 'incorrectStatus';
}