import {Entity, Column, PrimaryGeneratedColumn,OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;
    
    //configura relacionamento de um  para muitos, pois um orfanato pode ter várias imagens
    @OneToMany(()=>Image,image => image.orphanage, {
        cascade: ['insert','update']
    } )
    @JoinColumn({name: 'orphanage_id'})
    images: Image[];    
}
export default Orphanage;