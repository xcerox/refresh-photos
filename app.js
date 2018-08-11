/*
 * Module dependencies
 */

import React from 'react';
import ImageGrid from './components/imagesGrid.jsx';
import ImageActions from './actions/imageAction';
import ReactDOM from 'react-dom';

ReactDOM.render( < ImageGrid / > , document.getElementById("container"));
setInterval(ImageActions.fetchList, 5000);
