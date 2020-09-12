var Product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let productCategory = document.getElementById("productCategory");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            soldCountHTML.innerHTML = product.soldCount;
            productCategory.innerHTML = product.category;

            showImagesGallery(product.images);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comments = resultObj.data;
            let htmlContentToAppend = "";

            for(let i = 0; i < comments.length; i++){
                comment = comments[i];

                htmlContentToAppend += `
                                        <hr>
                                        <h5>` + comment.user + `</h5>
                                        <p>` + comment.description + `</p>
                                       `

                for(let i = 0; i < comment.score; i++){
                    htmlContentToAppend += `
                     <span class="fa fa-star checked"></span>
                        `
                }
                document.getElementById("comments").innerHTML = htmlContentToAppend;
            }
        }
    });
});
