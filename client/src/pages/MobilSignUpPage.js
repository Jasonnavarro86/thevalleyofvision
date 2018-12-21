import React from 'react'
// import API from '../utils/API'
import $ from 'jquery';
import { MobilNav } from '../components/MobilNav'
import { MobilSignUp } from '../components/MobilSignUp'
export class MobilSignUpPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            groupNames: ''
        }
        this.switchSignUpQuestion = this.switchSignUpQuestion.bind(this);
    }

    componentDidMount() {
        $("#MobilNavMainDiv")
    }

    switchSignUpQuestion(groupName) {

        this.setState({ groupNames: groupName })

        switch (groupName) {
            case "nameGroup":
               $(".nameGroup").addClass("d-none");
               $(".birthdayBar").addClass("selectedBar");
               $(".birthdayGroup").removeClass("d-none");
                break;
            case "birthdayGroup":
            $(".birthdayGroup").addClass("d-none");
               $(".emailBar").addClass("selectedBar");
               $(".emailGroup").removeClass("d-none");
                break;
            case "emailGroup":
            $(".emailGroup").addClass("d-none");
               $(".genderBar").addClass("selectedBar");
               $(".genderGroup").removeClass("d-none");
                break;
            case "genderGroup":
            $(".genderGroup").addClass("d-none");
               $(".newPasswordBar").addClass("selectedBar");
               $(".newPasswordGroup").removeClass("d-none");
                break;
            case "newPasswordGroup":
            
                break;
            default:
                break;
        }
    }
    render() {

        return (
            <div id='MobilNavMainDiv'>
                <MobilNav />
                <MobilSignUp switchSignUpQuestion={this.switchSignUpQuestion} />


            </div>
        )

    }
}
