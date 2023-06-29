import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../assets/images/monitor.png';
import world from '../assets/images/world.jpg';
import TweetDataService from "C:/Users/ines_/bee_school/frontend/src/services/tweets_service.js"
import Map from '../views/dashboard/Map'
import Hashtags from '../views/dashboard/Hashtags'
import Topics from '../views/dashboard/Topics'

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
    const { Tweets } = this.state;

    return (
        <Navbar className="navbar navbar-expand-lg navbar-white bg-white">
          <Container>
            <div className="container text">
              <div className="row align-items-start">
              <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="flex-container">
                  <div className="flex-item">
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
                  <br></br>
                  <table className="home-table" style={{ width:'100%', minWidth: '390px', maxWidth:'390px' }}>
                    <thead>
                      <tr>
                      <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
                        <span style={{ position: 'relative', top: '3.6px' }}> Topic Trends</span>
                        </th>
                      </tr>
                    </thead>
                    <Topics />
                  </table>
            </div>
            </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
                  <div className="flex-container">
                    <div className="flex-item">
                      <img src={image} alt="Background" className="img-fluid" />
                      <br /><br />
                      <h2 style={{ fontFamily: 'Cambria' }}><b>Tweets density</b></h2>
                      <h6 style={{ fontFamily: 'Cambria' }}>The number of tweets per country</h6>
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