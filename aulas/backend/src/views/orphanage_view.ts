

import Orphanage from "../models/Orphanage";
import imagesView from './images_view';

export default {

    /** 
        *   @description Função para visualizar dados de um orfanato
        *   @param {Orphanage} orphanage
    **/    
   render(orphanage:Orphanage){
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        };

    }

    /** 
        * @description Função para renderizar uma lista de orfanatos
        * @param {Orphanage[]} orphanages
    **/
    , renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}; 