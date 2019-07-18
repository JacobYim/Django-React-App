import React from 'react';
// import axios from 'axios';
// import { Table, Input, Button, Icon, message } from 'antd';
// import Highlighter from 'react-highlight-words';
import UserTable from '../components/User';

class Admin extends React.Component{
    // state = {
    //     searchtext : '',
    //     users : []
    // }

    // getColumnSearchProps = dataIndex => ({
    //     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    //       <div style={{ padding: 8 }}>
    //         <Input
    //           ref={node => {
    //             this.searchInput = node;
    //           }}
    //           placeholder={`Search ${dataIndex}`}
    //           value={selectedKeys[0]}
    //           onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
    //           onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
    //           style={{ width: 188, marginBottom: 8, display: 'block' }}
    //         />
    //         <Button
    //           type="primary"
    //           onClick={() => this.handleSearch(selectedKeys, confirm)}
    //           icon="search"
    //           size="small"
    //           style={{ width: 90, marginRight: 8 }}
    //         >
    //           Search
    //         </Button>
    //         <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
    //           Reset
    //         </Button>
    //       </div>
    //     ),
    //     filterIcon: filtered => (
    //       <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    //     ),
    //     onFilter: (value, record) =>
    //       record[dataIndex]
    //         .toString()
    //         .toLowerCase()
    //         .includes(value.toLowerCase()),
    //     onFilterDropdownVisibleChange: visible => {
    //       if (visible) {
    //         setTimeout(() => this.searchInput.select());
    //       }
    //     },
    //     render: text => (
    //       <Highlighter
    //         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //         searchWords={[this.state.searchText]}
    //         autoEscape
    //         textToHighlight={text.toString()}
    //       />
    //     ),
    //   });
    
    // handleSearch = (selectedKeys, confirm) => {
    //     confirm();
    //     this.setState({ searchText: selectedKeys[0] });
    // };

    // handleReset = clearFilters => {
    //     clearFilters();
    //     this.setState({ searchText: '' });
    // };

    // componentDidMount(){
    //     axios.get('http://127.0.0.1:8000/users/').then(
    //         res => {
    //             this.setState({
    //                 users : res.data
    //             });
    //             console.log(res.data)
    //         }
    //     )
    // }

    // onClickDelete = (pk,e) => {
    //     e.preventDefault();
    //     console.log(pk)
    //     // axios.delete(`http://127.0.0.1:8000/users/${pk.pk}`).then(
    //     //     res => {
    //     //         console.log(res)
    //         let usersList = this.state.users;
    //         let index = usersList.indexOf(pk);
    //         usersList.splice(index, 1);
    //         console.log(usersList);
    //         this.setState({users : usersList});
    //         message.success(`delete ${pk.username} success`, 5);
    //     //     }
    //     // ).catch(err => {
    //     //     message.info('error has been occured');
    //     // })
    // }

    // // render = (record) => (<div>
    // //     <Button type="danger" onClick={(e) => {this.onClickDelete(record, e);}}>Delete</Button>
    // //     <Button  onClick={(e) => {this.onClickModify(record, e);}}>Modify</Button>
    // //   </div>)

 
        
    // onClickModify = (pk,e) => {
    //     e.preventDefault();
    //     console.log(pk)
    //     // axios.delete(`http://127.0.0.1:8000/users/${pk.pk}`).then(
    //     //     res => {
    //     //         console.log(res)
    //         let usersList = this.state.users;
    //         let index = usersList.indexOf(pk);
    //         let newItem = pk;
    //         newItem.username = <Input/>
    //         newItem.email = <Input/>
    //         newItem.first_name = <Input/>
    //         newItem.last_name = <Input/>
    //         usersList.splice(index, 1, newItem);
    //         console.log(usersList);
    //         this.setState({users : usersList});
    //         message.success(`delete ${pk.username} success`, 5);
    //     //     }
    //     // ).catch(err => {
    //     //     message.info('error has been occured');
    //     // })
    // }

    render(){

        // const columns = [
        //     { title: 'Name', dataIndex: 'username', key: 'username', ...this.getColumnSearchProps('username')}, 
        //     { title: 'Email', dataIndex: 'email', key: 'email', ...this.getColumnSearchProps('email')},
        //     { title: 'First Name', dataIndex: 'first_name', key: 'first_name', ...this.getColumnSearchProps('first_name')},
        //     { title: 'Action', dataIndex: '', 'key': 'x', render : (record) => (<div>
        //                                                                     <Button type="danger" onClick={(e) => {this.onClickDelete(record, e);}}>Delete</Button>
        //                                                                     <Button  onClick={(e) => {this.onClickModify(record, e);}}>Modify</Button>
        //                                                                   </div>)}
        // ]

        return(

            
            <div>
                <UserTable/>
            </div>
        )
    }
}

export default Admin;
                // {/* <Header/>
                // <Table columns={columns} dataSource={this.state.users} /> */}