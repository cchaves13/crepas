import React from 'react';
import { render } from '@testing-library/react';
import "./Footer.css"

const Footer = () => {
   return(
       <div className="main-footer">            
           <div className="row">
               {/* Column1 */}
                   <div className= "col">
                       <a target="_blank" href="https://wego.here.com/directions/mix//Las-Crepas-de-Vale,-Miramar,-60401,-Costa-Rica:e-eyJuYW1lIjoiTGFzIENyZXBhcyBkZSBWYWxlIiwiYWRkcmVzcyI6Ik1pcmFtYXIsIFB1bnRhcmVuYXMsIENvc3RhIFJpY2EsIE1pcmFtYXIsIENvc3RhIFJpY2EiLCJsYXRpdHVkZSI6MTAuMDkxMDMsImxvbmdpdHVkZSI6LTg0LjcyMjM5LCJwcm92aWRlck5hbWUiOiJmYWNlYm9vayIsInByb3ZpZGVySWQiOjEwODAwODc4NDI0NDM3Mn0=?map=10.09103,-84.72239,15,normal&fb_locale=es_LA">
                       <h4 className="title">Ubicación&nbsp; <img src= "./imagenes/ubicacion.ico"  /></h4>                   
                       </a>
                      <ul className="list-unstyled">
                          <li>Miramar, Puntarenas</li>
                     </ul>
                   </div>
               {/* Column2 */}
                   <div className= "col"> 
                     <h4 className= "title">Nota&nbsp; <img src= "./imagenes/note.ico"/></h4>
                     <ul>
                         <li>Servicio expres gratis de 5pm a 7pm</li>
                         <li>Despues de las 7pm el expres lo realiza Pineapple</li>
                         <li>Solo se recibe efectivo</li>
                     </ul>
                   </div>
               {/* Column3 */}
                   <div className= "col">
                    <h4 className= "title">Contactenos&nbsp; <img src= "./imagenes/person.ico"/> </h4>
                    <ul className="list-unstyled">
                          <li > 
                               <a target="_blank" href="https://www.facebook.com/pages/category/Cr%C3%AAperie/Las-Crepas-de-Vale-108008784244372/"> 
                               <img id= "img2"src= "./imagenes/facebook.ico"/>&nbsp;Las crepas de Vale
                               </a>                           
                           </li>

                          <li>
                              <a target="_blank" href=" https://api.whatsapp.com/send?phone=50683710654&text=prueba">
                              <img id= "img3"src= "./imagenes/whatsapp.ico"/>&nbsp;86598745
                              </a>                             
                          
                          </li> 
                          <li >
                              <a target="_blank"  href="https://instagram.com/lascrepasdevale?igshid=v7ra5l8hy9zn">
                              <img id= "img4"src= "./imagenes/instagram.ico"/>&nbsp;lascrepasdevale
                              </a>                              
                          </li>
                          <li>  
                              
                              <a target="_blank" href="tel:+506-28569945">
                              <img id= "img5"src= "./imagenes/phon.ico"/> &nbsp; 28569945
                               </a>                        
                                                     
                          </li>
                    </ul>
                    </div>
           </div>
               <hr/>
               <div className= "row1" >
                   <p className= "col-sm">
                   &copy;{new Date().getFullYear()} JyC | All rights reserved | Terms of Service | Privacy
                   </p>
               </div>
           </div>            
       
   ) 
}
export default Footer;
