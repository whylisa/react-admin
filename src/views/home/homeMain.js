import React from "react"
import { Row, Col} from 'antd'
import Aside from '../../component/navLeft/aside'
import Header from '../../component/header/header'
export default class HomeMain extends React.Component {
	render() {
		return(
		<Row className="container">
		    <Col span="4" className="nav-left">
		         <Aside />
		    </Col>
		    <Col span="20" className="main">
		        <Header/>
		        <Row className="content">
		           
		            {this.props.children}
		        </Row>
		    </Col>
		</Row>
		
		)
	}
}