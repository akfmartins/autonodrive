import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  note: {
    marginTop: 16,
    fontStyle: "italic",
    color: "#888",
  },
});

export default function PerformanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desempenho do Veículo</Text>
      <Text>Velocidade Média: 60 km/h</Text>
      <Text>Consumo Médio: 12 km/l</Text>
      <Text>Distância Percorrida: 150 km</Text>
      <Text>Tempo de Viagem: 2 horas</Text>
      <Text style={styles.note}>Dados atualizados em tempo real</Text>
    </View>
  );
}
