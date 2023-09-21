import React from 'react'
import './menu.css'
import Nav from '../nav/Nav'
import cinnabon from'../../images/Cinnabonn.png'
import Cheese from '../../images/Cheese Cake.png'
import Donuts from '../../images/DN.jpg'
import honey from '../../images/Tart.png'
import Eclair from '../../images/Eclair.png'
import Brownis from '../../images/Brownis.jpg'
import Cakes from './Cakes'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='section-menu'>
    <Nav />
    <button onClick={()=>navigate('/menuAR')} type='button'><span className='span-head'></span>AR</button>
    <section className='Menu'>
      <div className='Title'> Our Menu</div>
      <div className=" container cards">
        <div className="Card1">
          <div className="front">
            <h1>Cinnabon</h1>
            <img src={cinnabon} alt="" width={300}/>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Cinnabon</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP <br /> M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L
                    </th>
                  </tr>
                  <tr>
                    <td>LOTUS&NUTELLA</td>
                    <td>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50</td>
                  </tr>
                  <tr>
                    <td>CARAMEL&ORIGINAL</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>BLUE BERRY</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>24 PIECES MINI</td>
                    <td>280</td>
                  </tr>
                  <tr>
                    <td>12 PIECES MINI</td>
                    <td>155</td>
                  </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="front">
            <h1>Éclair & Coffee Biscuits</h1>
            <img src={Eclair} alt="" width={300}/>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Coffee Biscuits</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>1KG CLASSIC</td>
                    <td>170</td>
                  </tr>
                  <tr>
                    <td>1KG WITH CHOCOLATE & DARK CHOCOLATE</td>
                    <td>180</td>
                  </tr>
              </table>
              <h1>Éclair</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>20 PIECES MINI</td>
                    <td>165</td>
                  </tr>
                  <tr>
                    <td>20 PIECES MINI SPECIAL</td>
                    <td>185</td>
                  </tr>
              </table>
            </div>

          </div>
        </div>
        <div className="Card1">
          <div className="front">
            <h1>Donuts</h1>
            <img src={Donuts} alt="" width={300}/>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Donuts</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>CARAMEL&NUTELLA</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>LOTUS</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>BAMBOLENY NUTELLA</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>BAMBOLENY LOTUS</td>
                    <td>35</td>
                  </tr>
              </table>
            </div>

          </div>
        </div>
        <div className="Card1">
          <div className="front">
            <h1>Tart & Honey Cake</h1>
            <img src={honey} alt="" width={300}/>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Tart</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>MINI TART 24 PIECES</td>
                    <td>170</td>
                  </tr>
                  <tr>
                    <td>MINI TART 24 PIECES SPECIAL</td>
                    <td>190</td>
                  </tr>
              </table>
              <table>
                <h1 className='honey'>Honey Cake</h1>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>MINI HONEY CAKE</td>
                    <td>65</td>
                  </tr>
              </table>
            </div>

          </div>
        </div>
        <div className="Card1">
          <div className="front">
            <h1>Cheese Cake</h1>
            <img src={Cheese} alt="" width={300}/>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Cheese Cake</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>12 PIECES MINI</td>
                    <td>230</td>
                  </tr>
                  <tr>
                    <td>6 PIECES MINI</td>
                    <td>120</td>
                  </tr>
              </table>
              <h3>EXTRA PRICE FOR PISTACHIO <br /> &BLUE BERRY</h3>
            </div>

          </div>
        </div>
        <div className="Card1">
          <div className="front">
            <h1>Brownies</h1>
            <img src={Brownis} alt="" width={300}/>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Brownies</h1>
              <table>
                  <tr>
                    <th></th>
                    <th>EGP</th>
                  </tr>
                  <tr>
                    <td>12 PIECES MINI CLASSIC</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>12 PIECES MINI NUTELLA&<br/>LOTUS&PISTACHIO&CARAMEL<br/>&OREO&WHITE CHOCOLATE</td>
                    <td>180</td>
                  </tr>
              </table>
            </div>

          </div>
        </div>
        </div>
    </section>
    </div>
    <Cakes/>
    </>
  )
}

export default Menu