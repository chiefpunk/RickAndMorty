import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import service from '../../services';
import TabComponent from "../TabComponent/TabComponent";
import './ProductDetail.css';


class ProductDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      created: "",
      episode: [],
      gender: "",
      id: props.match.params.id,
      image: "",
      location: {name: "", url: ""},
      name: ",",
      origin: {name: "", url: ""},
      species: "",
      status: "",
      type: "",
      url: ""
    }
  }

  getCharacterByID(id) {
    const self = this;
    service.getCharacterByID(id)
      .then(response => {
        self.setState({
          info: response.data.info,
          results: response.data.results
        });
        this.setState( response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidMount(){
    this.getCharacterByID(this.state.id);
  }

  render() {

    return (
      <div>
        <div className="top-bar">
          <a href="#default">
            <Image src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" style={{width:'50px', height: '50px'}} fluid />
          </a>
        </div>
        <div  className="total-container">
          <div className="back-container">
            <Link to="/">
              { `< ` } Back
            </Link>
          </div>
          <div className='info-container'>
            <div className="container_1">
              <div className="image-container">
                <Image src = {`${this.state.image}`} className = "image"/>
              </div>
              <div className="info">
                <p>{ this.state.id}</p>
                <p>{ this.state.name}</p>
                <p>{ this.state.status}</p>
                <p>{ this.state.species}</p>
                <p>{ this.state.type}</p>
                <p>{ this.state.gender}</p>
                <p>{ this.state.origin.name}, { this.state.origin.url}</p>
                <p>{ this.state.created}</p>
              </div>
            </div>
            <p className="episode-title">Episodes Info</p>
            <div className="tab-component">
              <TabComponent episods = { this.state.episode}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
