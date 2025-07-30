import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OffDriveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo Off Corrida</Text>
      <Text>Rota Econômica: Marginal Pinheiros</Text>
      <Text>Gasto estimado: R$ 3,20</Text>
      <Text>Economia comparada: R$ 1,80</Text>
      <Text>Meta de descanso hoje: 6h – faltam 2h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
});