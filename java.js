let screen = document.getElementById("screen")
let user_input= document.querySelectorAll("button")
let screen_input='';
for(items of user_input){
    items.onclick= function(e){
        let button_text = e.target.innerHTML;
        console.log(button_text);

        if(button_text == 'x'){
             button_text = '*'
            screen_input +=button_text;
            screen.value = screen_input;
        }
        else if(button_text=='C'){
            screen_input="";
            screen.value = "";
        }
        else if(button_text== '='){

            screen.value = eval(screen_input)
            screen_input = screen.value;
            console.log(screen_input)
        }

        else{
            screen_input += button_text;
            screen.value = screen_input;
        }
    }
}