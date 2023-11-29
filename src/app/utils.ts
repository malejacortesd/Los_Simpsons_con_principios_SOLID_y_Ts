export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getTiempoTranscurrido = (date: Date): string => {
    const tiempoTranscurrido = Math.floor((Date.now() - date.getTime()) / 60000);
    return `Hace ${tiempoTranscurrido} minutos`;
};

export {};