import React from 'react'
// import API from '../utils/API'
import $ from 'jquery';
import { MobilNav } from '../components/MobilNav'
import { MobilSignUp } from '../components/MobilSignUp'
export class MobilSignUpPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        $("#MobilNavMainDiv")
    }

    render() {

        return (
            <div id='MobilNavMainDiv'>
                <MobilNav />
                <MobilSignUp/>
               

            </div>
        )

    }
}
