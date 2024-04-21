import React, {useState, useEffect} from 'react';
import musicService from '../services/music-group-service';
import {FormSearch} from '../components/form-search';
import { MusicPagination } from '../components/pagination';

export function MusicGroups(props) {

  const [musicGroups, setMusicGroups] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const [amountGroups, setAmountGroups] = useState(0);
 
  useEffect(() => {
    //To pre-load with filtered albums 
    (async ()=> {
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync (0, true);
      const b = a.dbItemsCount;
      console.log(a);
      setMusicGroups(a);
      setAmountGroups(b);
    })();
  }, []);

  
  
    //React event bubbling, onSave and onUndo called from form-search
    const onSave = async (e) => 
    {
      console.log (`onSave invoked`);
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync (0, true, e.searchFilter);
      const b = a.dbItemsCount;

      setMusicGroups(a);
      setSearchFilter(e.searchFilter);
      setAmountGroups(b);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    //React event bubbling, onClick called from pagination
    const onClick = async (e) => {
      console.log ("onClick invoked");

      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync (e.pageNr, true, searchFilter);
      const b = a.dbItemsCount;

      setMusicGroups(a);
      setAmountGroups(b);
    }

    return (
      <>
        <FormSearch searchFilter="" onSave={onSave} onUndo={onUndo}/>
        <p className='container px-4 py4'>There are {amountGroups} music groups that matches your search.</p>
        <ul className='container px-4 py4'>
          {musicGroups.pageItems?.map((a) => (
            <li key={a.musicGroupId}>
              {a.name}
            </li>
          ))}          
        </ul>
        <MusicPagination pageCount={musicGroups.pageCount} pageNr={0} onClick={onClick}/>
      </>
    );
}
