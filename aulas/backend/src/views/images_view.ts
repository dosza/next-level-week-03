import Image from '../models/Image';
export default {

    /**
     * @description Gera uma visualização para imagens 
     * @param {Image} image 
     */

    render(image:Image){
        return {
            id: image.id,
            url: `https://localhost:3333/uploads/${image.path}`
        };
    },

    /**
     * @description: Gera uma visualização de um Array de Imagens
     * @param {Image[]} images 
     */

    renderMany(images:Image[]){
        return images.map(image=> this.render(image))
    }
    


};