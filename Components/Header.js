import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';


const Header = () => {
  return (
    
    <View style = {Styles.headerMainWrapper}>
    <StatusBar barStyle="light-content" backgroundColor="#ff4c00" />
        <View style = {Styles.headerWrapper}>
            <TouchableOpacity>
        <Icon style={Styles.leftIcon}name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Image style={Styles.appMainLogo}
         source={{uri:"https://cdn.dribbble.com/users/1365713/screenshots/5381232/media/44dddc4cf88a5e80885811f45180fa16.png?resize=400x300&vertical=center"}} />
         <TouchableOpacity>
         <Icon style={Styles.rightIcon}name="shopping-cart" size={25} color="black" />
         </TouchableOpacity>
        </View>
     </View> 
 
  )
}

export default Header


const Styles = StyleSheet.create({

    headerMainWrapper:{
    //    flex:1
    },
    headerWrapper:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    appMainLogo:{
        height:40,
        width:80,
        marginLeft:90
    },
    rightIcon:{
        paddingLeft:90,
        marginTop:5
    },
    leftIcon:{
        marginRight:0,
        marginTop:5
    }

})