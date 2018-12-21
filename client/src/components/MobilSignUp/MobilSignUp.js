import React from 'react'
import "./MobilSignUp.css";

export const MobilSignUp = (props) =>

    <div className="row">
        <div className="col-12" style={{ padding: '0px' }}>
            <div className="row" style={{ width: "100%" }}>
                <div className="col signUpBars nameBar" style={{ backgroundColor: 'darkGrey' }}>
                </div>
                <div className="col signUpBars birthDayBar">
                </div>
                <div className="col signUpBars emailBar">
                </div>
                <div className="col signUpBars genderBar">
                </div>
                <div className="col signUpBars choosePasswordBar">
                </div>
            </div>
        </div>
        <div className="col-12 jumbotron mobilSignUpJumbo" style={{ minHeight: '100vh' }}>
            <div className="nameGroup d-none">

                <div className="row">
                    <div className="col text-center">
                        <p style={{ fontFamily: 'anton' }}> Whats your name? </p>
                        <p style={{ fontFamily: 'Montserrat', fontSize: '8px', color:'gray' }}> Enter the name you use in real life </p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col text-left form-group">
                        <label htmlFor="mobilFirstName" style={{ fontSize: '12px' }}>First Name</label>
                        <input type="text" id="mobilFirstName" />
                    </div>
                    <div className="col text-left form-group" >
                        <label htmlFor="mobilLastName" style={{ fontSize: '12px' }}>Last Name</label>
                        <input type="text" id="mobilLastName" />
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <button className="btn col-5 nameNextBtn" style={{ height: '25px', padding: '0px', fontWeight: 'bold', fontSize: '14px', color: 'white', backgroundColor: "#212121" }}> Next</button>
                </div>
                <br />
                <br />
                <br />



            </div>
            <div className="birthDayGroup d-none" >
                <div className="row">
                <div className="col text-center">
                        <p style={{ fontFamily: 'anton' }}> Whats your birthday? </p>
                        <p style={{ fontFamily: 'Montserrat', fontSize: '8px', color:'gray' }}> Choose your birthdate. This is kept private. </p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="mobilMonth" style={{fontSize:'12px'}}>Birthday</label>
                      <div className="row">
                        <select id="mobilMonth" className="form-control col-2 mobilBirthdaySelects">
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
                        <select id="mobilDay" className="form-control col-2 ml-1 mobilBirthdaySelects">
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
                        <select id="mobilYear" className="form-control col-2 ml-1 mobilBirthdaySelects" >
                        </select> 
                        
                      </div>
                    </div>

                  </div>
                <div className="row justify-content-center mt-4">
                    <button className="btn col-5 birthdayNextBtn" style={{ height: '25px', padding: '0px', fontWeight: 'bold', fontSize: '18px', color: 'white', backgroundColor: "#212121" }}> Next</button>
                </div>
            </div>
            <div className="emailGroup">
            <div className="row">
                <div className="col text-center">
                        <p style={{ fontFamily: 'anton' }}> Enter you email </p>
                        <p style={{ fontFamily: 'Montserrat', fontSize: '12px', color:'gray' }}> Enter the email where you can be reached. This is kept private. </p>
                    </div>
                </div>
                <div className="form-row">
                   
                    <div className="col text-left form-group" >
                        <label htmlFor="mobilEmail" style={{ fontSize: '12px' }}>Email</label>
                        <input className="col" type="text" id="mobilEmail" />
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <button className="btn col-5 emailNextBtn" style={{ height: '25px', padding: '0px', fontWeight: 'bold', fontSize: '14px', color: 'white', backgroundColor: "#212121" }}> Next</button>
                </div>
            </div>
            <br />
            <div className="row text-center">
                <p className='col mt-5' style={{ fontSize: '11px' }}>&copy; TheValleyOnline 2018</p>
            </div>
        </div>

    </div>