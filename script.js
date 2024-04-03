

// //! 1.Userdən 3 ədəd alın və aldığınız ədədlərin ədədi ortasını tapan alqoritm qurun.
// let  num1=parseInt(prompt("1ci ededi daxil edin :"))
// let num2=parseInt(prompt("2ci ededi edin :"))
// let num3=parseInt(prompt("3ci ededi edin :"))
// let edediOrta=(num1+num2+num3)/3

// console.log(edediOrta)

// //! 2.Userdən 3 ədəd alın və bu ədədlərin üçbucağın tərəfləri ola biləcəini qaytaran alqoritm qurun.Əgər olarsa true olmazsa ekranda false çap edilsin.

// let a = parseInt(prompt("1ci ededi daxil edin :"));
// let b = parseInt(prompt("2ci ededi edin :"));
// let c = parseInt(prompt("3ci ededi edin :"));

// if (a + b > c && a + c > b && b + c > a) {
//   if (a <= 0 || b <= 0 || c <= 0) {
//    console.log(false)
//   } else {
//     console.log(true)
//   }
// } else {
//     console.log(false)
// }
 
// //! 3.Userdən name və surname dəyərləri qəbul edin və fullname-ini ekranda çap edin (başqa bir variable-dan istifadə edin)

// let name = prompt("Ad daxil edin :");
// let surName = prompt("Soyad ededi edin :");
// let fullName = name + " " + surName;

// console.log(fullName);



//! 4.BMİ hesablayan alqoritm qurun.Userdən boy və çəki dəyərləri alın və buna əsasən BMİ hesablayın (boy=1.70 çəki=80 daxil edilsə çəki/boy-nin kavdratı olaraq hesablanır).


 let height = parseInt(prompt("Boyu sm ile daxil edin :"))/100;
 let weight= parseInt(prompt("Ceki ededi edin :"));

 let bmi=weight/(height*height)

if (bmi>=25) {
  console.log("artıq çəkili")
} else if(bmi>=18.5 && bmi<25){
  console.log("normal ")
}else{
  console.log("arıq ")
}