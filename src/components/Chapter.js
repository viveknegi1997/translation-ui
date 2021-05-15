import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard'

function Chapter() {

    const [jsonChapter, setjsonChapter] = useState([]);
    const [moduleExists, setmoduleExists] = useState(true);


    useEffect(() => {
        async function loadData() {
            var pathname = window.location.hash.split('/');
            var comic = pathname[1];
            var chapter = pathname[2];
            const data1 = await import(`../comic/${comic}/${chapter}.js`).catch(() => setmoduleExists(false));
            try {
                setjsonChapter(data1.default)
            }
            catch { }
        }
        loadData();
    }
        , [])
    var jsonChapterItems

    function render() {
        if (moduleExists) {
            jsonChapterItems = jsonChapter.map(obj => <ImageCard key={obj.imgUrl} imgUrl={obj.imgUrl} />)
            return jsonChapterItems
        }
        else
            return <h1>COMIC OR CHAPTER Doesn't Exist</h1>
    }


    return <div>
        {render()}
    </div>
}

export default Chapter;
