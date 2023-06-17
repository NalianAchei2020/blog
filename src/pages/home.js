import React from 'react';
import {Data} from "../data";
import { authorData} from "../data";
import '../Sass/index.scss';

const Home = () => {
    const firstTwoItems =  Data.slice(0,2);
    const firstfourItems = Data.slice(0,4);
    console.log(firstTwoItems);
    return (
        <div className='container-flex'>
            <section className='container-one'>
                <div className='col1 mb-5'>
                    <h3 className='mb-5'><span className='col-title'>Featured</span> This month</h3>
               { firstTwoItems.map((item)=>{
                    return(
                        <div className='row-flex'>
                           <div className='col'>
                           <img src={item.image} alt='travel' className='image-one' />
                           </div>
                           <div className='card-text'>
                           <span className='category'>{item.category}</span>
                           <h1 className='m-2 title'>{item.title}</h1>
                           <ul className='list-unstyled d-flex flex-row gap-3 items'>
                            <li><img src={item.authorPicture} alt='authors phot'  className='iamge-round'/></li>
                            <li className='text-nowrap'>{item.date}</li>
                            <li className='text-nowrap'>{item.time}</li>
                           </ul>
                           <p className='w-76'>{item.desc}</p>
                           </div>
                        </div>
                    )
                })}
                </div>
                <div className='col2'></div>
                <div className='col3'>
                <h3 className='mb-5'><span className='col-title'>popular</span> Posted</h3>
               {firstfourItems.map((item)=>{
                    return(
                        <div className='row-flex2 p-16'>
                           <div className='cart-image'>
                           <img src={item.image} alt='travel' className='image-two' />
                           </div>
                           <div className='card-text2'>
                           <span className='category'>{item.category}</span>
                           <h5 className='title'>{item.title}</h5>
                           <ul className='list-unstyled d-flex flex-row gap-3 items'>
                            <li><img src={item.authorPicture} alt='authors phot' className='iamge-round'/></li>
                            <li className='text-nowrap'>{item.date}</li>
                            <li className='text-nowrap'>{item.time}</li>
                           </ul>
                           </div>
                        </div>
                    )
                })} 

                </div>
            </section>

            <section className='container-two'>
                
            </section>


        </div>
    )}

    export default Home;