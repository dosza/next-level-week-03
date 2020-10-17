import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';
//Classe para armazenar imagens
@Entity('images')
class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;


    @Column()
    path: string;

    @ManyToOne( ()=> Orphanage, orphanage => orphanage.id)
    @JoinColumn( { name: 'orphanage_id'})
    orphanage : Orphanage;
}

export default Image;