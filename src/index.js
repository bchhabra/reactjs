import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import Assignment1 from './Assignment1';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Timer from './util/Timer';
import Banner from './util/Banner';
import MyPanel from './util/MyPanel';
import NameList from './util/NameList';
import LoginForm from './util/LoginForm';
import productDetails from './util/products.json';
import Catalog from './util/Catalog';
import Counter from './util/Counter';
import Product from './util/Product';
import QuestionPanel from './util/QuestionPanel';
import qadata from './util/questionsAnswers.json';
import opdata from './util/selectedanswers.json';
import Parent1 from './practice/Parent1';
import Parent2 from './practice/Parent2';

ReactDOM.render(
<Container>
    <Row>
        <Timer />
    </Row>
    <Row>
        <Banner />
    </Row>
    <Row>
        <Parent1 />
        <Parent2 />
    </Row>
</Container>, document.getElementById('root'));
registerServiceWorker();
