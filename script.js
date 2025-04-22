let date = new Date()
let mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let diaSemana = ["Dom", "Seg", "ter", "Quar", "Quin", "Sex", "Sáb"]

setInterval(() => {
    let relogio = document.querySelector(".relogio")
    let diaAtual = date.getDate()/* dia atual: 22 */
    let nomeDiaSemana = diaSemana[date.getDay()]/* nome do dia da semana: Ex:dom */
    let anoAtual = date.getFullYear()/* ano atual: 2025 */
    let nomeMesAtual = mesAno[date.getMonth()]/* nome do mês atual: abril*/
    let body = document.querySelector("body")
    let horaAtual = date.getHours()/* hora atual: 19 */
    let minutosAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`  /* minutos atual: 10 */

    relogio.innerHTML = `<div class="card" >
    <div class="date">
        <h1> ${horaAtual}:${minutosAtual} </h1>
        <p>${nomeDiaSemana},${diaAtual} ${nomeMesAtual} </p>
    </div>
    <i class="fa-solid fa-moon"></i>
</div >`

if(horaAtual >=0 && horaAtual <= 5 ){
    relogio.innerHTML = `<div class="card bg-manha"  >
    <div class="date">
        <h1> ${horaAtual}:${minutosAtual} </h1>
        <p>${nomeDiaSemana},${diaAtual} de ${nomeMesAtual} </p>
    </div>
    <i class="fa-solid fa-sun"></i>
</div >`
} else if(horaAtual >= 6 && horaAtual <= 12 ){

    relogio.innerHTML = `<div class="card bg-tarde"  >
    <div class="date">
        <h1> ${horaAtual}:${minutosAtual} </h1>
        <p>${nomeDiaSemana},${diaAtual} de ${nomeMesAtual} </p>
    </div>
    <i class="fa-solid fa-clound"></i>
</div >`
}else{
    relogio.innerHTML = `<div class="card bg-noite"  >
    <div class="date">
        <h1> ${horaAtual}:${minutosAtual} </h1>
        <p>${nomeDiaSemana},${diaAtual} de ${nomeMesAtual} </p>
    </div>
    <i class="fa-solid fa-moon"></i>
</div >`
}
    
}, 1000);


/* a data e o horario comentados são do momento que o codigo foi feito */