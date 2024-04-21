import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function FormSearch(props) {

  const [searchFilter, setSearchFilter] = useState(props.searchFilter || "");

  //Needed if param update only with react-router as
  //react-router do not rerender if only param has changed
  useEffect(() => {

    setSearchFilter(props.searchFilter);
  }, [props]);


  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    let s = searchFilter;
 
    switch (id) {
      case 'search':
        s = val;
        break;
      default:
        return;
    }
    setSearchFilter(s);
  }

  const onSave = (e) => 
  { 
    e.searchFilter = searchFilter;
    props.onSave(e);
  }  

  return (
    <>
      <div className="container px-4 py-4" id="edit-item">
        
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-8">
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="name" className="form-label">Search</label>
                  <input type="text" className="form-control" id="search" value={searchFilter} onChange={handleChange}/>
                </div>
              </div>
            </form>            
          </div>
        </div>
        <button className="btn btn-primary" onClick={onSave}>Search</button>
      </div>
    </>
  )
}
