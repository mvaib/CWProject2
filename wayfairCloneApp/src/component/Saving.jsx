import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SavingImage from "./SavingImage"
import ShopFurniture from "./ShopFurniture"
import ShopByDepartment from "./ShopByDepartment"
import BuyingCard from "./BuyingCard"
import ShopSale from "./ShopSale"
import "./Saving.css"

let savingImage = [
    {
      "img": "https://assets.wfcdn.com/im/55677438/scale-h200-w1600%5Ecompr-r85/2723/272374829/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/15578395/scale-h238-w2400%5Ecompr-r85/2715/271519590/Flash+Deals.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/23324306/scale-h655-w2880%5Ecompr-r85/2517/251720246/default_name.png"
    }
  ]
let shopFurniture = [
    {
      "img": "https://assets.wfcdn.com/im/14111339/c_crop-h360-w570%5Ecompr-r85/2711/271112496/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/68102485/c_crop-h360-w570%5Ecompr-r85/2711/271112528/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/00002993/c_crop-h360-w570%5Ecompr-r85/2711/271112522/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/89447693/c_crop-h360-w570%5Ecompr-r85/2711/271112614/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/88808522/c_crop-h360-w570%5Ecompr-r85/2711/271112518/default_name.png"
    }
  ]
let shopOutdoor = [
    {
      "img": "https://assets.wfcdn.com/im/69953804/c_crop-h360-w570%5Ecompr-r85/2711/271112538/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/58602891/c_crop-h360-w570%5Ecompr-r85/2711/271112539/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/12149519/c_crop-h360-w570%5Ecompr-r85/2711/271112612/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/01516053/c_crop-h360-w570%5Ecompr-r85/2711/271112627/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/03850101/c_crop-h360-w570%5Ecompr-r85/2711/271112540/default_name.png"
    }
  ]
let shopDecor = [
    {
      "img": "https://assets.wfcdn.com/im/68707687/c_crop-h360-w570%5Ecompr-r85/2711/271112492/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/02760426/c_crop-h360-w570%5Ecompr-r85/2711/271112495/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/46005861/c_crop-h360-w570%5Ecompr-r85/2711/271112490/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/59959509/c_crop-h360-w570%5Ecompr-r85/2711/271112605/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/33410575/c_crop-h360-w570%5Ecompr-r85/2711/271112621/default_name.png"
    }
  ]
let shopHomeUpgrade = [
    {
      "img": "https://assets.wfcdn.com/im/48608596/c_crop-h360-w570%5Ecompr-r85/2711/271112604/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/44044041/c_crop-h360-w570%5Ecompr-r85/2711/271112618/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/23500432/c_crop-h360-w570%5Ecompr-r85/2711/271112611/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/66745867/c_crop-h360-w570%5Ecompr-r85/2711/271112616/default_name.png"
    },
    {
      "img": "https://assets.wfcdn.com/im/45557101/c_crop-h360-w570%5Ecompr-r85/2711/271112531/default_name.png"
    }
  ]
let pickJustForYou = [
    {
      "img": "https://assets.wfcdn.com/im/18137218/resize-h444-w444%5Ecompr-r85/2718/271814327/default_name.jpg",
      "title": "Shiflett Orintal Burgandy by Andover Mills",
      "price": "$30.99"
    },
    {
      "img": "https://assets.wfcdn.com/im/43388115/resize-h444-w444%5Ecompr-r85/1893/189330398/default_name.jpg",
      "title": "MOuntainview Oriantal Rug by Andover Mills",
      "price": "$25.80"
    },
    {
      "img": "https://assets.wfcdn.com/im/37310188/resize-h444-w444%5Ecompr-r85/1171/117155225/default_name.jpg",
      "title": "Hector Performant Rug by Kelly Clarkson",
      "price": "$29.99"
    },
    {
      "img": "https://assets.wfcdn.com/im/78452437/resize-h444-w444%5Ecompr-r85/2631/263147106/default_name.jpg",
      "title": "Gossard Floard Rug by Kelly Clarkson",
      "price": "$45.50"
    },
    {
      "img": "https://assets.wfcdn.com/im/72038045/resize-h444-w444%5Ecompr-r85/1795/179588183/default_name.jpg",
      "title": "Buck Hill Wool Oriantal Rugs by Lark Manor",
      "price": "$25.99"
    },
    {
      "img": "https://assets.wfcdn.com/im/90246867/resize-h444-w444%5Ecompr-r85/2313/231343655/default_name.jpg",
      "title": "Canety Oriental Rug by Stand & stable",
      "price": "$45.89"
    }
  ]
