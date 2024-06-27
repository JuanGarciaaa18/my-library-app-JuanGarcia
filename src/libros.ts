// book.ts

export class book {
    constructor(
        public Titulo: string,
        public Autor: string,
        public Genero: string,
        public idioma: string,       
        public Precio: number,
        public ISBN: number,
        public AñoPublicacion: Date,
        public editorial: string,
        public paginas: number,
      
    ) {}
}
