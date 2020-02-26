document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#appCruds',
    data: {
      nombre: '',
      edad: '',
      apellido: '',
      birthday: '',
      formActualizar: false,
      idActualizar: -1,
      nombreActualizar: '',
      edadActualizar: '',
      personas: []
    },
    methods: {
      crearPersona: function() {
        this.personas.push({
          id: +new Date(),
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          birthday: this.birthday
        });
        this.nombre = '';
        this.apellido = '';
        this.edad = '';
        this.birthday = '';
      },
      verFormActualizar: function(persona_id) {
        this.idActualizar = persona_id;
        this.nombreActualizar = this.personas[persona_id].nombre;
        this.apellidoActualizar = this.personas[persona_id].apellido;
        this.edadActualizar = this.personas[persona_id].edad;
        this.birthdayActualizar = this.personas[persona_id].birthday;
        this.formActualizar = true;
      },
      borrarPersona: function(persona_id) {
        var conf = confirm('Seguro De Que Quiere Borrar esta persona');
        if (conf === true) {
          this.personas.splice(persona_id, 1);
        } else {
          return false;
        }
      },
      guardarActualizacion: function(persona_id) {
        this.formActualizar = false;
        this.personas[persona_id].nombre = this.nombreActualizar;
        this.personas[persona_id].apellido = this.apellidoActualizar;
        this.personas[persona_id].edad = this.edadActualizar;
        this.personas[persona_id].birthday = this.birthdayActualizar;
      }
    }
  });
});
