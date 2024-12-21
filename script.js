let hour = document.querySelector(".hour"),
min = document.querySelector(".min"),
sec = document.querySelector(".sec")

clock = () =>{
    let d = new Date()

    sec.innerHTML = d.getSeconds().toString().padStart(2, "0");

    min.innerHTML = d.getMinutes().toString().padStart(2, "0");

    hour.innerHTML = d.getHours().toString().padStart(2, "0");
}
setInterval(() =>{
    clock()
}, 900)