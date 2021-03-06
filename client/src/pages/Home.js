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
    var getDate = new Date();
   $("#copyDate").html(getDate.getFullYear())

   for (var i = new Date().getFullYear(); i > 1900; i--)
    {
        $('#year').append($('<option />').val(i).html(i));
    }
  }
   mobilSignUp = function(){
    window.location.href = "/SignUp/cid=03";
  }
  render() {

    return (
      <div id='mainDiv'>
        <Nav />
        <Menu />
        <br className="xs-br"/>
        <br />
        <br />
        <div className="row">
          <div className="col-12 jumbotron homeJumbo">
            <div className="row" >
              <div className="col-sm-6 col-md-6 col-lg-6 ">
                <div className="row justify-content-around">
                  <blockquote className="blockquote text-center col-md-12 col-lg-10 homeQuote" >
                    <br />
                    {/*<p className="homeQuoteP"> <span style={{fontSize:'38px', fontWeight:'Bold'}}>GIVE US</span> <br/><span style={{fontFamily:'cursive', fontSize:'34px'}}> this day </span><br/><span style={{fontSize:'34px', fontWeight:'bold'}}>OUR DAILY</span><br/> <span style={{fontSize:'70px', fontFamily:'cursive'}}>Bread</span></p>*/}
      {/*<p className="homeQuoteP"> <span style={{fontSize:'28px', fontWeight:'Bold'}}>GIVE US THIS DAY OUR </span><br/> <span style={{fontSize:'40px', fontFamily:'cursive'}}> Daily Bread</span></p>*/}
      <p className="homeQuoteP" ><em>But the one who endures to the end will be saved.</em></p>
      <footer className="blockquote-footer homeQuoteFooter">Matthew <cite title="Source Title">24:13</cite></footer>
                  
                    </blockquote>
                </div>
              </div>
              <div className="hideCol col-1"></div>
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
                    <input type="email" className="form-control" id="signUpEmail" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="newPassword" placeholder="New Password" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="month">Birthday</label>
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
                  <div className="form-row ">
                    <div className="custom-control custom-radio custom-control-inline ml-2">
                      <input type="radio" id="female" className="mr-1 custom-control-input" name="customRadioInline1" />
                      <label className="custom-control-label" htmlFor="female">Female</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-4">
                      <input type="radio" id="male" className="mr-1 custom-control-input" name="customRadioInline1"/>
                      <label className="custom-control-label" htmlFor="male">Male</label>
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
          <div className="col-12  jumbotron homeJumboMobil">
            <div className="input-group input-group-sm mb-3 mobilDivInput">
              <input id="mobilEmail" type="text" className="form-control " style={{ borderBottom: '0px', borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} placeholder="Email" />
            </div>
            <div className="input-group input-group-sm mb-3 mobilDivInput">
              <input id="mobilPassword" type="text" className="form-control" placeholder="Password" style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px", boxShadow: "0px 1px #e0dcdc" }} />
            </div>
            <button className="btn btn-sm mt-2" style={{ width: '100%', color:'white', fontWeight:'bold', backgroundColor:"#212121" }}> Log In</button>
            <div className="row mt-2">
              <div className='col ml-1'>
                <hr />
              </div>
              <div className='col-1 text-center'>
              or
              </div>
              <div className='col mr-1'>
                <hr />
              </div>
            </div>
            <div className="row justify-content-center">
            <button className="btn btn-success col-5" style={{padding:'3px', fontSize:'12px'}} onClick={()=>{this.mobilSignUp()}}>Create New Account</button>
            </div>
          </div>
          <br />
        </div>
        <div className="row text-center">
            <p className='col' style={{fontSize:'10px', fontFamily:'Montserrat'}}>&copy; CORAM DEO TODAY <span id="copyDate"></span>. All rights reserved.</p>
            </div>
        <Footer />
      </div>
    )

  }
}
