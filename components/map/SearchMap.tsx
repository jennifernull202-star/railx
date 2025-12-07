"use client";

import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const defaultCenter = {
  lat: 39.5,
  lng: -98.35,
};

export default function SearchMap({ 
  filters 
}: { 
  filters?: Record<string, any>;
}) {
  const [listings, setListings] = useState<any[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const fetchListings = async (bounds: google.maps.LatLngBounds) => {
    try {
      const data = await fetch("/api/map-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          north: bounds.getNorthEast().lat(),
          south: bounds.getSouthWest().lat(),
          east: bounds.getNorthEast().lng(),
          west: bounds.getSouthWest().lng(),
          filters: filters || {},
        }),
      }).then((r) => r.json());

      setListings(data || []);
    } catch (err) {
      console.error("Map search error:", err);
    }
  };

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onBoundsChanged = useCallback(() => {
    if (map) {
      const bounds = map.getBounds();
      if (bounds) fetchListings(bounds);
    }
  }, [map, filters]);

  useEffect(() => {
    if (map) {
      const bounds = map.getBounds();
      if (bounds) fetchListings(bounds);
    }
  }, [filters]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={4}
      onLoad={onLoad}
      onBoundsChanged={onBoundsChanged}
    >
      <MarkerClusterer>
        {(clusterer) =>
          listings.map((listing) => (
            <Marker
              key={listing._id}
              clusterer={clusterer}
              position={{
                lat: listing.location?.lat || 0,
                lng: listing.location?.lng || 0,
              }}
              onClick={() =>
                (window.location.href = `/marketplace/${listing.category}/${listing.slug}`)
              }
              title={listing.title}
            />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  );
}
