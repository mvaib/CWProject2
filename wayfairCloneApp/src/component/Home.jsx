import OfferTagCard from "./OfferTagCard"
import Video from "./Video"
import Image from "./Image"
import BedRoomBasic from "./BedRoomBasic"
import ReFine from "./ReFine"
import Appliance from "./Appliance"
import Bissell from "./Bissell"
import LivingRoom from "./LivingRoom"
import { Link } from "react-router-dom"
// import ExclusiveBrand from "./ExclusiveBrand"
import ShopByDepartment from "./ShopByDepartment"
import ShippingAndService from "./ShippingAndService"
import { useEffect,useState } from "react"
import Loading from "./Loading"
import Error from "./Error"


const data = 
{
    "offerTagCard" : [
        {img : "https://assets.wfcdn.com/im/31268500/scale-h1280-w858%5Ecompr-r85/2725/272537676/default_name.jpg"},
        {img : "https://assets.wfcdn.com/im/11404472/scale-h1280-w858%5Ecompr-r85/2711/271173185/default_name.jpg"},
        {img : "https://assets.wfcdn.com/im/92599078/scale-h1280-w858%5Ecompr-r85/2711/271173198/default_name.jpg"},
        {img : "https://assets.wfcdn.com/im/70038339/scale-h1280-w858%5Ecompr-r85/2711/271173108/default_name.jpg"},
    ],
    "video" : [
        {video : "https://secure.img1-fg.wfcdn.com/dm/video/0a6a3966-54b3-4655-ba56-0dd97982dbd6/usca_springsavings_fullbleeddesktop.mp4"}
    ],
    "image":[
        {img : "https://assets.wfcdn.com/im/1134629/resize-h655-w2880%5Ecompr-r85/2657/265799772/your_calming_bedroom_basics._discover_more._265799772.jpg" , id : 1},
        {img : "https://assets.wfcdn.com/im/24173218/resize-h655-w2880%5Ecompr-r85/2707/270704917/meet_re%2Ffine_only_at_wayfair._reimagine_your_day_%28and_night%29_with_bedding%2C_bath%2C_tabletop%2C_and_more._shop_now.__270704917.jpg",id:2},
        {img : "https://assets.wfcdn.com/im/10017864/resize-h655-w2880%5Ecompr-r85/2709/270988090/appliances_for_every_style_%26_budget._shop_now._270988090.jpg" ,id:3},
        {img : "https://assets.wfcdn.com/im/57033177/resize-h655-w2880%5Ecompr-r85/2715/271539603/bissell._little_green_cordless_cleaner._instantly_remove_tough_stains_and_spots._shop_now.__271539603.jpg", id:4},
        {img : "https://assets.wfcdn.com/im/77933509/resize-h655-w2880%5Ecompr-r85/2654/265428269/because_comfort_is_key._living_room_looks_for_less._shop_now.__265428269.jpg", id:5},
        {img : "https://assets.wfcdn.com/im/41404284/resize-h655-w2880%5Ecompr-r85/2690/269062062/celebrate_black_makers._discover_inspiring_products_from_our_growing_community_of_black_designers_and_brands._269062062.jpg" , id:6},
        {img : "https://assets.wfcdn.com/im/85367779/resize-h655-w2880%5Ecompr-r85/2653/265313772/financing_available._find_the_payment_option_that%27s_right_for_you._learn_more.__265313772.jpg", id:7},
    ],
    "BedRoomBasic" : [
       {img: "https://assets.wfcdn.com/im/14197199/scale-h858-w858%5Ecompr-r85/2688/268888055/default_name.jpg",title:"Beds",discription:"First, the foundation. Comfort is key", Itag:"fa-solid fa-arrow-right-long",link:"/bed"},
       {img: "https://assets.wfcdn.com/im/27585144/scale-h858-w858%5Ecompr-r85/2688/268887415/default_name.jpg",title:"Rugs",discription:"Natural materials = a peaceful sapce",Itag:"fa-solid fa-arrow-right-long", link:"/rugs"},
       {img: "https://assets.wfcdn.com/im/07904437/scale-h858-w858%5Ecompr-r85/2655/265569108/default_name.jpg",title:"Dressers",discription:"The foundation for a well-organized sapce",Itag:"fa-solid fa-arrow-right-long",link:"/dressers"},
       {img: "https://assets.wfcdn.com/im/53085893/scale-h858-w858%5Ecompr-r85/2688/268887836/default_name.jpg",title:"Nighghtstands",discription:"Bring in storage for bedside essentials",Itag: "fa-solid fa-arrow-right-long",link:"/nightstands"},
    ],
    "ReFine" : [
        {img: "https://assets.wfcdn.com/im/07296725/scale-h858-w858%5Ecompr-r85/2635/263571233/default_name.jpg",title:"Bedding",discription:"Level up your wind-down", Itag:"fa-solid fa-arrow-right-long",link:"/bedding"},
       {img: "https://assets.wfcdn.com/im/52866793/scale-h858-w858%5Ecompr-r85/2676/267688557/default_name.jpg",title:"Tabletop",discription:"Effortless everyday luxuries",Itag:"fa-solid fa-arrow-right-long",link:"/tabletop"},
       {img: "https://assets.wfcdn.com/im/78968831/scale-h858-w858%5Ecompr-r85/2656/265696927/default_name.jpg",title:"Bath",discription:"Ultra-plush from day one",Itag:"fa-solid fa-arrow-right-long",link:"/bath"},
       {img: "https://assets.wfcdn.com/im/04044214/scale-h858-w858%5Ecompr-r85/2676/267688567/default_name.jpg",title:"Mirrors",discription:"Beautify the basic",Itag: "fa-solid fa-arrow-right-long",link:"/mirrors"},
    ],
    "Appliance": [
        {img : "https://assets.wfcdn.com/im/34716974/scale-h858-w858%5Ecompr-r85/2703/270356763/default_name.jpg", title:"Drip,Pod & More Coffee Makers",link:"/coffeemakers"},
        {img : "https://assets.wfcdn.com/im/46067887/scale-h858-w858%5Ecompr-r85/2703/270356764/default_name.jpg", title:"Work-Hard Stand Mixers",link:"/mixers"},
        {img : "https://assets.wfcdn.com/im/57418800/scale-h858-w858%5Ecompr-r85/2703/270356765/default_name.jpg", title:"Small Electrics That Deliver",link:"/small-electrics"},
        {img : "https://assets.wfcdn.com/im/92144844/scale-h858-w858%5Ecompr-r85/2703/270356769/default_name.jpg", title:"Stick,Robot & More Vacuums",link:"/vacuums"},
    ],
    "Bissell" : [
        {img : "https://assets.wfcdn.com/im/27062268/scale-h948-w680%5Ecompr-r85/2720/272077753/default_name.jpg", discription:"Tactile finishes & multicolor touches", Itag:"fa-solid fa-arrow-right-long",link:"/creative-play"},
        {img : "https://assets.wfcdn.com/im/15867797/scale-h948-w680%5Ecompr-r85/2720/272077749/default_name.jpg", discription:" Amorphous shapes & ethereal accents", Itag:"fa-solid fa-arrow-right-long",link:"/futuristic-forms"},
        {img : "https://assets.wfcdn.com/im/27218710/scale-h948-w680%5Ecompr-r85/2720/272077748/default_name.jpg", discription:" Quirky nature motifs & a lush palette", Itag:"fa-solid fa-arrow-right-long",link:"/extravagant-escape"},
        {img : "https://assets.wfcdn.com/im/49764094/scale-h948-w680%5Ecompr-r85/2720/272077751/default_name.jpg", discription:"Eco-friendly appliances & a sleek aesthetic", Itag:"fa-solid fa-arrow-right-long",link:"/efficient-design"},
        {img : "https://assets.wfcdn.com/im/15711355/scale-h948-w680%5Ecompr-r85/2720/272077754/default_name.jpg", discription:"Tonal pieces & artful pattern play ", Itag:"fa-solid fa-arrow-right-long",link:"/monochromatic-layer"},

    ],
    "LivingRoom" : [
        {img : "https://assets.wfcdn.com/im/69502355/scale-h858-w858%5Ecompr-r85/2654/265428218/default_name.jpg", title:"Sofas & Sectionals From $400",link:"/sofas"},
        {img : "https://assets.wfcdn.com/im/99169588/scale-h858-w858%5Ecompr-r85/2698/269828871/default_name.jpg", title:"Accent Chairs From $125",link:"/chairs"},
        {img : "https://assets.wfcdn.com/im/67982035/scale-h858-w858%5Ecompr-r85/2611/261126844/default_name.jpg", title:"End Tables From $30",link:"/tables"},
        {img : "https://assets.wfcdn.com/im/87252210/scale-h858-w858%5Ecompr-r85/2654/265428213/default_name.jpg", title:"5' x 8' Area Rugs Under $150",link:"/area-rugs"},
    ],
    "ExclusiveBrand" : [
        {img : "https://assets.wfcdn.com/im/33528211/scale-h858-w858%5Ecompr-r85/2706/270695832/default_name.jpg", discription:"French-country looks designed for real life.",link:"/kelly-clarkson"},
        {img : "https://assets.wfcdn.com/im/00680970/scale-h858-w858%5Ecompr-r85/2706/270695824/default_name.jpg", discription:"Modern designs with an urban edge.",link:"/mercury-row"},
        {img : "https://assets.wfcdn.com/im/66628231/scale-h858-w858%5Ecompr-r85/2706/270695827/default_name.jpg", discription:"Traditional styles with unexpected details.",link:"/three-posts"},
        {img : "https://assets.wfcdn.com/im/43926405/scale-h858-w858%5Ecompr-r85/2706/270695829/default_name.jpg", discription:"Where farmhouse charm meets seaside style.",link:"sand-stable"},
        {img : "https://assets.wfcdn.com/im/22177298/scale-h858-w858%5Ecompr-r85/2706/270695831/default_name.jpg", discription:"Glamorous designs with alluring edge.",link:"/etta-avenue"},
        {img : "https://assets.wfcdn.com/im/77979144/scale-h858-w858%5Ecompr-r85/2706/270695826/default_name.jpg", discription:"Affordable essentials that simplify the everyday.",link:"/wayfair-basic"},
    ],
    "ShopByDepartment" : [
        {img : "https://assets.wfcdn.com/im/54165311/timg-h482-w482%5Ecompr-r85/2718/271821073/default_name.jpg", title:"Spring Savings", link:"/spring-savings"},
        {img : "https://assets.wfcdn.com/im/72474007/timg-h482-w482%5Ecompr-r85/9847/98477101/default_name.jpg", title:"Furniture", link:"/furniture"},
        {img : "https://assets.wfcdn.com/im/31073905/timg-h482-w482%5Ecompr-r85/9847/98477118/default_name.jpg", title:"Outdoor", link:"/outdoor"},
        {img : "https://assets.wfcdn.com/im/18845349/timg-h482-w482%5Ecompr-r85/1323/132350539/default_name.jpg", title:"Bedding & Bath", link:"/bedding-bath"},
        {img : "https://assets.wfcdn.com/im/60495043/timg-h482-w482%5Ecompr-r85/9847/98477095/default_name.jpg", title:"Decor & Pillows",link:"/decor-pillows"},
        {img : "https://assets.wfcdn.com/im/53619289/timg-h482-w482%5Ecompr-r85/9847/98477121/default_name.jpg", title:"Rugs",link:"/department-rugs"},
        {img : "https://assets.wfcdn.com/im/65126644/timg-h482-w482%5Ecompr-r85/9847/98477115/default_name.jpg", title:"Lighting",link:"/department-lighting"},
        {img : "https://assets.wfcdn.com/im/06982384/timg-h482-w482%5Ecompr-r85/9847/98477108/default_name.jpg", title:"Home Improvement",link:"/department-homeImprovement"},
        {img : "https://assets.wfcdn.com/im/30468703/timg-h482-w482%5Ecompr-r85/9847/98477082/default_name.jpg", title:"Appliance",link:"/department-appliance"},
        {img : "https://assets.wfcdn.com/im/95623378/timg-h482-w482%5Ecompr-r85/2692/269209725/default_name.jpg", title:"Kitchen",link:"/department-kitchen"},
        {img : "https://assets.wfcdn.com/im/07766877/timg-h482-w482%5Ecompr-r85/9847/98477084/default_name.jpg", title:"Baby & Kids",link:"/departmentBabyKids"},
        {img : "https://assets.wfcdn.com/im/80433450/timg-h482-w482%5Ecompr-r85/9847/98477124/default_name.jpg", title:"Oraganization",link:"/department-organization"},
        {img : "https://assets.wfcdn.com/im/41449204/timg-h482-w482%5Ecompr-r85/2320/232096871/default_name.jpg", title:"Custom Cabinetry",link:"/department-customCabinetry"},
        {img : "https://assets.wfcdn.com/im/61546677/timg-h482-w482%5Ecompr-r85/1321/132124505/default_name.jpg", title:"Pet",link:"/department-pet"},
    ],
    "ShippingAndServices" : [
        {img : "https://assets.wfcdn.com/im/17031803/resize-h128-w128%5Ecompr-r85/1711/171106361/default_name.jpg",title:"Unbeatable Selection"},
        {img:"https://assets.wfcdn.com/im/51084542/resize-h128-w128%5Ecompr-r85/1711/171106364/default_name.jpg",title:"Expert Customer Service"},
        {img:"https://assets.wfcdn.com/im/87128189/resize-h128-w128%5Ecompr-r85/1711/171106369/default_name.jpg",title:"Fast & Free Shipping Over $35*"},
        {img:"https://assets.wfcdn.com/im/21024486/resize-h128-w128%5Ecompr-r85/1711/171106371/default_name.jpg",title:"Amazing Value Every Day"}
    ]

}
    

