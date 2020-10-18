import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg'
import {Map,TileLayer, Marker, Popup} from 'react-leaflet';
import Lealet from 'leaflet';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-maps.css';

const mapIcon = Lealet.icon({
    iconUrl:mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]
});
//define componente OrphanagesMap
function OrphanagesMap(){
    return (
        <div id="page-map">
             
             <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfato no mapa</h2>

                     <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
    
                 <footer>
                    <strong>Guarulhos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside> 
            <Map
                center={[-23.4667294,-46.5475621]}
                zoom={14} 
                style={{ width:'100%',height:'100%'}}
            >
               
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker
                    icon={mapIcon}
                    position={[-23.4667294,-46.5475621]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das Meninas
                        <Link to ="orphanages/1">
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                </Marker>
            
            </Map>

    

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="fff"/>
            </Link>

        </div>
    )
}

//exporta componente
export default OrphanagesMap;