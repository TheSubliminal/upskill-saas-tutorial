class ContactMailer < ActionMailer::Base
  default to: 'fridrihson.1701@gmail.com'
  
  def contact_email(name, email, body)
    @name = name
    @email = email
    @body = body
    
    mail = (from: email, subject: 'Contact From Message')
  end
end