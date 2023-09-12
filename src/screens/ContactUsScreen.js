import React, { Component } from 'react'
// import UserNavBar from '../components/Navigation'
// import Footer from '../components/Footer'
import '../css/contactus.css'
import '../App.css'


const ContactUsScreen = () => {
  return (
    <div class="card-deck" style={{ marginLeft: '50px', marginRight: '50px' }}>
      <table class="tableContact">
        {
        /* <tr class="contactrow">
          <td>
            <div style={{ opacity: '0.75' }}>
              <img class="card-img-top cardimg" src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png" alt="Card image" />
              <div class="card-body text-center" style={{ color: 'black' }}>
              <br/><br/>
                <h4 class="card-title">Nikhil Anpat</h4>
                <p class="card-text"><b> Email: nikhilanpat127@gmail.com </b></p>
                <p class="card-text"><b>Mobile No. : 8888169835</b></p>
              </div>
            </div>
          </td>
        </tr> */
        
        


<td>
            <div style={{ opacity: '0.75' }}>
              <img class="card-img-top cardimg" src="https://cdn.icon-icons.com/icons2/1130/PNG/512/calltelephoneauricularincircularbutton_80086.png" alt="Card image" />
              <div class="card-body text-center" style={{ color: 'black' }}>
              <br/><br/>
              
                <p class="card-text"><b>Sometime you need a little help from your friend.
                  <br/>Don't worry we are here for you..!
                  </b></p>
                  
                <h4 class="card-title">Phone Number </h4>
                <p class="card-text"><b> 1800-2386-4592 (Toll Free)</b></p>                
                <h4 class="card-title"> Business Hours  : &nbsp; Mon - Fri &nbsp; 9AM - 6pm</h4>
                               
              </div>
            </div>
          </td>
        
        
        
        }

        

      </table>
    </div>

  )
}

export default ContactUsScreen