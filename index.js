// // // CKEDITOR.editorConfig= function(config){
// // //     config.height= '842';
// // //     config.widht= '595';
// // // };


let products=[];
let completeProducts=[];
window.addEventListener('load',(event)=>{

fetch('https://fakestoreapi.com/products')
.then((data) =>{
    ///console.log(data);
    return data.json();
}).then((products)=>{
    completeProducts=products;
products=products; 
if(products.length>0){
    products=products.slice(0,itemsPerPage);

    LoadProducts(completeProducts);
}
console.log(products)

}).catch((err) =>{
    console.log(err);
})
});



//console.log(products);

 let itemsPerPage = 5;
 let currentPage = 1; 
 

function nextBtnOne (){
    console.log('nextButton');
    var caculatedIndex=Math.round(completeProducts.length % (currentPage * itemsPerPage));
    console.log(caculatedIndex);
    if(caculatedIndex==0){
    products = completeProducts.slice(itemsPerPage,itemsPerPage+5);
       
       currentPage++;
       LoadProducts(products);
    }
}
 
const nextBtn=()=>{
    console.log('nextButton arrow');
}


function prevButton () {
    console.log('prevButton')
    var caculatedIndex=Math.round(completeProducts.length / (currentPage * itemsPerPage+5));
    
    if(caculatedIndex --- 1){
        products= completeProducts.(currentPage,itemsPerPage+5);
        currentPage--;
       LoadProducts(products);
        
    }
    const prevBtn=()=>{
        console.log('pervButton arrow')
    }
}


//  const pages =[ ];
//  for(let i = 0; i<= Math.round(products.length / itemsPerPage); i++){
//     pages.push(i)
//  }

function LoadProducts(products){
    let data1="";
    
    //console.log(products);
    products.map((values)=>{
        data1 +=`<div class="cards">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" alt="img" class="images">
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}




// // var myArray = [
// //     {'category': 'Mens Clothing',},
// //     {'category': 'Jewelery', },
// //     {'category': 'Electronics', },
// //     {'category': 'Womens Clothing', },
    
// // ]

// // buildTable(myArray)

// // function buildTable(data){
// //     var table = document.getElementById('myTable')
// //     table.innerHTML= ''
// //     for (var i = 0; i< data.length; i++){
// //         var row =`<tr>
// //                 <td>${data[i].category}</td>
// //                 <td>${data[i].pagenumber}</td>
                
// //                 </tr>`
        
// //         table.innerHTML += row 
       
// //     }
// // }






