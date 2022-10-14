import React, { Component } from "react";


export class ProductCard extends Component {
	render() {
		return (
			<div className="column col-6 col-lg-3">
				<div className="productCard card border-0">
					<img src={this.props.image} className="card-img-top" alt="error" />
					<div className="card-body">
						<h5 className="card-title text-center">{this.props.title}</h5>
						<h3 className="card-title text-center fw-bold">${this.props.price}</h3>
					</div>
				</div>
			</div>
		);
	}
}
