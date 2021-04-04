// Log the second movie from Jessy’s list 😃
// ❓Make another object with Daniel’s list of movies and add the Aquaman movie from Jessy’s list to his.

// ❓ What genres are not in Jessy’s favourites?
// 👉 Put these in an array and console log this!



const listOfMovies = {
account: 'Jessy', 
genres: ['Thriller', 'Drama', 'Anime', 'Comedy','Romance', 'Horror','Documentaries'], 
favourites: [
              {
                  title: 'Little Miss Sunshine',        
                  genre: 'Comedy',
                  year: 2006
              },      
               {
                  title: 'Howl\'s Moving Castle',        
                  genre: 'Japanese animation',        
                  year: 2004
               },
               {
                 title: 'Aquaman',        
                 genre: 'Action',        
                 year: 2019
               },    
              {
                title: 'The Shape of Water', 
                genre: 'Drama',   
                year: 2017
              },   
              {
                title: 'Your name',
                genre: 'Japanese animation', 
                year: 2017
              },      
              {
                title: 'Inception', 
                genre: 'Action', 
               year: 2010
              },
              ],
 account: 'Daniel', 
 daniels_favourites: [

 ]


  
}


//1 the second movie in Jessy's list is:
console.log(`Jessy's second movie is ${listOfMovies.favourites[1].title}`)

//1b move Aquaman from Jessy's list to daniels_favourites
//extracting aquaman

let aquaman = listOfMovies.favourites[2].title


//moving aquaman into Daniel’s list

listOfMovies.daniels_favourites.push(aquaman)
// console.log(listOfMovies.daniels_favourites)
console.log(`${listOfMovies.daniels_favourites[0]} was added to Daniel’s list.`)
let notJessy = []

const genresArray = listOfMovies.genres
const jessysFavGenres = listOfMovies.favourites.genre



 
for (i = 0; i < listOfMovies.genres.length; i++){
  // for (j = 0; j < listOfMovies.favourites.length; j++){
  //   if(listOfMovies.genres[i] === listOfMovies.favourites[j].genre ){
    
  //   continue;
  //   }
   
  // }
  let filtered = listOfMovies.favourites.find((film) => film.genre === listOfMovies.genres[i])

  if(!filtered){
     notJessy.push(listOfMovies.genres[i])
  }

}

console.log(` Not Jessy's favorite genres: ${notJessy}`)

//Need to revisti this code
// for (i = 0; i < listOfMovies.genres.length; i++){
//   for (j = 0; j < listOfMovies.favourites.length; j++){
//     if(listOfMovies.genres[i] === listOfMovies.favourites[j].genre ){
    
//     continue;
//     }
   
//   }
  
//      notJessy.push(listOfMovies.genres[i])

// }











