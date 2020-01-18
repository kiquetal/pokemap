import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Dimensions} from 'react-native';
import  { Form, Item, Label, Input, Button } from 'native-base';

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const backgroundImage = require("../assets/landing.jpg");
class SigIn extends React.Component{

    state={
        email:"",
        password:""
    };

    logIn=()=>{

      var email = this.state.email;
      var password = this.state.password;
      this.props.signIn(email,password);

    };
    render(){
        return (<View style={{flex:1}}>

            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                 <View style={styles.inputStyles}>

                     <Form>
                         <Item floatingLabel>
                             <Label>email</Label>
                             <Input style={{}} autoCorrect={false}
                             onChangeText={(email)=>{
                                 this.setState({email})
                             }}
                             ></Input>
                         </Item>
                         <Item floatingLabel>
                             <Label>Password</Label>
                             <Input
                                 style={{}} autoCorrect={false}
                                 onChangeText={(password)=>{
                                     this.setState({password})
                                 }}
                                 secureTextEntry
                             />
                         </Item>

                     </Form>
                     <View style={{marginTop:10}}>

                         <Button
                           primary
                           block
                           style={{backgroundColor:"#2196f3"}}
                           onPress={this.logIn}
                         >
                             <Text                            style={{color:"white"}}
                             >Sign In/ Sign Up</Text>
                         </Button>
                     </View>

                 </View>
            </ImageBackground>
        </View>)


    }


}
export default SigIn;

const styles= StyleSheet.create({
backgroundImage:{
    flex:1,
    resizeMode:'cover',
    width:width,
    height:height
},
    inputStyles:{
    justifyContent:'center',
    flexDirection:'column',
    flex:1,
    margin:10
    }

});
