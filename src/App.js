// import logo from './logo.svg';
import './App.css';

function App() {
  var navLinks = document.getElementById("navLinks");

  function showMenu() {
    navLinks.style.right = "0";
  }

  function hideMenu() {
    navLinks.style.right = "-200px";
  }

  window.addEventListener('scroll', reveal);

	function reveal() {
		var reveals = document.querySelectorAll('.post');

		for (var i = 0; i < reveals.length; i++) {

			var windowHeight = window.innerHeight;
			var revealTop = reveals[i].getBoundingClientRect().top;
			var revealPoint = 150;

			if (revealTop < windowHeight - revealPoint) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	} 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>THE SKETCH COMPENDIUM</title>
      <link rel="stylesheet" href="App.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      
      <section class="header">
		    <nav>
			    <a href="index.html"><img src={require('./logo/logo2.png')} alt=""/></a>
			    <div class="nav-links" id="navLinks">
			    	<i class="fa fa-times" onclick={hideMenu}></i>
			    	<ul>
			    		<li><a href="index.html">HOME</a></li>
			    		<li><a href="about.html">ABOUT</a></li>
			    		<li><a href="posts.html">POSTS</a></li>
			    		<li><a href="contact.html">CONTACT US</a></li>
			    	</ul>
			    </div>
			    <i class="fa fa-bars" onclick={showMenu}></i>
		    </nav>

		    <div class="text-box">
			    <h1>WELCOME TO THE SKETCH COMPENDIUM</h1>
			    <p>This is just a space for showcasing any and all art. We welcome all styles and genres. Have fun!</p>
			    <a href="posts.html" class="hero-btn">Click here to see some posts</a>
			    <br />
			    <a href="contact.html" class="hero-btn">Click here to post your first masterpiece</a>
		    </div>
	    </section>

      <section className="example-posts">
        <h1>Some of our posts</h1>
        <p>Here are some of our popular posts. Post yours and you could be here too!</p>
        <div className="row">
          <div className="post">
            <img src={require("./images/ichigo_2.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("./images/borushiki.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("./images/kaneki.jpg")} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="post">
            <img src={require("./images/batman_laughs.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("./images/eren_yeager.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("./images/ulqiorra.JPG")} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="post">
            <img src={require("./images/sukuna_3.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("./images/tanjiro.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("./images/bardock.JPG")} alt=""/>
          </div>
        </div>				
      </section>

      <section class="footer">
		    <h4>About Us</h4>
		    <p>This website was solely created to preserve all art and ensure everyone has the chance for their work to be seen by the world.</p>
		    <p>Copyright <i class="fa fa-copyright"></i> 2021 [YAOi Productions]</p>
	    </section>
    </div>
  )
}

export default App;
