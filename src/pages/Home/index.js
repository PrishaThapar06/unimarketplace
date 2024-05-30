import React, { useState, useEffect, useRef, useContext } from 'react';
import SliderBanner from './slider/index';
import CatSlider from '../../components/catSlider';
import Banners from '../../components/banners';
import './style.css';
import Product from '../../components/product';
import Banner4 from '../../assets/images/banner4.jpg';
import Slider from "react-slick";
import TopProducts from './TopProducts';
import axios from 'axios';
import { MyContext } from '../../App';


const Home = (props) => {

    const [prodData, setprodData] = useState(props.data);
    const [catArray, setcatArray] = useState([]);
    const [activeTab, setactiveTab] = useState();
    const [activeTabIndex, setactiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);
    const [bestSells, setBestSells] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    const productRow = useRef(null); // Ensure productRow is initialized as null
    const context = useContext(MyContext);

    var settings = {
        dots: false,
        infinite: context.windowWidth < 992 ? false : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: context.windowWidth < 992 ? false : true,
    };

    const catArr = [];

    useEffect(() => {
        if (prodData.length !== 0) {
            prodData.forEach((item) => {
                if (item.items.length !== 0) {
                    item.items.forEach((item_) => {
                        catArr.push(item_.cat_name);
                    });
                }
            });

            const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
            setcatArray(list2);
            setactiveTab(list2[0]);
            window.scrollTo(0, 0);
        }
    }, [prodData]);

    useEffect(() => {
        var arr = [];
        setActiveTabData(arr);
        if (prodData.length !== 0) {
            prodData.forEach((item, index) => {
                item.items.forEach((item_, index_) => {
                    if (item_.cat_name === activeTab) {
                        if (item_.products.length !== 0) {
                            item_.products.forEach((product) => {
                                arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name });
                            });
                            setActiveTabData(arr);
                            setTimeout(() => {
                                setIsLoadingProducts(false);
                            }, 1000);
                        }
                    }
                });
            });
        }
    }, [activeTab, prodData]);

    const bestSellsArr = [];

    useEffect(() => {
        if (prodData.length !== 0) {
            prodData.forEach((item) => {
                if (item.cat_name === "Electronics") {
                    if (item.items.length !== 0) {
                        item.items.forEach((item_) => {
                            if (item_.products.length !== 0) {
                                item_.products.forEach((product, index) => {
                                    bestSellsArr.push(product);
                                });
                            }
                        });
                    }
                }
            });
            setBestSells(bestSellsArr);
        }
    }, [prodData]);

    // Define unique products for each category
    const topSellingProducts = [
        {
            img: 'https://i.ebayimg.com/images/g/S1sAAOSw5i1mJirp/s-l960.webp',
            name: "Recliner",
            rating: 4.6,
            price: "£90.00",
            oldPrice: "£110.00"
        },
        {
            img: 'https://i.ebayimg.com/images/g/jvcAAOSwAL1mQeRo/s-l960.webp',
            name: "Book Shelf",
            rating: 4.2,
            price: "$140.00",
            oldPrice: "$160.00"
        },
    ];

    const trendingProducts = [
        
        {
            img: 'https://i.ebayimg.com/images/g/o6oAAOSwMNVmRC0k/s-l960.webp',
            name: "Robot Vacuum Cleaner",
            rating: 4.7,
            price: "£60.00",
            oldPrice: "£65.00"
            
        },
    ];

    const recentlyAddedProducts = [
        {
            img: 'https://i.ebayimg.com/images/g/o6oAAOSwMNVmRC0k/s-l960.webp',
            name: "Robot Vacuum Cleaner",
            rating: 4.7,
            price: "£60.00",
            oldPrice: "£65.00"
            
        },
        // {
        //     img: 'path_to_image6.jpg',
        //     name: "Product 6",
        //     rating: 4.3,
        //     price: "$70.00",
        //     oldPrice: "$75.00"
        // },
    ];

    const topRatedProducts = [
        {
            img: 'https://i.ebayimg.com/images/g/pmMAAOSwFEFlXXVR/s-l960.webp',
            name: "Cutlery Set",
            rating: 4.9,
            price: "£70.00",
            oldPrice: "£85.00"
        },
        {
            img: 'https://i.ebayimg.com/images/g/S1sAAOSw5i1mJirp/s-l960.webp',
            name: "Recliner",
            rating: 4.6,
            price: "£90.00",
            oldPrice: "£110.00"
        },
    ];

    return (
        <div style={{ display: 'block' }}>
            <SliderBanner />
            <CatSlider data={prodData} />
            <Banners />

            <section className='homeProducts homeProductWrapper'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center homeProductsTitleWrap'>
                        <h2 className='hd mb-0 mt-0 res-full'>Popular Products</h2>
                        <ul className='list list-inline ml-auto filterTab mb-0 res-full'>
                            {catArray.length !== 0 && catArray.map((cat, index) => (
                                <li className="list list-inline-item" key={index}>
                                    <a className={`cursor text-capitalize ${activeTabIndex === index ? 'act' : ''}`}
                                        onClick={() => {
                                            setactiveTab(cat);
                                            setactiveTabIndex(index);
                                            if (productRow.current) {
                                                productRow.current.scrollLeft = 0;
                                            }
                                            setIsLoadingProducts(true);
                                        }}>
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`productRow ${isLoadingProducts === true ? 'loading' : ''}`} ref={productRow}>
                        {activeTabData.length !== 0 && activeTabData.map((item, index) => (
                            <div className='item' key={index}>
                                <Product tag={item.type} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='homeProducts homeProductsRow2 pt-0'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
                    </div>
                    <br className='res-hide' /><br className='res-hide' />
                    <div className='row'>
                        <div className='col-md-3 pr-5 res-hide'>
                            <img src={Banner4} className='w-100' alt="Banner" />
                        </div>
                        <div className='col-md-9'>
                            <Slider {...settings} className='prodSlider'>
                                {bestSells.length !== 0 && bestSells.map((item, index) => (
                                    <div className='item' key={index}>
                                        <Product tag={item.type} item={item} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='topProductsSection'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <TopProducts title="Top Selling" products={topSellingProducts} />
                        </div>
                        <div className='col'>
                            <TopProducts title="Trending Products" products={trendingProducts} />
                        </div>
                        <div className='col'>
                            <TopProducts title="Recently Added" products={recentlyAddedProducts} />
                        </div>
                        <div className='col'>
                            <TopProducts title="Top Rated" products={topRatedProducts} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
