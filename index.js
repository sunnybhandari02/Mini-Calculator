let screen = document.getElementById('screen');
buttons =   document.querySelectorAll('button');
let screenValue = '';

buttons.forEach( item => {
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        console.log("Button Text is ", buttonText);
        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value += buttonText;
        }
        else if(buttonText == 'AC')
        {   
            screenValue = "";
            screen.value = "";
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
})