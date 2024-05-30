import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Product from '../../components/product';
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { MyContext } from '../../App';
// import data from '../../data.js'

const Listing = (props) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
    const [showPerPage, setShowPerPage] = useState(3);
    const [data, setData] = useState([]);
    const context = useContext(MyContext);
    const { id } = useParams();

    useEffect(() => {
        // Function to filter and set data based on category id
        const filterData = () => {
            let itemsData = [];

            props.data.forEach(item => {
                if (props.single && item.cat_name.toLowerCase() === id.toLowerCase()) {
                    item.items.forEach(item_ => {
                        item_.products.forEach(product => {
                            itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name });
                        });
                    });
                } else if (!props.single && item.items) {
                    item.items.forEach(item_ => {
                        if (item_.cat_name.toLowerCase().split(' ').join('-') === id.toLowerCase().split(' ').join('-')) {
                            item_.products.forEach(product => {
                                itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name });
                            });
                        }
                    });
                }
            });

            setData(itemsData);
            window.scrollTo(0, 0);
        };

        filterData();
    }, [id, props.data, props.single]);

    const filterByBrand = (keyword) => {
        let filteredData = [];

        data.forEach(item => {
            if (item.brand.toLowerCase() === keyword.toLowerCase()) {
                filteredData.push(item);
            }
        });

        setData(filteredData);
        window.scrollTo(0, 0);
    };

    const filterByPrice = (minValue, maxValue) => {
        let filteredData = [];

        data.forEach(item => {
            let price = parseInt(item.price.toString().replace(/,/g, ''));
            if (minValue <= price && price <= maxValue) {
                filteredData.push(item);
            }
        });

        setData(filteredData);
        window.scrollTo(0, 0);
    };

    const filterByRating = (keyword) => {
        let filteredData = [];

        data.forEach(item => {
            if (item.rating === keyword) {
                filteredData.push(item);
            }
        });

        setData(filteredData);
        window.scrollTo(0, 0);
    };

    return (
        <>
            {context.windowWidth < 992 && !context.isopenNavigation && (
                <Button className='btn-g btn-lg w-100 filterBtn' onClick={() => context.openFilters()}>
                    Filters
                </Button>
            )}

            <section className='listingPage'>
                <div className='container-fluid'>
                    <div className='breadcrumb flex-column'>
                        <h1 className='text-capitalize'>{id.split('-').join(' ')}</h1>
                        <ul className='list list-inline mb-0'>
                            <li className='list-inline-item'>
                                <Link to={'/'}>Home </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='text-capitalize'>
                                    {sessionStorage.getItem('cat')}{' '}
                                </Link>
                            </li>
                            {!props.single && (
                                <li className='list-inline-item'>
                                    <Link to={''} className='text-capitalize'>
                                        {id.split('-').join(' ')}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className='listingData'>
                        <div className='row'>
                            <div className={`col-md-3 sidebarWrapper ${context.isOpenFilters && 'click'}`}>
                                {data.length !== 0 && <Sidebar data={props.data} currentCatData={data} filterByBrand={filterByBrand} filterByPrice={filterByPrice} filterByRating={filterByRating} />}
                            </div>

                            <div className='col-md-9 rightContent homeProducts pt-0'>
                                <div className='topStrip d-flex align-items-center'>
                                    <p className='mb-0'>
                                        We found <span className='text-success'>{data.length}</span> items for you!
                                    </p>
                                    <div className='ml-auto d-flex align-items-center'>
                                        <div className='tab_ position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
                                                <GridViewOutlinedIcon /> Show: {showPerPage * 5}
                                            </Button>
                                            {isOpenDropDown && (
                                                <ul className='dropdownMenu'>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setShowPerPage(1)}>
                                                            5
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setShowPerPage(2)}>
                                                            10
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setShowPerPage(3)}>
                                                            15
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setShowPerPage(4)}>
                                                            20
                                                        </Button>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                        <div className='tab_ ml-3 position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>
                                                <FilterListOutlinedIcon /> Sort by: Featured{' '}
                                            </Button>
                                            {isOpenDropDown2 && (
                                                <ul className='dropdownMenu'>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
                                                            Featured
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
                                                            Price: Low to High
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
                                                            Price: High to Low
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
                                                            Release Date
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
                                                            Avg. Rating
                                                        </Button>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='productRow pl-4 pr-3'>
                                    {data.length !== 0 &&
                                        data.map((item, index) => (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Listing;
