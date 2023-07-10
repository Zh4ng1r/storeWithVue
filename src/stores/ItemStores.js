import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [
            { id: 1, img: '/images/slider1.png', title: "Stylish shoes for Women", textColor: "black" },
            { id: 2, img: '/images/slider2.png', title: "Sports Wear", textColor: "white" },
            { id: 3, img: '/images/slider3.png', title: "Fashion Shoes", textColor: "black" },
            { id: 4, img: '/images/slider1.png', title: "Stylish shoes for Women", textColor: "black" },
            { id: 5, img: '/images/slider2.png', title: "Sports Wear", textColor: "white" },
            { id: 6, img: '/images/slider3.png', title: "Fashion Shoes", textColor: "black" },
            { id: 7, img: '/images/slider1.png', title: "Stylish shoes for Women", textColor: "black" },
            { id: 8, img: '/images/slider2.png', title: "Sports Wear", textColor: "white" },
            { id: 9, img: '/images/slider3.png', title: "Fashion Shoes", textColor: "black" },
            { id: 10, img: '/images/slider1.png', title: "Stylish shoes for Women", textColor: "black" },
            { id: 11, img: '/images/slider2.png', title: "Sports Wear", textColor: "white" },
            { id: 12, img: '/images/slider3.png', title: "Fashion Shoes", textColor: "black" },
        ],
    })
})