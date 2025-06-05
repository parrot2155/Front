//파일 자체가 script 자체이다.

//함수 test 생성
function test(){
    window.alert("외부 작성 방식이다!");
}

window.onload=()=>{ //이름 없는 테스트함수이다~ arrow팡션 함수인데 화살표가 들어가있다.
    alert("윈도우 로딩 후!~!~"); //페이지 로딩 되자마자 바로 뜨게하는법
}

//위 코드와 같다.
// window.onload=function(){
//     alert("윈도우 로딩 후후후후!~");
// }