'use strict';

// 問題①以下のような重複値を含む配列arrayの中から、重複値を除く配列を作成して下さい。
const array = [2, 4, 7, 5, 4, 3, 8];
// 条件として以下の4つが挙げられます
// 1.filterを利用する 2.indexOfを利用する 3.返り値を利用する 4.結果をコンソールに出力する
const filterArray = array.filter(function (number, number2) {
  return array.indexOf(number) === number2;
});

console.log("The filterArray is: " + filterArray);


// Set関数を用いての解答
const arrays = [2, 4, 7, 5, 4, 3, 8];

console.log([...new Set(arrays)]);

// 問題②2020年と2021年が閏年かどうかを判定するコードを記述する。
// 条件式としては、1.if文を利用する 2.leap Year関数を利用する 3.引数に西暦を渡す 4.返り値を使用する 5.結果はコンソールに出力する
// ※閏年は以下のように定義される1.西暦が4で割り切れるかつ100で割り切れない 2.西暦が400で割り切れる
let year = 2020;
let years = 2021;

if (year % 4 == 0 && year % 100 != 0) {
  console.log("2020年は閏年です");
} else {
  console.log("2020年は閏年ではありません");
}

if (years % 4 == 0 && year % 100 != 0) {
  console.log("2021年は閏年です");
} else {
  console.log("2021年は閏年ではありません");
}

// LeapYearで求めると
function isLeapYear(year) {
  return new Date(year, 2, 0).getDate() === 29;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));