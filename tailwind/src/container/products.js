import React  from "react";
import image1 from "../assets/home1.jpg";
import image2 from "../assets/home2.jpg";
import image3 from "../assets/home3.jpg";



 export default function Products(){
     return(
       <>
       <h1 style={{textAlign:'center',fontSize:'36px',fontWeight:'700'}}>Houses</h1>
         <div className="grid grid-cols-3  gap-4 container house">
{/* image-1 */}
           
             <div className="price">
                    <img src={image1} alt="..." />
                    <div className="details">
                        <h3>House-1</h3>
                        <p>Modern home city in center</p>
                    </div>
             </div>
{/* image-2 */}

                <div className="price">
                    <img src={image2} alt="..." />
                    <div className="details">
                        <h3>House-2</h3>
                        <p>Isolated house out of city</p>
                    </div>
             </div>
{/* image-3*/}

               <div className="price">
                    <img src={image3} alt="..." />
                    <div className="details">
                        <h3>House-3</h3>
                        <p>Larger Dream House</p>
                    </div>
             </div>

         </div>
         </>
     )
 }