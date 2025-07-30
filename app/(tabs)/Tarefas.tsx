import { View, Text, FlatList, StyleSheet } from "react-native";

const tarefas = [
  { id: "1", titulo: "Verificar sistema de freios", prioridade: "Alta" },
  { id: "2", titulo: "Calibrar pneus", prioridade: "Média" },
];

export default function TarefasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tarefas pendentes</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.prioridade}>Prioridade: {item.prioridade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#ffffff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  item: { padding: 16, borderBottomWidth: 1, borderColor: "#ccc" },
  titulo: { fontSize: 18 },
  prioridade: { fontSize: 14, color: "#888" },
});
