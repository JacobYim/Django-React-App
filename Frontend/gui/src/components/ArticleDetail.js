import React from 'react';
import {Card} from 'antd';
import axios from 'axios';

class ArticleDetail extends React.Component{

    state = {
        articles : {}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        // console.log(articleID);
        axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(
            res => {
                this.setState({
                    articles : res.data
                });
                console.log(res.data);
            }
        )
    }

    render(){
        return(
            <Card title = {this.state.articles.title}>
                {this.state.articles.content}
            </Card>
        )
    }
}

export default ArticleDetail;