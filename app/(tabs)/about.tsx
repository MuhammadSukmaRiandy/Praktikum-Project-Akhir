import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function BiodataScreen() {
  const handlePress = () => {
    alert("Halo, Saya Muhammad Sukma Riandy!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: "https://i.pinimg.com/enabled/236x/2a/54/35/2a54353d230d2f61617fe999eaa9ea10.jpg", // Ganti URL dengan gambar
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.name}>Muhammad Sukma Riandy</Text>
      <View style={styles.descriptionBox}>
        <Text style={styles.detail}>📅 Umur: 20 Tahun</Text>
        <Text style={styles.detail}>💼 Pekerjaan: Developer</Text>
        <Text style={styles.detail}>✈️ Hobi: Traveler</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f7fa", // Background biru muda
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#000000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    color: "#000000",
    marginBottom: 15,
    textTransform: "uppercase",
  },
  descriptionBox: {
    borderWidth: 2,
    borderColor: "#333",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  detail: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
    fontStyle: "italic",
  },
});
