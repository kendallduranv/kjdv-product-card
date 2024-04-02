# kjdv-Product-Card

Este es un paquete de pruebas de despliqgues en NPM 

### Fernando Herrera 

```
import{ProductCard,ProductImage,ProductTitle,ProductButtons} from 'do-product-card'
```

```
    <ProductCard

        product={product}
        initialValues={{
        count: 4,
        maxCount: 10
        }}
    >

        {
        ({reset,isMaxCountReached,increaseBy,count,maxCount}) => (
            <>
            <ProductImage/>
            <ProductTitle  />
            <ProductButtons />

            </>

        )
        }

    </ProductCard>

```

