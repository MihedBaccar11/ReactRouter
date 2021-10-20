import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {InputGroup, FormControl } from 'react-bootstrap'


const AddModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [posterURL, setposterURL] = useState("")
    const [rating, setRating] = useState()


  return (
    <div >
      <Button color="danger" onClick={toggle}>Add Movie</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New Movie</ModalHeader>
        <ModalBody>
        <InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg" >Title/Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>setName(e.target.value)}
            />
        </InputGroup>
        <br />
        <InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg" >Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
            onChange={(e)=>setDescription(e.target.value)}
            />
        </InputGroup>
        <br />   
        <InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Image Src</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>setposterURL(e.target.value)}
            />
        </InputGroup>
        <br />
        <InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg"
            >Rating</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>setRating(e.target.value)}
            />
        </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="blue" onClick={()=>props.addMovie({id:Math.random(),name,description,posterURL,rating})}>Add</Button>{' '}
          <Button color="red" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddModal;