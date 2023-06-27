




// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.




const carouselContent = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
     {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const imagesContainer = document.querySelector('.images-container');

carouselContent.forEach((object, i) => {
    console.log('test',object, i);


    if (i == 0) {
        
        imagesContainer.innerHTML+= `
        <div class="image-item active"> 

          <img src="${object['image']}" alt="">

          
            <div class="images-text">
        
                <h3>    
                    ${object['title']}
                </h3>

                <p>
                 ${object['text']}  
                </p>

            </div>    
          
        </div> 

       
        `
    } 
              
    
              
    else {

        imagesContainer.innerHTML+= `
        <div class="image-item"> 

          <img src="${object['image']}" alt="">


             <div class="images-text">

            
                <h3>    
                  ${object['title']}
                </h3>

                <p>
                 ${object['text']}  
                </p>

            </div>    

        </div>

        `
    }

    for (const key in object) {
        // console.log(object[key]);
    }

});


const upButton = document.querySelector('.up');


let counter = 0;

const allObjects = document.querySelectorAll('.image-item');

upButton.addEventListener('click', function() {

     if (counter < 4 ) {
        allObjects[counter].classList.remove('active');
        counter++;
        allObjects[counter].classList.add('active');

     }
    
})




const downButton = document.querySelector('.down');
            
          
          
downButton.addEventListener('click', function() {

     if (counter > 0 ) {
        allObjects[counter].classList.remove('active');
        counter--;
        allObjects[counter].classList.add('active');

     }
    
})



        
       


        
    
    





    





















