let rdArray =[]

while(rdArray.length<3){
 let num = Math.floor(Math.random()*9 +1)
  if (rdArray.indexOf(num)==-1){
    rdArray.push(num)
  // document.write(num)
}
 
}

// document.write("<br>")
// 랜덤으로 뽑은 배열을 문자열로 만들기
let com_num = rdArray.join("")
document.write("컴퓨터가 뽑은 숫자:",com_num)

// 정답확인==사용자입력

let btn = document.querySelector("button")

let appendTemplete = "<br><input type='number' min='1' max='9' class='target'>"+"<input type='number' min='1' max='9' class='target'>"+"<input type='number' min='1' max='9' class='target'>"

btn.addEventListener("click",function() {
  // input에 적힌 숫자 한개씩 확인

  // let inputs = document.querySelectorAll("input")
  let inputs = document.querySelectorAll(".target")
  
  for (let i=0; i < inputs.length;i++){
    // 스트라이크 검사
    if (inputs[i].value == rdArray[i]){
      inputs[i].style.backgroundColor = "green"
    }
    // else if (rdArray.includes(Number(inputs[i].value) == True))
    else if(rdArray.indexOf(parseInt(inputs[i].value)) != -1) 
      {
      inputs[i].style.backgroundColor = "yellow"
    }
    else {
      inputs[i].style.backgroundColor = "gray" 
    }

    inputs[i].classList.remove("target")
  }
 document.querySelector("#container").insertAdjacentHTML("beforeend",appendTemplete)
})

// document.write("<br>")


// 아래쪽에 입력박스 3개 만들기
// let new_input = document.createElement("input")
// document.querySelector("#container").appendChild(new_input)

