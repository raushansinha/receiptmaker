import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import uuidv1 from  'uuid/v1';

import { addProductAsync } from '../../store/actions';
import ProductList from '../../components/ProductList/ProductList';

class Products extends Component {

    constructor(props) {
        super(props);
    }

    onAddProductHandler = () => {
        this.props.onAddProductAsync({
            "key": uuidv1(),
            "name":"Milk",
            "price":"$3.99"
        });
    }

    ProductSelectedHandler = (key) => {
        const selProduct = this.props.products.find(product => {
            return product.key === key
        });

        // this.props.navigator.push({
        //     screen: "navigation-in-react-native.PproductDetailScreen",
        //     title: selproduct.name,
        //     passProps: {
        //         selectedproduct: selproduct
        //     }
        // });
    };

    render() {
        let productList = null;

        if(this.props.products.length > 0) {
            productList = (
                <ProductList products={this.props.products} onProductSelected={this.ProductSelectedHandler} />
            );
        }

        return (
            <View style={styles.container}>
                {productList}
                <Button title="Add Product" onPress={this.onAddProductHandler} ></Button>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 40,
        marginBottom: 25
    }
});

const mapStateToProps = ({ isLoading, products, error }) => ({
    "isLoading":isLoading.isLoading,
    "products": products.products,
    "error": error.error
});

const mapDispatchToProps = dispatch => ({
    onAddProductAsync: (product) => dispatch(addProductAsync(product))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Products);