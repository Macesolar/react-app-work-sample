import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './popup.css';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';

const Popup = ({ show, handleClose }) => {
    const [logins, setLogins] =useState(false)
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{logins ? 'Login' : 'Register'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {logins ? (
        <Login setLogins={setLogins}/>
        ) : (
        <Signup setLogins={setLogins}/>
        )}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
