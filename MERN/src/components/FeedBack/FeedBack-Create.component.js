import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import Navbar from "../../components/navbar.component"


export default class CreateFeedBack extends Component {
    constructor(props) {
        super(props);

        this.onChangeFID = this.onChangeFID.bind(this);
        this.onChangeCname = this.onChangeCname.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.Demo = this.Demo.bind(this);

        this.state = {
            FID: "",
            Cname: "",
            ItemName:"",
            Description: "",
            Rating: "",
            Date: "",
            FeedBack: [],
        };
    }

      //set the FID

   onChangeFID(e) {
    this.setState({
        FID: e.target.value,
    });
}

//set the Cname

onChangeCname(e) {
    this.setState({
        Cname: e.target.value,
    });
}

//set ItemName
onChangeItemName(e) {
    this.setState({
        ItemName: e.target.value,
    });
}

//set Description




onChangeDescription(e) {
    this.setState({
        Description: e.target.value,
    });
}

//set Rating
onChangeRating(e) {
    this.setState({
        Rating: e.target.value,
    });
}

//set Date
onChangeDate(e) {
    this.setState({
        Date: e.target.value,
    });
}
Demo() {
    
      
    this.setState({
        
        
        FID: "F001",
            Cname:"Yashodha",
            ItemName:"Gear Lever",
            Description: "Good Product",
            Rating:" Good ⭐⭐⭐⭐",
            Date:"2022-05-26",
    });
}

    //submit Function

    onSubmit(e) {
        e.preventDefault();
        const { FID} = this.state;

        const FeedBack = {
            FID: this.state.FID,
            Cname: this.state.Cname,
            ItemName: this.state.ItemName,
            Description: this.state.Description,
            Rating: this.state.Rating,
            Date: this.state.Date,
           
        };

            console.log(FeedBack);


            if (FID.length < 4) {
                swal("Feedback ID invalid !", "Feedback ID should be greater than 4", "error");
            } else {

            axios
                .post("http://localhost:5000/FeedBack/add", FeedBack)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Create Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/FeedBack/"));
            });
        }
        
    }

    render() {
        return (<div  > <Navbar/>
        <div class = "row ">
        <div class = "col-6" >
        <br/>
        <img src="https://cliply.co/wp-content/uploads/2019/03/371903340_LOCATION_MARKER_400.gif" width="60%" height="40%" />
        </div> <div class = "col-6" >
        <div div class = "myformstyle" >
        <div className = "card-body" >
        <div className = "col-md-8 mt-4 mx-auto" > </div> 
        <h3 className = "text-center" > 
        <font face = "Comic sans MS" size = "6" > New FeedBack </font>
        </h3 > <br></br>
        
        <br></br>
        
         <form onSubmit = { this.onSubmit } >


        <div className = "form-group" >
        <label >FeedBack ID: </label> 
        <input type = "text"
        placeholder = "FeedBack ID"
        required className = "form-control"
        value = { this.state.FID }
        onChange = { this.onChangeFID }
        /> 
        </div> <div className = "form-group" >
       
        <label > Customer Name : </label>
        <input type = "text"
        placeholder = "Customer Name"
        required className = "form-control"
        value = { this.state.Cname }
        onChange = { this.onChangeCname }
        /> 
        </div >  
        <div className = "form-group" >
       
        <label > Item Name: </label> 
       
        <input type = "text"
        placeholder = "Item Name"
        required  className = "form-control"
        value = { this.state.ItemName }
        onChange = { this.onChangeItemName }/>
         </div > 
         
          

        <div className = "form-group" >
        <label > Description: </label> 
        <input type = "text"
        placeholder = "Description"
        required  className = "form-control"
        value = { this.state.Description }
        onChange = { this.onChangeDescription }/>
         </div > 



         <div className = "form-group" >
            <label > Rating: </label> <select ref = "Rateinput"
            placeholder = "Rating"
            required className = "form-control"
            value = { this.state.Rating }
            onChange = { this.onChangeRating } >
            <option value = "Useless ⭐" > Useless ⭐</option>
            <option value = "Poor ⭐⭐" > Poor ⭐⭐</option> 
            <option value = "Ok ⭐⭐⭐" > Ok ⭐⭐⭐ </option>
            <option value = "Good ⭐⭐⭐⭐" > Good ⭐⭐⭐⭐ </option>
            <option value = "Excellent ⭐⭐⭐⭐⭐" > Excellent ⭐⭐⭐⭐⭐</option>
            
            </select >  </div>

         <div className = "form-group" >
        <label > Date: </label> 
        <input type = "date"
        placeholder = "Date"
        required  className = "form-control"
        value = { this.state.Date }
        onChange = { this.onChangeDate }/>
         </div >
         <div div class = "myformstyle" style = {{ float: 'right' }} >
           
           <Button data-inline ="true" variant = "btn btn-warning" onClick ={this.Demo}> DEMO </Button> 
           </div >
         

        <div className = "form-group" >
        <input type = "submit"
        value = "Create "
        className = "btn btn-primary" />
        </div>{" "} </form >  </div> </div > </div>
         </div ><br/> <br/>  </div>
        );
    }
}