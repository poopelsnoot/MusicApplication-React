import React, {useState, useEffect} from 'react';
import musicService from '../services/music-group-service';
import {FormSearch} from '../components/form-search';

export function MusicGroups(props) {

  
  const [musicGroups, setMusicGroups] = useState({});
 
  useEffect(() => {
    //To pre-load with filtered albums 
    (async ()=> {
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync (0, true);
      setMusicGroups(a);
    })();
  }, []);

  
  
    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = async (e) => 
    {
      console.log (`onSave invoked`);
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync (0, true, e.searchFilter);

      setMusicGroups(a);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
        <FormSearch searchFilter="" onSave={onSave} onUndo={onUndo}/>
        <ul className='container px-4 py4'>
          {musicGroups.pageItems?.map((a) => <li>{a.name}</li>)}          
        </ul>
      </>
    );
}
