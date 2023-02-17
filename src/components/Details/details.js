import React,{Component} from 'react';
import './details.css';
import DetailsDisplay from './DetailsDisplay';

const detailsURL='http://localhost:9800/details?watchId='

class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            itemDetail:'',
            userItem:'' //to store the items selected by user

        }
    }
//this is to set theuserItem state with the items selected by user
    addToCart=(data)=>{
        this.setState({userItem:data})
    }

    //This is to send the ids to cart API

    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.itemDetail.watch_name}`)

    }


    render(){
        return(
            <>
            <DetailsDisplay details={this.state.itemDetail}
                finalOrder={(data)=>{this.addToCart(data)}} />   
                <div id='proceed-btn'>
                <button className='proceed-btn' onClick={this.proceed}>PROCEED</button>

                </div>
                     {/* <h1>Details page</h1> */}
            </>
        )
    }

    //API calling
       componentDidMount() {
        let watch_id = this.props.match.params.watch_id;
        sessionStorage.setItem('watch_id',watch_id);
        console.log(this.props)
        console.log("watch id",watch_id);
        console.log(`${detailsURL}${watch_id}`)

        fetch(`${detailsURL}${watch_id}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ itemDetail: data })
            })
    }

}

export default Details;
