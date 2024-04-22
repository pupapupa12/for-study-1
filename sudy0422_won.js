let num = 1;
// 'num'이라는 변수를 let으로 선언
// 'num'에 10이라는 수를 할당한다

console.log(num);

const OddNum = (num) => {
    let res;
    if(num===0){
        // res = "0";
        console.log("0");
    }else if(num%2===1){
        //res = "홀수";
        console.log("홀수");
    }else {
            // 2로 나눴을 때 나머지가 0
                console.log("짝수");
    }
    return res;
};

OddNum(num);


const Gugudan = (num) => {
    for(let i=1; i<10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }

}

Gugudan(num);

// 함수 작성하면 꼭 함수 실행해줘야됨


const a = [1,2,3,4,5];

let res = 0;
for(let i=0; i<a.length; i++){
    res = res + a[i];
    // =>같은 의미: res += a[i];
}

console.log(res);

const obj = {
    name: "이성원",
    age: 27,
};

console.log(obj.name)
console.log(obj.age)




