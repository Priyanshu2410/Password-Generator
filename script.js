const PwEl=document.getElementById("pw");
const copyEl=document.getElementById("copy");
const lenEl=document.getElementById("len");
const upperEl=document.getElementById("upper");
const lowerEl=document.getElementById("lower");
const symbolEl=document.getElementById("symbol");
const generateEl=document.getElementById("generate");
const numberEl=document.getElementById("number");
const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890";
const symbol = "~!@#$%^&*()_+=|";
function getLowercase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}
function getNumber(){
    return number[Math.floor(Math.random()*number.length)];
}
function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)];
}
function generatePassword(){
    const len=lenEl.value;
    let password = "";
    for(let i=0;i<len;i++)
    {
        const x= generateX();
        password+=x;
    }
    PwEl.innerText= password;
}

function generateX(){
    const xs =[];
    if(upperEl.checked)
    {
        xs.push(getUppercase());
    }
    if(lowerEl.checked)
    {
        xs.push(getLowercase());
    }
    if(numberEl.checked)
    {
        xs.push(getNumber());
    }
    if(symbolEl.checked)
    {
        xs.push(getSymbol());
    }
    if(xs.length === 0)  return "";
    
        
        return xs[Math.floor(Math.random()*xs.length)];
    
}
generateEl.addEventListener("click",generatePassword);
copyEl.addEventListener("click",()=>{
    const tetarea=document.createElement("textarea");
    const password = PwEl.innerText;
    if(!password)
    {
        return;
    }
    tetarea.value=password;
    document.body.appendChild(tetarea);
    tetarea.select();
    document.execCommand("copy");
    tetarea.remove();
    alert("password copid to clipboard");
});