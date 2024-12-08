
let min_value = document.querySelector("#min_id");
let max_value = document.querySelector("#max-id");
let win_btn = document.querySelector("#get_winner");
let display_result = document.querySelector("#display_result");
let modal_content = document.querySelector(".modal_content");


win_btn.addEventListener("click",()=>{
    let min_v = parseFloat(min_value.value);
    let max_v = parseInt(max_value.value);
    if(min_v && max_v){
        let result = Math.floor(Math.random() * (max_v - min_v) ) + min_v;
        modal_content.innerHTML = `
        <img src="./images/prize.png" alt="">
        <h1 class="congra-head">Congratulation</h1>
        <h1 class="display_result">The winner is: ${result}</h1>
        `;
    }
    else{
        modal_content.innerHTML = `
        <img src="./images/warning.png" height="60" weight="60" alt="">
        <h1 class="congra-head" style="color:red;">Error!</h1>
        <h1 class="display_result" style="color:red; font-size: 15px;" >Please enter min and max value</h1>
        `;
    }
});