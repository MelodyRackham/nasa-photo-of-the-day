import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PhotoCard from './Components/PhotoCard';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [nasaData, setNasaData] = useState({
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    title: '',
  });

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(error => {
        console.log('uh oh', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className='nasaPhoto'>
            <PhotoCard
              key={nasaData.id}
              date={nasaData.date}
              explanation={nasaData.explanation}
              title={nasaData.title}
              url={nasaData.url}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
