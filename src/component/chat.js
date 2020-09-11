import React, {Component} from 'react';
import ChatBackground from '../image/chat_background.png'

class Chat extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const content = this.props.content;
        const size = this.props.size;
        const width = size * content.length + 20 + "px";
        const fontSize = size + "px";

        return(
            <div style={{margin: '10px'}}>
                <div style={{float: this.props.float}}>
                    <span>{this.props.send}</span>
                    <div style={{
                        fontSize: fontSize, 
                        height: size, 
                        width : width, 
                        borderRadius: '5px', 
                        backgroundImage: `url("${ChatBackground}")`,
                        padding: '0 10px',
                        textAlign: 'center'}}>
                        {content}
                    </div>
                </div>
                <div style={{clear:'both'}}></div>
            </div>
        );
    }
}   

export default Chat;