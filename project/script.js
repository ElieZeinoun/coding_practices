// java object

let materials= [
 { 
    name:"carpet",
    id: 1,
    application: ["all", "furn", "floors"],
    carbon: 150,
    cost: 45,
    image: "assets/carpet-1.jpg",
 },
 {  
    name:"carpet",
    id: 2,
    application: ["all", "furn", "floors"],
    carbon: 70,
    cost: 30,
    image: "assets/carpet-2.jpg",
 },
 {  
    name:"wood",
    id: 3,
    application: ["all", "walls", "floors", "furn"],
    carbon: 600,
    cost: 60,
    image: "assets/wood-1.jpg",
 },
 {  
    name:"wood",
    id: 4,
    application: ["all", "walls", "floors"],
    carbon: 250,
    cost: 25,
    image: "assets/wood-2.jpg",
 },
 {  
   name:"wood",
   id: 5,
   application: ["all", "walls", "floors", "furn"],
   carbon: 350,
   cost: 75,
   image: "assets/wood-3.jpg",
},
{  
   name:"ceramic",
   id: 6,
   application: ["all", "walls", "floors"],
   carbon: 400,
   cost: 15,
   image: "assets/ceramic-1.jpg",
},
{  
   name:"leather",
   id: 7,
   application: ["all", "furn"],
   carbon: 1500,
   cost: 150,
   image: "assets/leather-1.jpg",
},
{  
   name:"ceramic",
   id: 8,
   application: ["all", "walls", "floors"],
   carbon: 550,
   cost: 200,
   image: "assets/ceramic-2.jpg",
},
{  
   name:"cotton",
   id: 9,
   application: ["all", "furn"],
   carbon: 750,
   cost: 80,
   image: "assets/cotton-1.jpg",
},
{  
   name:"mdf",
   id: 10,
   application: ["all", "walls"],
   carbon: 250,
   cost: 65,
   image: "assets/paint-2.jpg",
},
{  
   name:"fabric",
   id: 11,
   application: ["all", "furn"],
   carbon: 750,
   cost: 55,
   image: "assets/fabric-1.jpg",
},
{  
   name:"marble",
   id: 12,
   application: ["all", "furn", "floors"],
   carbon: 200,
   cost: 40,
   image: "assets/marble-1.jpg",
},
{  
   name:"glass",
   id: 13,
   application: ["all", "walls", "furn"],
   carbon: 300,
   cost: 100,
   image: "assets/glass.jpg",
},
{  
   name:"pvc",
   id: 14,
   application: ["all", "furn", "floor"],
   carbon: 750,
   cost: 220,
   image: "assets/pvc-1.jpg",
},
{  
   name:"cotton",
   id: 15,
   application: ["all", "furn"],
   carbon: 500,
   cost: 25,
   image: "assets/towel-1.jpg",
},
{  
   name:"textile",
   id: 16,
   application: ["all", "furn"],
   carbon: 550,
   cost: 95,
   image: "assets/textile-1.jpg",
},
]



let container = document.querySelector(".main");

function renderAllImages(data){
    data.forEach(function(material) {
        let mat_id = material.id;
        let divjs = document.createElement("div");

        let renderImage = document.createElement("img");
        let srcImage = material.image;
        let matname = material.name;
        let matcost = material.cost;
      //   console.log(matcost);

        renderImage.classList.add("imgjs", matname);
        renderImage.src = srcImage;
        renderImage.id = mat_id;
        divjs.appendChild(renderImage);
        container.appendChild(divjs);
      //   console.log(renderImage);
    });
} 




