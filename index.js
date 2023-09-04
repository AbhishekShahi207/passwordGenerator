const passBox=document.getElementById("password");
const lenght=8;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"
const symbol="@!#$%&"


const createPassword=()=>{
    let password="";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)]
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+=number[Math.floor(Math.random() * number.length)]
    password+=symbol[Math.floor(Math.random() * symbol.length)]
    password+=number[Math.floor(Math.random() * number.length)]
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+=symbol[Math.floor(Math.random() * symbol.length)]
    password+=upperCase[Math.floor(Math.random() * upperCase.length)]
passBox.value=password;

}
const copy=()=>{
    passBox.select();
    navigator.clipboard.writeText(passBox.value)
    alert("Text copied Successfully")
}
