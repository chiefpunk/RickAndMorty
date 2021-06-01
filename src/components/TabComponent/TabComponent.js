import React from 'react';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import service from '../../services';

class TabContent extends React.Component {
  constructor(props) {
    super( props);
    this.state = { episodeUrl: props.episodeUrl, id: "", name: "", air_date: "", episode: ""};
  }

  loadEpisode() {
    const self = this;
    service.getEpisodeByUrl(self.state.episodeUrl)
      .then(response => {
        // self.setState({
        //   info: response.data.info,
        //   results: response.data.results
        // });
        self.setState( {
          id: response.data.id,
          name: response.data.name,
          air_date: response.data.air_date,
          episode: response.data.episode
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.loadEpisode();
  }

  render() {
    return (
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
        <p>{this.state.air_date}</p>
        <p>{this.state.episode}</p>
      </div>
    );
  }
}

class TabComponent extends React.Component {
  constructor(props) {
    super( props);
    this.state = { episodeUrls: props.episods};
    console.log( this.state);
  }

  componentDidMount() {

  }

  render() {
    //const [key, setKey] = useState('home');
    const episodeUrls = this.props.episods;
    const episodeUrls1 = episodeUrls;
    var episodeIndex = 1;
    return (
      <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
        <TabList>
          {episodeUrls.map(episodeUrl => (
            <Tab key = {`${episodeUrl}tab`}>Episode{ episodeIndex ++}</Tab>
          ))}
        </TabList>
        {episodeUrls1.map(episodeUrl => (
          <TabPanel key = {`${episodeUrl}tabPanel`}>
            <TabContent key = {`${episodeUrl}tabContent`} episodeUrl = {`${episodeUrl}`}/>
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}

export default TabComponent;