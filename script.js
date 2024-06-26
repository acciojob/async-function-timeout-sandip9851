document.getElementById("btn").addEventListener("click",display)
async function display() {
let value = document.getElementById("text").value;
let delay = document.getElementById("delay").value;

await createPromise(value,delay)

}

function createPromise(value,delay) {
return new Promise((resolve,reject)=>{
setTimeout(()=>{
document.getElementById("output").innerText = value;
resolve()
},delay)

})
}