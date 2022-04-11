import React from "react";
import Comment from "./comment";
import CommentList from "./comment-list";
import { Container, Card, CardGroup } from "react-bootstrap";

export default class CommentSection extends React.Component{
    render(){
        let commentOne = {
            username: "Bode Miller",
            message: "I love Big Sky!"
        }
        let commentTwo = {
            username: "Tom Brady",
            message: "Although I ski Big Sky often I love Jackson Hole!"
        }
        let commentThree = {
            username: "Bill Gates",
            message: "Big Sky owns my"
        }

        return( 
            <Container id="comment-section">
            <h4>Let us know your thoughts!:</h4>
    <div>

        <Card style={{
             height: '100%',
             padding: '15px', 
             borderRadius: '20px',
             boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)',
            
        }} id="comment">
   
        <Card.Body>
        <Card.Title>{commentOne.username}</Card.Title>
            <Card.Text>
            {commentOne.message}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
    <div>
        <Card style={{
             height: '100%',
             padding: '15px', 
             borderRadius: '20px',
             boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)'



         }} id="comment">
        <Card.Body
        style={{alignItem:"center"}}>
        <   Card.Title>{commentTwo.username}</Card.Title>
            <Card.Text>
            {commentTwo.message}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
    <div>
        <Card style={{
            
             height: '100%',
             padding: '15px', 
             borderRadius: '20px',
             boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)'
        


         }} id="comment">
        <Card.Body>
        <   Card.Title>{commentThree.username}</Card.Title>
            <Card.Text>
            {commentThree.message}
            </Card.Text>
         </Card.Body>
    
        </Card>
        
        
    </div>
   
</Container>
        )
    }
}