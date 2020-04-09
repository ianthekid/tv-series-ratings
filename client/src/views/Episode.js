import React from 'react';
import { Col } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'

function Episode(props) {
  return (
    <Col className={`mx-0 my-2 rating-${Math.floor(props.rating)}`}>
      <a data-tip data-for={props.id} href={`https://www.imdb.com/title/${props.imdb}/`} target="_blank">
        {props.rating}
      </a>
      <ReactTooltip id={props.id}>
        <span>{props.title}</span>
      </ReactTooltip>
    </Col>
  );
}

export default Episode;