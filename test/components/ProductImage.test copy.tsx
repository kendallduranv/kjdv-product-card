import React from 'react';

import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components/index';
import {  product2 } from '../data/products';



describe('ProductImage', () => {
    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen personalizada del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

})

