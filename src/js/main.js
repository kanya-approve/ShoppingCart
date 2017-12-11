var availableFlowersTemplate = `
	<div class="col-lg-4">
		<img class="img-thumbnail" src="%imageUrl%" alt="%description%">
		<p>%name%: %price%</p>
		<button onclick="cart.setProductQuantity(%index%)" type="button" class="btn btn-primary btn-sm btn-sm-block mx-auto">Add to Cart</button>
	</div>
`;

var cartItemsTemplate = `
	<div class="row">
		<div class="col">
			<img class="img-thumbnail" src="%imageUrl%" alt="%description%">
		</div>
		<div class="col">
			%name% - %price%
			<input id="%index%" type="number" min="0" name="quantity" value="%quantity%">
		</div>
	</div>
`;

var cartTotalTemplate = `
	<div class="row">
		<div class="col">
			<h2 id="cartTotal">Total: %total%</h2>
		</div>
	</div>
`;

var cart = new Cart(0.075);

$(document).ready(function() {
	var flower;
	
	for(var index = 0; index < flowers.length; index++) {
		cart.products[index] = null;
		flower = flowers[index];
		$("#flowers").append(availableFlowersHTML(flower.name, flower.price, flower.description, flower.imageUrl, index));
	}

	$("#cartModal").on("show.bs.modal", function (e) {
		$("#cartItems").empty();

		for(var index = 0; index < cart.numberOfProducts; index++) {
			if(cart.products[index]) {
				flower = cart.products[index];
				$("#cartItems").append(cartItemsHTML(flower.name, flower.price, flower.description, flower.imageUrl, flower.quantity, index));	
			}
		}

		updateCartTotalHTML();
	});

	$("#cartItems").on("change", "input", function() {
		var index = parseInt($(this).attr("id"));
		var quantity = parseInt($(this).val());
	
		cart.setProductQuantity(index, quantity);
	
		updateCartTotalHTML();
	});
});

function updateCartTotalHTML() {
	if($("#cartTotal").length) {
		$("#cartTotal").text("Total: " + cart.total);
	}
	else {
		$("#cartItems").append(cartTotalTemplate.replace("%total%", cart.total));
	}
}

function cartItemsHTML(name, price, description, imageUrl, quantity, index) {
	var html = cartItemsTemplate.replace("%name%", name);
	html = html.replace("%price%", accounting.formatMoney(price));
	html = html.replace("%description%", description);
	html = html.replace("%imageUrl%", imageUrl);
	html = html.replace("%quantity%", quantity);
	html = html.replace("%index%", index);

	return html;
}

function availableFlowersHTML(name, price, description, imageUrl, index) {
	var html = availableFlowersTemplate.replace("%name%", name);
	html = html.replace("%price%", accounting.formatMoney(price));
	html = html.replace("%description%", description);
	html = html.replace("%imageUrl%", imageUrl);
	html = html.replace("%index%", index);
	
	return html;
}