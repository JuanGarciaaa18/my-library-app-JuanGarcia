import { book } from './libros';
import { Seccion } from './librerias';
import { libros } from './libro';
/**
 * !Instalacion de librerias Prompt-Sync
 */
import promptSync from 'prompt-sync';

const prompt = promptSync();

//Constante de la seccion

const biblioteca = new Seccion('Realismo Mágico', 'Sección dedicada a libros del género Realismo Mágico', libros);


function agregarLibro(): void {
   
    const Titulo= prompt('Ingrese el Titulo del libro: ')
   const Autor= prompt('Ingrese el Autor del libro: ');
   const Genero=prompt('Ingrese el Genero del libro: ');
   const idioma= prompt('Ingrese el idioma del libro: ');    
   const Precio=parseInt(prompt('Ingrese el Precio del libro: '), 10);
   const ISBN= parseInt(prompt('Ingrese el ISBN del libro: '), 10);
   const AñoPublicacion= new Date(prompt('Ingrese la fecha de publicación del libro (YYYY-MM-DD): '));
   const editorial= prompt('Ingrese el editorial del libro: ');
   const paginas=parseInt(prompt('Ingrese las paginas del libro: '), 10);
   
    const libro = new book(Titulo,Autor,Genero,idioma,Precio,ISBN,AñoPublicacion,editorial,paginas,);
    biblioteca.AgregarLibro(libro);
    console.log('Libro agregado');
}


function eliminarLibro(): void {
    const title = prompt('Ingrese el Titulo del libro a eliminar: ');
    biblioteca.EliminarLibro(title);
    console.log('Libro eliminado');
}


function verLibros(): void {
    const libros = biblioteca.ObtenerLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la biblioteca');
    } else {
        libros.forEach(libro => {
            console.log
            (` Título: ${libro.Titulo},
                Autor: ${libro.Autor}, 
                Genero: ${libro.Genero},
                Idioma: ${libro.idioma},
                Precio: ${libro.Precio},
                ISBN: ${libro.ISBN},
                Año de Publicación: ${libro.AñoPublicacion},
                Editorial: ${libro.editorial},
                Paginas: ${libro.paginas},`)
                ;
        });
    }
}


function menu(): void {
    let opcion: string;
    do {
        console.log('\n--- Menú ---');
        console.log('1. Agregar libro');
        console.log('2. Eliminar libro');
        console.log('3. Ver libros');
        console.log('4. Salir');
        opcion = prompt('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                eliminarLibro();
                break;
            case '3':
                verLibros();
                break;
            case '4':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
        }
    } while (opcion !== '4');
}

menu();
