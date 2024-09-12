import React from 'react';
import '../styles/scss/_page404.scss';

const page404 = () => {
	return (
		<section class="page_404">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 ">
						<div class="col-sm-10 col-sm-offset-1  text-center">
							<div class="four_zero_four_bg">
								<h1 class="text-center ">404</h1>
							</div>
							<div class="contant_box_404">
								<h3 class="h2">Подивіться, ви заблукали</h3>
								<p>сторінка, яку ви шукаєте, недоступна!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page404;