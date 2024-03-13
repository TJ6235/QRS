import { View, Text, StyleSheet,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Footer';


const VeggiesPage = (props) => {
  return (
    <View style={styles.veggiesMainWrapper}> 
        <StatusBar barStyle="light-content" backgroundColor="#ff4c00" />
        <View style = {styles.headerWrapper}>
            <TouchableOpacity onPress={() => props.navigation.navigate('homescreen')}>
        <Icon style={styles.leftIcon}name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <Image style={styles.appMainLogo}
         source={{uri:"https://cdn.dribbble.com/users/1365713/screenshots/5381232/media/44dddc4cf88a5e80885811f45180fa16.png?resize=400x300&vertical=center"}} />
         <TouchableOpacity>
         <Icon style={styles.rightIcon}name="shopping-cart" size={25} color="black" />
         </TouchableOpacity>
        </View>
        {/* ////////////Veggieslists/////////// */}
            <ScrollView>
        <View style={styles.veggiesListWrapper}>
           <View style={styles.firstVeggieCategory}>
                <View style={styles.firstItem}>
                    <TouchableOpacity>
                <Icon style={styles.heartIconFirstVeggie}name="heart" size={20} color="red" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Image
                source={{uri:"https://www.greendna.in/cdn/shop/products/cucumber_1_600x.jpg?v=1594219681"}}
                 style={styles.firstItemImage}

                />
                </View>
                <Text style={{fontWeight:'400',margin:5}}>Cucumber</Text>
                <Text style={{fontWeight:'bold',marginLeft:7}}>$0.99 / 1pc</Text>
                <TouchableOpacity style={styles.addToCartVeggiesList}>
                    <Text style={{color:'white',fontSize:12}}>Add to Cart</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.secondItem}>
                <TouchableOpacity>
                <Icon style={styles.heartIconFirstVeggie}name="heart" size={20} color="red" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Image
                source={{uri:"https://static.toiimg.com/photo/105672842.cms"}}
                 style={styles.firstItemImage}

                />
                </View>
                <Text style={{fontWeight:'400',margin:5}}>Carrots</Text>
                <Text style={{fontWeight:'bold',marginLeft:7}}>$1.02 / 1pc</Text>
                <TouchableOpacity style={styles.addToCartVeggiesList}>
                    <Text style={{color:'white',fontSize:12}}>Add to Cart</Text>
                </TouchableOpacity>
                  </View>
           </View>
           {/* /////////////////second category////////// */}
           <View style={styles.secondVeggieCategory}>
                <View style={styles.thirdItem}>
                <TouchableOpacity>
                <Icon style={styles.heartIconFirstVeggie}name="heart" size={20} color="red" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Image
                source={{uri:"https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/shutterstock_2203736779.jpg?itok=NDoeIRX7"}}
                 style={styles.firstItemImage}

                />
                </View>
                <Text style={{fontWeight:'400',margin:5}}>Onion</Text>
                <Text style={{fontWeight:'bold',marginLeft:7}}>$0.75 / 1pc</Text>
                <TouchableOpacity style={styles.addToCartVeggiesList}>
                    <Text style={{color:'white',fontSize:12}}>Add to Cart</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.fourthItem}>
                <TouchableOpacity>
                <Icon style={styles.heartIconFirstVeggie}name="heart" size={20} color="red" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Image
                source={{uri:"https://www.naturefresh.ca/wp-content/uploads/AdobeStock_81295974-min.jpeg"}}
                 style={styles.firstItemImage}

                />
                </View>
                <Text style={{fontWeight:'400',margin:5}}>Bell Pepper</Text>
                <Text style={{fontWeight:'bold',marginLeft:7}}>$1.25 / 1pc</Text>
                <TouchableOpacity style={styles.addToCartVeggiesList}>
                    <Text style={{color:'white',fontSize:12}}>Add to Cart</Text>
                </TouchableOpacity>
                  </View>
           </View>
           {/* /////////////////third category//////////////// */}
           <View style={styles.thirdVeggieCategory}>
                <View style={styles.thirdItem}>
                <TouchableOpacity>
                <Icon style={styles.heartIconFirstVeggie}name="heart" size={20} color="red" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Image
                source={{uri:"https://images.meesho.com/images/products/271633502/i4eto_512.webp"}}
                 style={styles.firstItemImage}

                />
                </View>
                <Text style={{fontWeight:'400',margin:5}}>Raddish</Text>
                <Text style={{fontWeight:'bold',marginLeft:7}}>$0.65 / 1pc</Text>
                <TouchableOpacity style={styles.addToCartVeggiesList}>
                    <Text style={{color:'white',fontSize:12}}>Add to Cart</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.fourthItem}>
                <TouchableOpacity>
                <Icon style={styles.heartIconFirstVeggie}name="heart" size={20} color="red" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Image
                source={{uri:"https://media-cdn2.greatbritishchefs.com/media/yrkhs1dh/img12504.whqc_1426x713q80.jpg"}}
                 style={styles.firstItemImage}

                />
                </View>
                <Text style={{fontWeight:'400',margin:5}}>Cabbage</Text>
                <Text style={{fontWeight:'bold',marginLeft:7}}>$1.5 / 1pc</Text>
                <TouchableOpacity style={styles.addToCartVeggiesList}>
                    <Text style={{color:'white',fontSize:12}}>Add to Cart</Text>
                </TouchableOpacity>
                  </View>
           </View>
        </View>
        <Footer/>
        </ScrollView>
        
    </View>
  )
}

export default VeggiesPage;

const styles = StyleSheet.create({
    veggiesMainWrapper:{
        flex:1

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
    },
    veggiesListWrapper:{
        margin:40,
        flexDirection:'column'
    },
    firstItem:{
        height:210,
        width:140,
        backgroundColor:'#EAEFF2'
    },
    secondItem:{
        height:210,
        width:140,
        backgroundColor:'#EAEFF2'
    },
    firstVeggieCategory:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    secondVeggieCategory:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:40
    },
    thirdItem:{
        height:210,
        width:140,
        backgroundColor:'#EAEFF2'
    },
    fourthItem:{
        height:210,
        width:140,
        backgroundColor:'#EAEFF2'
    },
    heartIconFirstVeggie:{
        padding:10
    },
    firstItemImage:{
        height:70,
        width:70,
        borderRadius:10,
        alignItems:'center',
        marginLeft:35
    },
    addToCartVeggiesList:{
        height:30,
        width:100,
        backgroundColor:'#ff4c00',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginLeft:20,
        marginTop:10
    },
    thirdVeggieCategory:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:40
    },

})