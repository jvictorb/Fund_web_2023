const app = document.getElementById('app');

fetch('https://rafaelescalfoni.github.io/desenv_web/filmes.json').
then(response => response.json()).
then((data) => createElement(data)).catch(e => console.log(e));


const createElement = (data) => {
    console.log(data);
    data.forEach((element, index) => {
        app.innerHTML +=  card(element, index, data);  
    });
}

const card = (element, index, data) => {

    const sum = element.opinioes.reduce((acumulador, opiniao) => + opiniao.rating, 0);
    const start = sum / element.opinioes.length;

    return (
        `
            <div class='card m-4 p-2' style='width: 30rem;'>
                <div class='d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between'>
                    <img src='${element.figura}' class='object-fit-cover border rounded' style='width: 140px; height: 100px'/>
                    <div class='text-center px-2 mr-auto'>
                            ${element.titulo}

                            <p class='text-truncate' style='width: 200px;'>
                                ${element.generos.join(', ')}
                            </p>
                            <p class='text-truncate' style='width: 200px;'>
                                <strong>Elenco: </strong>
                                ${element.elenco}
                            </p>
                    </div>
                    <div class='d-flex justify-content-center align-items-center flex-column'>
                        <div style='width: 75px; height: 60px' class='indicacao indicacao-${element.classificacao} p-2'>
                           
                            
                        </div>
                       
                    </div>
                </div>
                <div class='px-2'>
                    <p>${element.resumo}</p>
                </div>
                <div class='px-2'>    
                    <p class='mb-1'>${element.titulosSemelhantes.length > 0 ? 'Titulos similares:' : ''}</p>
                    <ul class='d-flex flex-nowrap px-0'>
                        ${
                            element.titulosSemelhantes.map(function (key) {
                            return (`
                            <li class='list-group-item' style='max-width: 100px; margin-right: 5px'> 
                                <img style='width: 100%' src='${data[key].figura}'/>
                            </li>`);
                        }).join("")}
                    </ul>
                </div>
            </div>
        `
    );
}