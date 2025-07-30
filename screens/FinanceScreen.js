import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FinanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finanças & Impostos</Text>
      <Text>Ganhos Líquidos: R$ 2.800</Text>
      <Text>Combustível: R$ 480</Text>
      <Text>IPVA/Seguro proporcional: R$ 120</Text>
      <Text>Lucro Mensal Estimado: R$ 2.200</Text>
      <Text style={styles.note}>Relatório exportável para contador disponível</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
  note: { color: '#aaa', marginTop: 20 },
});