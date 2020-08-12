var Productos = [];

function MostrarProductos(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let Productoss = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + Productoss.imgSrc + `" alt="` + Productoss.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ Productoss.name +`</h4>
                        <small class="text-muted">` + Productoss.soldCount + ` artículos</small>
                    </div>
                    <p>`+ Productoss.description +`</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("Lista-Productos").innerHTML = htmlContentToAppend;
    }
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            Productos = resultObj.data;
            //Muestro las categorías ordenadas
            MostrarProductos(Productos);
        }
    });
});