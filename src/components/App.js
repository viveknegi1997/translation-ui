import React from 'react';
import ImageCard from './ImageCard'

import data from '../comic/fatheridontwanttogetmarried/data.js'
function App() {

  const dataComponents=data.map(obj => <ImageCard imgUrl={obj.imgUrl} />)
  console.log(dataComponents)
  return <div>
    {dataComponents}
  </div>
}

export default App;
