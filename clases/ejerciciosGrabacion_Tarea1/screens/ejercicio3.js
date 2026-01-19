import { View, Button, Text, TextInput, FlatList } from "react-native";
import { Audio } from "expo-av";
import { useState } from "react";

export default function Ejercicio3() {
  const [recording, setRecording] = useState(null); // audio actual
  const [recordings, setRecordings] = useState({}); // objeto con las propiedades para hacer el play
  const [nameAudio, setNameAudio] = useState(""); // nombre de las pistas de TextInput
  const [lastUri, setLastUri] = useState(null); // el uri de la grabacion para guardarla

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      );

      setRecording(recording);
    } catch (err) {
      console.error(err);
    }
  }

  // para si hay audio y guarda la uri que toca, si no hay audio en marcha no hace nada
  async function stopRecording() {
    if (!recording) return;

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();

    setLastUri(uri);
    setRecording(null);
  }

  // mete el nombre del TextInput en lowerCase y propiedad de su URI correspondiente, limpia el nombre y la uri despues
  function saveRecording() {
    if (!lastUri || !nameAudio.trim()) return;

    setRecordings((prev) => ({
      ...prev,
      [nameAudio.trim().toLowerCase()]: lastUri,
    }));

    setNameAudio("");
    setLastUri(null);
  }

  // busca por el nombre dentro de recordings y hace un playAsync de eso
  async function playRecording() {
    const key = nameAudio.trim().toLowerCase();
    const uri = recordings[key];

    if (!uri) {
      alert("No existe un audio con ese nombre");
      return;
    }

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

      <Button title="Save recording" onPress={saveRecording} />
      <Button title="Play recording" onPress={playRecording} />

      <Text>Nombre del audio:</Text>
      <TextInput
        value={nameAudio}
        onChangeText={setNameAudio}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8, width: 200 }}
      />
      <FlatList
        data={Object.keys(recordings)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
