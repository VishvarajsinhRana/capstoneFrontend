import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>#placeholder#</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='#placeholder#'
              label='#placeholder#'
              path='/services'
            />
            <CardItem
              src='images/img-home.jpg'
              text='#placeholder#'
              label='#placeholder#'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='#placeholder#'
              label='#placeholder#'
              path='/services'
            />
            <CardItem
              src='images/img-home.jpg'
              text='#placeholder#'
              label='#placeholder#'
              path='/products'
            />
            <CardItem
              src='images/img-home.jpg'
              text='#placeholder#'
              label='#placeholder#'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;