import React,{useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Home from './components/home'
import Footer from './components/footer'
import Contact from './components/contact'
import Sub from './components/subscribe'
import Welcome from './components/welcome'
import Products from './components/products'
import Items from './components/items'
import Loading from './components/laoding'

const Application = ({ getItems }) => {
    const [allitems, setallitems] = useState({})
    const [loading, setLoading] = useState(true)
  
    const [cart, setCart] = useState([])
    let items = {
       0: {
            id: '0',
            name: 'towel1',
            title: 'bath towel',
            category: 'bath',
            price: 50,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel1-black.jpg',
                '#eecfd4': 'images/towel1-blue.jpg',
                '#86c5cc': 'images/towel1-brown.jpg',
                '#775a5e': 'images/towel1-red.jpg',
                'black': 'images/towel1-white.jpg'
            },
            quantity: 0,
            discount:'new'
        },
       1: {
            id: '1',
            name: 'towel1',
            title: 'colored bath towel',
            category: 'bath',
            price: 70,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel1-red.jpg',
                '#eecfd4': 'images/towel1-brown.jpg',
                '#86c5cc': 'images/towel1-white.jpg',
                '#775a5e': 'images/towel1-black.jpg',
                'black': 'images/towel1-blue.jpg'
            },
            quantity:0,
            discount:'-10%'
        },
    2:    {
            id: '2',
            name: 'new bath towel',
            title: 'towel',
            category: 'bath',
            price: 100,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel1-white.jpg',
                '#eecfd4': 'images/towel1-blue.jpg',
                '#86c5cc': 'images/towel1-brown.jpg',
                '#775a5e': 'images/towel1-red.jpg',
                'black': 'images/towel1-black.jpg'
            },
        quantity: 0,
            discount:'promotion'
        },
      3:  {
            id: '3',
            name: 'towel1',
            title: 'long bath towel',
            category: 'bath',
            price: 120,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel1-red.jpg',
                '#eecfd4': 'images/towel1-blue.jpg',
                '#86c5cc': 'images/towel1-white.jpg',
                '#775a5e': 'images/towel1-black.jpg',
                'black': 'images/towel1-brown.jpg'
            },
          quantity: 0,
            discount:'sale'
        },
     4:   {
            id: '4',
            name: 'towel2',
            title: 'bed sheet',
            category: 'bed',
            price: 100,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel2-brown.jpg',
                '#eecfd4': 'images/towel2-red.jpg',
                '#86c5cc': 'images/towel2-black.jpg',
                '#775a5e': 'images/towel2-white.jpg',
                'black': 'images/towel2-blue.jpg'
            },
         quantity: 0,
            discount:'new'
        },
      5:  {
            id: '5',
            name: 'towel2',
            title: 'colored bed sheet',
            category: 'bed',
            price: 135,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel2-black.jpg',
                '#eecfd4': 'images/towel2-brown.jpg',
                '#86c5cc': 'images/towel2-white.jpg',
                '#775a5e': 'images/towel2-blue.jpg',
                'black': 'images/towel2-red.jpg'
            },
          quantity: 0,
            discount:'new'
        },
      6:  {
            id: '6',
            name: 'towel2',
            title: 'black bed sheet',
            category: 'bed',
            price: 142,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel2-blue.jpg',
                '#eecfd4': 'images/towel2-brown.jpg',
                '#86c5cc': 'images/towel2-black.jpg',
                '#775a5e': 'images/towel2-red.jpg',
                'black': 'images/towel2-white.jpg'
            },
          quantity: 0,
            discount:'new'
        },
      7:  {
            id: '7',
            name: 'towel2',
            title: 'long bed sheet',
            category: 'bed',
            price: 100,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/towel2-black.jpg',
                '#eecfd4': 'images/towel2-blue.jpg',
                '#86c5cc': 'images/towel2-red.jpg',
                '#775a5e': 'images/towel2-white.jpg',
                'black': 'images/towel2-brown.jpg'
            },
          quantity: 0,
            discount:'new'
        },
     8:   {
            id: '8',
            name: 'ball',
            title: 'man united kit',
            category: 'ball',
            price: 250,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/ball-white.jpg',
                '#eecfd4': 'images/ball-blue.jpg',
                '#86c5cc': 'images/ball-brown.jpg',
                '#775a5e': 'images/ball-red.jpg',
                'black': 'images/ball-black.jpg'
            },
         quantity: 0,
            discount:'new'
        },
     9:   {
            id: '9',
            name: 'ball',
            title: 'chelsea kit',
            category: 'ball',
            price: 180,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/ball-black.jpg',
                '#eecfd4': 'images/ball-white.jpg',
                '#86c5cc': 'images/ball-brown.jpg',
                '#775a5e': 'images/ball-red.jpg',
                'black': 'images/ball-blue.jpg'
            },
         quantity: 0,
            discount:'new'
        },
     10:   {
            id: '10',
            name: 'ball',
            title: 'psg kit',
            category: 'ball',
            price: 300,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/ball-black.jpg',
                '#eecfd4': 'images/ball-blue.jpg',
                '#86c5cc': 'images/ball-brown.jpg',
                '#775a5e': 'images/ball-white.jpg',
                'black': 'images/ball-red.jpg'
            },
         quantity: 0,
            discount:'new'
        },
    11:    {
            id: '11',
            name: 'ball',
            title: 'real madrid kit',
            category: 'ball',
            price: 350,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            colors: ['#b3aabd', '#eecfd4', '#86c5cc', '#775a5e', 'black'],
            images: {
                '#b3aabd': 'images/ball-black.jpg',
                '#eecfd4': 'images/ball-blue.jpg',
                '#86c5cc': 'images/ball-brown.jpg',
                '#775a5e': 'images/ball-red.jpg',
                'black': 'images/ball-white.jpg'
            },
        quantity: 0,
            discount:'new'
        },
    }
   
    useEffect(() => {
       
        Aos.init({ duration: 2000 });
       
        setallitems(items)
        getItems(items)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addToCart = (pro) => {
        setCart([...cart, pro])
        
    }
    const decrease = (pro) => {
        const arr = [...cart];
        const index = arr.indexOf(pro);
        if (index > -1) {
            arr.splice(index, 1);
            setCart(arr)
        }
    }
    
    const del = (pro) => {
       let arr=[];
        arr = [...cart];
        const index = arr.indexOf(pro);
       
            arr.splice(index, 1);
        setCart(arr)
        
        
    }
    const total = () => {
        let tot = 0;
        cart.forEach(item => {
            tot=tot+item.price
        })
        return tot
    }
  if(loading) return <Loading />
    return (
        <div>
            <Home cart={cart} del={del} total={total} />
            <Welcome />
            <Products />
            <Items items={Object.values(allitems)} cart={cart} addToCart={addToCart} decrease={decrease} />
            <Contact/>
            <Sub/>
            <Footer />
            
        </div>
    )
}

export default Application
