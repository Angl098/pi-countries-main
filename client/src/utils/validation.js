
// Regular expression variable declaration
const RegExp24hrs = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/


export const validation = (data, activities) => {
    let errors = {};

    const repeatedActivity = activities?.some(activity => activity.name === data.name);

    const formatDuration = RegExp24hrs.test(data.duracion);
    const hours = +data.duracion.split(':')[0];
    
    const hourRange = hours > 0 && hours < 6;
    
    if (!data.name) {
        errors.name="Activity name missing!"
    } else if (repeatedActivity) {
        errors.name = "The activity already exists"
    }

    if (!data.dificultad) {
        errors.dificultad = "Difficulty level not selected"
    }

    if (!data.duracion) {
        errors.duracion = "Duration is required"
    } else if (!formatDuration) {
        errors.duracion = "Incorrect format : hh:mm:ss"
    } else if (!hourRange) {
        errors.duracion = "Out of range, from 01:00:00 to 05:59:59"
    }

    if (!data.temporada){
        errors.temporada = "Season not selected"
    }

    if (!data.countryId[0]){
        errors.countryId = "Select at least one country"
    }

    return errors;
}