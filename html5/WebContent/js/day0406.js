let num;
num = 10;
alert(num);
console.log(num + 10);

for(var i=0; i<5; i++){
	console.log(i);
}
console.log("현재 i의 값: " +i);

num = 50;
console.log(num);
const num2 = 100;
//num2 = 1000;
console.log(num2);


//String[] fruits = {"사과", "바나나"}; 	자바배열
let fruits = ["사과", "바나나"];
for(let i=0; i<fruits.length; i++){
	console.log(fruits[i]);
}
fruits = new Array("사과", "바나나");
for(let i=0; i<fruits.length; i++){
	console.log(fruits[i]);
}
fruits["a"] = "파인애플";	//인덱스 번호를 문자로 사용가능
console.log(fruits["a"]);
console.log(fruits.length);	//문자 인덱스는 개수에 포함되지 않음
fruits[100] = 3.141592;
console.log(fruits[100]);	//다른 자료형도 출력가능
// 인덱스 번호를 원하는 번호로 사용해도 됨
// 자바의 배열처럼 크기가 고정되지 않는다.
console.log(fruits.length);	//문자 인덱스는 개수에 포함되지 않음

// 자바스크립트 배열은 자바의 컬렉션 역할도 한다.
let arr = new Array();
arr.push(10);
arr.push(20);
arr.push(30);

for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}
console.log("팝 사용");
console.log(arr.pop());
console.log(arr.pop());
for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}
console.log("시프트사용");
arr.unshift(100);
for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}





