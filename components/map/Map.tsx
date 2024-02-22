'use client';

import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

export function ChangeView({ coords }: { coords: LatLngTuple }) {
	// Get the map instance using the useMap hook
	const map = useMap();
	// Set the view of the map to the given coordinates
	map.setView(coords, 12);
	return null;
}

export default function Map() {
	const [geoData, setGeoData] = useState({ lat: 31.5, lng: 34.46667 });

	// Define the center of the map
	const center = [geoData.lat, geoData.lng];

	return (
		// Map component with the center and zoom props
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<MapContainer
				center={center as LatLngTuple}
				zoom={12}
				style={{
					height: '50vh',
					width: '50vw',
				}}
				className="my-4 max-w-xl"
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{geoData.lat && geoData.lng && (
					<Marker position={[geoData.lat, geoData.lng]} />
				)}
				<ChangeView coords={center as LatLngTuple} />
			</MapContainer>
		</div>
	);
}
