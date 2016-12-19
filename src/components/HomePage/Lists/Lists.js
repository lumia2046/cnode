import React, { PropTypes } from 'react'
import FlipMove from 'react-flip-move'
import transformDate from '../../../utils/transformDate'
import styles from './styles.scss'
import classnames from 'classnames';
import {Link} from 'react-router';
import prefix from '../../../utils/routePrefix'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const Lists = props =>  {
  const tabChn ={all:'全部',good:'精华',share:'分享',ask:'问答',job:'招聘'}
  const {topics,fetchArticle,dispatch,article,isFetching} = props;
  let disableAllAnimations = topics.length===20 ? false : true
  // disableAllAnimations从启用到禁用时enterAnimation设定的动画会不起作用，原因不明。
  let enterAnimation = {
    from: { transform: 'translateY(-80px)',opacity:0 },
    to:   { transform: 'translateY(0)',opacity:1 }
  }
  return (
  	<div style={{position:'relative'}}>
  	 <div className={styles.lists}>
  	   <MuiThemeProvider>
  	       <List>
  	         <FlipMove disableAllAnimations={disableAllAnimations} enterAnimation={enterAnimation}
  	          easing='ease-out' duration='400' staggerDelayBy='40' staggerDurationBy='4'>
  	           {topics.map((topic,i) => 
  	             <Link key={i} to={`${prefix}/topic/${topic.id}`} className={styles.link} onClick={() => {
  	               if(!article[topic.id]){
  	                 dispatch(fetchArticle(topic.id))
  	               }else if(article.currentTopicId !== topic.id){
  	                 dispatch(fetchArticle(topic.id,false))
  	               }
  	               }}>
  	               <ListItem
  	                 leftAvatar={<Avatar src={topic.author.avatar_url} />}
  	                 primaryText={
  	                   <div className={styles.text}>
  	                     {topic.top && <span style={{color:'blue'}}>顶</span>}
  	                     {topic.good && <span style={{color:'red'}}>精</span>}
  	                     <span className={styles.title}>{topic.title}</span>
  	                   </div>
  	                 }
  	                 secondaryText={
  	                    <div className={styles.text}>
  	                      <span>{topic.reply_count+'/'+topic.visit_count}</span>
  	                      <span>{tabChn[topic.tab]}</span>
  	                      <span style={{float:'right'}}>{transformDate(topic.create_at)}</span>
  	                   </div>
  	                 }
  	               />
  	               <Divider inset={true} />
  	             </Link>
  	           )}
  	         </FlipMove>
  	       </List>
  	   </MuiThemeProvider>
  	   <div className={styles.spinner}>
  	     <div className={styles.bounce1}></div>
  	     <div className={styles.bounce2}></div>
  	     <div className={styles.bounce3}></div>
  	   </div>
  	 </div>
  	</div>
    
    )
}

Lists.propTypes = {
  topics: PropTypes.array.isRequired,
  fetchArticle: PropTypes.func.isRequired
}

export default  Lists





