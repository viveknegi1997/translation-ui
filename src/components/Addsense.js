import React,{ useEffect } from 'react';


function Addsense() {

    useEffect(() => {

            let script = document.createElement('script');
            script.setAttribute('data-ad-client', 'ca-pub-6138150253930726');
            script.setAttribute('async','');
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            document.getElementsByTagName('head')[0].appendChild(script);

    }, [])

    return <></>;
}

export default Addsense;
