import api from './api'


export async function GetUser(object) {
    try {

        const response = await api.get('URL', object);
        return response;
    } catch (error) {
        console.log('ERROR', JSON.stringify(error));
    }
}