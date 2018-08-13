/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro-form');
  var signupBtn = $('#form-signup-btn');
  
  //Set Stripe public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  //When user click submit button,
  signupBtn.click(function(event){
    //prevent default submission behavior.
    event.preventDefault();
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(), 
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    //Send card info to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  
  
  
  //Stripe will return card token.
  //Inject card token as a hidden field into form.
  //Send form to our Rails app.
});
