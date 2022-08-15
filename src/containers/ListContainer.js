import React, {useState} from 'react'
import List from '../components/List';
import ListItem from '../components/ListItem';
import Favorites from '../components/Favorites';

const ListContainer = () => {

  return (
      <div>
          <h1>List container</h1>
          <Favorites/>
          <ListItem/>
      </div>
  )
}

export default ListContainer;
