
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import db from "./config"
import firebase from "firebase";

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      diseaseName:"",
      hospitalId:"",
      
    }
  }
  addNew=()=>{
    db.collection("diseases").add({
      diseaseName:this.state.diseaseName,
      hospitalId:this.state.hospitalId,
    })

    this.setState({
      diseaseName:"",
      hospitalId:"",
      
    })
  }
render() {
  return (
    <View style={{backgroundColor:"#FED8B1"}}>
      <TextInput
        style={styles.input}
        placeholder="hospitalID e.g H001"
        onChangeText={(text) => {
          this.setState({ hospitalId: text });
        }}
        value={this.state.hospitalId}
      />

      <TextInput
        style={styles.input}
        placeholder="diseaseName"
        onChangeText={(text) => {
          this.setState({ diseaseName: text });
        }}
        value={this.state.diseaseName}
      />



      <TouchableOpacity
        style={styles.button}
        onPress={() => {
              this.addNew()     
        }}>
        <Text>add</Text>
      </TouchableOpacity>

    </View>
  );
}
}

const styles = StyleSheet.create({
input: {
  backgroundColor: 'lightgreen',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  marginTop: 40,
  borderWidth: 3,
  width: 200,
  height: 50,
  padding:10
},
button: {
  backgroundColor: 'aqua',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  marginTop: 20,
  borderWidth: 2,
  width: 150,
  height: 50,
},

imageIcon: {
  width: "50%",
  height:"20%",
  justifyContent: 'center',
  alignItems:"center",
  alignSelf:"center",
  borderRadius: 10,
  marginTop:20
},
text1: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  color: 'blue',
  marginTop: 20,
  fontStyle: 'italic',

},

text2: {
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  color: 'red',
  marginTop: 20,
  fontStyle: 'italic',
},
text3: {
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  color: 'red',
  marginTop: 20,
  fontStyle: 'italic',
},
});

