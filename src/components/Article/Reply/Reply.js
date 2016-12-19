import React, { PropTypes,Component } from 'react'
import {Link} from 'react-router'
import prefix from '../../../utils/routePrefix'
import styles from './styles.scss'
import {fetchComment,fetchArticle,recordArticleScrollT,switchSupport,fetchProfile} from '../../../actions'
import transformDate from '../../../utils/transformDate'
import getSize from '../../../utils/getSize'
import LinkToLogin from '../../common/LinkToLogin/LinkToLogin'
import Dialog from '../../common/Dialog'
import classnames from 'classnames'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Reply extends Component {
	constructor(){
		super();
		this.state = {
			isSupported:[],
			supportNum:[],
			height:[],
			name:[],
			openDialog:false
		}
	}
	supportState = (replies,login) => {
		let isSupported = replies.map(reply => {
			return reply.ups.some(up => up === login.loginId)
		})
		let supportNum = replies.map(reply => reply.ups.length)
		this.setState({isSupported,supportNum})
	}
	closeDialog = () => {
		this.setState({
			openDialog:false
		})
	}
	componentWillMount(){
		const {replies,login} = this.props
		this.supportState(replies,login)
	}

	componentWillReceiveProps(newProps){	
		const {switchSupportInfo,replies,login,isCommented,currentTopicId,dispatch} = newProps
		if(this.state.height.length !== 0){
			this.setState({
				height:[],
				name:[]
			})
		}
		if(replies.length !== this.props.replies.length){
			this.supportState(replies,login)
		}
		if(isCommented && this.props.isCommented !== isCommented){
			dispatch(fetchArticle(currentTopicId))
		}
		// if(switchSupportInfo){
		// 	if(!this.props.switchSupportInfo || !(this.props.switchSupportInfo.action===switchSupportInfo.action && this.props.switchSupportInfo.index===switchSupportInfo.index)){
		// 		if(switchSupportInfo.success){
		// 			let isSupported = this.state.isSupported;
		// 			let supportNum = this.state.supportNum;
		// 			isSupported[switchSupportInfo.index] = switchSupportInfo.action === 'up';
		// 			switchSupportInfo.action === 'up' ? ++supportNum[switchSupportInfo.index] : --supportNum[switchSupportInfo.index]
		// 			this.setState({
		// 				isSupported,
		// 				supportNum
		// 			})
		// 		}else{	
		// 		}
		// 	}
		// }
	}

	render(){
		let {profile,replies,dispatch,login,switchSupportInfo,currentTopicId}= this.props
		return (
			<div className={styles.reply}>
				<Dialog isOpen={this.state.openDialog} close={this.closeDialog} singleButton={true}>
					不能给自己点赞！
				</Dialog>
			    <div style={{margin:'-8px 0'}}>
			      <MuiThemeProvider>
			      	<List>
			      		<ListItem>
			      			<div style={{margin:-16}}>
			      				<h2>共有{replies.length}条回复</h2>
			      			</div>
			      		</ListItem>
			      		{replies.map((reply,index) => (
			      			<div key={index}>
			      				<ListItem>
			      					<div className={styles.author}>
			      						<img src={reply.author.avatar_url} alt={reply.author.loginname}/>
			      						<div style={{textAlign:'center',paddingTop:10}}>{index+1}楼</div>
			      					</div>
			      					<div className={styles.main}>
			      						<div className={styles.item}>
			      							<Link to={`${prefix}/profile`} onClick={e => {
			      								if(profile.loginname !== reply.author.loginname){
			      									dispatch(fetchProfile(reply.author.loginname))
			      								}
			      							}}>
			      							 {reply.author.loginname}
			      							</Link>
			      							<span style={{float:'right'}}>{transformDate(reply.create_at)}</span>
			      						</div>
			      						<div className={`${styles.item} markdown-text`} dangerouslySetInnerHTML={{__html: reply.content}} style={{lineHeight:'21px'}}></div>
			      						<div className={styles.item}>
			      							<div style={{float:'right'}}>
			      								<span  onClick={e => {
			      									let heightArr = [];
			      									let nameArr = [];
			      									heightArr[index] = this.state.height[index] ? 0 : 120
			      									nameArr[index] = `@${reply.author.loginname} `
			      									this.setState({
			      										height:heightArr,
			      										name:nameArr
			      									})
			      								}} style={{cursor:'pointer',marginRight:10}}>
			      									回复 
			      								</span>
			      								<span>
			      									<i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe610;'}} onClick={ e => {
			      										e.stopPropagation()
			      										if(login.loginId){
			      											if(reply.author.loginname !== login.loginName){
			      												const {scrollT} = getSize()
			      											    // 点赞的时候也会发送数据请求，所以Article组件会刷新，如果不保存位置的话，Article的位置会变成上次记录的位置或者默认位置0
			      											    dispatch(recordArticleScrollT(currentTopicId,scrollT))

			      											    let isSupported = this.state.isSupported;
			      											    let supportNum = this.state.supportNum;
			      											    isSupported[index]? --supportNum[index] : ++supportNum[index]
			      											    isSupported[index] = !isSupported[index]
			      											    this.setState({
			      											    	isSupported,
			      											    	supportNum
			      											    })
			      											    dispatch(switchSupport(login.accessToken,reply.id,index))
			      											}else{
			      										    	this.setState({
			      										    		openDialog:true
			      										    	})
			      										    }
			      										}else{
			      											let heightArr = [];
			      											heightArr[index] = this.state.height[index] ? 0 : 150
			      											this.setState({
			      												height:heightArr
			      											})
			      										}
			      										
			      									}} style={{color:this.state.isSupported[index] ? 'red':'black',cursor:'pointer'}}
			      									></i>
			      									{this.state.supportNum[index]}
			      								</span>
			      							</div>
			      						</div>
			      						<NeedComment {...({login,dispatch,currentTopicId})} 
			      						pHeight={this.state.height[index]} defaultValue={this.state.name[index]}/>
			      					</div>
			      				</ListItem>
			      				<Divider/>
			      			</div>
			      		))}
			      	</List>
			      </MuiThemeProvider>
			    </div>
				<MuiThemeProvider>
					<ListItem>
						<NeedComment {...({login,dispatch,currentTopicId})} pHeight='150px'/>
					</ListItem>
				</MuiThemeProvider>
			</div>
		)
	}
}

