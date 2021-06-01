import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
//import { getProducts } from '../ducks/products';

const mapStateToProps = (state, props) => {
	// console.log( "state", state);
	// console.log( "props", props);
  return {
    products: props.products
  };
};

export default connect(mapStateToProps)(ProductList);