$(document).ready(function(){

   renderAllImages(materials);

   //----------------Show Name on Hover 
   $(".imgjs").hover(function(){
      // let matname = $(this).attr('class');
      // console.log(matname)
   })

   //----------------Sort Ascending by name 

   $('.ascending').click(function(){
   
      container.innerHTML = "";
      
      function ascAllImages(data){
         materials.sort(function(a,b){
            if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
            if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
            return 0;
         })

         renderAllImages(materials);
      }
      
      ascAllImages(materials);

   })

   //----------------Sort Descending by name

   $('.descending').click(function(){
   
      container.innerHTML = "";
      
      function descAllImages(data){
         materials.sort(function(a,b){
            if(a.name.toLowerCase() < b.name.toLowerCase()) {return 1;}
            if(a.name.toLowerCase() > b.name.toLowerCase()) {return -1;}
            return 0;
         })

         renderAllImages(materials);
      }
      
      descAllImages(materials);

   })

      //----------------Sort by Cost
      $('.cost').click(function(){
   
         container.innerHTML = "";
         
         function costAllImages(data){
            materials.sort(function(a,b){
               return a.cost - b.cost;

            })
               
            renderAllImages(materials);
         }
         
         costAllImages(materials);
   
      })

      //----------------Sort by Carbon
      $('.carbon').click(function(){
   
         container.innerHTML = "";
         
         function carbonAllImages(data){
            materials.sort(function(a,b){
               return a.carbon - b.carbon;

            })
               
            renderAllImages(materials);
         }
         
         carbonAllImages(materials);
   
      })

   // --------------- Filter Function  
   $('.list').click(function(){

      //clears image gallery
      container.innerHTML = "";

      const value = $(this).attr('data-filter');
      // console.log(value);

      mat_list= [];
      mat_value=[];
      filtered = [];

      for (let i=0; i < materials.length; i++){
         mat_list = materials[i].application;


         if (mat_list.includes(value)){
            filtered.push(materials[i]);
          }        

      }

      renderAllImages(filtered);
      
      
      $(".imgjs").draggable(
         {
            helper:'clone',
            containment: "wrapper", scroll: false,
            revert: "invalid",
            cursor: "move",  
            zIndex: 100,
         }
      );
   
      $(".cart").droppable(
         {
            accept:".imgjs",
            drop: function (ev,ui) {
               let drop_id = ui.draggable.attr('id');
               // let drop_cost = ui.draggable.attr('cost');
               // console.log(materials.cost);

               var droppedItem = $(ui.draggable).clone();
               var div_child_count = $(ev.target).children().length;
               var div_count = $(ev.target).length;
               // var droppedItems =[];

               //Check if existing element has already been dropped
               if(div_child_count <div_count){
                  $(this).append(droppedItem);
                  $(droppedItem).addClass("incart");
                  $(droppedItem).addClass("price");
                  // droppedItems.push(droppedItem);
                  // console.log(droppedItems);
                  // console.log(ev.target.children)
                  
                  cart_items =[];
                  let totalvalues =[];
                  let totalcarbon = [];

                        function calculator(numbers){

                           // let totalvalues = [25, 40];
                     
                           numbers.forEach(function(element){
                              if(element.id == drop_id){
                                 cart_items.push(element);
                                 

                                 let value = element.cost;
                                 let c_value = element.carbon;
                                 // console.log(value);
                                 // let cost = document.createElement("p");
                                 // let printcost = document.createTextNode(value);
                                 // let costinp = cost.appendChild(printcost);
                                 // costcontainer.appendChild(cost);

                                 
                                 totalvalues.push(value);
                                 // console.log(totalvalues);
                                 
                                 totalcarbon.push(c_value);
                                 console.log(totalcarbon);
                              }
                             
                           });

                           let costtotal = document.querySelectorAll('.price')
                           costtotal.forEach(function(e){
                              // console.log(e);
                           })
                           // console.log(costtotal);
                           
                           const sum = totalvalues.reduce((accumulator, currentValue) => accumulator + currentValue);
                           // console.log(sum);
                     
                           let cost = document.querySelector("#price");
                           // cost.classList.add('price');
                           let printcost = document.createTextNode(sum);
                           cost.innerHTML = sum;

                           const carbon_value = totalcarbon.reduce((accumulator, currentValue) => accumulator + currentValue);

                           let carbon = document.querySelector('#carbon');
                           let carbonvalue = document.createTextNode(carbon_value);
                           carbon.innerHTML = carbon_value;
                     }
                     
                     calculator(materials);
                     

                     }             

                 
                  
                  
                  }
            })
         }
      )
   
      


//Empty Cart from Item when double clicked
   $(".cart").dblclick(function(){
      console.log(this);
      $(this).empty();      
   });
//..............................................


//Add Active Class to selected List Item & Remove Class from Siblings
   $('.list').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
   })
//..............................................


   $('.imgjs').click(function(){
      console.log(this);
      var img = materials[$(this).index()];
      
      console.log(img);
   })
})


//Calculator Code
let costcontainer = document.querySelector("#price");

// function calculator(numbers){

//       let totalvalues = [];

//       numbers.forEach(function(element){
//          let value = element.cost;
//          // console.log(value);
//          // let cost = document.createElement("p");
//          // let printcost = document.createTextNode(value);
//          // let costinp = cost.appendChild(printcost);
//          // costcontainer.appendChild(cost);
//          totalvalues.push(value);
//       });

      
//       const sum = totalvalues.reduce((accumulator, currentValue) => accumulator + currentValue);
//       console.log(sum);

//       let cost = document.createElement("p");
//       let printcost = document.createTextNode(sum);
//       let costinp = cost.appendChild(printcost);
//       costcontainer.appendChild(cost);
// }

// calculator(materials);








