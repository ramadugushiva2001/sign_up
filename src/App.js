import {Component} from 'react'
import './App.css'

class App extends Component{
  state={username:"",email:"",message:"",successMessage:false,usernameErrorMessage:false,emailErrorMessage:false,messageErrorMessage:false}

  onChangeUsername=event=>{
    this.setState({username:event.target.value})
  }
  onChangeEmail=event=>{
    this.setState({email:event.target.value})
  }
  onChangeMessage=event=>{
    this.setState({message:event.target.value})
  }

  onBlurUsername = () => {
    const { username } = this.state;
    if (username === "") {
      this.setState({ usernameErrorMessage: true });
    } else {
      this.setState({ usernameErrorMessage: false });
    }
  };

  onBlurEmail = () => {
    const { email } = this.state;
    if (email === "") {
      this.setState({ emailErrorMessage: true });
    } else {
      this.setState({ emailErrorMessage: false });
    }
  };

  onBlurMessage=()=>{
    const {message}=this.state 
    if (message===""){
      this.setState({messageErrorMessage:true})
    }else{
      this.setState({messageErrorMessage:false})
    }
  }

  onClickSubmit=event=>{
    event.preventDefault()
    const {username,email,message}=this.state 
    if (username!==""&&  email !=="" &&message!==""){
      this.setState({successMessage:true})
    }else{
      if (username===""){
        this.setState({usernameErrorMessage:true})
      }if (email===""){
        this.setState({emailErrorMessage:true})
      }if (message===""){
        this.setState({messageErrorMessage:true})
      }
    }
  }

  render(){
    const {successMessage,username,email,message,emailErrorMessage,usernameErrorMessage,messageErrorMessage}=this.state 
    return(
      <div className='user-form-container'> 
        <form className='user-form' onSubmit={this.onClickSubmit}>
          <h1>Signup Form</h1>
          <label htmlFor='username'>Name</label>
          <input type="text" id="username" placeholder='Enter Your Name' onChange={this.onChangeUsername} onBlur={this.onBlurUsername} value={username} />
         {usernameErrorMessage && <p className='error-message'>*Required</p>}
          <label htmlFor='email'>Email</label>
          <input id="email" type="text" placeholder='Enter Your Email' onChange={this.onChangeEmail} onBlur={this.onBlurEmail}  value={email}/>
           {emailErrorMessage && <p className='error-message'>*Required</p>}
          <label htmlFor='message'>Message</label>
          <textarea id="message" rows="5" cols="72" placeholder="Enter Your Message..." onChange={this.onChangeMessage} onBlur={this.onBlurMessage} value={message}></textarea>
          {messageErrorMessage && <p className='error-message'>*Required</p>}
          <button type="submit" className='submit-button'>Submit</button>
          {successMessage && <p className='success-message'>Form Submitted Successfully</p>}
        </form> 
      </div> 
    )
  }
}

export default App

