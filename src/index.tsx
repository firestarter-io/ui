import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import * as L from 'leaflet';
import 'esri-leaflet';
import 'esri-leaflet-geocoder';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);
