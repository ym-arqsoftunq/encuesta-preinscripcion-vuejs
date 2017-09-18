
/****** con vue-resource *****/
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
//Vue.http.headers.common['Access-Control-Request-Method'] = '*';

new Vue({
  el: '#alumnos',
  data: {
    alumnos: []
  },
  created: function () {
    // this.$http.get('https://encuesta-preinscripcion-bknd.herokuapp.com/alumnos').then(response => {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(response => {
        // get body data
        this.alumnos = response.body;
      }, response => {
        // error callback
      });
  }
})
