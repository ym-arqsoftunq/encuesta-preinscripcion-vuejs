<template>
  <div id="app">
    ALUMNOS Y MATERIAS
    <ol>
      <li v-for="alumno in alumnos">
        {{ alumno.nombre }}
        <ol>
          <li v-for="materia in getMateriasAlumno(alumno,materias)">
              {{ materia.nombre}}
          </li>
        </ol>
      </li>      
    </ol>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data: () => ({
    alumnos: [],
    materias: [],
    errors: []
  }),
  methods: {
    getMateriasAlumno: function (alumno, materias) {
      var result = []
      materias.forEach(function (e) {
        if (alumno.materias.indexOf(e.id) > -1) {
          result.push(e)
        }
      })
      return result
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get('https://encuesta-preinscripcion-bknd.herokuapp.com/alumnos')
      .then(response => {
        // JSON responses are automatically parsed.
        this.alumnos = response.data.alumnos
      })
      .catch(e => {
        this.errors.push(e)
      })

    axios.get('https://encuesta-preinscripcion-bknd.herokuapp.com/materias')
      .then(response => {
        // JSON responses are automatically parsed.
        this.materias = response.data.materias
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<style>

</style>
