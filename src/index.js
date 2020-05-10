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

ReactDOM.render(
<Container>
    <Row>
        <Timer />
    </Row>
    <Row>
        <Banner />
    </Row>
    <Row>
        <MyPanel />
    </Row>
</Container>, document.getElementById('root'));
registerServiceWorker();
