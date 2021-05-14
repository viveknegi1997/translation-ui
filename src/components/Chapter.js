import React from 'react';
import ImageCard from './ImageCard'

import data from '../comic/fatheridontwanttogetmarried/data.js'
function Chapter() {

  const dataComponents=data.map(obj => <ImageCard imgUrl={obj.imgUrl} />)

  //import("../comic/fatheridontwanttogetmarried/data1.js").then(data1 => console.log(data1.default))
  const component = React.lazy(() => import("../comic/fatheridontwanttogetmarried/data1.js"));
  console.log(component)
  console.log(dataComponents)
  return <div>
    {dataComponents}
  </div>
}

export default Chapter;
