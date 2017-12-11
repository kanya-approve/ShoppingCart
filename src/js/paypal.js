paypal.Button.render({
    env: "sandbox",

    commit: true,

    style: {
        color: "gold",
        size: "responsive",
        shape: "rect",
        layout: "horizontal",
        fundingicons: "true"
    },

    client: {
        sandbox: "ATzHzenNN4bhjUaj-P8i9-hREBrtVL39S3Hcm8U3K6aqNTHOHzWAkoJ25qQmbeJ6wlhOWnY1ydbRXdJZ"
    },

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [{
                    amount: {
                        total: "" + accounting.parse(cart.total),
                        currency: "USD"
                    }
                }]
            }
        });
    },

    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function(payment) {
            alert("Payment of flowers completed");
        })
    }
}, "#paypal-button");