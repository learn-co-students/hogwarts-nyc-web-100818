import piggy from '../porco.png'
import React from 'react'

export default class Nav extends React.Component{
	state={
		image: piggy
	}

	handleClickImage = () => {
			fetch(`INSERT GIF API HERE`)
			.then(res => res.json())
			.then(gifffy => {
				const index = Math.floor(Math.random() * 50)
					this.setState({image: gifffy.data[index].images.fixed_width.url});
			})
			// this.setState({image: data })
	}


	render(){
		return (
			<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
			<img src={this.state.image} className="App-logo" alt="piggy" onClick={this.handleClickImage}/>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>
		)

	}

}
