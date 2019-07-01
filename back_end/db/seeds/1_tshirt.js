exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tshirt').del()
    .then(function () {
      // Inserts seed entries
      return knex('tshirt').insert([
        {
          id: 1,
          shirt_name: "Simpsons",
          description: "A t-shirt about the simpsons",
          image_url: "https://s7d5.scene7.com/is/image/UrbanOutfitters/51581262_050_b?$xlarge$&hei=900&qlt=80&fit=constrain",
          category_id: 1,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 10.99,
          price_medium: 15.99,
          price_large: 20.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 20
        },
        {
          id: 2,
          shirt_name: "Rick and Morty",
          description: "A t-shirt about the show Rick and Morty",
          image_url: "https://s7d9.scene7.com/is/image/JCPenney/DP0227201911005829M?resmode=sharp2&op_sharpen=1&wid=550&hei=550",
          category_id: 1,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 14.99,
          price_medium: 17.99,
          price_large: 22.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 3,
          shirt_name: "Guns N Roses shirt",
          description: "An awesome Guns and Roses shirt!",
          image_url: "https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140,2000%7C91CwPZ1OONL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX385_.png",
          category_id: 2,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 4,
          shirt_name: "MegaDeath",
          description: "An awesome MegaDeath shirt!",
          image_url: "https://images-na.ssl-images-amazon.com/images/I/71eLVBeaPJL._UY679_.jpg",
          category_id: 2,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 5,
          shirt_name: "Arrowsmith",
          description: "An awesome arrowsmith shirt!",
          image_url: "https://images-na.ssl-images-amazon.com/images/I/61rb6%2B0Rc-L._UX679_.jpg",
          category_id: 2,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 6,
          shirt_name: "Meatloaf",
          description: "An awesome Meatloaf shirt!",
          image_url: "https://images-na.ssl-images-amazon.com/images/I/A1wzu7xTYML._UX425_.jpg",
          category_id: 2,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 7,
          shirt_name: "Jaws",
          description: "An awesome Jaws shirt!",
          image_url: "https://cdn.shopify.com/s/files/1/0665/2971/products/QuintTee-BabyBlue_74938ae9-758b-468d-9460-c85ccd72b026_400x@2x.progressive.png.jpg?v=1536734816",
          category_id: 3,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 8,
          shirt_name: "Terminator",
          description: "An awesome Terminator shirt!",
          image_url: "https://images-na.ssl-images-amazon.com/images/I/61sfp1v73fL._UX466_.jpg",
          category_id: 3,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        },
        {
          id: 9,
          shirt_name: "Dumbo",
          description: "An awesome Dumbo shirt!",
          image_url: "https://hottopic.scene7.com/is/image/HotTopic/11780734_hi?$pdp_hero_zoom$",
          category_id: 3,
          instock_small: 125,
          instock_medium: 125,
          instock_large: 150,
          price_small: 18.99,
          price_medium: 13.99,
          price_large: 14.99,
          on_sale: false,
          sale_percent: 0.30,
          material: "cotton",
          total_likes: 23
        }
      ]);
    });
};