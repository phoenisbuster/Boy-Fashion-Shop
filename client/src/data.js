export const sliderItems = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?cs=srgb&dl=pexels-edgar-serrano-1964970.jpg&fm=jpg",
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "95767a",
      cat: "Summer Sale"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "STREET WEAR COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "675d5c",
      cat: "Street wear collection"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "WATCH COLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "242527",
      cat: "Watch"
    },
  ];

  export const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1342609.jpg&fm=jpg",
      title: "SUIT!",
      cat: "suit"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?cs=srgb&dl=pexels-artem-beliaikin-994517.jpg&fm=jpg",
      title: "SHIRT",
      cat: "shirt"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?cs=srgb&dl=pexels-javon-swaby-2783873.jpg&fm=jpg",
      title: "WATCH",
      cat: "Watch"
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/167686/pexels-photo-167686.jpeg?cs=srgb&dl=pexels-lumn-167686.jpg&fm=jpg",
      title: "ACCESSORIES",
      cat: "accessories"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2897524/pexels-photo-2897524.jpeg?cs=srgb&dl=pexels-prayoon-sajeev-2897524.jpg&fm=jpg",
      title: "PANT",
      cat: "pant"
    },
  ];

  export const popularProducts = [
    {
      id: 200,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      title: "Mens Jake Guitar Vintage Crusher Tee",
      color: ['Red','Green','Blue','Yellow'],
      size: ['XS','S','M','L','XL','XXL'],
      quantity: 1,
      price: 7,
    },
    {
      id: 201,
      img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
      title: "Angela Natural Tee",
      color: ['Red','Green','Blue','Yellow'],
      size: ['XS','S','M','L','XL','XXL'],
      quantity: 1,
      price: 7,
    },
    {
      id: 202,
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
      title: "A colorfull T-shirt that I don't know the name",
      color: ['Red','Green','Blue','Yellow'],
      size: ['XS','S','M','L','XL','XXL'],
      quantity: 1,
      price: 7,
    },
    {
      id: 203,
      img:"https://www.pngall.com/wp-content/uploads/2016/04/Watch-PNG-HD.png",
      title: "A modern watch",
      color: ['Silver', 'Black'],
      size: ['39','40','41','42'],
      quantity: 1,
      price: 7,
    },
    // {
    //   id:5,
    //   img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    // },
    // {
    //   id:6,
    //   img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    // },
    // {
    //   id:7,
    //   img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    // },
    // {
    //   id:8,
    //   img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    // },
  ];
  
  export const CartItem = [
  {
	  _id:1,
	  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
	  title: "Abc",
	  color: "Yellow",
	  size: ['XS','S','M','L','XL','XXL'],
	  quantity: 1,
	  price: 5,
  },
  {
	  _id:2,
	  img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
	  title: "Abc",
	  color: "Pink",
	  size: ['XS','S','M','L','XL','XXL'],
	  quantity: 1,
	  price: 6,
  },
  ]
  const watch1 = require('./images/watch1.png').default
  const watch2 = require('./images/watch2.png').default
  const watch3 = require('./images/watch3.png').default
  const watch4 = require('./images/watch4.png').default
  const watch5 = require('./images/watch5.png').default
  
  export const Watches = [
    //Watch number 1
    {
      title: "BLACKTOP HONEY SMOKE", 
      saleOff: 0,
      desc: "BLACKTOP HONEY SMOKE",
      img: watch1, 
      cates: "A Watch",
      size: ['39','40','41','42'],
      color: ['White','Black'], 
      price: 100,
      isStock: "True",
    },
    {
      title: "PANTHER BLACK", 
      saleOff: 0,
      desc: "PANTHER BLACK",
      img: watch2, 
      cates: "A Watch",
      size: ['39','40','41','42'],
      color: ['White','Black'], 
      price: 150,
      isStock: "True",
    },
    {
      title: "CHRONO CERAMIC", 
      saleOff: 0,
      desc: "CHRONO CERAMIC",
      img: watch3, 
      cates: "A Watch",
      size: ['41','42','43','44'],
      color: ['White','Black'], 
      price: 100,
      isStock: "True",
    },
    {
      title: "EAGLE TAN", 
      saleOff: 0,
      desc: "EAGLE TAN",
      img: watch4, 
      cates: "A Watch",
      size: ['39','40','41','42'],
      color: ['White','Black'], 
      price: 100,
      isStock: "True",
    },
    {
      title: "CHRONO WHITE CARAMEL", 
      saleOff: 0,
      desc: "CHRONO WHITE CARAMEL",
      img: watch5, 
      cates: "A Watch",
      size: ['39','40','41','42'],
      color: ['White','Black'], 
      price: 100,
      isStock: "True",
    },
  ]
  export const Shirt = [
    //T-shirt number 1
    {
      id: 10,
      title: "BUTTERFLY TEE", 
      saleOff: 0,
      desc: "BUTTERFLY TEE",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/331/067/products/257290939-4514183608689785-7661557593157554801-n.jpg", 
      cates: "A T-Shirt",
      size: ['XS','S','M','L','XL','XXL'],
      color: ['Red','Green','Blue','Black'], 
      price: 5,
      isStock: "True",
    },
    //T-shirt number 2
    {
      id: 11,
      title: "FACE TEE OVERSIZED", 
      saleOff: 0,
      desc: "FACE TEE OVERSIZED",
      img: "http://bizweb.dktcdn.net/thumb/grande/100/331/067/products/215292870-4115395708568579-7308401028518663784-n.jpg?v=1625567925127", 
      cates: "B T-Shirt",
      size: ['XS','S','M','L','XL','XXL'],
      color: ['Red','Green','Blue','Yellow'], 
      price: 6,
      isStock: "True",
    },
    //T-shirt number 3
    {
      id: 12,
      title: "CRUSHER TEE", 
      saleOff: 0,
      desc: "Mens Jake Guitar Vintage Crusher Tee",
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png", 
      cates: "C T-Shirt",
      size: ['XS','S','M','L','XL','XXL'],
      color: ['Red','Green','Blue','Gray'], 
      price: 7,
      isStock: "True",
    },
    //T-shirt number 4
    {
      id: 13,
      title: "NATURAL TEE", 
      saleOff: 0,
      desc: "Angela Natural Tee",
      img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388", 
      cates: "D T-Shirt",
      size: ['XS','S','M','L','XL','XXL'],
      color: ['Red','Green','Blue','Pink'], 
      price: 7,
      isStock: "True",
    },
    //T-shirt number 5
    {
      id: 14,
      title: "YOUNG SKULL TEE", 
      saleOff: 0,
      desc: "YOUNG SKULL TEE",
      img: "http://bizweb.dktcdn.net/thumb/grande/100/331/067/products/193195028-4027643750677109-6063018326773296611-n.jpg?v=1623075453383", 
      cates: "B T-Shirt",
      size: ['XS','S','M','L','XL','XXL'],
      color: ['Red','Green','Blue','Black'], 
      price: 6,
      isStock: 0,
    },
    //T-shirt number 6
    {
      id: 15,
      title: 'Lacoste Paris Polo Shirt',
      saleOff: 0,
      desc: 'With model',
      img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/236198s.jpg", 
      cates: "A T-Shirt",
      size: ['XS','S','M','L','XL','XXL'],
      color: ['Red','Green','Blue'],
      price: 10.25,
      isStock: 1,
    },
  ]