function Home(){
    
        return(
            <div className="home">
                {data.video.map((video,i)=>(
                    <Video key={i} url={video.video}/>
                ))}
                <div className="offerTagCont">
                    {data.offerTagCard.map((img,i)=>(
                        <OfferTagCard key={i} url={img.img}/>
                    ))}
                </div>
                <Image url={data.image[0].img}/>
                <div className="bedRoomBasic">
                    <p className="heading">4 Must-Haves to Score a Solid 8 Hours</p>
                    <div className="basicCardCont">
                        {data.BedRoomBasic.map((basic)=>(
                            <BedRoomBasic key={basic.title} {...basic}/>
                        ))}
                    </div>
                </div>
                <Image url={data.image[1].img}/>
                <div className="ReFine">
                    <div className="reFineCont">
                        {data.ReFine.map((item)=>(
                            <ReFine key={item.title} {...item}/>
                        ))}
                    </div>
                </div>
                <Image url={data.image[2].img}/>
                <div className="Appliance">
                    <p className="heading">Small Appliances That Deliver Big-Time</p>
                    <div className="applianceCardCont">
                        {data.Appliance.map((item)=>(
                            <Appliance key={item.title} {...item}/>
                        ))}
                    </div>
                </div>
                <Image url={data.image[3].img}/>
                <div className="Bissell">
                    <p className="heading">2024 Design Trends</p>
                    <p className="bissellDis">Explore the top emerging trends, curated by expert designers from Wayfair Professional.</p>
                    <div className="bissellCardCont">
                        {data.Bissell.map((item)=>(
                            <Bissell key={item.discription} {...item}/>
                        ))}
                    </div>
                </div>
                <Image url={data.image[4].img}/>
                <div className="LivingRoom">
                    <div className="livingCardCont">
                        {data.LivingRoom.map((item)=>(
                            <LivingRoom key={item.title} {...item}/>
                        ))} 
                    </div>
                </div>
                {/* <div>
                    <div className="exclusiveBrand">
                        <p className="heading">Explore our Exclusive Brands</p>
                        <p className="bissellDis">Bring your vision to life with hand-curated collections, priced just right.</p>
                        <Link>Shop All</Link>
                        <div className="exclusiveBrandCont">
                            {data.ExclusiveBrand.map((item)=>(
                                <ExclusiveBrand key={item.discription} {...item}/>
                            ))}
                        </div>
                    </div>
                </div> */}
                <Image url={data.image[5].img}/>
                <div className="ShopByDepartment">
                    <p className="heading">Shop by Department</p>
                    <div className="shopByDepartmentCardCont">
                        {data.ShopByDepartment.map((item)=>(
                            <ShopByDepartment key={item.title} {...item}/>
                        ))}
                    </div>
                </div>
                <Image url={data.image[6].img}/>
                <div className="ShippingAndService">
                    <div className="shippingAndServiceCardCont">
                        {data.ShippingAndServices.map((item)=>(
                            <ShippingAndService key={item.title} {...item}/>
                        ))}
                    </div>
                </div>
    
            </div>
        )
    }


export default Home