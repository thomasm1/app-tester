import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Row,
  Col,
  ButtonGroup,
  Button,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationLink,
  PaginationItem,
  Badge,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

import s from './Search.scss';
import i1 from '../../../images/jpeg/1.jpg';
import i2 from '../../../images/jpeg/5.jpg';
import i3 from '../../../images/jpeg/12.jpg';
import i4 from '../../../images/jpeg/10.jpg';

class Search extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">Matching - <span className="fw-semi-bold">Results</span></h2>
        <div className="btn-toolbar justify-content-between">
          <div className="d-inline-flex">
            <UncontrolledButtonDropdown>
              <DropdownToggle caret>
                Popular
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>All</DropdownItem>
                <DropdownItem>Popular</DropdownItem>
                <DropdownItem>Interesting</DropdownItem>
                <DropdownItem>Latest</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown className="ml-xs">
              <DropdownToggle caret>
                All Time
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Last 24h</DropdownItem>
                <DropdownItem>Last Month</DropdownItem>
                <DropdownItem>Last Year</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <ButtonGroup>
            <Button color="transparent" className="active"><i className="fa fa-th-list" /></Button>
            <Button color="transparent"><i className="fa fa-th-large" /></Button>
          </ButtonGroup>
        </div>
        <Row className="mt-3 d-block">
          <Col xl={3} sm={12} className="float-xl-right">
            <h4>Results <span className="fw-semi-bold">Filtering</span></h4>
            <p className="text-muted fs-mini">Listed content is categorized by the following groups:</p>
            <Nav className={`nav-pills flex-column nav-stacked ${s.searchResultCategories} mt`}>
              <NavItem>
                <NavLink href="#">
                  Hot Ideas
                  <Badge color="gray" pill className="float-right">34</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Latest Pictures
                  <Badge color="gray" pill className="float-right">9</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Labels of Day</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Recent Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Globals
                  <Badge color="gray" pill className="float-right">18</Badge>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col xl={9} sm={12}>
            <p className={s.searchResultsCount}>About 94 700 000 (0.39 sec.) results</p>
            <section className={s.searchResultItem}>
              <a className={s.imageLink} href="#">
                <img className={s.image} src={i1} alt="" />
              </a>
              <div className={s.searchResultItemBody}>
                <Row>
                  <Col md={9}>
                    <h4 className={s.searchResultItemHeading}>
                      <a href="#">Next generation admin template</a>
                    </h4>
                    <p className={s.info}>
                      New York, NY 20188
                    </p>
                    <p className={s.description}>
                      Not just usual Metro. But something bigger. Not just usual widgets, but real
                      widgets. Not just yet another admin template,
                      but next generation admin template.
                    </p>
                  </Col>
                  <Col md={3} xs={12} className="text-center">
                    <p className="value3 mt-sm">
                      $9, 700
                    </p>
                    <p className="fs-mini text-muted">
                      PER WEEK
                    </p>
                    <Button color="info" size="sm">Learn More</Button>
                  </Col>
                </Row>
              </div>
            </section>
            <section className={s.searchResultItem}>
              <a className={s.imageLink} href="#">
                <img className={s.image} src={i2} alt="" />
              </a>
              <div className={s.searchResultItemBody}>
                <Row>
                  <Col md={9}>
                    <h4 className={s.searchResultItemHeading}>
                      <a href="#">Try. Posted by Okendoken</a>
                      <small>
                        <span className="badge badge-pill badge-danger float-right">
                          <span className="fw-normal"> Best Deal!</span>
                        </span>
                      </small>
                    </h4>
                    <p className={s.info}>
                      Los Angeles, NY 20188
                    </p>
                    <p className={s.description}>
                      You will never know exactly how something will go until you try it. You can
                      think three hundred times and still have no precise result.
                    </p>
                  </Col>
                  <Col md={3} xs={12} className="text-center">
                    <p className="value3 mt-sm">
                      $10, 300
                    </p>
                    <p className="fs-mini text-muted">
                      PER WEEK
                    </p>
                    <Button color="info" size="sm">Learn More</Button>
                  </Col>
                </Row>
              </div>
            </section>
            <section className={s.searchResultItem}>
              <a className={s.imageLink} href="#">
                <img className={s.image} src={i3} alt="" />
              </a>
              <div className={s.searchResultItemBody}>
                <Row>
                  <Col md={9}>
                    <h4 className={s.searchResultItemHeading}>
                      <a href="#">Vitaut the Great</a>
                    </h4>
                    <p className={s.info}>
                      New York, NY 20188
                    </p>
                    <p className={s.description}>
                      The Great Prince of the Grand Duchy of Lithuania he had stopped the invasion
                      to Europe of Timur (Tamerlan) from Asia heading a big Army
                      of Belarusians, Lithuanians.
                    </p>
                  </Col>
                  <Col md={3} xs={12} className="text-center">
                    <p className="value3 mt-sm">
                      $3, 200
                    </p>
                    <p className="fs-mini text-muted">
                      PER WEEK
                    </p>
                    <Button color="info" size="sm">Learn More</Button>
                  </Col>
                </Row>
              </div>
            </section>
            <section className={s.searchResultItem}>
              <a className={s.imageLink} href="#">
                <img className={s.image} src={i4} alt="" />
              </a>
              <div className={s.searchResultItemBody}>
                <Row>
                  <Col md={9}>
                    <h4 className={s.searchResultItemHeading}>
                      <a href="#">Can I use CSS3 Radial-Gradient?</a>
                    </h4>
                    <p className={s.info}>
                      Minsk, NY 20188
                    </p>
                    <p className={s.description}>
                      Yes you can! Further more, you should!
                      It let&#39;s you create really beautiful images
                      either for elements or for the entire background.
                    </p>
                  </Col>
                  <Col md={3} xs={12} className="text-center">
                    <p className="value3 mt-sm">
                      $2, 400
                    </p>
                    <p className="fs-mini text-muted">
                      PER MONTH
                    </p>
                    <Button color="info" size="sm">Learn More</Button>
                  </Col>
                </Row>
              </div>
            </section>
            <div className="d-flex justify-content-center mt-3">
              <Pagination>
                <PaginationItem disabled>
                  <PaginationLink previous href="#">Prev</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#">Next</PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </Col>
        </Row>
      </div>);
  }

}

export default withStyles(s)(Search);
