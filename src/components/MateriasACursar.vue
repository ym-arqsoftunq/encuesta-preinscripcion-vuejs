<template>
  <div>    
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="4">
          <b-form-input cols="2" v-model="nombreAlumno" type="text" placeholder="Nombre y apellido"></b-form-input>
        </b-col>
      </b-row>
      <h3>Materias a cursar</h3>
      <b-row align-h="center">
        <b-button variant="primary" v-on:click="agregarFilaMateria">Agregar materia</b-button>
      </b-row>
      <b-row align-h="center" v-for="i in selected.length">
        <b-col cols="4">
          <b-form-select v-model="selected[i-1]" :options="options" class="mb-3">
          </b-form-select>
        </b-col>
        <b-col cols="1"><b-button variant="danger" v-on:click="borrarMateria(i-1)">Borrar</b-button></b-col>
      </b-row>
      <b-row align-h="end" v-if="nombreAlumno">
        <b-col cols="1"><b-button variant="success" v-on:click="aceptar()">Aceptar</b-button></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    selected: [],
    options: [
      { value: null, text: 'Elija una materia a cursar' },
      { value: 'ARQ_SOFT', text: 'Arquitectura de software' },
      { value: 'ARQ_COMPU', text: 'Arquitectura de computadoras' },
      { value: 'PROBA', text: 'Probabilidad y estadistica' },
      { value: 'GP', text: 'Gestion de proyectos' }
    ],
    nombreAlumno: null
  }),
  methods: {
    agregarFilaMateria: function () {
      this.selected.push(this.options[0].value)
      console.log(this.selected)
    },
    borrarMateria: function (i) {
      this.selected.splice(i, 1)
      console.log(this.selected)
    },
    aceptar: function () {
      axios.post('https://encuesta-preinscripcion-bknd.herokuapp.com/inscribir', {
        alumno: this.nombreAlumno,
        materias: this.selected
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>