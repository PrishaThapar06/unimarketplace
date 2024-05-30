
// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';
// import Product from '../../components/product'; 
// import { Button } from '@mui/material';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
// import { MyContext } from '../../App';

// const Listing = (props) => {
//     const [isOpenDropDown, setIsOpenDropDown] = useState(false);
//     const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
//     const [showPerPage, setShowPerPage] = useState(3);
//     const [data, setData] = useState([]);
//     const context = useContext(MyContext);
//     const { id } = useParams();

//     useEffect(() => {
//         const filterData = () => {
//             let itemsData = [];

//             props.data.forEach(item => {
//                 if (props.single && item.cat_name.toLowerCase() === id.toLowerCase()) {
//                     item.items.forEach(item_ => {
//                         item_.products.forEach(product => {
//                             itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name });
//                         });
//                     });
//                 } else if (!props.single && item.items) {
//                     item.items.forEach(item_ => {
//                         if (item_.cat_name.toLowerCase().split(' ').join('-') === id.toLowerCase().split(' ').join('-')) {
//                             item_.products.forEach(product => {
//                                 itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name });
//                             });
//                         }
//                     });
//                 }
//             });

//             setData(itemsData);
//             window.scrollTo(0, 0);
//         };

//         filterData();
//     }, [id, props.data, props.single]);

//     const filterByBrand = (keyword) => {
//         let filteredData = data.filter(item => item.brand.toLowerCase() === keyword.toLowerCase());
//         setData(filteredData);
//         window.scrollTo(0, 0);
//     };

//     const filterByPrice = (minValue, maxValue) => {
//         let filteredData = data.filter(item => {
//             let price = parseInt(item.price.toString().replace(/,/g, ''));
//             return minValue <= price && price <= maxValue;
//         });
//         setData(filteredData);
//         window.scrollTo(0, 0);
//     };

//     const filterByRating = (keyword) => {
//         let filteredData = data.filter(item => item.rating === keyword);
//         setData(filteredData);
//         window.scrollTo(0, 0);
//     };

//     const handleDropdownClick = (event) => {
//         event.stopPropagation();
//     };

//     return (
//         <>
//             {context.windowWidth < 992 && !context.isopenNavigation && (
//                 <Button className='btn-g btn-lg w-100 filterBtn' onClick={() => context.openFilters()}>
//                     Filters
//                 </Button>
//             )}

//             <section className='listingPage'>
//                 <div className='container-fluid'>
//                     <div className='breadcrumb flex-column'>
//                         <h1 className='text-capitalize'>{id.split('-').join(' ')}</h1>
//                         <ul className='list list-inline mb-0'>
//                             <li className='list-inline-item'>
//                                 <Link to={'/'}>Home </Link>
//                             </li>
//                             <li className='list-inline-item'>
//                                 <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='text-capitalize'>
//                                     {sessionStorage.getItem('cat')}{' '}
//                                 </Link>
//                             </li>
//                             {!props.single && (
//                                 <li className='list-inline-item'>
//                                     <Link to={''} className='text-capitalize'>
//                                         {id.split('-').join(' ')}
//                                     </Link>
//                                 </li>
//                             )}
//                         </ul>
//                     </div>

//                     <div className='listingData'>
//                         <div className='row'>
//                             <div className={`col-md-3 sidebarWrapper ${context.isOpenFilters && 'click'}`}>
//                                 {data.length !== 0 && <Sidebar data={props.data} currentCatData={data} filterByBrand={filterByBrand} filterByPrice={filterByPrice} filterByRating={filterByRating} />}
//                             </div>

