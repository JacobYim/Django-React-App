import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Admin from './components/Admin';

const BaseRouter = () =>(
    <div>
        <Route exact path = '/' component = {ArticleList}/>
        <Route exact path = '/:articleID' component = {ArticleDetail}/>
        <Route path = '/admin' component = {Admin} />
    </div>
);

export default BaseRouter;