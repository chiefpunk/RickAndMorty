import React from 'react';
import Product from '../../containers/Product';

class ProductList extends React.Component{
  constructor (props) {
    super(props);
    this.state = {products: props.products};
  }
  render() {
    const products = this.props.products;
    return (
      <div className="body">
        <div >
          <ul className="product-list">
            {products.map(product => (
              <li key={product.id} className="product-list__item">
                <Product product = {product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default ProductList;
