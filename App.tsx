import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';

import logo from './assets/logo.png';

export default function App() {

  const [data, setData] = useState('');

  async function findMyIp() {

    setData('Descobrindo IP ...');

    const ip = await fetch('http://httpbin.org/ip');

    const data = await ip.json();

    setData(data.origin);

  }


  return (
    <>
      <StatusBar backgroundColor="#333" />
      <View style={styles.container}>
        <View style={styles.body}>
          <Image source={logo} />
          <Text style={styles.ip}>{data}</Text>
          <Button title="Descobrir meu IP" onPress={findMyIp} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.made}>Feito com ❤ por Darlan Thiago</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ip: {
    color: "#fff",
    fontSize: 20,
    paddingVertical: 20
  },
  footer: {
    paddingVertical: 10,
  },
  made: {
    color: '#fff',
    textAlign: "center"
  }
});
