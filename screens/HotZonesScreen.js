import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";

export default function HotZoneScreen() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permissão negada");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const hotZones = [
    { id: 1, lat: -23.5329, lng: -46.7919, nome: "Zona A" },
    { id: 2, lat: -23.5371, lng: -46.7894, nome: "Zona B" },
  ];

  if (!region) {
    return (
      <View style={styles.loading}>
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  return (
    <MapView style={styles.map} region={region}>
      {hotZones.map((zone) => (
        <Marker
          key={zone.id}
          coordinate={{ latitude: zone.lat, longitude: zone.lng }}
          title={zone.nome}
          description="Alta demanda"
        />
      ))}
      {hotZones.map((zone) => (
        <Circle
          key={`circle-${zone.id}`}
          center={{ latitude: zone.lat, longitude: zone.lng }}
          radius={200}
          strokeColor="rgba(255,0,0,0.5)"
          fillColor="rgba(255,0,0,0.2)"
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