//                             <div className='col-md-9 rightContent homeProducts pt-0'>
//                                 <div className='topStrip d-flex align-items-center'>
//                                     <p className='mb-0'>
//                                         We found <span className='text-success'>{data.length}</span> items for you!
//                                     </p>
//                                     <div className='ml-auto d-flex align-items-center'>
//                                         <div className='tab_ position-relative'>
//                                             <Button className='btn_' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
//                                                 <GridViewOutlinedIcon /> Show: {showPerPage * 5}
//                                             </Button>
//                                             {isOpenDropDown && (
//                                                 <ul className='dropdownMenu' onClick={handleDropdownClick}>
//                                                     <li>
//                                                         <Button className='align-items-center'
//                                                             onClick={() => {
//                                                                 setIsOpenDropDown(false);
//                                                                 setShowPerPage(1);
//                                                             }}
//                                                         >
//                                                             5
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center'
//                                                             onClick={() => {
//                                                                 setIsOpenDropDown(false);
//                                                                 setShowPerPage(2);
//                                                             }}
//                                                         >
//                                                             10
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center'
//                                                             onClick={() => {
//                                                                 setIsOpenDropDown(false);
//                                                                 setShowPerPage(3);
//                                                             }}
//                                                         >
//                                                             15
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center'
//                                                             onClick={() => {
//                                                                 setIsOpenDropDown(false);
//                                                                 setShowPerPage(4);
//                                                             }}
//                                                         >
//                                                             20
//                                                         </Button>
//                                                     </li>
//                                                 </ul>
//                                             )}
//                                         </div>
//                                         <div className='tab_ ml-3 position-relative'>
//                                             <Button className='btn_' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>
//                                                 <FilterListOutlinedIcon /> Sort by: Featured{' '}
//                                             </Button>
//                                             {isOpenDropDown2 && (
//                                                 <ul className='dropdownMenu'>
//                                                     <li>
//                                                         <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
//                                                             Featured
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
//                                                             Price: Low to High
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
//                                                             Price: High to Low
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
//                                                             Release Date
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button className='align-items-center' onClick={() => setIsOpenDropDown2(false)}>
//                                                             Avg. Rating
//                                                         </Button>
//                                                     </li>
//                                                 </ul>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='productRow pl-4 pr-3'>
//                                     {data.length !== 0 &&
//                                         data.slice(0, showPerPage * 5).map((item, index) => (
//                                             <div className='item' key={index}>
//                                                 <Product tag={item.type} item={item} />
//                                             </div>
//                                         ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Listing;


import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Product from '../../components/product'; 
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { MyContext } from '../../App';

const Listing = (props) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
    const [showPerPage, setShowPerPage] = useState(3);
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [sortBy, setSortBy] = useState('Featured');
    const context = useContext(MyContext);
    const { id } = useParams();

    useEffect(() => {
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

            setOriginalData(itemsData);
            setData(itemsData);
            window.scrollTo(0, 0);
        };

        filterData();
    }, [id, props.data, props.single]);

    const filterByBrand = (keyword) => {
        let filteredData = originalData.filter(item => item.brand.toLowerCase() === keyword.toLowerCase());
        setData(filteredData);
        window.scrollTo(0, 0);
    };

    const filterByPrice = (minValue, maxValue) => {
        let filteredData = originalData.filter(item => {
            let price = parseInt(item.price.toString().replace(/,/g, ''));
            return minValue <= price && price <= maxValue;
        });
        setData(filteredData);
        window.scrollTo(0, 0);
    };

    const filterByRating = (keyword) => {
        let filteredData = originalData.filter(item => item.rating === keyword);
        setData(filteredData);
        window.scrollTo(0, 0);
    };

    const handleDropdownClick = (event) => {
        event.stopPropagation();
    };

    const sortData = (criteria) => {
        let sortedData = [...originalData];
        switch(criteria) {
            case 'Price: Low to High':
                sortedData.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
                break;
            case 'Price: High to Low':
                sortedData.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
                break;
            case 'Release Date':
                sortedData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
            case 'Avg. Rating':
                sortedData.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // For 'Featured', we'll just keep the original order or apply any other custom logic.
                sortedData = [...originalData];
                break;
        }
        setData(sortedData);
    };

    useEffect(() => {
        sortData(sortBy);
    }, [sortBy, originalData]);

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
                                                <ul className='dropdownMenu' onClick={handleDropdownClick}>
                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setIsOpenDropDown(false);
                                                                setShowPerPage(1);
                                                            }}
                                                        >
                                                            5
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setIsOpenDropDown(false);
                                                                setShowPerPage(2);
                                                            }}
                                                        >
                                                            10
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setIsOpenDropDown(false);
                                                                setShowPerPage(3);
                                                            }}
                                                        >
                                                            15
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setIsOpenDropDown(false);
                                                                setShowPerPage(4);
                                                            }}
                                                        >
                                                            20
                                                        </Button>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                        <div className='tab_ ml-3 position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>
                                                <FilterListOutlinedIcon /> Sort by: {sortBy}{' '}
                                            </Button>
                                            {isOpenDropDown2 && (
                                                <ul className='dropdownMenu' onClick={handleDropdownClick}>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => { setIsOpenDropDown2(false); setSortBy('Featured'); }}>
                                                            Featured
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => { setIsOpenDropDown2(false); setSortBy('Price: Low to High'); }}>
                                                            Price: Low to High
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => { setIsOpenDropDown2(false); setSortBy('Price: High to Low'); }}>
                                                            Price: High to Low
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => { setIsOpenDropDown2(false); setSortBy('Release Date'); }}>
                                                            Release Date
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center' onClick={() => { setIsOpenDropDown2(false); setSortBy('Avg. Rating'); }}>
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
                                        data.slice(0, showPerPage * 5).map((item, index) => (
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
