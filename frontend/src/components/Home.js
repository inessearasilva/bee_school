import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../assets/images/monitor.png';
import world from '../assets/images/world.jpg';
import TweetDataService from "C:/Users/ines_/bee_school/frontend/src/services/tweets_service.js"

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
                  <table className="home-table" style={{ minWidth: '390px' }}>
                    <thead>
                      <tr>
                      <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
                        <span style={{ position: 'relative', top: '3.6px' }}># Hashtag Trends</span>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td style={{ padding: '3px', paddingInlineStart: '20px' }}>{Tweets.nome}</td>
                      <td className="qtt-background" style={{ padding: '3px', textAlign: 'right'}}>10000</td>
                    </tr>
                      <tr>
                      <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#ChildhoodObesity</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>800</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#Sports</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>759</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#FastFood</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>712</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#ChildWellness</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>629</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#NutritionForKids</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>603</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#HealthyKids</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>504</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#ActiveKids</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>502</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#HealthyHabits</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>468</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#Sedentarism</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>420</td>
                      </tr>
                    </tfoot>
                  </table>
                  <br></br>
                  <table className="home-table" style={{ minWidth: '390px' }}>
                    <thead>
                      <tr>
                      <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
                        <span style={{ position: 'relative', top: '3.6px' }}> Topic Trends</span>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px'}}>Diabetes</td>
                        <td className="qtt-background" style={{ padding: '3px', textAlign: 'right' }}>1000</td>
                      </tr>
                      <tr>
                      <td style={{ padding: '3px', paddingInlineStart: '20px' }}>ChildhoodObesity</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>800</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>Sports</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>759</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>FastFood</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>712</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>ChildWellness</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>629</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>NutritionForKids</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>603</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>HealthyKids</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>504</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>ActiveKids</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>502</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>HealthyHabits</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>468</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ padding: '3px', paddingInlineStart: '20px' }}>Sedentarism</td>
                        <td className='qtt-background' style={{ padding: '3px' }}>420</td>
                      </tr>
                    </tfoot>
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
                      <img src={world} alt="Metrics" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
    );
        
      }}