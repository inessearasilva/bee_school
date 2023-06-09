import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../assets/images/monitor.png';
import world from '../assets/images/world.jpg';

function Home() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-white bg-white">
        <Container>
          <div className="container text">
            <div className="row align-items-start">
              <div className="col-4">
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
                    <td style={{ padding: '3px', paddingInlineStart: '20px' }}>#Diabetes</td>
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
          <div className="col-1"></div>
          <div className="col-7">
          <img src={image} alt="Background" width="730"/>
          <br></br><br></br>
          <h2 style={{fontFamily: 'Cambria'}}><b>Tweets density</b></h2>
          <h6 style={{fontFamily: 'Cambria'}}>The number of tweets per country</h6>
          <br></br>
          <img src={world} alt="Metrics" width="730"/>
          </div>
        </div>
        </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;
