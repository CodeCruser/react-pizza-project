import React from 'react'
import pizza from '../assets/pizza.jpg'
import '../styles/Contact.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  position: 'absolute',
  bottom: -470,
};


const position = {
  lat: 35.776025,
  lng: -5.802859
}; 


const onLoad = marker => {
  console.log('marker: ', marker)
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className=" element1">
      <div>
        <img src={pizza} alt="Image description" />
      </div>
      <div className="form1">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div>
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
        </div>
        
        <LoadScript
      googleMapsApiKey="AIzaSyC2hgOXtj7IbQ6pWxvpyRz1QJigMDb2hU0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={16}
        
      >
        <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </LoadScript>
      
    </div>
  )
}
export default ContactForm;
