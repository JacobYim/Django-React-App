import React from 'react';
import { Input, Button } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios';
import { message } from 'antd';

class UserRow extends React.Component {

    state = {
        modcondition : true
    }

    onClickModify = (e) => {
        this.setState({modcondition : false});
    }

    onClickCancleModify = (e) => {
        this.setState({modcondition : true});
    }

    onModify = (e) => {
        console.log(e.target.username.value);
        // this.setState({modcondition : true});
    }

    render() {
        console.log(this.props);
        if (this.state.modcondition){
            return (
                <div>
                    <Row>
                        <Col span={6}>{this.props.user.username}</Col>
                        <Col span={4}>{this.props.user.address}</Col>
                        <Col span={4}>{this.props.user.first_name}</Col>
                        <Col span={4}>{this.props.user.last_name}</Col>
                        <Col span={6}>
                            <Button type="danger" onClick={(e) => {this.props.action[0](this.props.user,e);}}>Delete</Button>
                            <Button onClick={(e) => {this.onClickModify();}}>Modify</Button>
                        </Col>
                    </Row>
                </div>
            );
        }else{
            return (
                <div>
                    <Row>
                        <form onClick={(e) => {this.onModify(e);}}>
                            <Col span={6}>{this.props.user.username}</Col>
                            <Col span={4}><Input name = "newAddress" value = {this.props.user.address}/></Col>
                            <Col span={4}><Input name = "newfirst_name" value = {this.props.user.first_name}/></Col>
                            <Col span={4}><Input name = "newlast_name" value = {this.props.user.last_name}/></Col>
                            <Col span={6}>
                                <Button onClick={(e) => {this.onClickCancleModify();}}>Cancle</Button>
                                <Button type = "submit">Update</Button>
                            </Col>
                        </form>
                    </Row>
                </div>
            );
        }
    }
}

class UserTableHead extends React.Component {
    render(){
        return(
        <div>
            <Row>
                <Col span={6}>username</Col>
                <Col span={4}>address</Col>
                <Col span={4}>firstname</Col>
                <Col span={4}>lastname</Col>
                <Col span={6}>
                    Action
                </Col>
            </Row>
        </div>
        )
    }
}

class UserTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            searchtext : '',
            users : []
        };

        this.onClickDelete = this.onClickDelete.bind(this);
        
    }

    onClickDelete = (pk,e) => {
        // e.preventDefault();
        console.log(pk)
        // axios.delete(`http://127.0.0.1:8000/users/${pk.pk}`).then(
        //     res => {
        //         console.log(res)
            let usersList = this.state.users;
            let index = usersList.indexOf(pk);
            usersList.splice(index, 1);
            console.log(usersList);
            this.setState({users : usersList});
            message.success(`delete ${pk.username} success`, 5);
        //     }
        // ).catch(err => {
        //     message.info('error has been occured');
        // })
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/users/').then(
            res => {
                this.setState({
                    users : res.data
                });
                console.log(res.data)
            }
        )
    }

    render(){
        return(
            <div>
                <UserTableHead/>
                {[...this.state.users].map(
                    (x,i) => <UserRow user = {x} action = {[this.onClickDelete, this.onClickModify]}/>
                )}
            </div>
        )
    }
}

export default UserTable;