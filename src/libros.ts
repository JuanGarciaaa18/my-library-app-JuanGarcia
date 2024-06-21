
export class libro {
titulo: string;
 autor: string;
 genero: string ;
 idioma: string ;
 precio: string ;
 formato: string ;
 isbn: string  ;
 descripcion: string ;
 estado: string  ;
 ubicacion: string;
 fecha_publicacion: string;
 editorial: string;
 paginas: string ;
 dimensiones: string;
 peso: string;
 disponible: boolean ;
    static titulo: any;
 
  constructor( 
    titulo:string,
    autor:string,
    genero:string,
    idioma:string,
    precio:string,
    formato:string,
    isbn:string,
    descripcion:string,
    estado:string,
    ubicacion:string,
    fecha_publicacion:string,
    editorial:string,
    paginas:string,
    dimensiones:string,
    peso:string,
    disponible:boolean,) 

    {
      this.titulo=titulo;
      this.autor=autor;
      this.genero=genero;
      this.idioma=idioma;
      this.precio=precio;
      this.formato=formato;
      this.isbn=isbn;
      this.descripcion=descripcion;
      this.estado=estado;
      this.ubicacion=ubicacion;
      this.fecha_publicacion=fecha_publicacion;
      this.editorial=editorial;
      this.paginas=paginas;
      this.dimensiones=dimensiones;
      this.peso=peso;
      this.disponible=disponible;
    }
    
   
  }
