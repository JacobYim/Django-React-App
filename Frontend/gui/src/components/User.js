import React from 'react';
import { Input, Button } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios';
import { message } from 'antd';

class UserRow extends React.Component {

    onClickDelete = (pk,e) => {
        e.preventDefault();
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

    onClickModify = (pk,e) => {

    }

    render() {
        console.log(this.props);
        if (! this.props.modcondition){

            return (
                <div>
                    <Row>
                        <Col span={6}>{this.props.user.username}</Col>
                        <Col span={6}>{this.props.user.address}</Col>
                        <Col span={3}>{this.props.user.first_name}</Col>
                        <Col span={3}>{this.props.user.last_name}</Col>
                        <Col span={6}>
                            <Button type="danger" onClick={(e) => {this.onClickDelete(e);}}>Delete</Button>
                            <Button  onClick={(e) => {this.onClickModify(e);}}>Modify</Button>
                        </Col>
                    </Row>
                </div>
            );
        }else{

            return (
                <div>
                    <Row>
                        <Col span={6}>{this.props.username}</Col>
                        <Col span={6}><Input/></Col>
                        <Col span={3}><Input/></Col>
                        <Col span={3}><Input/></Col>
                        <Col span={6}>{this.props.lastname}</Col>
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
                <Col span={6}>address</Col>
                <Col span={3}>firstname</Col>
                <Col span={3}>lastname</Col>
                <Col span={6}>
                    Action
                </Col>
            </Row>
        </div>
        )
    }
}

class UserTable extends React.Component {

    state = {
        searchtext : '',
        users : []
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
                    (x,i) => <UserRow user = {x}/>
                )}
            </div>
        )
    }
}

export default UserTable;