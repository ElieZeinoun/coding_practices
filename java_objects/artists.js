const artists = [
    {
      name: "Kerry James Marshall",
      birth_date: "October 17, 1955",
      birth_place: "Birmingham, Alabama",
      works: [
        {
          title: "Past Times",
          year: 1997,
          medium: "acrylic and collage on unstretched canvas",
          image:
            "https://www.culturetype.com/wp-content/uploads/2016/05/MarshallKerryJames_PastTimes_v03.jpg"
        }
      ]
    },
    {
      name: "Lorraine O'Grady",
      birth_date: "September 21, 1934",
      birth_place: "Boston, Massachusetts",
      works: [
        {
          title: "Art Is...",
          year: 1983,
          medium: "photo-installation",
          image:
            "https://www.studiomuseum.org/sites/default/files/ogrady_troupe_mbn_1983_20093_web.jpg"
        }
      ]
    },
    {
      name: "Senga Nengudi",
      birth_date: "September 18, 1943",
      birth_place: "Chicago, Illinois",
      works: [
        {
          title: "Performance Piece",
          year: 1978,
          medium: "Black and white photographs",
          image:
            "https://news.artnet.com/app/news-upload/2018/07/Senga-Nengudi.-Performance-Piece-1978..jpg"
        }
      ]
    },
    {
      name: "David Hammons",
      birth_date: "July 24, 1943",
      birth_place: "Springfield, Illinois",
      works: [
        {
          title: "Oh say can you see",
          year: 2017,
          medium: "Dyed cotton fabric",
          image:
            "https://media.newyorker.com/photos/5ddeba2aa19b0b0008568c0a/master/pass/191209_r35505.jpg"
        }
      ]
    },
    {
      name: "Mark Bradford",
      birth_date: "November 20, 1961",
      birth_place: "Los Angeles, California",
      works: [
        {
          title: "Black Venus",
          year: 2005,
          medium: "mixed media collage",
          image:
            "https://www.theparisreview.org/blog/wp-content/uploads/2019/07/black-venus-1.jpg"
        }
      ]
    }
  ];
  

//iterate over array of artists and print the artist name to the console

//1. Grab the HTML element from the DOM
const container = document.querySelector('.container');

artists.forEach(renderArtist);

function renderArtist(artist){
    //2. Create a new p tag for each artist
    let paragraph = document.createElement('p');

    //3. pass the name to the paragraph

    console.log(artist.name)
    let artist_name = artist.name
    paragraph.textContent = artist_name

    //4. Add each paragraph to DOM
    container.appendChild(paragraph);    
};

let filtered_artists = artists.filter(function(artist){
    return artist.name == "David Hammons"
});

console.log(filtered_artists);

//   // outside the loop
//   const container = document.querySelector(".container");
  
//   artists.forEach(function (artist) {
//     console.log(artist.name);
//     // inside the loop
//     // bc for each artist, we need to create a new p tag
//     let paragraph = document.createElement("p");
//     paragraph.textContent = artist.name;
//     container.appendChild(paragraph);
//   });
  
//   /*----- FILTER FUNCTION -----*/
  
//   const blackAmericanArtists = artists.filter(function (artist) {
//     return artist.name == "Kerry James Marshall";
//   });
  
//   console.log(blackAmericanArtists);
  