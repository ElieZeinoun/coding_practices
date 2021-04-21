// java object

let materials= [
 { 
    name:"concrete",
    id: 1,
    application: ["all", "walls", "floors"],
    carbon: 550,
    cost: 45,
    image: "assets/carpet-1.jpg",
 },
 {  
    name:"wood",
    id: 2,
    application: ["all", "walls"],
    carbon: 750,
    cost: 20,
    image: "assets/carpet-2.jpg",
 },
 {  
    name:"ceramic",
    id: 3,
    application: ["all", "walls", "floors", "furniture"],
    carbon: 750,
    cost: 20,
    image: "assets/wood-1.jpg",
 },
 {  
    name:"wood",
    id: 4,
    application: ["all", "walls", "floors"],
    carbon: 750,
    cost: 20,
    image: "assets/wood-2.jpg",
 },
 {  
   name:"wood",
   id: 5,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/wood-3.jpg",
},
{  
   name:"wood",
   id: 6,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/ceramic-1.jpg",
},
{  
   name:"wood",
   id: 7,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/leather-1.jpg",
},
{  
   name:"wood",
   id: 8,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/ceramic-2.jpg",
},
{  
   name:"wood",
   id: 9,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/cotton-1.jpg",
},
{  
   name:"wood",
   id: 10,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/mdf-1.jpg",
},
{  
   name:"wood",
   id: 11,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/fabric-1.jpg",
},
{  
   name:"wood",
   id: 12,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/marble-1.jpg",
},
{  
   name:"wood",
   id: 13,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 20,
   image: "assets/glass.jpg",
},
{  
   name:"wood",
   id: 14,
   application: ["all", "walls", "misc"],
   carbon: 750,
   cost: 20,
   image: "assets/pvc-1.jpg",
},
{  
   name:"wood",
   id: 15,
   application: ["all", "misc",],
   carbon: 750,
   cost: 20,
   image: "assets/towel-1.jpg",
},
{  
   name:"wood",
   id: 16,
   application: ["all", "walls", "floors"],
   carbon: 750,
   cost: 29,
   image: "assets/textile-1.jpg",
},
]



let container = document.querySelector(".main");

function renderAllImages(data){
    data.forEach(function(material) {
        let divjs = document.createElement("div");
        let renderImage = document.createElement("img");
        let srcImage = material.image;
        let matname = material.name;
        renderImage.className = "imgjs", `${matname}`;        ;
        renderImage.src = srcImage;
        divjs.appendChild(renderImage);
        container.appendChild(divjs);
    });
} 

renderAllImages(materials);

let costcontainer = document.querySelector("#price");

function calculator(numbers){

      numbers.forEach(function(element){
         let value = element.cost;
         console.log(value);
         let cost = document.createElement("p");
         let printcost = document.createTextNode(value);
         let costinp = cost.appendChild(printcost);
         costcontainer.appendChild(cost);
      });
   
}

$(document).ready(function(){

   $(".imgjs").draggable(
      {
         helper:'clone',
         containment: "wrapper", scroll: false,
         revert: "invalid",
         cursor: "move",  
      }
   );

   $(".cart").droppable(
      {
         accept:".imgjs",
         drop: function (ev,ui) {
            var droppedItem = $(ui.draggable).clone();
            console.log(ev);
            console.log(ui);
            $(this).append(droppedItem);
            $(droppedItem).addClass("incart");
            $(this).add('dropped_array');
 
         }

      }
   )
   
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
      

      // if (value == 'all'){
      //    $(materials).show('1000');
      // }
      // else{
      //    $(application).not(value).hide('1000');
      //    $(application).filter(value).show('1000');
      // }
   })

   $('.list').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
   })
})





// calculator(materials);


// const sum = costprice.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sum)



