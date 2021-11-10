/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue( {

  el: '#app',
  
  data: {
    titolo: 'Clicca il bottone per cambiare l\' Immagine',
    image: 'http://placeimg.com/640/480/nature',
    altImage: 'nature'
  },

  methods: {
    changeImage() {
      this.image === 'http://placeimg.com/640/480/nature' ? this.image = 'http://placeimg.com/640/480/animals' : this.image = 'http://placeimg.com/640/480/nature';

      this.altImage === 'nature' ? this.altImage = 'animals' : this.altImage = 'nature';
    }
  }

});