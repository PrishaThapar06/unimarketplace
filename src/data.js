const data = {
    "productData": [
      {
        "cat_name": "furniture",
        "id": 1,
        "image": "https://png.pngtree.com/png-vector/20220105/ourlarge/pngtree-design-cartoon-vector-furniture-5-png-image_4081024.png",
        "items": [
          {
            "cat_name": "Living Room",
            "products": [
              {
                "productName": "Comfortable Loveseat Sofa",
                "price": "200",
                "oldPrice": "250",
                "dimensions": {
                  "width": 180,
                  "height": 78,
                  "depth": 88
                },
                "catImg":"https://i5.walmartimages.com/seo/INGALIK-88-58-Modern-Loveseat-Sofa-Living-Room-Chenille-Couch-Square-Armrests-Removable-Cushions-Detachable-Cover-Easy-Install-3-Seater-Beige_453faadf-fe8f-4869-bdd7-6737d5292aa8.fc4478e493a9e7daae38d546acc2720c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
                "discount": "20",
                "brand": "Ikea",  
                "productImages": [
                  "https://i5.walmartimages.com/seo/INGALIK-88-58-Modern-Loveseat-Sofa-Living-Room-Chenille-Couch-Square-Armrests-Removable-Cushions-Detachable-Cover-Easy-Install-3-Seater-Beige_453faadf-fe8f-4869-bdd7-6737d5292aa8.fc4478e493a9e7daae38d546acc2720c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", 
                  "https://i5.walmartimages.com/asr/c904869b-c562-4a4c-9b99-b5b51cd783bb.27dac34958a1f1e3a5f4eb6a61379b87.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" 
                ],
                "rating": 4.2,
                "description": "This comfortable and stylish loveseat sofa is perfect for any living room. It's compact, affordable, and easy to assemble. The removable cover makes cleaning a breeze. Great for relaxing, studying, or entertaining friends.",
                "id": 1
              }
              ,
              {
                "productName": "Coffee Table",
                "price": "75",
                "oldPrice": "100",
                "dimensions": {
                  "width": 100,
                  "height": 45,
                  "depth": 60
                },
                "catImg": "https://i.ebayimg.com/images/g/h14AAOSwjQ1lksmj/s-l960.webp",
                "discount": "25",
                "brand": "John Lewis & Partners",
                "productImages": [
                  "https://i.ebayimg.com/images/g/h14AAOSwjQ1lksmj/s-l960.webp",
                  "https://i.ebayimg.com/images/g/-1UAAOSwLsZlksmq/s-l960.webp"
                ],
                "rating": 4.7,
                "description": "The Coffee Table features a sleek, modern design with a glass top and metal frame. It's the perfect centerpiece for your living room, offering both style and functionality for studying or entertaining.",
                "id": 2
              },
              {
                "productName": "Recliner Sofa",
                "price": "90",
                "oldPrice": "120",
                "dimensions": {
                  "width": 120,
                  "height": 50,
                  "depth": 40
                },
                "catImg": "https://i.ebayimg.com/images/g/S1sAAOSw5i1mJirp/s-l960.webp",
                "discount": "25",
                "brand": "Argos Home",
                "productImages": [
                  "https://i.ebayimg.com/images/g/kCcAAOSw29FmJirr/s-l960.webp",
                  "https://i.ebayimg.com/images/g/S1sAAOSw5i1mJirp/s-l960.webp"
                ],
                "rating": 4.5,
                "description": 

                "Enjoy comfort and style with our blue colored recliner sofa. Perfect for lounging and relaxation, this sofa combines plush cushioning with a sleek design, making it an ideal addition to any modern living space.",
                "id": 3
              },
              // {
              //   "productName": "Dunelm Large Bean Bag Chair",
              //   "price": "40",
              //   "oldPrice": "55",
              //   "dimensions": {
              //     "width": 90,
              //     "height": 90,
              //     "depth": 90
              //   },
              //   "catImg": "https://media.dunelm.com/productimages/1000162493_M.jpg",
              //   "discount": "27",
              //   "brand": "Dunelm",
              //   "productImages": [
              //     "https://media.dunelm.com/productimages/1000162493_M.jpg",
              //     "https://media.dunelm.com/productimages/1000162493_A.jpg"
              //   ],
              //   "rating": 4.3,
              //   "description": "The Dunelm Large Bean Bag Chair is a comfortable and versatile seating option for your living room. It’s lightweight and easy to move around, making it perfect for relaxing or studying in comfort.",
              //   "id": 4
              // },
              // {
              //   "productName": "Habitat Drew Nest of Tables",
              //   "price": "50",
              //   "oldPrice": "70",
              //   "dimensions": {
              //     "width": 55,
              //     "height": 45,
              //     "depth": 35
              //   },
              //   "catImg": "https://media.4rgos.it/i/Argos/6069661_R_Z001A?w=750&h=440&qlt=70&fmt=webp",
              //   "discount": "28",
              //   "brand": "Habitat",
              //   "productImages": [
              //     "https://media.4rgos.it/i/Argos/6069661_R_Z001A?w=750&h=440&qlt=70&fmt=webp",
              //     "https://media.4rgos.it/i/Argos/6069661_R_Z001B?w=750&h=440&qlt=70&fmt=webp"
              //   ],
              //   "rating": 4.6,
              //   "description": "The Habitat Drew Nest of Tables are practical and stylish. These space-saving tables can be used individually or nested together, perfect for small living rooms or student accommodation.",
              //   "id": 5
              // },
              // {
              //   "productName": "Amazon Basics Classic Armchair",
              //   "price": "110",
              //   "oldPrice": "150",
              //   "dimensions": {
              //     "width": 75,
              //     "height": 85,
              //     "depth": 85
              //   },
              //   "catImg": "https://images-na.ssl-images-amazon.com/images/I/71iGIr9-2-L._AC_SL1500_.jpg",
              //   "discount": "27",
              //   "brand": "Amazon Basics",
              //   "productImages": [
              //     "https://images-na.ssl-images-amazon.com/images/I/71iGIr9-2-L._AC_SL1500_.jpg",
              //     "https://images-na.ssl-images-amazon.com/images/I/81NcU4AlR7L._AC_SL1500_.jpg"
              //   ],
              //   "rating": 4.4,
              //   "description": "The Amazon Basics Classic Armchair offers a blend of comfort and style, perfect for any living room. Its cushioned seat and back provide support, making it ideal for studying, reading, or relaxing.",
              //   "id": 6
              // },
              // {
              //   "productName": "Made.com Jonah 3 Seater Sofa",
              //   "price": "400",
              //   "oldPrice": "500",
              //   "dimensions": {
              //     "width": 215,
              //     "height": 85,
              //     "depth": 95
              //   },
              //   "catImg": "https://media.made.com/jonah-3-seater-sofa",
              //   "discount": "20",
              //   "brand": "Made.com",
              //   "productImages": [
              //     "https://media.made.com/jonah-3-seater-sofa",
              //     "https://media.made.com/jonah-3-seater-sofa"
              //   ],
              //   "rating": 4.9,
              //   "description": "The Made.com Jonah 3 Seater Sofa combines elegance with comfort, featuring a modern design and plush cushions. Perfect for student living rooms, it provides ample seating for friends and family.",
              //   "id": 7
              // }
            ]
          },
          {
            "cat_name": "Bedroom",
            "products": [
              {
                "productName": "Deep Pocket 6 Piece Bed Sheet Set 1800 Series Microfiber Comfort Paisley Sheets",
                "price": "676",
                "oldPrice": "820",
                
                "catImg": "https://i.ebayimg.com/images/g/8vgAAOSwCGhmUJRL/s-l960.webp",
                "discount": "18",
                "brand": "Argos Home",
                "productImages": [
                  "https://i.ebayimg.com/images/g/8vgAAOSwCGhmUJRL/s-l960.webp"
                ],
                "rating": 5,
                "description": "Enhance your bedroom with the luxurious Deep Pocket 6 Piece Bed Sheet Set. Made from 1800 series microfiber, these paisley sheets are incredibly soft and comfortable. The deep pockets ensure a snug fit on mattresses up to 16 inches deep. This set includes a flat sheet, fitted sheet, and four pillowcases, providing a complete bedding solution. Transform your bedroom into a cozy retreat with these stylish and durable sheets!",
                "id": 9
              },
              {
                "productName": "organic cotton duvet cover Full/queen. New",
                "price": "250",
                "oldPrice": "300",
                
                "catImg": "https://i.ebayimg.com/images/g/stoAAOSwJq1mUS3Q/s-l960.webp",
                "discount": "10",
                "brand": "Parachute",
                "productImages": [
                  "https://i.ebayimg.com/images/g/stoAAOSwJq1mUS3Q/s-l960.webp",
                  "https://i.ebayimg.com/images/g/JBkAAOSw~dtmUS3R/s-l960.webp",
                  
                ],
                "rating": 4,
                "description": "A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.",
                "id": 10
              },
              // {
              //   "productName": "organic cotton duvet cover Full/queen. New",
              //   "price": "250",
              //   "oldPrice": "300",
                
              //   "catImg": "https://i.ebayimg.com/images/g/stoAAOSwJq1mUS3Q/s-l960.webp",
              //   "discount": "10",
              //   "brand": "Parachute",
              //   "productImages": [
              //     "https://i.ebayimg.com/images/g/stoAAOSwJq1mUS3Q/s-l960.webp",
              //     "https://i.ebayimg.com/images/g/JBkAAOSw~dtmUS3R/s-l960.webp",
                  
              //   ],
              //   "rating": 4,
              //   "description": "A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.",
              //   "id": 11
              // },
              // {
              //   "productName": "Amul Cow Ghee 500 ml (Pouch)",
              //   "price": "300",
              //   "oldPrice": "380",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/490011305/amul-cow-ghee-500-ml-pouch-product-images-o490011305-p490011305-0-202203150541.jpg",
              //   "discount": "8",
              //   "brand": "Amul",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/490011305/amul-cow-ghee-500-ml-pouch-product-images-o490011305-p490011305-0-202203150541.jpg",
              //     "https://www.jiomart.com/images/product/original/490011305/amul-cow-ghee-500-ml-pouch-product-images-o490011305-p490011305-1-202203150541.jpg"
              //   ],
              //   "rating": 0,
              //   "description": "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cooking. Amul Cow Ghee can be swapped for vegetable oil or coconut oil in baked goods or can be used for deep-frying. Or simply melt it and spread it on roti, or pour it on vegetables/dal before serving. So go ahead and buy this product online today!",
              //   "id": 12
              // },
              // {
              //   "productName": "HARYANA FRESH Rich Desi Danedar Ghee 500 Grams (Carton)",
              //   "price": "249",
              //   "oldPrice": "280",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-product-images-orvtancavef-p604251677-0-202308302043.jpg",
              //   "discount": "18",
              //   "brand": "HARYANA FRESH",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-product-images-orvtancavef-p604251677-0-202308302043.jpg",
              //     "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-product-images-orvtancavef-p604251677-1-202308302043.jpg",
              //     "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-legal-images-orvtancavef-p604251677-2-202308302043.jpg"
              //   ],
              //   "rating": 4,
              //   "description": "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cooking. Amul Cow Ghee can be swapped for vegetable oil or coconut oil in baked goods or can be used for deep-frying. Or simply melt it and spread it on roti, or pour it on vegetables/dal before serving. So go ahead and buy this product online today",
              //   "id": 13
              // },
              // {
              //   "productName": "Kheduthaat Shudh Ghee Vedic Method Traditional Suddha Ghee 1 LTR ml",
              //   "price": "699",
              //   "oldPrice": "780",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-product-images-orv6qd7bcjt-p604175636-0-202308291243.jpg",
              //   "discount": "14",
              //   "brand": "KHEDUT HAAT",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-product-images-orv6qd7bcjt-p604175636-0-202308291243.jpg",
              //     "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-product-images-orv6qd7bcjt-p604175636-1-202308291243.jpg",
              //     "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-legal-images-orv6qd7bcjt-p604175636-3-202308291243.jpg"
              //   ],
              //   "rating": 4,
              //   "description": "Khedut haat provides you with the pure cow ghee from the milk . Our ghee provides you with all the nutrients needed and only in the vessels made with Soil (Mitti) has taken an initiative for farmers to keep their strength which is a cow. All our products are directly or indirectly related to Cows & Buffalows. this milk to make milk-made dairy products. Cow dung and cow urine for fertilizing the soil. We do not use chemical fertilizers ",
              //   "id": 14
              // }
            ]
          },
          {
            "cat_name": "Kitchen",
            "products": [
              {
                "productName": "Instant Read Digital Meat Thermometer BBQ Grill Smoker For Kitchen Food Cooking",
                "price": "320",
                "oldPrice": "380",
                
                "catImg": "https://i.ebayimg.com/images/g/wNYAAOSwowtbj56R/s-l960.webp",
                "discount": "13",
                "brand": "Unbranded",
                "productImages": [
                  "https://i.ebayimg.com/images/g/wNYAAOSwowtbj56R/s-l960.webp",
                  "https://i.ebayimg.com/images/g/V5kAAOSwPEFbj56I/s-l960.webp",
                  
                ],
                "rating": 4.3,
                "description": "New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag. See the seller's listing for full details.",
                "id": 15
              },
              {
                "productName": "IKEA Fintorp Rail Holder Kitchen Office 22.5” 18481 Black 502.019.06",
                "price": "350",
                "oldPrice": "380",
                
                "catImg": "https://i.ebayimg.com/images/g/5DUAAOSw3dhmVfrL/s-l960.webp",
                "discount": "17",
                "brand": "IKEA",
                "productImages": [
                  "https://i.ebayimg.com/images/g/5DUAAOSw3dhmVfrL/s-l960.webp",
                  "https://i.ebayimg.com/images/g/9Z0AAOSwRdpmVfrL/s-l960.webp",
                  
                ],
                "rating": 4,
                "description": "New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag. See the seller's listing for full details.",
                "id": 16
              },
              {
                "productName": "4 Packs Kitchen Spice Rack Organizer Storage Shelf Cabinet Jar Holder Wall Mount",
                "price": "250",
                "oldPrice": "300",
                
                "catImg": "https://i.ebayimg.com/images/g/pQoAAOSwSDJkM37q/s-l1600.webp",
                "discount": "12",
                "brand": "Neat-O",
                "productImages": [
                  "https://i.ebayimg.com/images/g/pQoAAOSwSDJkM37q/s-l1600.webp",
                  "https://i.ebayimg.com/images/g/CaAAAOSwSphls1rV/s-l960.webp",
                  
                ],
                "rating": 4.3,
                "description": "New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag. See the seller's listing for full details.",
                "id": 17
              },
              // {
              //   "productName": "Chakki Atta 10 kg",
              //   "price": "400",
              //   "oldPrice": "450",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-0-202206231932.jpg",
              //   "discount": "12",
              //   "brand": "Private Label",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-0-202206231932.jpg",
              //     "https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-1-202206231932.jpg"
              //   ],
              //   "rating": 4,
              //   "description": "Chakki Atta is freshly made from the choicest grains. It is carefully ground using modern chakki technique. It is used to make a wide range of foods including bread, crumpets, muffins, noodles, pasta, biscuits, cakes, pastries, cereal bars, sweet and savoury snack foods, crackers, crisp-breads, sauces and confectioner. Buy Chakki Atta online now!\n",
              //   "id": 18
              // },
              // {
              //   "productName": "Good Life MP Wheat Chakki Atta 5 kg",
              //   "price": "250",
              //   "oldPrice": "280",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-0-202306131322.jpg",
              //   "discount": "12",
              //   "brand": "Good Life",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-0-202306131322.jpg",
              //     "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-1-202306131322.jpg",
              //     "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-2-202306131322.jpg",
              //     "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-legal-images-o491458272-p491458272-3-202306131322.jpg"
              //   ],
              //   "rating": 4,
              //   "description": "Now get the best of health in every bite with Good Life MP Wheat Chakki Atta. The hygienic packaging ensures the product remains fresh over a period of time. Also, it has a sweet and aromatic taste that works together to give you fuller and softer rotis, every single time. Buy Good Life MP Wheat Chakki Atta online now!\n",
              //   "id": 19
              // },
              // {
              //   "productName": "Fortune Suji / Semolina 500 g",
              //   "price": "26",
              //   "oldPrice": "35",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-product-images-o491695704-p590040931-0-202305191005.jpg",
              //   "discount": "12",
              //   "brand": "Fortune",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-product-images-o491695704-p590040931-0-202305191005.jpg",
              //     "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-product-images-o491695704-p590040931-1-202305191005.jpg",
              //     "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-legal-images-o491695704-p590040931-2-202305191005.jpg"
              //   ],
              //   "rating": 5,
              //   "description": "Fortune Suji / Semolina commonly called as wheat rawa is used as a batter ingredient as well as to make various other food items like upma and sheera. It is coarse in texture and is made of wheat. It is a versatile ingredient and easy to cook. It makes a perfect food for breakfast. Buy Fortune Suji / Semolina online now!\n",
              //   "id": 20
              // },
              // {
              //   "productName": "Wheatkart Whole Wheat Atta - 10 KG",
              //   "price": "210",
              //   "oldPrice": "250",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/rvondh0dpy/wheatkart-whole-wheat-atta-10-kg-product-images-orvondh0dpy-p596562517-0-202212221536.png",
              //   "discount": "17",
              //   "brand": "Wheatkart",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/rvondh0dpy/wheatkart-whole-wheat-atta-10-kg-product-images-orvondh0dpy-p596562517-0-202212221536.png",
              //     "https://www.jiomart.com/images/product/original/rvondh0dpy/wheatkart-whole-wheat-atta-10-kg-legal-images-orvondh0dpy-p596562517-1-202212221536.png"
              //   ],
              //   "rating": 4.5,
              //   "description": "Without adding any maida, we have 100% wheat flour to make the dough smoother.\n\nThe atta is so perfectly blended that the chappatis made by Wheatkart Atta are tastier and softer when they are cold.\n\nAtta or chakki atta is wheat flour from the Indian subcontinent that is mostly used to create flatbreads like chapati, roti, naan, paratha and puri.",
              //   "id": 21
              // }
            ]
          },
          {
            "cat_name": "Storage",
            "products": [
              {
                "productName": "3 Pack Shower Caddy Shelf Bathroom Basket Bath Storage Holder Organizer Rack NEW",
                "price": "300",
                "oldPrice": "350",
                
                "catImg": "https://i.ebayimg.com/images/g/s3MAAOSwXoNlR7ff/s-l1600.webp",
                "discount": "10",
                "brand": "Does not apply",
                "productImages": [
                  "https://i.ebayimg.com/images/g/s3MAAOSwXoNlR7ff/s-l1600.webp",
                  "https://i.ebayimg.com/images/g/D6cAAOSw-gBlR7fg/s-l960.webp",
                  
                ],
                "rating": 4.5,
                "description": "3 PACK AND LARGE CAPACITY: Beautiful Looking And Extra Large Capacity Bathroom Shower Rack, Our 3-Piece Shower Bathroom Rack Not Only Meets Your Daily Toiletries Storage Needs, But Also Blends In With a Variety Of Decorative Styles. You Can Store Razors, Shower Balls, Loofahs And Other Shower Supplies. Suitable For Shower Storage In Bathrooms, Toilets, Kitchens, Bedrooms Or Other Places.",
                "id": 22
              },
              {
                "productName": "Desktop Bookcase Desk Organizer Book Support Bookshelf Storage Rack",
                "price": "200",
                "oldPrice": "250",
                
                "catImg": "https://i.ebayimg.com/images/g/qOgAAOSw0-1mBBD-/s-l960.webp",
                "discount": "10",
                "brand": "Unbranded",
                "productImages": [
                  "https://i.ebayimg.com/images/g/qOgAAOSw0-1mBBD-/s-l960.webp",
                  "https://i.ebayimg.com/images/g/T64AAOSwPUdmBBD-/s-l960.webp",
                  
                ],
                "rating": 5,
                "description": "The desk bookcase is made of density board material, which is strong enough to hold multiple books, and rustic, artworks. Sizes 30.5cmx15cmx17cm/12.01inchx5.91inchx6.69inch, easy to install, effective shape to hold any size books easily.",
                "id": 23
              },
              {
                "productName": "Storage Shelf Retractable Desktop Expandable Table Book Rack Cabinet Bookcase",
                "price": "55",
                "oldPrice": "85",
                
                "catImg": "https://i.ebayimg.com/images/g/gqgAAOSwwUpmRpAZ/s-l960.webp",
                "discount": "10",
                "brand": "MP360",
                "productImages": [
                  "https://i.ebayimg.com/images/g/gqgAAOSwwUpmRpAZ/s-l960.webp",
                  "https://i.ebayimg.com/images/g/mocAAOSwwIpmRpAZ/s-l960.webp",
                ],
                "rating": 4.3,
                "description": "This bookshelf is more than just a bookshelf, it can be used as a vertical display shelf, plant shelf, kitchen shelf, bathroom storage shelf, standing shelf units.Features multiple shelves for storing and displaying everyday essentials. Size: H x D x W 31.5 x 6.7 x (11.80 - 19.69) Inch    /    80 x 17 x (30 -50) cm",
                "id": 24
              },
              // {
              //   "productName": "VEEDINT CUMIN SEEDS, JEERA WHOLE, CUMIN SEED WHOLE, 1 KG PACK",
              //   "price": "180",
              //   "oldPrice": "220",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-0-202305151313.jpg",
              //   "discount": "10",
              //   "brand": "Veedint",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-0-202305151313.jpg",
              //     "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-1-202305151313.jpg",
              //     "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-2-202305151313.jpg"
              //   ],
              //   "rating": 5,
              //   "description": "Cumin Seed Whole (Jeera), Natural. Cumin seeds are commonly used in Indian and South Asian cooking, as well as Mexican cuisine. They have a warm and aromatic flavor that resembles curry powder. The seeds are used as a key ingredient in Indian food, but can also be added to soups or sauces for flavoring purposes. The aromatic seed like fruit is elongated, ovoid, 3-6 mm long, slingtly bitter and has a warm flavour The flowers are white or rose coloured in small umbels. \n",
              //   "id": 25
              // },
              // {
              //   "productName": "Organic Tattva Cumin Seeds 100 g",
              //   "price": "88",
              //   "oldPrice": "110",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/491229671/organic-tattva-cumin-seeds-100-g-product-images-o491229671-p491229671-0-202206021941.jpg",
              //   "discount": "8",
              //   "brand": "Organic Tattva",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/491229671/organic-tattva-cumin-seeds-100-g-product-images-o491229671-p491229671-0-202206021941.jpg",
              //     "https://www.jiomart.com/images/product/original/491229671/organic-tattva-cumin-seeds-100-g-product-images-o491229671-p491229671-1-202206021941.jpg"
              //   ],
              //   "rating": 5,
              //   "description": "Cumin seeds or Jeera is an essential spice that is used for tempering dishes with a strong taste and aroma. It offers a sturdy, exclusive and soothing piquancy and aroma to the dishes. It's not only known for its flavour enhancing quality but also for its health benefits. Add an extra pinch of taste to your dish with Organic Tattva Cumin Seeds. So go ahead and buy this product online today.\n",
              //   "id": 26
              // },
              // {
              //   "productName": "Lotus Spices Green Elaichi 10 g",
              //   "price": "32",
              //   "oldPrice": "55",
              //   "weight": [
              //     50,
              //     100,
              //     150,
              //     200,
              //     250,
              //     500
              //   ],
              //   "catImg": "https://www.jiomart.com/images/product/original/493072642/lotus-spices-green-elaichi-15-g-product-images-o493072642-p593731219-0-202304291358.jpg",
              //   "discount": "10",
              //   "brand": "Lotus",
              //   "productImages": [
              //     "https://www.jiomart.com/images/product/original/493072642/lotus-spices-green-elaichi-15-g-product-images-o493072642-p593731219-0-202304291358.jpg",
              //     "https://www.jiomart.com/images/product/original/493072642/lotus-spices-green-elaichi-15-g-product-images-o493072642-p593731219-1-202304291358.jpg"
              //   ],
              //   "rating": 4.5,
              //   "description": "Green Elaichi or Green Cardamom is also known as the 'Queen of Spices'. It is the most common spice used in a variety of sweet and savoury dishes. It is also added to tea and coffee for its unique fragrance and flavour. Buy Lotus Spices Green Elaichi online today!\n",
              //   "id": 27
              // }
            ]
          },
          
        ]
      },
      {
        "cat_name": "Electronics",
        "id": 2,
        "image": "https://cdn-icons-png.flaticon.com/128/3659/3659898.png",
        "items": [
          {
            "cat_name": "Mobiles & Tablets",
            "products": [
              {
                "productName": "OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Blue Tide,Mobile Phone",
                "price": "16,999.00",
                "oldPrice": "19,999.00",
                "weight": [],
                "RAM": [
                  4,
                  6,
                  8
                ],
                "catImg": "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png",
                "discount": "12",
                "brand": "One Plus",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-1-202208112007.jpeg",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-2-202208112007.jpeg",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-3-202208112007.jpeg",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-4-202208112007.jpeg",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-5-202208112007.png",
                  "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-6-202208112007.png"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 35
              },
              {
                "productName": "Apple iPhone 13 128 GB, Midnight (Black)",
                "price": "56,900.00",
                "oldPrice": "59,900.00",
                "weight": [],
                "RAM": [
                  4,
                  6,
                  8,
                  12
                ],
                "catImg": "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg",
                "discount": "20",
                "brand": "Apple",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg",
                  "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-1-202208221207.jpeg",
                  "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-2-202208221207.jpeg",
                  "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-3-202208221207.jpeg",
                  "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-4-202208221207.jpeg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 36
              },
              {
                "productName": "Tecno Pop 7 Pro 64 GB, 2 GB, Black, Smartphone",
                "price": "5,555.00",
                "oldPrice": "7,999.00 ",
                "weight": [],
                "RAM": [
                  4,
                  6,
                  8,
                  12
                ],
                "catImg": "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-0-202309292014.jpeg",
                "discount": "16",
                "brand": "Tecno",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-0-202309292014.jpeg",
                  "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-1-202309292014.jpeg",
                  "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-2-202309292014.jpeg",
                  "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-3-202309292014.jpeg",
                  "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-4-202309292014.jpeg"
                ],
                "rating": 4.2,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 37
              },
              {
                "productName": "Realme C55 DLC 64GB, 4 GB RAM, Sunshower, Mobile Phone",
                "price": "10,299.00",
                "oldPrice": "12,999.00 ",
                "weight": [],
                "RAM": [
                  4,
                  6,
                  8,
                  12
                ],
                "catImg": "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-0-202310051633.jpeg",
                "discount": "16",
                "brand": "Realme",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-0-202310051633.jpeg",
                  "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-1-202310051633.jpeg",
                  "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-2-202310051633.jpeg",
                  "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-3-202310051633.jpeg",
                  "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-4-202310051633.jpeg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 38
              },
              {
                "productName": "POCO M6 Pro 5G, 6GB RAM, 128GB ROM, Power Black, Smartphone",
                "price": "12,199.00",
                "oldPrice": "16,999.00",
                "weight": [],
                "RAM": [
                  4,
                  6,
                  8,
                  12
                ],
                "catImg": "https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-0-202309191411.jpg",
                "discount": "10",
                "brand": "POCO",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-0-202309191411.jpg",
                  "https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-1-202309191411.jpg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 39
              }
            ]
          },
          {
            "cat_name": "TV & Speaker",
            "products": [
              {
                "productName": "Realme 80 cm (32 inch) HD Ready LED Smart Android TV 2023 Edition with Android 11 RMV2205",
                "price": "9,990.00",
                "oldPrice": "21,999.00 ",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "32 inch",
                  "43 inch"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
                "discount": "16",
                "brand": "Realme",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-1-202309262030.jpeg",
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-2-202309262030.jpeg",
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-3-202309262030.jpeg)"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 40
              },
              {
                "productName": "Realme 80 cm (32 inch) HD Ready LED Smart Android TV 2023 Edition with Android 11 RMV2205",
                "price": "9,990.00",
                "oldPrice": "21,999.00 ",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "32 inch",
                  "43 inch"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
                "discount": "16",
                "brand": "Realme",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-1-202309262030.jpeg",
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-2-202309262030.jpeg",
                  "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-3-202309262030.jpeg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 41
              },
              {
                "productName": "OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge",
                "price": "22,990.00",
                "oldPrice": "33,999.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "32 inch",
                  "43 inch"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-0-202202221339.jpeg",
                "discount": "32",
                "brand": "One Plus",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-0-202202221339.jpeg",
                  "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-1-202202221339.jpeg",
                  "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-2-202202221339.jpeg",
                  "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-3-202202221339.jpeg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 42
              },
              {
                "productName": "TCL 55 QLED Smart Google TV, 55C645",
                "price": "39,990.00",
                "oldPrice": "121,990.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "32 inch",
                  "43 inch"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/493841840/tcl-55-qled-smart-google-tv-55c645-digital-o493841840-p601697284-0-202305221948.png",
                "discount": "32",
                "brand": "TCL",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/493841840/tcl-55-qled-smart-google-tv-55c645-digital-o493841840-p601697284-0-202305221948.png"
                ],
                "rating": 4,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 43
              }
            ]
          }
        ]
      },
      {
        "cat_name": "Fashion",
        "id": 3,
        "image": "https://cdn-icons-png.flaticon.com/128/12516/12516451.png",
        "items": [
          {
            "cat_name": "Men Western Wear",
            "products": [
              {
                "productName": "Bomber Jacket with Zipper Pockets",
                "price": "1,593.00",
                "oldPrice": "3,125.00  ",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL",
                  "XXL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
                "discount": "49",
                "brand": "Fort Collins",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
                  "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model2-469255919_black-2-202301311905.jpg",
                  "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model3-469255919_black-3-202301311905.jpg",
                  "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model4-469255919_black-4-202301311905.jpg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 44
              },
              {
                "productName": "Mid-Rise Skinny Fit Jeans",
                "price": "269.00",
                "oldPrice": "899.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  28,
                  30,
                  32,
                  34
                ],
                "catImg": "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
                "discount": "49",
                "brand": "Fort Collins",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
                  "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model2-420434311_blue-2-202308081627.jpg",
                  "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model3-420434311_blue-3-202308081627.jpg",
                  "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model4-420434311_blue-4-202308081627.jpg",
                  "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg"
                ],
                "rating": 5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 45
              },
              {
                "productName": "Plutus Men Black Solid Polyester Casual Jacket M",
                "price": "499.00",
                "oldPrice": "699.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
                "discount": "60",
                "brand": "PLUTUS",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
                  "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-1-202209240106.jpg",
                  "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-2-202209240106.jpg",
                  "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-3-202209240106.jpg",
                  "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-4-202209240106.jpg"
                ],
                "rating": 5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 46
              },
              {
                "productName": "BULLMER Men Beige Cotton Blend Printed Single Sweatshirts",
                "price": "699.00",
                "oldPrice": "989.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
                "discount": "60",
                "brand": "BULLMER",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
                  "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-1-202210291839.jpg",
                  "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-2-202210291839.jpg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 47
              },
              {
                "productName": "Men Checked Slim Fit Shirt",
                "price": "179.00",
                "oldPrice": "489.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
                "discount": "45",
                "brand": "ROXTAR",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
                  "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model2-420395610_red-2-202309052055.jpg",
                  "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model3-420395610_red-3-202309052055.jpg",
                  "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model4-420395610_red-4-202309052055.jpg",
                  "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model5-420395610_red-5-202309052055.jpg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 48
              }
            ]
          },
          {
            "cat_name": "Women Western Wear",
            "products": [
              {
                "productName": "Rudraaksha Stylish Dress For women",
                "price": "299.00",
                "oldPrice": "389.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-0-202210042034.jpg",
                "discount": "65",
                "brand": "Rudraaksha",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-0-202210042034.jpg",
                  "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-1-202210042034.jpg",
                  "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-2-202210042034.jpg",
                  "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-3-202210042034.jpg"
                ],
                "rating": 4.5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 49
              },
              {
                "productName": "Fabflee Party Flared Sleeves Printed Women Yellow Top | Women Tops | Crepe Top | Tops For Women",
                "price": "499.00",
                "oldPrice": "589.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-0-202309260654.jpg",
                "discount": "65",
                "brand": "Rudraaksha",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-0-202309260654.jpg",
                  "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-1-202309260654.jpg",
                  "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-2-202309260654.jpg",
                  "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-3-202309260654.jpg",
                  "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-4-202309260654.jpg"
                ],
                "rating": 4,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 50
              },
              {
                "productName": "Shrug with Shawl Lapel",
                "price": "699.00",
                "oldPrice": "989.00",
                "weight": [],
                "RAM": [],
                "SIZE": [
                  "M",
                  "L",
                  "XL"
                ],
                "catImg": "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model-441131609_grey-0-202309271631.jpg",
                "discount": "65",
                "brand": "FIG",
                "productImages": [
                  "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model2-441131609_grey-2-202309271631.jpg",
                  "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model3-441131609_grey-3-202309271631.jpg",
                  "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model3-441131609_grey-3-202309271631.jpg",
                  "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model4-441131609_grey-4-202309271631.jpg",
                  "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model5-441131609_grey-5-202309271631.jpg"
                ],
                "rating": 5,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
                "id": 51
              }
            ]
          }
        ]
      }
    ],
    "productReviews": [
      {
        "review": "nice ",
        "userName": "rinku verma",
        "rating": "5",
        "productId": "47",
        "date": "11/19/2023, 12:35:32 AM",
        "id": 1
      },
      {
        "review": "good ",
        "userName": "sfsdf",
        "rating": "4",
        "productId": "40",
        "date": "11/19/2023, 12:36:30 AM",
        "id": 2
      },
      {
        "review": "Realme C55 DLC 64GB, 4 GB RAM, Sunshower, Mobile Phone  nice product ",
        "userName": "rinku verma",
        "rating": "5",
        "productId": "38",
        "date": "11/19/2023, 12:37:35 AM",
        "id": 3
      },
      {
        "review": "HARYANA FRESH Rich Desi Danedar Ghee 500 Grams (Carton)  nice product ",
        "userName": "@rinkuv37",
        "rating": "5",
        "productId": "13",
        "date": "11/19/2023, 6:54:23 PM",
        "id": 4
      },
      {
        "review": "nice product ",
        "userName": "rinku verma",
        "rating": "5",
        "productId": "36",
        "date": "11/19/2023, 8:43:56 PM",
        "id": 5
      },
      {
        "review": "zsfzsdf",
        "userName": "dfsdff",
        "rating": "5",
        "productId": "8",
        "date": "11/22/2023, 6:57:23 PM",
        "id": 6
      },
      {
        "review": "",
        "userName": "",
        "rating": 0,
        "productId": 0,
        "date": "",
        "id": 7
      },
      {
        "review": "nice product",
        "userName": "rinku verma",
        "rating": 0,
        "productId": "1",
        "date": "12/17/2023, 5:58:25 AM",
        "id": 8
      },
      {
        "review": "nice product",
        "userName": "rinku verma",
        "rating": "5",
        "productId": "1",
        "date": "12/17/2023, 5:58:43 AM",
        "id": 9
      },
      {
        "review": "nice product ",
        "userName": "rinku verma",
        "rating": "5",
        "productId": "36",
        "date": "12/17/2023, 10:18:11 PM",
        "id": 10
      }
    ],
    "cartItems": [
      {
        "productName": "Moong Dal 2 kg",
        "price": "246",
        "oldPrice": "320",
        "weight": [
          50,
          100,
          150,
          200,
          250,
          500
        ],
        "catImg": "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg",
        "discount": "16",
        "brand": "Private Label",
        "productImages": [
          "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg",
          "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-1-202205191636.jpg",
          "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-legal-images-o491432711-p491432711-3-202205191636.jpg"
        ],
        "rating": 4,
        "description": "Moong Dal is essentially packed with loads of nutrients that are extremely beneficial for your health. Moong contains almost every important element that your body might need. Buy Moong Dal online today.",
        "id": 2,
        "quantity": 1
      },
      {
        "productName": "BULLMER Men Beige Cotton Blend Printed Single Sweatshirts",
        "price": "699.00",
        "oldPrice": "989.00",
        "weight": [],
        "RAM": [],
        "SIZE": [
          "M",
          "L",
          "XL"
        ],
        "catImg": "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
        "discount": "60",
        "brand": "BULLMER",
        "productImages": [
          "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
          "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-1-202210291839.jpg",
          "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-2-202210291839.jpg"
        ],
        "rating": 4.5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        "id": 47,
        "parentCatName": "Fashion",
        "subCatName": "Men Western Wear",
        "quantity": 1
      },
      {
        "productName": "Good Life Moong Dal 1 kg",
        "price": "145",
        "oldPrice": "189",
        "weight": [
          50,
          100,
          150,
          200,
          250,
          500
        ],
        "catImg": "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-0-202301171616.jpg",
        "discount": "12",
        "brand": "Good Life",
        "productImages": [
          "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-0-202301171616.jpg",
          "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-1-202301171616.jpg",
          "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-legal-images-o491187257-p491187257-2-202301171616.jpg"
        ],
        "rating": 4.5,
        "description": "Good life Moong Dal is procured from reliable and high-quality sources. The beans are best consumed after being sprouted. Dosa with whole moong also turns out to be yummy, another exotic way to eat moong is to eat it as a korma which is spiced up with tangy tomatoes and a cashew paste. It is mainly used as the base for curries such as sambar, dal etc. Buy Good Life Moong Dal online now!",
        "id": 5,
        "quantity": 1
      },
      {
        "productName": "Bomber Jacket with Zipper Pockets",
        "price": "1,593.00",
        "oldPrice": "3,125.00  ",
        "weight": [],
        "RAM": [],
        "SIZE": [
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "catImg": "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
        "discount": "49",
        "brand": "Fort Collins",
        "productImages": [
          "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
          "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model2-469255919_black-2-202301311905.jpg",
          "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model3-469255919_black-3-202301311905.jpg",
          "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model4-469255919_black-4-202301311905.jpg"
        ],
        "rating": 4.5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        "id": 44,
        "quantity": 1
      },
      {
        "productName": "Mid-Rise Skinny Fit Jeans",
        "price": "269.00",
        "oldPrice": "899.00",
        "weight": [],
        "RAM": [],
        "SIZE": [
          28,
          30,
          32,
          34
        ],
        "catImg": "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
        "discount": "49",
        "brand": "Fort Collins",
        "productImages": [
          "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
          "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model2-420434311_blue-2-202308081627.jpg",
          "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model3-420434311_blue-3-202308081627.jpg",
          "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model4-420434311_blue-4-202308081627.jpg",
          "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg"
        ],
        "rating": 5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        "id": 45,
        "quantity": 1
      },
      {
        "productName": "Plutus Men Black Solid Polyester Casual Jacket M",
        "price": "499.00",
        "oldPrice": "699.00",
        "weight": [],
        "RAM": [],
        "SIZE": [
          "M",
          "L",
          "XL"
        ],
        "catImg": "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
        "discount": "60",
        "brand": "PLUTUS",
        "productImages": [
          "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
          "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-1-202209240106.jpg",
          "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-2-202209240106.jpg",
          "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-3-202209240106.jpg",
          "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-4-202209240106.jpg"
        ],
        "rating": 5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        "id": 46,
        "quantity": 1
      },
      {
        "productName": "Men Checked Slim Fit Shirt",
        "price": "179.00",
        "oldPrice": "489.00",
        "weight": [],
        "RAM": [],
        "SIZE": [
          "M",
          "L",
          "XL"
        ],
        "catImg": "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
        "discount": "45",
        "brand": "ROXTAR",
        "productImages": [
          "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
          "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model2-420395610_red-2-202309052055.jpg",
          "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model3-420395610_red-3-202309052055.jpg",
          "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model4-420395610_red-4-202309052055.jpg",
          "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model5-420395610_red-5-202309052055.jpg"
        ],
        "rating": 4.5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        "id": 48,
        "quantity": 1
      },
      {
        "productName": "Good Life Whole Moong 500 g",
        "price": "20",
        "oldPrice": "140",
        "weight": [
          50,
          100,
          150,
          200,
          250,
          500
        ],
        "catImg": "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg",
        "discount": "12",
        "brand": "AASHIRVAAD",
        "productImages": [
          "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg",
          "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-1-202308311426.jpg",
          "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-2-202308311426.jpg",
          "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-3-202308311426.jpg",
          "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-4-202308311426.jpg",
          "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-legal-images-o491187309-p491187309-5-202308311427.jpg"
        ],
        "rating": 3.5,
        "description": "Good Life Whole Moong is one of the light meal to digest. It is often given to people who prefer diet for fitness. It contains antioxidants which are very healthy for the good functioning of the human body. It can be included in our daily diet as it can fulfil the nutritional and dietary requirements of an entire meal. Buy Good Life Whole Moong online now!",
        "id": 1,
        "parentCatName": "groceries",
        "subCatName": "dals and pulses",
        "quantity": 1
      }
    ]
  }

  export default data;