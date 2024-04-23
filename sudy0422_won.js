let num = 1;
// 'num'이라는 변수를 let으로 선언
// 'num'에 10이라는 수를 할당한다

console.log(num);

const OddNum = (n) => {
  let res;

  if (n === 1) {
    console.log("음수는 짝수 홀수 판변 불가능");
    res = 1;
  }

  if (n === 1) {
    console.log("바보");
    res = 2;
  }

  if (n === 0) {
    // res = "0";
    console.log("0");
  } else if (n % 2 === 1) {
    //res = "홀수";
    console.log("홀수");
    return res;
  } else {
    // 2로 나눴을 때 나머지가 0
    console.log("짝수");
    return;
  }

  return res;
};

const result = OddNum(num);
console.log(result);

const Gugudan = (num) => {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

Gugudan(num);

// 함수 작성하면 꼭 함수 실행해줘야됨

const a = [1, 2, 3, 4, 5];

let res = 0;
for (let pyo = 0; pyo < a.length; pyo++) {
  console.log(a[pyo]);
  res = res + a[pyo];
  // =>같은 의미: res += a[i];
}

console.log(res);

const obj = {
  name: "이성원",
  age: 27,
};

console.log(obj.name);
console.log(obj.age);
