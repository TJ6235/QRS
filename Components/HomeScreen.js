    import { View, Text, StyleSheet,StatusBar, TouchableOpacity,Image, ScrollView } from 'react-native'
    import React from 'react'
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Footer from './Footer';


    const HomeScreen = (props) => {
    return (
        <View style={styles.homeScreenMainWrapper}>
            <StatusBar barStyle="light-content" backgroundColor="#ff4c00" />
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={() => props.navigation.navigate('homescreen')}>
            <Icon style={styles.leftIcon}name="bars" size={25} color="black" />
            </TouchableOpacity>
            <Image style={styles.appMainLogo}
            source={{uri:"https://cdn.dribbble.com/users/1365713/screenshots/5381232/media/44dddc4cf88a5e80885811f45180fa16.png?resize=400x300&vertical=center"}} />
            <TouchableOpacity>
            <Icon style={styles.rightIcon}name="shopping-cart" size={25} color="black" />
            </TouchableOpacity>
            </View>
            
            <View style={styles.foodTextWrapper}>
        <Text style={{fontSize:25 , fontWeight:'bold' }}>Let's Find Good</Text>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Quality Food</Text>
        </View> 
        {/* ////////////foodcategory/////////////// */}
        <View style={styles.ItemsbarWrapper}>
            <TouchableOpacity style={styles.FoodCategory}>
                    <View style={styles.subFoodCategory}>
                        <Image 
                        source={{uri:"https://pngfre.com/wp-content/uploads/Burger-47.png"}}
                        style={styles.firstFoodCategoryImage}
                        />
                        <Text style={{fontSize:11,color:'white',fontWeight:'bold',marginTop:5}}>Fast Food</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('veggiespage')} style={styles.FoodCategory}>
            <View style={styles.subFoodCategorytwo}>
                        <Image 
                        source={{uri:"https://c0.klipartz.com/pngpicture/138/773/gratis-png-comida-vegetal-tomate-tienda-de-comestibles-ensalada-frutas-y-verduras-frescas-manojo-de-verduras-thumbnail.png"}}
                        style={styles.secondFoodCategoryImage}
                        />
                        <Text style={{fontSize:11,color:'white',fontWeight:'bold',marginTop:5}}>Veggies</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FoodCategory}>
            <View style={styles.subFoodCategoryThree}>
                        <Image 
                        source={{uri:"https://img.freepik.com/premium-photo/heap-tasty-pastries-white_392895-9457.jpg"}}
                        style={styles.thirdFoodCategoryImage}
                        />
                        <Text style={{fontSize:11,color:'white',fontWeight:'bold',marginTop:5}}>Fast Food</Text>
                    </View>
            </TouchableOpacity>
            </View> 
            {/* //////////////////////// */}
            <ScrollView>
            <View style={styles.popolarTextWrapper}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Popular</Text>
                <TouchableOpacity style={styles.seeallTextWrapper}>
                    <Text>See all</Text>
                </TouchableOpacity>
            </View>
            {/* //////////populat items////////// */}
            <View style={styles.popularItemsMainWrapper}>
            <View style={styles.firstPopularItemWrapper}>
                <View style={styles.popularItemsName}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Melting Cheese</Text>
                        <Text style={{fontSize:12,color:'black'}}>Hot Beef Pizza</Text>
                </View>
                <View style={styles.firstPopularItemImageWrapper}>
                    <Image
                        source={{uri:"https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg"}}
                            style={styles.popularItemone}
                    />
                </View>
                <View style={{alignItems:"center"}} >
                <Text style={{color:'#ff4c00'}}>44 Calories</Text>
                <Text style={{color:'black',fontWeight:'bold'}}>$ 9.58</Text>
                </View>
                <View style={styles.addBtnPopular}>
                <TouchableOpacity style={styles.addBtn} >
                    <Text style={{fontSize:18,color:'white'}}>+</Text>
                </TouchableOpacity>
                </View>
            </View>
            {/* /////////secondpopularitem//////////// */}
            <View style={styles.firstPopularItemWrapper}>
                <View style={styles.popularItemsName}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Spaghetti orzo</Text>
                        <Text style={{fontSize:12,color:'black'}}>Hot Beef Pizza</Text>
                </View>
                <View style={styles.firstPopularItemImageWrapper}>
                    <Image
                        source={{uri:"https://www.savorythoughts.com/wp-content/uploads/2021/03/Haitian-Spaghetti-Recipe-Savory-Thoughts-10-500x375.jpg"}}
                            style={styles.popularItemone}
                    />
                </View>
                <View style={{alignItems:"center"}} >
                <Text style={{color:'#ff4c00'}}>44 Calories</Text>
                <Text style={{color:'black',fontWeight:'bold'}}>$ 9.58</Text>
                </View>
                <View style={styles.addBtnPopular}>
                <TouchableOpacity style={styles.addBtn} >
                    <Text style={{fontSize:18,color:'white'}}>+</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
            {/* //////////recommendedtext/////// */}
            <View style={styles.recommendedtextWrapper}>
                <Text style={styles.reccommendedText}>Recommended</Text>
            </View>
            <TouchableOpacity>
            <View style={styles.recommendedWrapper}>
                <View style={styles.recommendedImageWrapper} >
                    <Image 
                    source={{uri:"https://ahealthylifeforme.com/wp-content/uploads/2023/04/Healthy-Roasted-Steak-and-Vegetables-12.jpg"}}
                    style={styles.recItemImage}
                    />
                </View>
                <View style={styles.recTextsWrapper}>
                    <Text style={{color:'white',fontWeight:'500'}}>Beef Hot Steak</Text>
                    <Text style={{color:'white',fontWeight:'500'}}>Hot Beef Steak With Fries</Text>
                    <Text style={{color:'white',fontWeight:'500'}} >20-40 min</Text>
                    <Text style={{color:'white',fontWeight:'500'}}>$ 9.65</Text>
                </View>
            </View>
            </TouchableOpacity>
            <Footer/>
            </ScrollView>
        </View>
    )
    }

    export default HomeScreen;

    const styles = StyleSheet.create({
        homeScreenMainWrapper:{
            flex:1,
        },
        foodTextWrapper:{
            padding:20,
        },
        ItemsbarWrapper:{
            flexDirection:'row',
            padding:20,
            justifyContent:'space-around'

        },
        FoodCategory:{
            height:50,
            width:100,
            backgroundColor:'#ff4c00',
            borderRadius:8
            
        },
        subFoodCategory:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            gap:2
        },
        firstFoodCategoryImage:{
            height:40,
            width:40,
            borderRadius:30
        },
        secondFoodCategoryImage:{
            height:30,
            width:40,
            marginTop:10,
            borderRadius:30
        },
        subFoodCategorytwo:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            gap:2
        },
        subFoodCategoryThree:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            gap:2,
            
        },
        thirdFoodCategoryImage:{
            height:30,
            width:35,
            marginTop:10,
            borderRadius:30
        },
        popolarTextWrapper:{
            padding:20,
            justifyContent:'space-between',
            flexDirection:'row'
        },
        seeallTextWrapper:{
            height:30,
            width:60,
            borderWidth: 2,
            borderColor: '#ff4c00',
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center'
        },
        popularItemsMainWrapper:{
            padding:20,
            flexDirection:'row',
            justifyContent:'space-around',
        },
        firstPopularItemWrapper:{
            height:220,
            borderWidth: 1,
            borderColor: '#ff4c00',
            width:'40%',
            paddingTop:10,
            borderRadius:8
        },
        popularItemsName:{
            alignItems:'center',
            justifyContent:'center'
        },
        popularItemone:{
            height:65,
            width:65,
            borderRadius:30
        },
        firstPopularItemImageWrapper:{
            alignItems:'center',
            padding:10
        },
        addBtnPopular:{
                alignItems:"flex-end",
                padding:7
        },
        addBtn:{
            height:30,
            width:30,
            borderRadius:8,
            backgroundColor:'#ff4c00',
            alignItems:'center',
            justifyContent:'center',
        },
        recommendedtextWrapper:{
            padding:20
        },
        reccommendedText:{
            fontSize:25,
            fontWeight:'bold',
        },
        recommendedWrapper:{
            height:150,
            width:'90%',
            backgroundColor:'#ff4c00',
            marginLeft:20,
            borderRadius:10 ,
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'space-evenly'
        },
        recItemImage:{
            height:100,
            width:90,
            borderRadius:40
        },
        recommendedImageWrapper:{
            alignItems:'center',
        },
        
        recTextsWrapper:{
            textAlign:'center',
            alignItems:'center',
            
        },
        headerWrapper:{
            marginTop:10,
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


    })