





import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Component } from 'react';

const windowwidth = Dimensions.get('window').width;
const App = () => {
  const [active_player, setActive_player] = useState('X');
  const [markers, setMarkers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const markPosition = (position) => {
    if (!markers[position]) {
      let temp = [...markers]
      temp[position] = active_player;
      setMarkers(temp);
      if (active_player === 'X') {
        setActive_player('O');
      } else {
        setActive_player('X');
      }
    }
  };
  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  useEffect(() => {
    const winner = calculateWinner(markers);
    if(winner === 'X'){
      Alert("Player X Won!")
      resetMarkers()
    }else if(winner === 'O'){
      Alert("Player O Won!")
      resetMarkers()
    }
  }, [markers])


  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: active_player === 'X' ? '#3498DB' : '#A7286C'},
        ]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn </Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable style={styles.cell} onPress={() => markPosition(0)}>
          {markers[0] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[0] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(1)}>
          {markers[1] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[1] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(2)}>
          {markers[2] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[2] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(3)}>
          {markers[3] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[3] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(4)}>
          {markers[4] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[4] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(5)}>
          {markers[5] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[5] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(6)}>
          {markers[6] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[6] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(7)}>
          {markers[7] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[7] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(8)}>
          {markers[8] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[8] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
      </View>
      <Pressable style={styles.cancelBtn} onPress={() => resetMarkers()}>
        <Image
          source={require('./assets/img/replay.png')}
          style={styles.cancelIcon}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 8,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#283747',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  cell: {
    width: windowwidth / 3.3,
    height: windowwidth / 3.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
  },
  icon: {
    height: 62,
    width: 62,
  },
  cancelBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cancelIcon: {
    height: 80,
    width: 80,
  },
});
