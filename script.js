const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {

        let now = new Date().getTime();
        
        if (now - prev > delay) {
            prev = now;

            return func(...args);
        }
    }
}
var rect = document.querySelector("#center");
rect.addEventListener("mousemove",
throttleFunction((detail) => {
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left=detail.clientX + 'px';
    div.style.top=detail.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1710667069127-b3c5fedfcc84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    div.appendChild(img);

    gsap.to(img,{
        y:0,
        ease:Power1,
        duration:.6
    })

    gsap.to(img,{
        y:"100%" ,
        ease:Power2,
        delay:.6
    })

    setTimeout(()=>{
        div.remove();
    },2000);
    document.body.appendChild(div);
}, 400));