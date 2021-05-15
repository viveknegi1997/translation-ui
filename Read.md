In short:
If you have multiple Routes, that match the path, all of them will be displayed.
If you have a Switch around the Routes, only the first matching Route will be displayed


hooks can only be used inside function components not inside class

If you use gh-pages for React app deployment – just put CNAME file with your domain into public folder.

hashrouter for github pages single page app
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import { HashRouter as  Switch, Route } from 'react-router-dom';


var pathname = window.location.location.split('/'); //browserrouter
var pathname = window.location.hash.split('/'); //hashrouter