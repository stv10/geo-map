
// Devolvemos una promesa para obligarnos a cumplir con esto
// NUMBER,NUMBER van a ser la latitud y longitud de la geolocalizacion de la persona
export const getUserLocation = async():Promise<[number,number]> => {

    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                // en MapBox [long,lat] en GoogleMaps [lat,long]
                resolve([coords.longitude, coords.latitude]) 
            },
            (err) => {
                alert('No se pudo obtener la GeoLocation')
                console.log(err);
                reject();
            }
        )
    });
}