let scoreUnder50 = [
    {
      "img": "https://assets.wfcdn.com/im/52251875/resize-h444-w444%5Ecompr-r85/1336/133645341/default_name.jpg",
      "title": "Shiflett Orintal Burgandy by Andover Mills",
      "price": "$30.99"
    },
    {
      "img": "https://assets.wfcdn.com/im/10494486/resize-h444-w444%5Ecompr-r85/2317/231700129/default_name.jpg",
      "title": "MOuntainview Oriantal Rug by Andover Mills",
      "price": "$25.80"
    },
    {
      "img": "https://assets.wfcdn.com/im/33248380/resize-h444-w444%5Ecompr-r85/1223/122310381/default_name.jpg",
      "title": "Hector Performant Rug by Kelly Clarkson",
      "price": "$29.99"
    },
    {
      "img": "https://assets.wfcdn.com/im/78452437/resize-h444-w444%5Ecompr-r85/2631/263147106/default_name.jpg",
      "title": "Gossard Floard Rug by Kelly Clarkson",
      "price": "$45.50"
    },
    {
      "img": "https://assets.wfcdn.com/im/81213166/resize-h444-w444%5Ecompr-r85/2712/27129620/default_name.jpg",
      "title": "Buck Hill Wool Oriantal Rugs by Lark Manor",
      "price": "$25.99"
    },
    {
      "img": "https://assets.wfcdn.com/im/24538064/resize-h444-w444%5Ecompr-r85/2160/216022396/default_name.jpg",
      "title": "Canety Oriental Rug by Stand & stable",
      "price": "$45.89"
    }
  ]
let scoreAt50 = [
    {
      "img": "https://assets.wfcdn.com/im/75306556/resize-h444-w444%5Ecompr-r85/6827/68276659/default_name.jpg",
      "title": "Bottinea 4",
      "price": "$299"
    },
    {
      "img": "https://assets.wfcdn.com/im/38891476/resize-h444-w444%5Ecompr-r85/2254/225451864/default_name.jpg",
      "title": "Carlyssa-4",
      "price": "$199"
    },
    {
      "img": "https://assets.wfcdn.com/im/27588946/resize-h444-w444%5Ecompr-r85/1560/156007938/default_name.jpg",
      "title": "Chuun-2",
      "price": "$229"
    },
    {
      "img": "https://assets.wfcdn.com/im/54091954/resize-h444-w444%5Ecompr-r85/1579/157993339/default_name.jpg",
      "title": "4-person Outdoor Seating",
      "price": "$219"
    },
    {
      "img": "https://assets.wfcdn.com/im/78071889/resize-h444-w444%5Ecompr-r85/2376/237625328/default_name.jpg",
      "title": "Arocho 7",
      "price": "$569"
    },
    {
      "img": "https://assets.wfcdn.com/im/17251175/resize-h444-w444%5Ecompr-r85/1598/159898253/default_name.jpg",
      "title": "4 person Outdoor Seating",
      "price": "$219.98"
    }
  ]
let shopSale = [
    {
      "img": "https://assets.wfcdn.com/im/61824560/resize-h396-w792%5Ecompr-r85/1334/133439918/Closeout.jpg",
      "title": "CloseOut",
      "discription": "Score up to 80% off while these deals last."
    },
    {
      "img": "https://assets.wfcdn.com/im/06437360/resize-h396-w792%5Ecompr-r85/1334/133439929/Open+Box.jpg",
      "title": "Open Box",
      "discription": "Save big on returned and like-new items."
    }
  ]


let shopByDepartment = [
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
]


function Saving(){
    return(
        
        <div className="Saving">
            <div className="navLink">
                <Link to="/">Home</Link>/
                <p>Sales</p>
            </div>
            <SavingImage img={savingImage[0].img}/>
            <div className="CardCont">
                <p className="heading">Shop Furniture</p>
                <div className="subCardCont">
                    {shopFurniture.map((item,i)=>(
                        <ShopFurniture key={i} {...item}/>
                    ))}
                </div>
            </div>
            <SavingImage img={savingImage[1].img}/>
            <div className="CardCont">
                <p className="heading">Shop Outdoor</p>
                <div className="subCardCont">
                    {shopOutdoor.map((item,i)=>(
                        <ShopFurniture key={i} {...item}/>
                    ))}
                </div>
            </div>
            <div className="CardCont">
                <p className="heading">Shop Decor & Finishing Touches</p>
                <div className="subCardCont">
                    {shopDecor.map((item,i)=>(
                        <ShopFurniture key={i} {...item}/>
                    ))}
                </div>
            </div>
            <div className="CardCont">
                <p className="heading">Shop Home Upgrades</p>
                <div className="subCardCont">
                    {shopHomeUpgrade.map((item,i)=>(
                        <ShopFurniture key={i} {...item}/>
                    ))}
                </div>
            </div>
            <div className="ShopByDepartment">
                <p className="heading">Sale by Department</p>
                <div className="shopByDepartmentCardCont">
                    {shopByDepartment.map((item)=>(
                        <ShopByDepartment key={item.title} {...item}/>
                    ))}
                </div>
            </div>
            <SavingImage img={savingImage[2].img}/>
            <div className="BuyingCard">
                <p className="heading">Pick Just for You</p>
                <div className="buyingCardCont">
                    {pickJustForYou.map((item,i)=>(
                        <BuyingCard key={i} {...item}/>
                    ))}
                </div>
            </div>
            <div className="BuyingCard">
                <p className="heading">Scores Under $50</p>
                <div className="buyingCardCont">
                    {scoreUnder50.map((item,i)=>(
                        <BuyingCard key={i} {...item}/>
                    ))}
                </div>
            </div>
            <div className="BuyingCard">
                <p className="heading">Scores at 50% Off</p>
                <div className="buyingCardCont">
                    {scoreAt50.map((item,i)=>(
                        <BuyingCard key={i} {...item}/>
                    ))}
                </div>
            </div>
            <div className="shopSale">
                <p className="heading">More Ways to Shop Sale</p>
                <div className="shopSaleCont">
                    {shopSale.map((item,i)=>(
                        <ShopSale key={i} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Saving