window.onload = function () {
    let input = document.getElementById("input");

    input.onfocus = (e) => {
        console.log(1)
    }

    input.onchange = (e) => {
        e.target.value = e.target.value.slice(0,3) + "-" +  e.target.value.slice(3,5) + "-" + e.target.value.slice(5,7);
    }
}


