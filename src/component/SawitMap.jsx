// File: src/component/SawitMap.jsx import React, { useState, useEffect, useCallback } from 'react'; import { DeckGL } from '@deck.gl/react'; import { StaticMap } from 'react-map-gl'; import { GeoJsonLayer } from '@deck.gl/layers';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2t1eDZjbjJrMGh0ZzJ2bXN1eWZ0Y2t3ZyJ9.6OPZ0vS-Xaepu_zUqHRtOw';

export default function SawitMap() { const [viewState, setViewState] = useState({ longitude: 101.414, latitude: -1.452, zoom: 12, pitch: 45, bearing: 0 });

const [hoverInfo, setHoverInfo] = useState(null); const [showLayer, setShowLayer] = useState(true); const [totalLuas, setTotalLuas] = useState(0);

const onHover = useCallback(({ x, y, object }) => { if (object) { setHoverInfo({ x, y, properties: object.properties }); } else { setHoverInfo(null); } }, []);

const sawitUrl = '/shp_sawit_lb_malako.geojson'; const batasNagariUrl = '/shp_nagari_lb_malako.geojson';

useEffect(() => { fetch(sawitUrl) .then(res => res.json()) .then(data => { const total = data.features.reduce((sum, f) => sum + (f.properties.luas || 0), 0); setTotalLuas(total); }); }, []);

const sawitLayer = new GeoJsonLayer({ id: 'sawit-layer', data: sawitUrl, filled: true, stroked: true, visible: showLayer, getFillColor: [34, 139, 34, 180], getLineColor: [0, 0, 0, 100], lineWidthMinPixels: 1, pickable: true, autoHighlight: true, onHover, onClick: ({ object }) => { if (object) alert(Luas: ${object.properties.luas} m²); } });

const batasNagariLayer = new GeoJsonLayer({ id: 'batas-nagari', data: batasNagariUrl, filled: false, stroked: true, getLineColor: [0, 0, 255, 200], lineWidthMinPixels: 2, pickable: false });

const downloadGeoJSON = () => { const link = document.createElement('a'); link.href = sawitUrl; link.download = 'sawit_aktif.geojson'; document.body.appendChild(link); link.click(); document.body.removeChild(link); };

return ( <div style={{ position: 'relative', width: '100vw', height: '100vh' }}> <DeckGL initialViewState={viewState} controller={true} layers={[batasNagariLayer, sawitLayer]} > <StaticMap
mapboxAccessToken={MAPBOX_TOKEN}
mapStyle="mapbox://styles/mapbox/satellite-v9"
/> </DeckGL>

<div className="absolute top-4 left-4 bg-white p-3 rounded shadow z-10 w-64">
    <h2 className="text-lg font-semibold mb-2">Legenda</h2>
    <div className="flex items-center space-x-2 mb-1">
      <div className="w-4 h-4 bg-green-700 rounded"></div>
      <span>Sawit Aktif</span>
    </div>
    <div className="flex items-center space-x-2 mb-1">
      <div className="w-4 h-0.5 bg-blue-600"></div>
      <span>Batas Nagari</span>
    </div>
    <div className="text-sm mb-2">Total Luas: <strong>{totalLuas.toLocaleString()} m²</strong></div>
    <button onClick={() => setShowLayer(!showLayer)} className="w-full text-sm bg-green-600 text-white px-3 py-1 rounded mb-2">
      {showLayer ? 'Sembunyikan Layer' : 'Tampilkan Layer'}
    </button>
    <button onClick={downloadGeoJSON} className="w-full text-sm bg-blue-600 text-white px-3 py-1 rounded">
      Unduh GeoJSON
    </button>
  </div>

  {hoverInfo && (
    <div
      className="absolute z-20 pointer-events-none bg-white text-sm p-2 rounded shadow"
      style={{ left: hoverInfo.x + 10, top: hoverInfo.y + 10 }}
    >
      <div><strong>Luas:</strong> {hoverInfo.properties.luas} m²</div>
      {hoverInfo.properties.nama && <div><strong>Nama:</strong> {hoverInfo.properties.nama}</div>}
    </div>
  )}
</div>

); }

      
