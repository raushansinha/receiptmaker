import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const productItem = (props) => (
    <TouchableOpacity onPress={props.onProductPressed}>
         <View style={styles.productItemStyle} >
            {/* <Image 
                style={styles.imageStyle}
                source={props.placeImage} 
                resizeMode="contain"
            /> */}
            <Text>{props.productName}</Text>
            <Text>{props.productPrice}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    productItemStyle: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    imageStyle: {
        marginRight: 8,
        height: 40,
        width: 40
    }
});

export default productItem;