var contactContent = `

            
<div class="offer">
      
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