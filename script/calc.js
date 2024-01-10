// DOM 변수 데이터 등록
const user_height = document.querySelector('#height');
const user_weight = document.querySelector('#weight');
const goals = document.querySelector('#goals');
const result_btn = document.querySelector('#result');
console.log(user_height, user_weight, goals, result_btn);
// 목표) 결과보기 버튼을 클릭 했을 때 적정체중과 초과 몸무게 값이 자동 계산되어 출력하기
// 1. 변수 데이터를 등록한다
// 2. 목표 변수에 "적정체중 = (본인신장-100)*0.9" 식을 대입한다.
// 3. 키와 몸무게를 적고 결과보기 버튼 클릭했을 때 키와 몸무게의 데이터 값에 식이 자동 계산되어 팝업창에 메세지가 출력된다.

result_btn.addEventListener('click',function(){
    const target = Number(user_height.value - 100)*0.9;
    alert(`적정 체중은 ${target}kg 이며 ${user_weight.value - target}kg 초과 되셨습니다.`);
    console.log(target)
    console.log(goals.value)
})