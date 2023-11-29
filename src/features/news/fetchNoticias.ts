import { obtenerNoticias } from './fakeRest';
import { capitalize, getTiempoTranscurrido } from '../../app/utils';
import { INoticiasNormalizadas } from './Noticias';

/**
 * Función que maneja el fetch de noticias
 * @returns array de noticias normalizadas
 */
export const obtenerInformacion = async (): Promise<INoticiasNormalizadas[]> => {
    const respuesta = await obtenerNoticias();

    const data = respuesta.map((noticia) => {
        const titulo = capitalize(noticia.titulo);
        const fechaActual = getTiempoTranscurrido(noticia.fecha);
        const descripcionCorta = noticia.descripcion.substring(0, 100);

        return {
            id: noticia.id,
            titulo,
            descripcion: noticia.descripcion,
            fecha: fechaActual,
            esPremium: noticia.esPremium,
            imagen: noticia.imagen,
            descripcionCorta,
        };
    });
    return data;
};