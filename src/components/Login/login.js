import React,{Component} from 'react';
import Header from '../header';

const url = "https://userlogin-h5v5.onrender.com/api/auth/login";

class Login extends Component{

    constructor(){
        super()

        this.state={
            email:"nikki@gmail.com",
            password:'12345678',
            message:'',
            ltk:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message: data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
            {/* <Header/> */}
                <div className="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>Login</h3>
                            <h2>{this.state.message}</h2>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" class="form-control"
                                    value={this.state.email} onChange={this.handleChange}  />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" class="form-control"
                                    value={this.state.password} onChange={this.handleChange}  />
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.handleSubmit}>
                                Login
                            </button>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login