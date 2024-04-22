import React, {useState, useEffect} from 'react';
import musicService from '../services/music-group-service';
import {FormSearch} from '../components/form-search';
import { MusicPagination } from '../components/pagination';
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router-dom';
import {AlbumDetailsView} from '../components/album-details-view';
import AlbumList from '../components/album-list';

export function MusicGroups()
{
    const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
    return (
      <div className="container px-4 py-4 text-start">

          <h2 className="pb-2 border-bottom">Music Groups</h2>
          <Outlet context={service}/>
      </div>
  );
}

export function MusicGroupsList() {

  const service = useOutletContext();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState();

  const [searchFilter, setSearchFilter] = useState("");
 
  useEffect(() => {
    //To pre-load with filtered albums 
    async function readWebApi() {
      const a = await service.readMusicGroupsAsync(0, true, null, 10);
      console.log(a);

      setServiceData(a);
    }
    readWebApi();
  }, [service]);

  
  
    //React event bubbling, onSave and onUndo called from form-search
    const onSave = async (e) => 
    {
      console.log (`onSave invoked`);
      
      const a = await service.readMusicGroupsAsync (0, true, e.searchFilter);
    
      setServiceData(a);
      setSearchFilter(e.searchFilter);
     
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    //React event bubbling, onClick called from pagination
    const onClick = async (e) => {
      console.log ("onClick invoked");

      const a = await service.readMusicGroupsAsync (e.pageNr, true, searchFilter);

      setServiceData (a);
    }

    const onView = (e) => {
      const id = e.currentTarget.dataset.btnid;
      navigate(`/musicGroups/${id}`);
    }

    return (
      <>
        <FormSearch searchFilter="" onSave={onSave} onUndo={onUndo}/>
        <AlbumList serviceData={serviceData} onClick={onView}/>
        <MusicPagination serviceData={serviceData} pageNr={0} onClick={onClick}/>
      </>
    );
}

export function MusicGroupsView() {
  const service = useOutletContext();
  const { id } = useParams();

  //to read the WebApi async to initialize a React component
  const [musicGroup, setMusicGroup] = useState();

  useEffect(() => {
    async function readWebApi() {
      const data = await service.readMusicGroupAsync(id, false);
      setMusicGroup(data);
    }
    readWebApi(id);

  }, [service,id])

  if (musicGroup) {
    return (
      <>
        <h1>
          {musicGroup?.name} 
        </h1>
  
        <AlbumDetailsView musicGroup={musicGroup}/>
      </>
      );
  }

  else {
    return (<span>The music group doesn't exist.</span>);
  }
  
}
