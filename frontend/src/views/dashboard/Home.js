import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../../assets/images/banner.png';
import stats from '../../assets/images/stats.png';
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
              <div className="row align-items-start">
              <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="flex-container" >
                  <div className="flex-item">
                  <table className="home-table">
                    <thead>
                      <tr>
                        <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
                          <span style={{ position: 'relative', top: '3.6px' }}>Topic Trends</span>
                        </th>
                      </tr>
                    </thead>
                    <Topics />
                  </table>
                  <table className="home-table" style={{marginTop:"40px"}}>
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
            <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="flex-container" >
                    <div className="flex-item">
                    <div className="row align-items-start">
                    <div className="col-lg-9 col-md-9 col-sm-6" >
                    <img src={image} className="homepic"/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6">
                      <div className="statsg"> 
                      <Stats /></div>
                      <img src={stats} className="statsm" style={{width:"240px", marginTop:"30px", alignItems:"center"}}/>
                    </div>
                    </div>
                      <h2 style={{ fontFamily: 'Cambria', marginTop:"40px" }}><b>Tweets per Country</b></h2>
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