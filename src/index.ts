import { libro} from "./libros";
import { libreria } from "./funciones";


const biblioteca = new libreria();
const book= new libro("El Principito","Antoine de Saint-Exupéry","Ficción","Español","20","Puede estar disponible en tapa dura, tapa blanda y ebook, entre otros", "9788490431604","Es una novela corta que narra la historia de un joven príncipe que viaja por diferentes planetas", "nuevo","Disponible en librerías físicas y tiendas en línea","Originalmente publicado en 1943","iEditorial Siruela","100","Alrededor de 13 x 1 x 20 cm (ancho x profundidad x altura) en tapa blanda","Alrededor de 100-200 gramos en tapa blanda",false);


biblioteca.addlibro(book);
biblioteca.listarlibros();