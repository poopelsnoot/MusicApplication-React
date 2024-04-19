import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AnimalModal(props) {

  const [animal, setAnimal] = useState(props.animal);

  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    const a = { ...animal };
 
    switch (id) {
      case 'name':
        a.name = val;
        break;
      case 'type':
        a.type = val;
        break;
      default:
        return;
    }
    setAnimal(a);
  }

  const onSave = (e) => 
  { 
    const form = document.querySelector('#animalform')
    //const form = document.querySelector('.needs-validation')
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated')
    }
    else{
      e.animal = animal;

      props.setShow(false);
      props.onSave(e);
    }
  }  

  const onUndo = (e) => {
    props.setShow(false);

    props.onUndo(e);
  }

  return (
    <>
    <Modal
      show={props.show}
      onHide={onUndo}
      backdrop="static"
      keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit details of {props.animal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation" id="animalform">
              <div className="row g-3">

                <div className="col-sm-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={animal.name} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    You must provide a name.
                  </div>               
                </div>
                <div className="col-sm-6">
                  <label htmlFor="type" className="form-label">Type</label>
                  <input type="text" className="form-control" id="type" value={animal.type} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    You must provide a type.
                  </div>               
                </div>

              </div>
            </form>            
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onUndo}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
