import React, { useState , FormEvent, ChangeEvent} from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import {LeafletMouseEvent} from 'leaflet';  

import {FiPlus } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import '../styles/pages/create-orphanage.css';
import mapIcon from "../utils/mapIcons";
import api from "../services/api";
import { useHistory } from "react-router-dom";


export default function CreateOrphanage() {
  const history = useHistory();
  const [position,setPosition] = useState( { latitude: 0.000, longitude: 0.000})

  const [name, setName] = useState('');
  const [about,setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours,setOpeningHours] = useState('');
  const [open_on_weekends,setOpenOnWeekends] = useState (true);
  const [images,setImages] =  useState<Array<File>>([])
  const [previewImages,setPreviewImages] = useState<Array<string>>([])

   

  /**
   * @description Função para atualizar as coordenadas (latitude e longitude) de acordo com o click do usuário
   * @param {LeafletMouseEvent } event 
   * 
   */

  function handleMapClick(event:LeafletMouseEvent){
    const {lat,lng} = event.latlng;
    setPosition({ //define um objeto com as coodenadas de latitude e longitude
      latitude:lat,
      longitude:lng
    });
  
  }

  /**
   * @description Função para enviar o formulários
   * @param {FormEvent} event 
   */

  async function handleSubmit(event:FormEvent){
    event.preventDefault();

    
    const {latitude, longitude } = position;

    const data = new FormData(); //declara um multipartFormData 
    
    //adiciona campos ao FormData
    data.append("name",name)
    data.append("latitude",String(latitude))
    data.append("longitude",String(longitude))
    data.append("about",about)
    data.append("instructions",instructions)
    data.append("opening_hours",opening_hours)
    data.append("open_on_weekends",String(open_on_weekends))
    
    images.forEach(image =>{
      data.append('images',image)
     }
    )
    await api.post("orphanages",data);
    alert('Cadastro feito com sucesso');

    history.push('/app')

  }
  function handleSelectedImages(event:ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files);

    if ( !event.target.files ){ //caso não tenha imagem selecionada, saia da função
      return;
    }
    const selectedImages = Array.from ( event.target.files)
    setImages(selectedImages);


    const selectedImagesPreview    = selectedImages.map (image =>{
      return URL.createObjectURL(image)
    })

   
    setPreviewImages(selectedImagesPreview)


  }
  return ( 
    <div id="page-create-orphanage">
      <Sidebar/>
         
      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-23.4429788,-46.468151]} 
              style={{ width: '100%', height: 280 }}
              zoom={16}
              onclick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

            {  
              position.latitude !== 0.0 &&
               <Marker 
                interactive={false}
                icon={mapIcon} 
                position={[position.latitude, position.longitude]}
               />
            }
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
                id="name"
                value={name} 
                onChange={event =>  setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300}
              value={about}
              onChange={event =>  setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {
                  previewImages.map(image =>{
                    return (
                      <img key={image} src={image} alt={name}/>
                    )
                  })
                }
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple  onChange={handleSelectedImages} type="file" id="image[]"  />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions"
                value={instructions}
                onChange={event =>  setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário</label>
              <input id="opening_hours" 
                value={opening_hours}
                onChange={event =>  setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  type="button" 
                  className={ open_on_weekends ? "active" : ""}
                  onClick={()=>setOpenOnWeekends(true)}>Sim
                </button>
               
                <button 
                  className={open_on_weekends ? '' : "active"}
                  type="button"
                  onClick={()=>setOpenOnWeekends(false)}
                >Não 
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;