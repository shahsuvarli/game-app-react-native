import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameScreen from "@/screens/GameScreen";
import Colors from "@/constants/colors";
import GameOverScreen from "@/screens/GameOverScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  useFonts({
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickedNumberHandler(selectedNumber: number) {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("../../assets/images/dices.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.25 }}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
