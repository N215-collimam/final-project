var homeContent = `<div class="home">

<div class="home-one">
<div class="banner">
            <div class="header-text">
                <h1>Header goes here</h1>
                <h2>Less important text goes here</h2>
            </div>
            <div class="header-text1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fugiat aliquid minus nemo sed est.</p>
                <button class="button button1">Read More</button>
            </div>
        </div>
</div>

<div class="home-two">
<div class="home-two-text">
            <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
            </p>
            <h2>John Smith</h2>
            <h3>Corporation CEO, books author.</h3>
        </div>
</div>

<div class="home-three"></div>
</div>`;


var aboutContent = `<div class="about">

<div class="about-hero"></div>


<div class="about-header">
    <h1>OUR HISTORY:</h1>
    <div class="border-bottom"></div> 
</div>

<div class="about-text">
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

</div>`;


var contactContent = `<div class="offer">
      
              <div class="contact-header">
                <h1>CONTACT US:</h1>
                <div class="border-bottom"></div>
                
              </div>
      
              <div class="offer-boxes">
      
      
                <div class="offer-box">
                  <div class="offer-text">

                    <div class="top-boxes">
                      <div class="holder"><input type="text" id="fName"  class = "long-box" placeholder="Your name..."/></div>
                      <div class="holder"><input type="email" id="email" class="long-box" placeholder="Email Address..."/></div>
                      <div class="holder"><input type="text" id="fName"  class = "long-box" placeholder="Company..."/></div>

                      <div class="bigbox">
                        <div class="holder"><input type="message" id="message" class="long-box" placeholder="Message..."/></div>
                      </div>
                    
                      
                      <button class="button button1">SEND MESSAGE</button>
                      
                    </div>
                  </div>
                  <div class="map-image">
                    <img src="images/map.JPG" alt="map"/>
                  </div>
                </div>
      
                

      
              </div>
            </div>`;





//this function is being called from the app.js and it has the page name
export function modelPageName(pgName){
    console.log(pgName);

    $("#app").html(eval(pgName));
}