import React from 'react';
import { Grid } from '@material-ui/core';
// import { Container } from 'react-bootstrap';

import Product from './Product/Product';

const products = [
    { id:1, name: 'cactusBadges', description: 'cactus badges', price: '$5.00'},
    { id:2, name: 'chickBadges', description: 'egg to chick badges', price: '$5.00'},
    // { id:3, name: 'moonBadges', description: 'moon badges', price: '$5.00'},
    // { id:4, name: 'honeyBadges', description: 'honeycomb badges', price: '$5.00'},
    // { id:5, name: 'spudsBadges', description: 'potato badges', price: '$5.00'},
    // { id:6, name: 'milkBadges', description: 'milk carton badges', price: '$5.00'},
    // { id:7, name: 'pawBadges', description: 'paws/toe beans badges', price: '$5.00'},
    // { id:8, name: 'musicNotesBadges', description: 'music notes badges', price: '$5.00'}
    
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => {
                    console.log(product);
                    <Grid item key={product.id}>
                        <Product product={product} />
                    </Grid>
                })}
            </Grid>

        </main>

    );
}

export default Products;