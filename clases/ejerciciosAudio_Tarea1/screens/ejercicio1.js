import { View, Button } from "react-native";
import { Audio } from "expo-av";

export default function Ejercicio1() {
  async function playLocalSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../audio/audio.mp3")
    );
    await sound.playAsync();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center", // vertical
        alignItems: "center",     // horizontal
      }}
    >
      <Button title="pulsar" onPress={playLocalSound} />
    </View>
  );
}
