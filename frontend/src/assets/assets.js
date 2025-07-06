import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import plastic from './plastic.png'
import paper from './paper.png'
import glass from './glass.png'
import textile from './textile.png'
import eWaste from './eWaste.png'
import metal from './metal.png'
import footer_logo from './footer_logo.png'
import admin from './admin.png'
import plastic1 from './plastic1.png'
import paper1 from './paper1.png'
import glass1 from './glass1.png'
import textile1 from './textile1.png'
import eWaste1 from './eWaste1.png'
import metal1 from './metal1.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    footer_logo,
    admin
}

export const menu_list = [
    {
        menu_name: "Plastic",
        menu_image: plastic
    },
    {
        menu_name: "Metal",
        menu_image: metal
    },
    {
        menu_name: "Paper",
        menu_image: paper
    },
    {
        menu_name: "Glass",
        menu_image: glass
    },
    {
        menu_name: "E-Waste",
        menu_image: eWaste
    },
    {
        menu_name: "Textile",
        menu_image: textile
    }]


export const food_list = [
    {
        _id: "1",
        name: "Water Bottles",
        image: plastic1,
        price: 12,
        description: "Profit from your waste, empower sustainability, and help save our planet.",
        category: "Plastic"
    },
    {
        _id: "2",
        name: "Glass Bottles",
        image: glass1,
        price: 18,
        description: "Profit from your waste, empower sustainability, and help save our planet.",
        category: "Glass"
    },{
        _id: "7",
        name: "Unused Clothes",
        image: textile1,
        price: 20,
        description: "Profit from your waste, empower sustainability, and help save our planet.",
        category: "Textile"
    }, {
        _id: "8",
        name: "Vehicle Metals",
        image: metal1,
        price: 15,
        description: "Profit from your waste, empower sustainability, and help save our planet.",
        category: "Metal"
    },  {
        _id: "32",
        name: "Magazines,Used papers",
        image: paper1,
        price: 15,
        description: "Profit from your waste, empower sustainability, and help save our planet.",
        category: "Paper"
    },
    {
        _id: "109",
        name: "Computer Accessories",
        image: eWaste1,
        price: 15,
        description: "Profit from your waste, empower sustainability, and help save our planet.",
        category: "E-Waste"
    }
]
