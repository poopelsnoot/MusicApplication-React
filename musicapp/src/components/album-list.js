import React from 'react';

export default function AlbumList(props) {
    const albums = props.serviceData?.pageItems;
    const amount = props.serviceData?.dbItemsCount;

    return (
        <>
        <p className='container px-4 py4'>There are {amount} music groups that matches your search.</p>
        <div className='container px-4 py4'>
          {albums?.map((a) => (
            <div key={a.musicGroupId}>
              <button className='btn btn-primary' data-btnid={a.musicGroupId} onClick={props.onClick}>More info</button>
              {a.name}
              <p/>
            </div>
          ))}          
        </div>
        </>
    );
}