import { useState, useRef } from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

export default function Ejercicio1() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState("back");
  const [photo, setPhoto] = useState(null);

  const camera = useRef(null);

  const takePicture = async () => {
    if (camera.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const img = await camera.current.takePictureAsync(options);
        setPhoto(img.uri);
      } catch (error) {
        console.log("Error taking picture:", error);
      }
    }
  };

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          We need your permission to show the camera
        </Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  // Preview Mode
  if (photo) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.preview} />
        <View style={styles.previewButtons}>
          <Button title="Discard and Retake" onPress={() => setPhoto(null)} />
        </View>
      </View>
    );
  }

  // Camera Mode
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={camera} facing={type}>
        <View style={styles.controlsContainer}>
          <Pressable
            style={styles.flipButton}
            onPress={() => setType(type === "back" ? "front" : "back")}
          >
            <MaterialIcons name="flip-camera-android" size={32} color="white" />
          </Pressable>

          <Pressable onPress={takePicture} style={styles.shutterButton}>
            <MaterialIcons name="camera" size={80} color="white" />
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  preview: {
    flex: 1,
    resizeMode: "contain",
  },
  previewButtons: {
    padding: 20,
    backgroundColor: "white",
  },
  controlsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  shutterButton: {
    marginBottom: 10,
  },
  flipButton: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});
