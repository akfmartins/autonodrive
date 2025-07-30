import { View, Text, StyleSheet } from "react-native";

export default function ProgressoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desempenho</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Lucro líquido</Text>
        <Text style={styles.value}>R$1.246,00</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Custo com combustível</Text>
        <Text style={styles.value}>R$127,00</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Meta semanal</Text>
        <Text style={styles.value}>R$1.800,00</Text>
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
});
