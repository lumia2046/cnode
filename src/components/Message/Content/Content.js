import React, { PropTypes,Component } from 'react'
import transformDate from '../../../utils/transformDate'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from 'react-router'
import prefix from '../../../utils/routePrefix'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '../../common/Dialog'
import CircleLoading from '../../common/CircleLoading'
import {markAllMessages,fetchMessage} from '../../../actions'

class Content extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    slideIndex: 0,
	    isOpen: false,
	    isUpdating:false
	  }
	}

	handleChange = (value) => {
	  this.setState({
	    slideIndex: value,
	  });
	};
	markMessages = () => {
		let {dispatch,login} = this.props
		let accessToken = login.accessToken
		dispatch(markAllMessages(accessToken))
		this.setState({
			isUpdating:true
		})
	}
	close = () => {
		this.setState({
			isOpen:false
		})
	}
	componentWillUpdate(newProps){
		let {dispatch,login,isMarked,hasNotReadMessage} = newProps
		let accessToken = login.accessToken
		if(isMarked && isMarked !== this.props.isMarked){
			dispatch(fetchMessage(accessToken))
		}
		if(isMarked && hasNotReadMessage.length === 0 && 
			hasNotReadMessage.length !== this.props.hasNotReadMessage.length){
			this.setState({
				isUpdating:false
			})
		}
	}
	render(){
		const {dispatch,hasNotReadMessage,hasReadMessage,article,fetchArticle} = this.props
		return (
		  <div>
			  {this.state.isUpdating && <div><CircleLoading /></div>}
			  {!this.state.isUpdating && <MuiThemeProvider>
				<div>
				  <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
				    <Tab label={<h2>未读消息:{hasNotReadMessage && hasNotReadMessage.length}</h2>} value={0} />
				    <Tab label={<h2>已读消息:{hasReadMessage && hasReadMessage.length}</h2>} value={1} />
				  </Tabs>
				  <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
				    <div>
				      {hasNotReadMessage && hasNotReadMessage.length === 0 && 
				      	<div>
				      		<div className={styles.msg}>暂无未读消息</div>
				      	</div>
				      }
				      {hasNotReadMessage.length>0 && 
				      	<div>
				        	<List>
				        	  {hasNotReadMessage.map((msg,index) =>
				  			<Link key={index} to={`${prefix}/topic/${msg.topic.id}`} className={styles.link} onClick={(e) => {
				  			  if(!article[msg.topic.id]){
				  			    dispatch(fetchArticle(msg.topic.id))
				  			  }else if(article.currentTopicId !== topic.id){
				  			    dispatch(fetchArticle(msg.topic.id,false))
				  			  }
				  			  }}>
				  			  	<ListItem
				  			  	  leftAvatar={<Avatar src={msg.author.avatar_url} />}
				  			  	  primaryText={msg.author.loginname}
				  			  	  secondaryText={
				  			  	    <div>
				  			  	       <div className={styles.oneline} dangerouslySetInnerHTML={{__html: msg.reply.content}}></div>
				  			  	       <p style={{fontSize:'14px'}}>
				  			  	       	<span>来自:{msg.topic.title}</span>
				  			  	       	<span style={{float:'right'}}>{transformDate(msg.reply.create_at)}</span>
				  			  	       </p>
				  			  	    </div>
				  			  	  }
				  			  	  secondaryTextLines={2}
				  			  	/>
				  			  	<Divider inset={true} />
				  			</Link>)}
				        	</List>
				        	<div style ={{textAlign:'center'}}>
				        		<RaisedButton label="清空未读消息" primary={true} onClick={e => {
								this.setState({
									isOpen:true
								})
				        	}}/>
				        	</div>
				        	
				        	<Dialog isOpen={this.state.isOpen} title='注意' action={this.markMessages} close={this.close}>
				        	  是否将所有未读消息标记为已读？
				        	</Dialog>		
				      	</div>				       
				      	}
				    </div>
				    <div>
				      {hasReadMessage.length === 0 && 
				      	<div className={styles.msg}>您还没有查看过任何消息哦</div>
				      }
				      {hasReadMessage.length>0 && 
				      	<List>
				      	{hasReadMessage.map((msg,index) =>
							<Link key={index} to={`${prefix}/topic/${msg.topic.id}`} className={styles.link} onClick={(e) => {
							  if(!article[msg.topic.id]){
							    dispatch(fetchArticle(msg.topic.id))
							  }else if(article.currentTopicId !== topic.id){
							    dispatch(fetchArticle(msg.topic.id,false))
							  }
							  }}>
							  	<ListItem
							  	  leftAvatar={<Avatar src={msg.author.avatar_url} />}
							  	  primaryText={msg.author.loginname}
							  	  secondaryText={
							  	    <div>
							  	       <div className={styles.oneline} dangerouslySetInnerHTML={{__html: msg.reply.content}}></div>
							  	       <p style={{fontSize:'14px'}}>
							  	       	<span>来自:{msg.topic.title}</span>
							  	       	<span style={{float:'right'}}>{transformDate(msg.reply.create_at)}</span>
							  	       </p>
							  	    </div>
							  	  }
							  	  secondaryTextLines={2}
							  	/>
							  	<Divider inset={true} />
							</Link>
				      	  )}
				      </List>}
				    </div>
				  </SwipeableViews>
				</div>
			  </MuiThemeProvider>}
		  </div>
		);
	}

}

export default Content




