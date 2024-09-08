import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function History({ route }) {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.operation}</Text>}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={<Text style={styles.emptyComponent}>No data</Text>}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
  },
  emptyComponent: {
    fontSize: 18,
    padding: 10,
    color: 'gray',
  },
  itemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});

export default History;