import React from "react";

function example(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/background.jpg")}
    >
      <View style={styles.container}>
        <Image style={styles.log} source={require("./assets/logo-red.png")} />
        <View style={styles.buttonContainer}>
          <View style={styles.login}>
            <Button title="login" />
          </View>
          <View style={styles.register}>
            <Button title="Register" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  log: {
    width: 150,
    height: 150,
    marginTop: 80,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    bottom: 20,
  },
  login: {
    width: 300,
    height: 50,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  register: {
    width: 300,
    height: 50,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 120,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});

export default example;
