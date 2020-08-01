import React, {Component} from 'react';

class Infomation extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let {title, date, content, writer, style} = this.props;
        return(
            <div style={style}>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    {content}
                </div>
            </div>
        );
    }
}   

export default Infomation;