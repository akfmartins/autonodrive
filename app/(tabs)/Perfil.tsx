import { View, Text, StyleSheet } from "react-native";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manutenção e Veículo</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Próxima troca de óleo</Text>
        <Text style={styles.value}>em 350km</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Manutenção preventiva</Text>
        <Text style={styles.value}>Verificada</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Estado do veículo</Text>
        <Text style={styles.status}>🟢 Boa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    padding: 16,
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    marginBottom: 10,
  },
  label: { fontSize: 16, color: "#666" },
  value: { fontSize: 20, fontWeight: "bold", marginTop: 4 },
  status: { fontSize: 20, fontWeight: "bold", color: "#2e7d32", marginTop: 4 },
});
