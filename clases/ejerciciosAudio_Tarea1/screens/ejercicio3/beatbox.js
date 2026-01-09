import { View, Pressable, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const audios = [
    require("../../audio/drumkit/chh1.wav"),
    require("../../audio/drumkit/chh2.wav"),
    require("../../audio/drumkit/chh3.wav"),
    require("../../audio/drumkit/chh4.wav"),
    require("../../audio/drumkit/dr_tb_1.wav"),
    require("../../audio/drumkit/dr_tb_2.wav"),
    require("../../audio/drumkit/dr_tb_3.wav"),
    require("../../audio/drumkit/dr_tb_4.wav"),
    require("../../audio/drumkit/kk1.wav"),
    require("../../audio/drumkit/kk2.wav"),
    require("../../audio/drumkit/kk3.wav"),
    require("../../audio/drumkit/lo-fi-cow.wav"),
    require("../../audio/drumkit/sn1.wav"),
    require("../../audio/drumkit/sn2.wav"),
    require("../../audio/drumkit/sn3.wav"),
    require("../../audio/drumkit/sn4.wav"),
  ];

  const playLocalSound = async (option) => {
    const { sound } = await Audio.Sound.createAsync(audios[option]);
    await sound.playAsync();
  };

  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 45, fontWeight: "bold" }}>Beat Box</Text>

      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(0)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(1)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(2)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(3)}
              style={styles.button}
            ></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(4)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(5)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(6)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(7)}
              style={styles.button}
            ></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(8)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(9)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(10)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(11)}
              style={styles.button}
            ></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(12)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(13)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(14)}
              style={styles.button}
            ></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              onPress={() => playLocalSound(15)}
              style={styles.button}
            ></Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 80,
  },
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    width: 80,
    height: 80,
    backgroundColor: "blue",
  },
});
