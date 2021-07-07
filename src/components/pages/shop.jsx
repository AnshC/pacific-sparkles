import Product from './subcomponents/shop.products'
import {Products} from '../products/list'

export default function Shop(){
    const products = Products.data;
    return(
        <div className="shop">

            <div className="main">
                <section className="products">
                    {
                        products.map((product)=>{
                            return(
                                <Product 
                                    name={product.name}
                                    type={product.type}
                                    key={product.id}
                                    description={product.description}
                                    special={product.special}
                                    price={product.price}
                                    src={product.imgsrc}
                                    id={product.id}
                                />
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}