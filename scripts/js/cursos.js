document.addEventListener('DOMContentLoaded', () => {
    let SectionCursos = document.getElementById("SecCursos")
    async function requestUpgrades(){
    const response = await fetch("../scripts/json/cursos.json")
    const data = await response.json()
    cursos = data
    CursosDOM()
    console.log(cursos)
}requestUpgrades();

function CursosDOM(){
    for (item in cursos){
    let newCurso = document.createElement("div")  
    document.createAttribute("class")
    newCurso.setAttribute("class","card p-3 m-2 cardCustom")
    newCurso.innerHTML = "<img src=" + cursos[item].img +" class='card-img-top'> <div class='card-body'> <h5 class='card-title'>"+ cursos[item].titulo+"</h5><p class='card-text'>"+cursos[item].desc+"<span class='textoResaltado'>"+cursos[item].resaltado+"</span></p><a href='#' class='btn colorBtn'>Ver mas</a></div>"
    SectionCursos.appendChild(newCurso)
}
}
})