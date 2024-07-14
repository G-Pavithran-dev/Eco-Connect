import react from 'react';
import customer from "./customer.jpg"
import drive from "./drive.png"
import enter from "./enter.jpg"
import lorry from "./lorry.jpg"

import './support.css';

const Data =[
    {
        id:1,
        img:customer,
        title:'CUSTOMER SUPPORT',
        desc:"Click here to read our FAQs For support with your bookings and other queries, email us at help@porter.inor call us on022 4410 4410"
    },
    {
        id:2,
        img:drive,
        title:'PACKERS AND MOVERS',
        desc:"For queries and support regarding your house shifting booking, email us atpackermover@theporter.inor call us on022 4410 4444or022 6268 4444"
    },
    {
        id:3,
        img:enter,
        title:'ENTERPRISE SERVICES',
        desc:"If you are an enterprise client and need trucks in bulk for your business,Click hereor mail us athelp@porter.in"
    },
    {
        id:4,
        img:lorry,
        title:'DRIVE WITH PORTER',
        desc:"Are you a tempo truck owner? Increase your earnings by partnering with us. Click hereor reach us out on022 4410 4410(add your city code)"
    },
]
export const Support =()=>{

    return(
        <section >
            <div className="title">
                <h1>HELP CENTER</h1>
                <p>Need assistance? We're happy to help, reach us out through the appropriate channels below.</p>
            </div>
               
            <div className="support">
            {Data.map((id, index) => {
                return(
                    
                     <div  key ={index} className="task">
                      <div className="col1">
                          <img src={id.img} alt="" />
                      </div>
                      <div className="col2">
                        <h4>{id.title}</h4>
                        <p>{id.desc}</p>
                      </div>
                     </div>
                );
                })}
            </div>

            <div className="office">
                <h1>Head Office</h1>
                <h2>Coimbatore</h2>
                <p>Porter Head Office, BCM Prime 1st Cross,<br /> BDA Layout, Bannerghatta Main Rd, New <br /> Gurappana Palya,Tavarekere Extension,<br />  Coimbatore, TamilNadu 641008</p>
                <a href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0139578,76.8848334,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu" target="-blank">
                Get Direction >
                </a>
            </div>
           
        </section>
    )
}