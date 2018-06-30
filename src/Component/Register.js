import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import {
    Button,
    Container,
    Header,
    Form,
    Grid,
    Image,
    Navbar,
    Menu,
    Icon,
    Sidebar,
    Segment,
    Table,
    Divider,Modal,Card
  } from "semantic-ui-react";
import {Route, Switch,Link,Redirect} from "react-router-dom"
import user from "./Image/user.jpg"
//import { stateToHTML } from "draft-js-export-html";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas'


class Register extends Component{

state={
    Name:"",
    Email:"",
    Phno:"",
    userData:[
              {"name":"ABC","email":"a@gmail.com","phno":"123456789"},
              {"name":"Demo","email":"demo@gmail.com","phno":"123456789"},
              {"name":"test","email":"Test@gmail.com","phno":"123456789"}
            ]

            //also save the api response in the array 
}

handleName=e=>{

    this.setState({Name:e.target.value})
}

handleemail=e=>{

    this.setState({Email:e.target.value})
}

handlePhno=e=>{
    this.setState({Phno:e.target.value})
}


handleSubmit=()=>{

    this.state.userData.push(
                        this.state.Name,this.state.Phno,this.state.Email
                            )
this.setState({
  Name:"",
  Email:"",
  Phno:""
})

}

download=()=>{
const input = document.getElementById('demo');
  html2canvas(input)
    .then((canvas) => {
    const imgData = canvas.toDataURL('image/jpg');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0);
    // pdf.output('dataurlnewwindow');
    pdf.save("download.pdf");
});

    
}

handleListpdf=()=>{
  const input2 = document.getElementById('List');
  html2canvas(input2)
    .then((canvas) => {
    const imgData = canvas.toDataURL('image/jpg');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save("list.pdf");
    });
}


render(){


const{
Name,Email,Phno,userData
}=this.state

    return(

<div>

<Container>
<Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Card link>
<Segment>

<div id="demo">
<Form>


<Container>
<Image src={user} width="100%" height="50%"/>
</Container>
                <div className="space"></div>
                <Form.Group widths='equal'>
                <Form.Field className="label">
                <label>Name</label>
                <input placeholder='Enter Name' 
                value={Name}
                onChange={this.handleName}
                style={formInput}
                />
            </Form.Field>

            </Form.Group>
                  <div className="space"></div>
                  <Form.Group widths='equal'>
                    <Form.Field className="label">
                      <label className="label">Mobile Number</label>
                      <input placeholder='Enter mobile number' 
                     
                      value={Phno} 
                      onChange={this.handlePhno}
                      maxLength="10"
                      style={formInput}
                      required
                      />
                  </Form.Field>
            
                </Form.Group>

 <div className="space"></div>
                  <Form.Group widths='equal'>
                    <Form.Field className="label">
                      <label className="label">Email</label>
                      <input placeholder='Enter Email'
                      type="email" 
                      value={Email} 
                      onChange={this.handleemail}
                      style={formInput}
                      required
                      />
                  </Form.Field>
            
                </Form.Group>

                <br/>

</Form>
</div>
                <Button primary onClick={()=>this.handleSubmit()}>Submit</Button>


</Segment>
</Card>

      </Grid.Column>
      <Grid.Column>
       <Button color="red" onClick={()=>this.download()}>Download Form To PDF </Button>
      </Grid.Column>
      <Grid.Column>
        <div id="List">

        <Table singleLine>
                                        <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Name</Table.HeaderCell>
                                            <Table.HeaderCell>Email</Table.HeaderCell>
                                            <Table.HeaderCell>Phno</Table.HeaderCell>
                                        </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                        {userData.map(i=>(
                                          <Table.Row>
                                            <Table.Cell>{i.name}</Table.Cell>
                                            <Table.Cell>{i.email}</Table.Cell>
                                            <Table.Cell>{i.phno}</Table.Cell>
                                            </Table.Row>
                                          ))}
                                            
                                        </Table.Body>
                                        
                                    </Table>

                                   
        </div>
         <Button color="red" onClick={()=>this.handleListpdf()}>Download</Button>
      </Grid.Column>
    </Grid.Row>





</Grid>
</Container>
</div>
        )
}
}

const formInput = {
    background: "transparent",
    border:"2px solid #4472C4",
    color:"#111111",
    padding:"14px",
    borderRadius:"0px"
}

export default Register