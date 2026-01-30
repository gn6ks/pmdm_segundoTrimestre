import { Text, Pressable, Image, StyleSheet } from 'react-native';

export default Pokemon = (props) => {
  return (
    <Pressable
      style={styles.mark}
      onPress={props.back}>
      <Image
        style={{
          width: 370,
          height: 450,
        }}
        source={{
          uri: props.photo,
        }}
      />
      <Text onPress={props.play} style={styles.text}>
        Sound
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  mark: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});
