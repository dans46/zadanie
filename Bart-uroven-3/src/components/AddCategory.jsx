import React from 'react'
import axios from 'axios'
import closeIcon from '../img/close.svg'


function close() {
	window.location.reload(false);
}


class AddCategory extends React.Component{

constructor(props){
	super(props)

	this.state = {
		
		name: ''

	}

}

changeHandler = e =>{
	this.setState({ [e.target.name]: e.target.value })
}

addCategory = e =>{
	axios.post('https://crudpi.io/e2e0e0/galleries', this.state)
		.then( response =>{
			close()
			}
		)
}

	render(){
		var{ name} = this.state
		return (
			<div id="modalContainer">
				<div id="alertBox">
					<div className="close-btn" onClick={close}>
						<img src={closeIcon} />
						<p>Zavrieť</p>
					</div>
					<h1>Pridať kategóriu</h1>
					<input
					 name="name" 
					 value={name} 
					 onChange={this.changeHandler}  
					 placeholder="Zadajte názov kategórie"
					 id="input" 
					/>
					<a onClick={this.addCategory} id="closeBtn">+ Pridať</a>
				</div>
			</div>
		)
		}
	}

export default AddCategory
