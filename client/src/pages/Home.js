import React from 'react'
// import API from '../utils/API'
import { Nav } from '../components/Nav'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import $ from 'jquery';
import "../Home.css";
export class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    // Allowing bars on menu to transition to an x and open menu
    $("#bars").click(() => {
      $("#bars").addClass("d-none");
      $("#xbars").removeClass("d-none");
      $("#menu").removeClass("d-none");
      $('body').addClass("lock-scroll");
    })
    // Allowing x on menu to transition to bars and close menu
    $("#xbars").click(() => {
      $("#xbars").addClass("d-none");
      $("#bars").removeClass("d-none");
      $("#menu").addClass("d-none");
      $('body').removeClass("lock-scroll");
    })

    // Making Menu transition from transparent to white on scroll. 
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80)  /*height in pixels when the navbar becomes navbar-default1*/ {
        $('#navBar').addClass('scrolled');
        $('.navbar-brand').addClass('scrolled');
        $('#menu').addClass('scrolled');
        $(".menuIcon").addClass('scrolled');
      } else {
        $('#navBar').removeClass('scrolled');
        $('.navbar-brand').removeClass('scrolled');
        $('#menu').removeClass('scrolled');
        $(".menuIcon").removeClass('scrolled');
      }
    });
  }

  render() {

    return (
      <div id='mainDiv'>
        <Nav />
        <Menu />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-12  jumbotron homeJumbo">
            <div className="row" >
              <div className="col-7">
                <div className="row justify-content-around">
                  <blockquote className="blockquote text-center col-8 homeQuote" >
                    <br />
                    <p className="homeQuoteP" >But the one who endures to the end will be saved.</p>
                    <footer className="blockquote-footer">Matthew <cite title="Source Title">24:13</cite></footer>
                  </blockquote>
                </div>
              </div>
              <div className="col">
               
              <h1 className="text-left mb-0 createAccountH1" >Create a New Account</h1>
                <p className="text-left mb-3 createAccountTopP">and experience the discipleship.</p>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="newPassword" placeholder="New Password" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label for="month">Birthday</label>
                      <div className="row">

                        <select id="month" className="form-control col-2 birthdaySelects">
                          <option >Jan</option>
                          <option >Feb</option>
                          <option >Mar</option>
                          <option >Apr</option>
                          <option >May</option>
                          <option >Jun</option>
                          <option >Jul</option>
                          <option >Aug</option>
                          <option >Sep</option>
                          <option >Oct</option>
                          <option >Nov</option>
                          <option >Dec</option>
                        </select>
                        <select id="day" className="form-control col-2 birthdaySelects">

                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>

                        </select>
                        <select id="year" className="form-control col-2 birthdaySelects" >
                          
                          
                        </select>
                        <a href="#year" className="col birthdayAnchor"> 
                        Why do I need to provide my birthday?
                        </a>
                      </div>
                    </div>

                  </div>
                  <div className="form-row ml-2">
                    <div className="">
                      <input type="radio" id="female" className="mr-1" />
                      <label className="" for="female">Female</label>
                    </div>
                    <div className=" ml-4">
                      <input type="radio" id="male" className="mr-1" />
                      <label className="" for="male">Male</label>
                    </div>
                  </div>
                  <div className="form-row mt-3 col-9 signUpPolicy">
                  <p>
                  By clicking Sign Up, you agree to our <a href="#term">Terms</a>, <a href="#data">Data Policy</a> and <a href="#cookies">Cookies Policy</a>.
                  </p>
                  </div>
                  <button type="submit" className="btn mt-4 signUpBtn">Sign Up</button>
                </form>
              </div>
              <div className='col-1'>
              </div>
            </div>
          </div>
          <br />

        </div>

        {/* <a href="/TestPage">Test Page found at '/TestPage'</a>*/}
        <Footer />
      </div>
    )

  }
}
