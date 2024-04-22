import React from 'react'

export function AlbumDetailsView(props) {

  const musicGroup = props.musicGroup;
  console.log(musicGroup);
  return (
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
      <div className="col-md-7 col-lg-8">
        <form className="needs-validation">
          <div className="row g-3">
            <div className="col-sm-6">
              <label className="form-label">Genre</label>
              <input type="text" className="form-control" value={musicGroup?.strGenre} readOnly/>
            </div>

            <div className="col-sm-6">
              <label className="form-label">Established Year</label>
              <input type="text" className="form-control" value={musicGroup?.establishedYear} readOnly/>
            </div>
        
            <div className="col-sm-6">
              <label className="form-label">Artists: {musicGroup?.artists.length}</label>
              <div>
                {musicGroup?.artists?.map((a) => (
                  <input type="text" className="form-control" value={`${a.firstName} ${a.lastName}`} readOnly/>
                ))}      
              </div>
            </div>

            <div className="col-sm-6">
              <label className="form-label">Albums: {musicGroup?.albums.length}</label>
              <div>
                {musicGroup?.albums?.map((a) => (
                  <input type="text" className="form-control" value={`${a.name}`} readOnly/>
                ))}      
              </div>
            </div>
          </div>
        </form>            
      </div>
    </div>
  )
}
