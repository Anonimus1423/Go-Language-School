let prventScrollPos = window.scrollY;
let show = false;
let change = false;
export default function scroll()
{
    if(window.scrollY > prventScrollPos && change !== window.scrollY > prventScrollPos)
    {
        document.getElementById("header").style = "top: -83px !important;";
        setTimeout(() => {
            document.getElementById("header").classList.remove("show")
        }, 300)
        show = false;
    }
    else if(change !== window.scrollY > prventScrollPos)
    {
        document.getElementById("header").classList.add("show")
        document.getElementById("header").style.top = "-83px";
        show = true;
    }
    change = window.scrollY > prventScrollPos;
    prventScrollPos = window.scrollY;
}