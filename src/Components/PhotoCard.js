import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const PhotoCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>NASA Photo of the Day</CardTitle>
          <CardImg height='800px' src={props.url} />
          <CardSubtitle>{props.title}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;
