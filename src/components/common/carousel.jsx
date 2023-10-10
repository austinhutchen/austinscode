
import {React, Component}  from 'react';
import Slider from 'react-slick' 
export const CommonCarousel=()=>{
 // dimensions here
return(
 <>

 
 
 
 
 </>
)

}
export default class Display extends Component  
{
  constructor(){
super();
        this.state = {
          key:[
            
          ],
            sliders: [
              '../images/me4.jpg',
                "../images/coding.JPG",
                "../images/family.jpeg",
                "../images/mimi.jpg",
              "../images/nature.jpg"]
        }


  }
            
    sliders() {
        return this.state.sliders.map(data => {
            return (
           
                <div key={data}>
                    <img alt="key" src={data} />
                </div>
                         )
      });
    }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
        slidesToShow: 2,
      slidesToScroll: 1,

    };
    return (
      <div style={{paddingTop: 10}}> 
<h1 className="hlight">
              About me!
              </h1>
        <Slider {...settings}> 
      
                    {this.sliders()}
                </Slider>     

      </div>
    );
  }
}

