import React from 'react'
import { Col } from 'antd';

function GridCards(props) {
  return (
      //one column= 24 -> if 6, total 4 cards in a column
      //when the window gets narrower, the shown cards will be decreased.
      <Col lg={6} md={8} xs={24}>
        <div style={{ position:'relative'}}>
            <a href={`/movie/${props.movieId}`} >
                <img style={{ width:'100%', height:'320px' }}
                    src={props.image} alt={props.movieName}/>
            </a>

        </div>
      </Col>
 
  )
}

export default GridCards