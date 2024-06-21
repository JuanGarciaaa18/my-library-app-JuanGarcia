import { libro } from "./libros";

export class libreria{
    private libro: libro[];

    constructor(){
        this.libro=[];
    }

    addlibro(libro:libro):void{
        this.libro.push(libro);
        console.log(`libro ${libro.titulo} agregado a la libreria`);
    }

    deletelibro(title:string) :void{
        const index= this.libro.findIndex(libro => libro.titulo=== title)
        if (index != -1){
            this.libro.splice(index,1);
            console.log(`libro ${libro.titulo} eliminado de la libreria`);
        } else{
            console.log(`libro ${libro.titulo}no se encuentra en la libreria`);
        }
    }

    listarlibros():void{
        if (this.libro.length===0){
            console.log(`la libreria esta vacia`)
        } else{
            console.log(`libros en la libreria `)
            this.libro.forEach(libro=>{
                console.log(`titulo: ${libro.titulo},Autor: ${libro.autor}, Genero: ${libro.genero},Idioma: ${libro.idioma}, Precio: ${libro.precio}, Formato:${libro.formato}, ISBN: ${libro.isbn}, Descripcion: ${libro.descripcion}, Estado: ${libro.estado},Ubicacion: ${libro.ubicacion}, Fecha De Publicacion: ${libro.fecha_publicacion}, Editorial: ${libro.editorial}, Paginas: ${libro.paginas}, Dimensiones: ${libro.dimensiones},Peso:${libro.peso},Disponible:${libro.disponible}`)
            })
        }

    }
}