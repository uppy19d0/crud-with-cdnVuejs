document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#appCruds',
        data: {
            nombre_del_libro: '',
            autor: '',
            genero: '',
            numero_de_pagina: '',
            fecha_de_lanzamiento: '',
            editora: '',
            precio: '',
            // actualicacion
            formActualizar: false,
            idActualizar: -1,
            nombre_del_libroActualizar: '',
            autorActualizar: '',
            generoActualizar: '',
            numero_de_paginaActualizar: '',
            fecha_de_lanzamientoActualizar: '',
            editoraActualizar: '',
            precioActualizar: '',
            libros: []
        },
        methods: {
            crearLibros: function() {
                this.libros.push({
                    id: +new Date(),
                    nombre_del_libro: this.nombre_del_libro,
                    autor: this.autor,
                    genero: this.genero,
                    numero_de_pagina: this.numero_de_pagina,
                    fecha_de_lanzamiento: this.fecha_de_lanzamiento,
                    editora: this.editora,
                    precio: this.precio
                });
                this.nombre_del_libro = '';
                this.autor = '';
                this.genero = '';
                this.numero_de_pagina = '';
                this.fecha_de_lanzamiento = '';
                this.editora = '';
                this.precio = '';
            },
            verFormActualizar: function(libro_id) {
                this.idActualizar = libro_id;
                this.nombre_del_libroActualizar = this.libros[libro_id].nombre_del_libro;
                this.autorActualizar = this.libros[libro_id].autor;
                this.generoActualizar = this.libros[libro_id].genero;
                this.numero_de_paginaActualizar = this.libros[libro_id].numero_de_pagina;
                this.fecha_de_lanzamientoActualizar = this.libros[libro_id].fecha_de_lanzamiento;
                this.editoraActualizar = this.libros[libro_id].editora;
                this.precioActualizar = this.libros[libro_id].precio;
                this.formActualizar = true;
            },
            borrarBook: function(libro_id) {
                var conf = confirm('Seguro De Que Quiere Borrar este libro');
                if(conf === true) {
                    this.libros.splice(libro_id, 1);
                } else {
                    return false;
                }
            },
            guardarActualizacion: function(libro_id) {
                this.formActualizar = false;
                this.libros[libro_id].nombre_del_libro = this.nombre_del_libroActualizar;
                this.libros[libro_id].autor = this.autorActualizar;
                this.libros[libro_id].genero = this.generoActualizar;
                this.libros[libro_id].numero_de_pagina = this.numero_de_paginaActualizar;
                this.libros[libro_id].fecha_de_lanzamiento = this.fecha_de_lanzamientoActualizar;
                this.libros[libro_id].editora = this.editoraActualizar;
                this.libros[libro_id].precio = this.precioActualizar;
            }
        }
    });
});