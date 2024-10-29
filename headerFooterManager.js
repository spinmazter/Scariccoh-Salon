class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

  <header>
        <nav class="navbar">
          <div class="branding">
            <h2><a href="#" class="branding-logo"><img src="./img/Salon4.jpg" alt="" srcset=""></a></h2>
          </div>
          <label for="input-hamburger" class="hamburger "></label>
          <input type="checkbox" id="input-hamburger" hidden>
          <ul class="menu">
            <li><a href="index.html" class="menu-link">Home</a></li>
      
            <li><a href="about.html" class="menu-link">About</a></li>
            <li class="has-dropdown">
              <a href="#" class="menu-link">Services
                <span class="arrow"></span>
              </a>
              <ul class="submenu">
                <li><a href="highperformance.html" class="menu-link">Hair Artistry</a></li>
                <li><a href="OneOn.html" class="menu-link">Nail Elegance</a></li>
                <li><a href="#" class="menu-link">Special Packages</a></li>
                <li class="has-dropdown">
                  <a href="#" class="menu-link">Other Services
                    <span class="arrow"></span>
                  </a>
                  <ul class="submenu">
                    <li><a href="group.html" class="menu-link">Makeup Services</a></li>
                    <li><a href="group.html" class="menu-link">Eyebrow and Eyelash Services</a></li>
                    <li><a href="vacation.html" class="menu-link">Price List</a></li>
                    <li class="has-dropdown">
                      <a href="tournaments.html" class="menu-link">Shop.Specials
                        <span class="arrow"></span>
                      </a>
                      <ul class="submenu">
                        <li><a href="#" class="menu-link">SA GAMES</a></li>
                        <li><a href="#" class="menu-link">GN OPEN</a></li>
                        <li><a href="#" class="menu-link">GN CLOSED</a></li>
                        <li><a href="#" class="menu-link">J'BURG OPEN</a></li>
                      </ul>
                    </li>
                    
                  </ul>
                </li>
                
              </ul>
            </li>
            
                <li class="has-dropdown">
                    <a href="#about" data-after="About" class="menu-link">Gallery
                      <span class="arrow"></span>
                    </a>
                    <ul class="submenu">
                      <li><a href="pictures.html" class="menu-link">Pictures</a></li>
                      <li><a href="video.html" class="menu-link">Videos</a></li>
                    </ul>
                  </li>
            </li>
            <li><a href="testimonials.html" class="menu-link">Salon.Specials</a></li>
            <li><a href="contact.html" data-after="Contact" class="menu-link">Contact</a></li>
          </ul>
        </nav>
      </header>


        `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            
    <footer class=" footer-distributed">
    <div class="footer-left">
    <h3> Scariccoh <span>Salon</span></h3>
    <p class="footer-links">
        <a href="index.html">Home</a> |
        <a href="about.html">About</a> |
        <a href="contact.html">Contact</a> |
        <a href="testimonial.html">Salon.Specials</a>
    </p>
    <p class="footer-company-name">Copyright @ 2024 <strong>Scariccoh Hair&Nail</strong> All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p><span>Hoërskool </span>OOS MOOT</p>
    </div>
    <div>
        <i class="fa fa-phone"></i>
        <p>+27 61 341 2474</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto: kudacoach@gmail.com">kudacoach@gmail.com</a></p>
    </div> 
</div>
<div class="footer-right">
<p class="footer-company-about">
    <span>About the Salon</span>
    <strong>Scariccoh Salon</strong> Where beauty meets elegants
</p>
<div class="footer-icons">
    <a href="http://wa.me/+27613412474"><i class="fa fa-whatsapp"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <!-- LinkedIn Profile Badge Script -->
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

<!-- LinkedIn Icon with Link -->
<a href="https://www.linkedin.com/in/kuda-mhurure-681a6b53" target="_blank">
  <i class="fa fa-linkedin"></i>
</a>
    <a href="https://www.youtube.com/@kudamhurure"><i class="fa fa-youtube"></i></a>
    <a href="https://www.facebook.com/groups/468275692499194/" target="_blank"><i class="fa fa-facebook"></i></a>
</div>
</div>

   </footer> 
   <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>`;
  }
}


customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);


