import React from 'react'
// import API from '../utils/API'
import { Nav } from '../components/Nav'
import { Menu } from '../components/Menu'
import $ from 'jquery';
export class Home extends React.Component{

  constructor(props){
    super(props)

      this.state = {
      }
  }

  componentDidMount() {
    // Allowing bars on menu to transition to an x and open menu
$("#bars").click(()=>{
  $("#bars").addClass("d-none");
  $("#xbars").removeClass("d-none");
  $("#menu").removeClass("d-none");
  $('body').addClass("lock-scroll");
})
// Allowing x on menu to transition to bars and close menu
$("#xbars").click(()=>{
  $("#xbars").addClass("d-none");
  $("#bars").removeClass("d-none");
  $("#menu").addClass("d-none");
  $('body').removeClass("lock-scroll");
})

// Making Menu transition from transparent to white on scroll. 
$(window).scroll(function() {
  if($(this).scrollTop() > 80)  /*height in pixels when the navbar becomes navbar-default1*/
  {
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
 
render(){

    return(
      <div id='mainDiv'>
       <Nav/>
       <Menu/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <a href="/TestPage">Test Page found at '/TestPage'</a>
       
      </div>
          )

 }
}
