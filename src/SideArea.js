import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sideArea.css';

const SideArea = (props) => {
    const changeCategory = (event) => {
        props.setInputCategoryId(event.target.value);
        props.setMainContentsView(1);
        props.setInputKeyword("");
        props.setUpperPrice(NaN);
        props.setLowerPrice(NaN);
    }

    return(
        <>
            <Container>
                <Row>
                    <Col className="category col-12 ms-4 h4 border-start border-5">
                        カテゴリ
                    </Col>
                </Row>
                <Row>
                    
                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={1}>
                            野菜
                        </button>
                    </Col>
                    
                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={2}>
                            お肉
                        </button>
                    </Col>
                    
                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={3}>
                            魚介
                        </button>
                    </Col>

                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={4}>
                            スイーツ
                        </button>
                    </Col>

                    <Col className="col-12 ms-4 ps-4 h5">
                        <button onClick={changeCategory} value={5}>
                            飲み物
                        </button>
                    </Col>
                </Row>
            </Container>
        </>        
    );
}
export default SideArea;