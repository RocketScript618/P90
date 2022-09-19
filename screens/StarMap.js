import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, StyleSheet, StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {WebView} from "react-native-webview"

export default class StarMapScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude: "",
            longitude: ""
        }
    }

    render() {
        const {longitude, latitude} = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude= 
        ${longitude}&latitude=${latitude}&constellations=true&constellationlabels=
        true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&show
        date=false&showposition=false`
        return (
          <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

                  <TextInput style={styles.inputStyle} placeholder= "Ingresa la longitud"
                  placeholderTextColor={"#ffffff"} onChangeText={(text)=>{
                      this.setState({
                          longitude: text
                      })
                  }}/>

                  <TextInput style={styles.inputStyle} placeholder= "Ingresa la latitud"
                  placeholderTextColor={"#ffffff"} onChangeText={(text)=>{
                      this.setState({
                          latitude: text
                      })
                  }}/>

              </View>
              <WebView scalesPageToFit ={true} 
                  source={{uri:path}}
                  style={{marginTop:20, marginBottom: 20}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})
