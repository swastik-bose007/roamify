// ------------------------------------------------------
// Dependencies
// ------------------------------------------------------
import React, {useEffect, useState} from 'react'
// ------------------------------------------------------
// UI Components
// ------------------------------------------------------
import ListComponent from './mapPageComponent/listComponent';
import MapComponent from './mapPageComponent/mapComponent';
import PlaceDetailComponent from './mapPageComponent/placeDetailComponent';
// ------------------------------------------------------
// Styles
// ------------------------------------------------------
import '../../AppStyles/mapStyle.css';
// ------------------------------------------------------
// APIs
// ------------------------------------------------------
import { getPlacesData } from '../../api/index';

const MapPage = () => {

  const [places, setPlaces] = useState([]);
  useEffect(()=>{
    getPlacesData()
      .then((data) => {
        console.log(data);
        setPlaces(data);
      }
      )
  }, [])
  return (
    <>
        <div className='grid grid-cols-3 h-[91vh] w-[100%] overflow-hidden'>
          <div className="h-full col-span-3 lg:col-span-1 container">
            <ListComponent />
          </div>
          <div className=" h-full w-full col-span-3 lg:col-span-2">
            <MapComponent />
          </div>
        </div>
    </>
  )
}

export default MapPage;
