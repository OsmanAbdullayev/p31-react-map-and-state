import React, { Component } from "react";
import { ProductCard } from "../components/ProductCard";
import data from "../data/data";

export class BestSeller extends Component {
	render() {
		const chairs = data.map(item => {
			return (<ProductCard
                key={item.id}
                {...item}
                />)
		}
        )
		return (
			<div className="bestSeller container">
				<header className="bestSeller--header d-flex justify-content-between">
					<div className="wrapper">
						<div className="bestSeller--box"></div>
						<h1 className="bestSeller--title fw-bold">Best Seller</h1>
					</div>
					<nav class="bestSeller--navbar navbar navbar-expand-lg border-bottom ">
						<div class="container-fluid d-flex justify-content-end">
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
								<div class="navbar-nav">
									<p class="nav-link active" aria-current="page" href="#">
										ACCESSORIES
									</p>
									<p class="nav-link" href="#">
										BED ROOM
									</p>
									<p class="nav-link" href="#">
										OFFICE ROOM
									</p>
									<p class="nav-link" href="#">
										MATTRESS
									</p>
								</div>
							</div>
						</div>
					</nav>
				</header>
				<div className="bestSeller--row row g-4 pt-5">
                    {chairs}
				</div>
			</div>
		);
	}
}
