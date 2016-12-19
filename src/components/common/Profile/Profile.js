import React from 'react'
import {Link} from 'react-router'
import prefix from '../../../utils/routePrefix'
import styles from './styles.scss'
import transformDate from '../../../utils/transformDate'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const Profile = props => {
	let {collectedTopics,profile} = props
	let {avatar_url,create_at,loginname,recent_replies,recent_topics,score} = profile;
	recent_replies = recent_replies ? recent_replies : [];
	recent_topics = recent_topics ? recent_topics : [];

	return (
		<div className={styles.profile}>
			<div className={styles.header}>
				<img src={avatar_url} alt={loginname}/>
				<p>{loginname}</p>
				<p>积分:{score}</p>
				<p>注册于:{transformDate(create_at)}</p>
			</div>
			<div className={styles.boxs}>
				<div className={styles.box}>
					<MuiThemeProvider>
						<List>
						  <Subheader>收藏的话题</Subheader>
						  <Divider/>
						  <TopicList {...props} topics={collectedTopics}/>
						</List>
					</MuiThemeProvider>
				</div>
				<div className={styles.box}>
					<MuiThemeProvider>
						<List>
						  <Subheader>最近参与的话题</Subheader>
						  <Divider/>
						  <TopicList {...props} topics={recent_replies}/>
						</List>
					</MuiThemeProvider>
				</div>
				<div className={styles.box}>
					<MuiThemeProvider>
						<List>
						  <Subheader>最近创建的话题</Subheader>
						  <Divider/>
						  <TopicList {...props} topics={recent_topics}/>
						</List>
					</MuiThemeProvider>
				</div>
			</div>
		</div>
	)
}

const TopicList = props => {
	const {dispatch,article,fetchArticle,topics} = props;

	return (
		<div>
		    {topics.length === 0 && <ListItem primaryText="还没有相关话题" />}
		    {topics.length > 0 && 
				topics.map((topic,index) => 
					<Link key={index} to={`${prefix}/topic/${topic.id}`} className={styles.link} onClick={() => {
					  if(!article[topic.id]){
					    dispatch(fetchArticle(topic.id))
					  }else if(article.currentTopicId !== topic.id){
					    dispatch(fetchArticle(topic.id,false))
					  }
					  }}>
					  <ListItem primaryText={topic.title} leftAvatar={<Avatar src={topic.author.avatar_url} />}/>
					  <Divider/>
					</Link>
					
				)
			}
		</div>
	)
}


const ListExampleChat = () => (
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
      />
      <Divider />
    </List>
);


export default Profile