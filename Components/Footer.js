import { View, Text , StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}>
      
    <TouchableOpacity style={styles.footerItem}>
      <Text style={styles.footerText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Text style={styles.footerText}>Products</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.footerItem}>
      <Text style={styles.footerText}>About</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Text style={styles.footerText}>Contact</Text>
    </TouchableOpacity>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your email"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIgn Up</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // paddingVertical: 20,
    backgroundColor: 'black',
    marginTop:20,
    height:170
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop:5
  },
  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop:10
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})