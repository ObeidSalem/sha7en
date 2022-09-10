import './Css/Home.css';
import React,{ useState } from 'react'
import HeaderLogo from '../images/Sha7enLogo_White_200.png'
import Header_img_1 from '../images/Header_img_1.jpg'
import Cards from '../Components/Cards';



const Home = ({vehicles}) => {



    return ( 
        <>
            <div className="home_Header page_padding">
                <div className="left_Header">
                    <div className="text_align_left"><img className="header_logo" src={HeaderLogo} width="200" alt='logo'/></div>
                    <h1 className="header_slogan yellow_font text_align_left">Your connection to charge</h1>
                    <h2 className="header_description white_font text_align_left">We are a supportive application that works us a connector between the customers and the charger providers..</h2>
                </div>
                <div className="right_Header">
                    <div>
                        <div className="text_align_right"><img className="header_img" src={Header_img_1} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_vehicles page_padding text_align_left">
                <h1 className="black_font vehicles_title">Vehicles</h1>
                <div className="vehicles_container">
                    <Cards 
                        vehicles={vehicles}
                    />
                </div>
                <div className="vehicles__container">
                    {/* <vehicleList 
                        refReports={refReports} 
                        vehicles={vehicles.filter(value => {
                            if ( Searchterm ==""){
                                return value

                            } else if (value.title.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                                return value
                            }
                            else if (value.author.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                                return value
                            }
                            else if (value.owner.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                                return value
                            }
                            else if (value.category.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                                return value
                            }
                        })}

                            //     if(FilterCatNov == true){
                            //     //    SetSFilterCatNov (true => false)
                            //     FilterCatNov ? SetSFilterCatNov(false): SetSFilterCatNov(true)
                            //         console.log(FilterCatNov)

                            //         return(value.category.Novels)

                            // } else if (FilterCatStu == true){
                            //     // SetSFilterCatStu (false)
                            //     return(value.category.StudyMaterials)

                            // } else if (FilterCatOth == true){
                            //     // SetSFilterCatOth (false)
                            //     return(value.category.Others)

                            // }  else if (FilterCatX == true){
                            //     // useState({FilterCatX: false});
                            //     // onChange={(e) => {FilterCatX (false)}};
                            //     return value
                            // }          
                    />  */}
                </div>
            </div>

        </>
     );
}
 
export default Home;