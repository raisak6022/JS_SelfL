const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector('body')
// console.log(body);

buttons.forEach(function (button) {
    button.addEventListener('click' , function (e) {
        // console.log(e);
        // console.log(e.target);

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'coral':
                body.style.backgroundColor = e.target.id
                break;
            case 'khaki':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
        }
    })
})



  /* type 2 --> byy using if-else */

  /* const buttons = document.querySelectorAll(".button");

// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach(function (button) {
button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey' ) {
        body.style.backgroundColor = "grey"
    }
    else if (e.target.id === 'coral') {
        body.style.backgroundColor = "coral"
    } 
    else if (e.target.id === 'khaki') {
        body.style.backgroundColor = "khaki"
    } 
    else if (e.target.id === 'yellow') {
        body.style.backgroundColor = "yellow"
    } 
})
  
//   console.log(button);
}); */
