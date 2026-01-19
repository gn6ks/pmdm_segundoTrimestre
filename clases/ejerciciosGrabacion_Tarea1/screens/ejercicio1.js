import { View, Button } from "react-native";
import { Audio } from "expo-av";
import { useState } from "react";

export default function Ejercicio1() {
  const [recording, setRecording] = useState(null);
  const [uri, setUri] = useState(null);

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      setRecording(recording);
    } catch (err) {
      console.error(err);
    }
  }

  async function stopRecording() {
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setUri(uri);
    setRecording(null);
  }

  async function playRecording() {
    if (!uri) return;

    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {recording ? (
        <Button title="Stop recording" onPress={stopRecording} />
      ) : (
        <Button title="Start recording" onPress={startRecording} />
      )}

      <Button title="Play recording" onPress={playRecording} />
    </View>
  );
}
