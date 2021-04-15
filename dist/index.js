function desplegar(){
    let menu = document.querySelector("#menu");
        let accesos = document.querySelectorAll("#menu li a")
        if(menu.getAttribute("class").includes("Aparecer") ){
            
            menu.classList.remove("Aparecer");
            menu.classList.add("desaparecer");
        }else if(menu.getAttribute("class").includes("desaparecer")|| !menu.getAttribute("class").includes("Aparecer")){
            console.log("entre a donde tengo que entrar")
            menu.classList.remove("desaparecer");
            menu.classList.add("Aparecer");
            accesos.forEach(element=>{
                element.classList.add("desaparecenAccesos");
            })
        }
}