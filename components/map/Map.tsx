'use client';

import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

export function ChangeView({ coords }: { coords: LatLngTuple }) {
	const map = useMap();
	map.setView(coords, 12);
	return null;
}

export default function Map() {
	const [geoData, setGeoData] = useState({ lat: -6.2, lng: 106.816666 });

	const center = [geoData.lat, geoData.lng];

	return (
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
