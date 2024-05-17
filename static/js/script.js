


function bottom(e)
{
let listthree = document.querySelector("#getintouch");
 listthree.scrollIntoView({behavior:"smooth"});
}



function newsLetter(e)
{
let listthree = document.querySelector("#newsLetter");
 listthree.scrollIntoView({behavior:"smooth"});
}


function knowMore(e)
{
let listthree = document.querySelector("#knowmore");
 listthree.scrollIntoView({behavior:"smooth"});
}



function redirectToShowcase() {
    window.location.href = "/showcase";
}

function redirectSubStack() {
    // window.location.href = "https://ankitmishraletter.substack.com/archive"
    window.location.href = "/showcase/netcast";
    // window.open("https://ankitmishraletter.substack.com/archive", "_blank");
}

function redirectToNewsLetter(){

    window.location.href = "https://ankitmishraletter.substack.com/welcome"

}