class NeedComment extends Component{
	render(){
		const {login,dispatch,currentTopicId,pHeight} = this.props
		const sHeight = pHeight ? pHeight : 0 
		const style = pHeight ? {overflow:'hidden',minHeight:pHeight} : {overflow:'hidden',height:0}
		// const tail = '<b>—— —— 来自lumia2046专版客户端</b>'
		// const tail = '<p style="text-align:right">—— —— 来自lumia2046专版客户端</p>'
		if(login.loginId){
			return (<div style={style} className={styles.textarea}>
						<MuiThemeProvider>
			    		<form className={styles.form} >
							<TextField hintText={this.props.defaultValue || '请输入内容'}  multiLine={true} ref='textarea'
							underlineStyle={{color:'#00BCD4'}} onClick={e => {
								const defaultValue = this.props.defaultValue || ''
								e.target.value = e.target.value || defaultValue
							}}
							/><br />
							<RaisedButton label="回复" primary={true} onClick={e => {
			    				e.preventDefault();
			    				const textarea = this.refs.textarea.input.refs.input.value
			    				if(!textarea.trim()){
			    				  return null;
			    				}
			    				const {scrollT,contentH,windowH} = getSize()
			    				dispatch(fetchComment(login.accessToken,currentTopicId,textarea))
			    				if(pHeight === 120){
			    					dispatch(recordArticleScrollT(currentTopicId,contentH-windowH))
			    				}else{
			    					dispatch(recordArticleScrollT(currentTopicId,scrollT))
			    				}
			    				this.refs.textarea.input.refs.input.value = ''
			    			}}/>
			    		</form>
						</MuiThemeProvider>
			    	</div>)
		}else{
			return  (<div style={{overflow:'hidden',height:sHeight,lineHeight:`${sHeight}px`}} className={styles.textarea}>
				<LinkToLogin  dispatch={dispatch}/> 
			</div>)
		}
	}
}
export default Reply