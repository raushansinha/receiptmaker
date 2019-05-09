import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ProductItem from '../ProductItem/ProductItem';

const productList = (props) => {
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.products}
            renderItem={(info) => (
                <ProductItem 
                    productName={info.item.name} 
                    productPrice={info.item.price} 
                    //productImage={info.item.image} 
                    onProductPressed={ () => props.onProductSelected(info.item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        marginBottom: 10,
    }
});

export default productList;