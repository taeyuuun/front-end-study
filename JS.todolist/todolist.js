const btn = document.querySelector(".pull");
const K_div = document.querySelector(".K-div");
const K_input = document.querySelector(".K-input");

btn.addEventListener("click", hello);

function hello(){
    console.log("히히 눌렸다!");
    btn.innerHTML = "안녕하세요";

    const K_Button = document.createElement("button");
    K_Button.classList.add("K-button");
    K_Button.innerText = K_input.value;
    K_div.appendChild(K_Button);

    K_input.value="";
}

