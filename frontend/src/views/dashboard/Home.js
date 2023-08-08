import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../../assets/images/banner.png';
import TweetDataService from "../../services/tweets_service.js"
import Map from './Map'
import Hashtags from './Hashtags'
import Topics from './Topics'
import Stats from './General Stats'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.retrieveTweet = this.retrieveTweet.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTweet = this.setActiveTweet.bind(this);

    this.state = {
      Tweets: [],
      currentTweet: null,
      currentIndex: -1,
      searchid: "",
      searchnome: "",
      searchemprego: ""
    };
  }

  componentDidMount() {
    this.retrieveTweet();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  retrieveTweet() {
    TweetDataService.getAll()
      .then(response => {
        const tweets = response.data.map(item => {
          const tweet = item.tweet || {};
          return {
            ...item,
            nome: tweet.nome
          };
        });
        this.setState({
          Tweets: tweets
        });
        console.log(tweets);
      })
      .catch(e => {
        console.log(e);
      });
  }
  

  refreshList() {
    this.retrieveTweet();
    this.setState({
      currentTweets: null,
      currentIndex: -1
    });
  }

  setActiveTweet(Tweets, index) {
    this.setState({
      currentTweets: Tweets,
      currentIndex: index
    });
  }

  render() {

    return (
        <Navbar className="navbar navbar-expand-lg navbar-white bg-white">
          <Container>
            <div className="container text">
              <div className="row align-items-start" style={{display: 'flex', width:'100%', minWidth: '1280px', maxWidth:'1280px'}}>
              <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="flex-container" >
                  <div className="flex-item">
                  <table className="home-table" style={{ width:'100%', minWidth: '390px', maxWidth:'390px' }}>
                    <thead>
                      <tr>
                        <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
                          <span style={{ position: 'relative', top: '3.6px' }}>Topic Trends</span>
                        </th>
                      </tr>
                    </thead>
                    <Topics />
                  </table>
                  <br></br><br></br><br></br>
                  <table className="home-table" style={{ width:'100%', minWidth: '390px', maxWidth:'390px' }}>
                    <thead>
                      <tr>
                      <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
                        <span style={{ position: 'relative', top: '3.6px' }}># Hashtag Trends</span>
                        </th>
                      </tr>
                    </thead>
                    <Hashtags />
                  </table>
            </div>
            </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
                  <div className="flex-container" >
                    <div className="flex-item">
                    <div className="row align-items-start" style={{ display: 'flex', width:'100%', minWidth: '840px', maxWidth:'840px'}}>
                    <div className="col-lg-9 col-md-9 col-sm-15" >
                    <img src={image} style={{width:'650px'}}/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-8">
                      <Stats/>
                    </div>
                    </div>
                      <br /><br />
                      <h2 style={{ fontFamily: 'Cambria' }}><b>Tweets per Country</b></h2>
                    </div>
                    <div className="flex-item">
                      <Map />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
    );
        
      }}