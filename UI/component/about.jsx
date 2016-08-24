import React from 'react'
import cat from './../images/cat.jpg'
import me from './../images/me.jpg'

const about = () => {
	return <div className="row">
			<div className="col m8">
				<div className="card">
					<div className="card-content flow-text">
						<blockquote>
							Somewhere between my open source projects, my pages of novel planning, and my unfinished albums, 
							I decided to create this website. What started as an excuse for me to meld React/Redux with Materialize 
							became a little more. Another blog. Another website. Another joker spreading his nonsense into the world. Enjoy!
						</blockquote>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<img className="circle responsive-img" src={me}/>
					</div>
				</div>
			</div>
			<div className="col m4">
				<div className="card">
		            <div className="card-image">
		              <img src={cat}/>
		            </div>
		            <div className="card-content">
		              <p>Maddie is my cat. She is hyper, playful, and a colossal jerk.</p>
		            </div>
				</div>
			</div>
		</div>
}

export default about
