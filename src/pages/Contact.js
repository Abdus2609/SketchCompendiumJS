import React from 'react';
import '../App.css'

function Contact() {
    return (
        <div>
            <section class="contact-header">
		        <h1>Contact Us</h1>
	        </section>

            <section class="post-your-work">
		        <h1>How to post your artwork:</h1>
		        <div class="row">
		        	<div class="step-col">
		        		<h2>Step 1:</h2>
		        		<p>Make sure the image of your artwork is clear and it's file size is under the limit for an email attachment(25MB).</p>
		        	</div>
		        	<div class="step-col">
		        		<h2>Step 2:</h2>
		        		<p>Contact us via the email shown below. With your art as the attachment, please give us your full name and contact<br /> email address so we can credit your work and give viewers a way to reach you.</p>
		        	</div>
		        	<div class="step-col">
		        		<h2>Step 3:</h2>
		        		<p>We will try and add your work to our site as soon as possible. Please be patient and we will let you know when it's up! Happy posting!</p>
		        	</div>
		        </div>
	        </section>

            <section class="location">
		        <h1>We are based in...</h1>
		        <iframe title="myframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340138946!2d-0.24168153443085844!3d51.52855824125855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1625782648775!5m2!1sen!2suk" 
                    width="600"
                    height="450"
                    style={{border: 0,}}
                    allowfullscreen=""
                    loading="lazy">            
                </iframe>
	        </section>

            <section class="contact-info">
		        <div class="contact-row">
			        <div class="contact-col">
				        <div>
					        <i class="fa fa-phone"></i>
					        <span>
						        <h5>Call us for any enquiries</h5>
						        <p>+44 7778 787 933</p>
					        </span>
				        </div>
				        <div>
					        <i class="fa fa-envelope-o"></i>
					        <span>
						        <h5>Email us to post your work!</h5>
						        <p>sketchcompendium@gmail.com</p>
					        </span>
				        </div>
			        </div>
		        </div>
	        </section>

            <section class="footer">
		        <h4>About Us</h4>
		        <p>This website was solely created to preserve all art and ensure everyone has the chance for their work to be seen by the world.</p>
		        <p>Copyright <i class="fa fa-copyright"></i> 2022 [YAOi Productions]</p>
	        </section>
        </div>
    )
}

export default Contact;