import React, { Component } from "react";
import { ProductCard } from "../components/ProductCard";
import data from "../data/data";

export class BestSeller extends Component {
	constructor() {
		super();
		this.state = {
			products: data,
			btnStateAccessories: "active",
			btnStateBedRoom: "",
			btnStateOfficeRoom: "",
			btnStateMattress: "",
		};
	}

	all = () => {
		this.setState({
			products: data,
			btnStateAccessories: "active",
			btnStateBedRoom: "",
			btnStateOfficeRoom: "",
			btnStateMattress: "",
		});
	};

	officeRoom = () => {
		this.setState({
			products: data.filter((chair) => {
				return chair.category === "Office Room";
			}),
			btnStateAccessories: "",
			btnStateBedRoom: "",
			btnStateOfficeRoom: "active",
			btnStateMattress: "",
		});
	};
	bedRoom = () => {
		this.setState({
			products: data.filter((chair) => {
				return chair.category === "Bed Room";
			}),
			btnStateAccessories: "",
			btnStateBedRoom: "active",
			btnStateOfficeRoom: "",
			btnStateMattress: "",
		});
	};

	mattress = () => {
		this.setState({
			products: data.filter((chair) => {
				return chair.category === "Mattress";
			}),
			btnStateAccessories: "",
			btnStateBedRoom: "",
			btnStateOfficeRoom: "",
			btnStateMattress: "active",
		});
	};

	render() {
		const chairs = this.state.products.map((item) => {
			return <ProductCard key={item.id} {...item} />;
		});
		return (
			<div className="bestSeller container">
				<header className="bestSeller--header d-flex justify-content-between">
					<div className="wrapper">
						<div className="bestSeller--box"></div>
						<h1 className="bestSeller--title fw-bold">Best Seller</h1>
					</div>
					<nav className="bestSeller--navbar navbar navbar-expand-lg border-bottom ">
						<div className="container-fluid d-flex justify-content-end">
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
								<div className="navbar-nav">
									<p class={`nav-link ${this.state.btnStateAccessories}`} aria-current="page" href="#" onClick={this.all}>
										ACCESSORIES
									</p>
									<p className={`nav-link ${this.state.btnStateBedRoom}`} href="#" onClick={this.bedRoom}>
										BED ROOM
									</p>
									<p className={`nav-link ${this.state.btnStateOfficeRoom}`} href="#" onClick={this.officeRoom}>
										OFFICE ROOM
									</p>
									<p className={`nav-link ${this.state.btnStateMattress}`} href="#" onClick={this.mattress}>
										MATTRESS
									</p>
								</div>
							</div>
						</div>
					</nav>
				</header>
				<div className="bestSeller--row row g-4 pt-5">{chairs}</div>
			</div>
		);
	}
}
