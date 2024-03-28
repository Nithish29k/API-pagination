// // // CKEDITOR.editorConfig= function(config){
// // //     config.height= '842';
// // //     config.widht= '595';
// // // };


let products=[];
let completeProducts=[];
let itemsPerPage = 5;  
let currentPage = 1; 
let totalPages = 1;

window.addEventListener('load',(event)=>{
    prevBtn.disabled = true;

fetch('https://fakestoreapi.com/products')
.then((data) =>{
    ///console.log(data);
    return data.json();
}).then((products)=>{
    completeProducts=products;
products=products; 
if(products.length>0){
    products=products.slice(0,itemsPerPage);

    totalPages = Math.ceil(completeProducts.length / itemsPerPage);
     

    LoadProducts(products,currentPage,totalPages);
}
console.log(products)

}).catch((err) =>{
    console.log(err);
})
}); 


//console.log(products);


 

function nextBtnOne (){
// var caculatedIndex=Math.round(completeProducts.length % (currentPage * itemsPerPage));
// console.log(caculatedIndex);
// if(caculatedIndex==0){
    //console.log("Next Button - "+itemsPerPage);
    //console.log("products - "+JSON.stringify(completeProducts));
    currentPage++;
    currentIndex=currentPage*itemsPerPage;
        const startIndex = (currentPage -1)* itemsPerPage;
        products = completeProducts.slice(startIndex, startIndex +itemsPerPage);
    products = completeProducts.slice(currentPage*itemsPerPage-itemsPerPage,currentPage*itemsPerPage);
    LoadProducts(products,currentPage,totalPages);
//}

    if(currentPage === totalPages){
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }else{
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
   
}




function prevButton () {
    // console.log('prevButton')
    // var caculatedIndex=Math.round(completeProducts.length / (currentPage * itemsPerPage+5));
    
    // if(caculatedIndex --- 1){
        currentPage--;
         //products= completeProducts.slice(currentPage*itemsPerPage-itemsPerPage,currentPage*itemsPerPage);
        
     const startIndex = (currentPage -1)* itemsPerPage;
    products = completeProducts.slice(startIndex, startIndex + itemsPerPage);

        if(currentPage === 1){
            prevBtn.disabled = true;
            nextBtn.disabled = false;
        }else{
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
     

        LoadProducts(products,currentPage,totalPages);
   //}


    
}

function updatePageNumber(currentPage,totalPages){
    const pageNumberElement = document.getElementById("PageNumber");
    if(pageNumberElement){
        pageNumberElement.textContent = ` Page ${currentPage} of ${totalPages}`;
    }else {

        console.log("page number element not found");
    }
    // console.log(pageNumberElement);
}





function LoadProducts(products,currentPage,totalPages){
    updatePageNumber(currentPage,totalPages);
    let data1="";
    
    //console.log(products);
    products.map((values)=>{
        data1 +=`<div class="cards">
        <p class="category">${values.category}</p>
        <img src="${values.image}" alt="transparent-image" class="images"> 
        <p class="price">&#36 ${values.price}</p>
        <h1 class="title">${values.title}</h1>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}





// var myArray = [
//     {'category': 'Mens Clothing',},
//     {'category': 'Jewelery', },
//     {'category': 'Electronics', },
//     {'category': 'Womens Clothing', },
    
// ]

// buildTable(myArray)

// function buildTable(data){
//     var table = document.getElementById('myTable')
//     table.innerHTML= ''
//     for (var i = 0; i< data.length; i++){
//         var row =`<tr>
//                 <td>${data[i].category}</td>
//                 <td>${data[i].pagenumber}</td>
                
//                 </tr>`
        
//         table.innerHTML += row 
       
//     }
// }



