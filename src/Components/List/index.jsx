import React from "react";
import { ItemContext } from '../../App';
import { useContext, useEffect, useState } from 'react';

const List = () => {
  const [list, setList] = useState([
    {
      text: 'Lecture',
      assignee: 'Emily',
      difficulty: 3,
      complete: false
    },
    {
      text: 'Meeting',
      assignee: 'Jimbob',
      difficulty: 10,
      complete: false
    },
    {
      text: 'Lab',
      assignee: 'Josh',
      difficulty: 8,
      complete: false
    },
  ]);
}

export default List;