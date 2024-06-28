
import { libros } from "./libro";
import { book } from "./libros";


export class Seccion {
    Nombre: string;
    Descripcion: string;
    Libros: book[] = [];

    constructor(Nombre: string, Descripcion: string, Libros: book[]) {
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Libros = Libros;
    }



    AgregarLibro(libro: book): void {
        this.Libros.push(libro);
    }


    EliminarLibro(title: string): void {
        for (let i = 0; i < this.Libros.length; i++) {
            if (this.Libros[i].Titulo === title) {
                this.Libros.splice(i, 1);
                break; 
            }
        }
    }
    
    buscarlibrotitulo(title: string): void {
        let librobuscar: book | undefined = libros.find((Libros: book) => {
            return Libros.Titulo===title
            
        });
    
        if (librobuscar) {
            console.log(librobuscar);
        } else {
            console.log('No se encontró ningún libro con ese título');
        }
    }
    ObtenerLibros(): book[] {
        return this.Libros;
    }
}
