import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';

/**
 * Description: Implementa a classe Image e associa a table orphanages do DB.
 */

@Entity('images') //anotação da tabela  do DB a qual a classe pertence
class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;


    @Column()
    path: string;

    //configura relacionamento muitos para um, pois varias imagens pertence a um orfanato 
    @ManyToOne( ()=> Orphanage, orphanage => orphanage.id)
    @JoinColumn( { name: 'orphanage_id'})
    orphanage : Orphanage;
}

export default Image;