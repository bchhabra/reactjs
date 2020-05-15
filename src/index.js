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

ReactDOM.render(
<Container>
    <Row>
        <Timer />
    </Row>
    <Row>
        <Banner />
    </Row>
    <Row>
        <Catalog products={productDetails} />
    </Row>
</Container>, document.getElementById('root'));
registerServiceWorker();
