import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IntelligenceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IA de Rendimento</Text>
      <Text>Zona recomendada: Av. Paulista</Text>
      <Text>Lucro estimado/hora: R$42</Text>
      <Text>Tráfego leve e clima favorável</Text>
      <Text>Sugestão: Rodar por mais 1h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
});