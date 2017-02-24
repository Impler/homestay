import React, { Component, PropTypes } from 'react';
import { Card, WingBlank, WhiteSpace, Carousel } from 'antd-mobile';
import styles from './HomeStayList.less';

const HomeStayList = ({ homeStayList, onLink }) => {
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <Card.Header
          title="民宿信息"
          thumb="http://up.qqjia.com/z/04/tu6133_4.jpg"
          thumbStyle={{ width: '1rem', height: '1rem' }}
        />
        <Card.Body>
          {
            homeStayList && homeStayList.length > 0 ?
              homeStayList.map((item) => {
                return (
                  <div key={`HSList-${item.id}`} className={styles.list} onClick={() => onLink(`/homeStay/${item.id}`)}>
                    <Carousel className={styles.listCarousel} dots={false}>
                      {
                        item.icons && item.icons.length > 0 ?
                          item.icons.map((secondItem) => {
                            return (
                              <div key={`icons-${secondItem.id}`} className={styles.imgList}>
                                <img src={secondItem.path} alt={secondItem.description} />
                              </div>
                            );
                          }) :
                          <div className={styles.imgList}>
                            <img src={require('../statics/no-picture.svg')} alt="无数据" />
                          </div>
                      }
                    </Carousel>
                    <div className={styles.listText}>
                      <b>{item.name}</b>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              }) : '无数据'
          }
        </Card.Body>
        <Card.Footer extra={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} 更新`} />
      </Card>
      <WhiteSpace size="lg" />
    </WingBlank>
  );
};
HomeStayList.propTypes = {
  homeStayList: PropTypes.array.isRequired,
  onLink: PropTypes.func.isRequired,
};
export default HomeStayList;