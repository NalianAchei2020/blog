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
               <section className='col01'>
                <h3 className='mb-5'><span className='col-title'>Recently</span> Posted</h3>
                {Data.map((item)=>{
                    return(
                       <section className='mb-5 row-flex01'>
                        <section>
                            <img src={item.image} alt='travel' className='image-one'/>
                            <div className='card-text'>
                           <span className='category'>{item.category}</span>
                           <h1 className='mt-2 mb-2 title'>{item.title}</h1>
                           <ul className='list-unstyled d-flex flex-row gap-3 items'>
                            <li><img src={item.authorPicture} alt='authors phot' className='iamge-round'/></li>
                            <li className='text-nowrap'>{item.date}</li>
                            <li className='text-nowrap'>{item.time}</li>
                           </ul>
                           <p className='w-76'>{item.desc}</p>
                           </div>
                        </section>
                       </section>
                    )
                })}
                </section> 
               <section className='col02'>
                <section className='section1'>
                    <h3 className='mb-5'><span className='col-title'>Top</span> Authors</h3>
                    {authorData.map((item)=>{
                        return(
                            <section className='mt-5 author-flex'>
                            <img src={item.image} alt='author-pic' className='author-image' />
                            <div className='author-text'>
                                <span className='author-name'>{item.name}</span>
                                <p className='mt-2 mb-2'>{item.profession}</p>
                                <ul className='list-unstyled d-flex flex-row gap-2'>
                                    <li className='list-item active'>
                                    <a href={item.facebook}> <i className="fa fa-facebook-square item" aria-hidden="true"></i></a>
                                    </li>
                                    <li  className='list-item'>
                                     <a href={item.twiiter}>
                                        <i className="fa fa-twitter-square item" aria-hidden="true"></i>
                                        </a>   
                                    </li>
                                    <li  className='list-item'>
                                    <a href={item.instagram}>
                                        <i className="fa fa-instagram item" aria-hidden="true"></i>
                                        </a>  
                                    </li>
                                </ul>
                            </div>
                            </section>
                        )
                    })}
                </section>
                <section className='section2'>
                    <span>Ad</span>
                    <div>
                        <h5>
                        Want to travel sikkim by car?
                        </h5>
                        <p>
                        Did you come here for something 
                        in particular or just general 
                        Riker-bashing? And blowing into
                        </p>
                        <button>Visit Us</button>
                    </div>
                </section>
                <section className='section3'>
                  <h3 className='mb-5'>
                    <span className='col-title'>Categories</span>
                    </h3> 
                    <ul className='list-unstyled d-flex flex-row
                    justify-content-between'>
                      <li><h6>Lifestyle</h6></li>  
                      <li>09</li>
                    </ul> 
                    <hr/>
                    <ul className='list-unstyled d-flex flex-row
                    justify-content-between'>
                      <li><h6>Lifestyle</h6></li>  
                      <li>05</li>
                    </ul> 
                    <hr/>
                    <ul className='list-unstyled d-flex flex-row
                    justify-content-between'>
                      <li><h6>Food</h6></li>  
                      <li>09</li>
                    </ul> 
                    <hr/>
                    <ul className='list-unstyled d-flex flex-row
                    justify-content-between'>
                      <li><h6>Healthcare</h6></li>  
                      <li>10</li>
                    </ul> 
                    <hr/>
                    <ul className='list-unstyled d-flex flex-row
                    justify-content-between'>
                      <li><h6>Technology</h6></li>  
                      <li>03</li>
                    </ul> 
                    <hr/>
                </section>
                <section className='section4'>
                   <h3 className='mb-5'><span className='col-title'>Today’s</span>update</h3>
                   <section className='boxes'>
                   <div className='box'>
                    <h2>14</h2>
                    <span>New Post</span>
                    </div> 
                   <div className='box'>
                    <h2>480</h2>
                    <span>Total Visitors</span>
                    </div> 
                   <div className='box'>
                    <h2>29</h2>
                    <span>New subscribers</span>
                    </div> 
                   <div className='box'>
                    <h2>138</h2>
                    <span>Blog Read</span>
                    </div> 
                    </section>
                </section>
                <section className='section5'>
                  <h3 className='mb-5'><span className='col-title'>Instagram </span>posts</h3> 
                  <section className='instagram-post'>
                    <a href='instagram'>
                        <img src='Images/insta3.jpeg' alt='instagram-post' width={113} height={114}/>
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta.jpeg' alt='instagram-post' width={113} height={114} />
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta1.jpeg' alt='instagram-post' width={113} height={114} />
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta2.jpeg' alt='instagram-post'  width={113} height={114} />
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta3.jpeg' alt='instagram-post'  width={113} height={114} />
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta4.jpeg' alt='instagram-post'  width={113} height={114}/>
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta1.jpeg' alt='instagram-post'  width={113} height={114}/>
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta4.jpeg' alt='instagram-post'  width={113} height={114}/>
                    </a>
                    <a href='instagram'>
                        <img src='Images/insta1.jpeg' alt='instagram-post'  width={113} height={114}/>
                    </a>
                    </section> 
                </section>
                <section className='section6'>
                 <h3 className='mb-5'><span className='col-title'>Search</span> with tags</h3>
                </section>
               </section>
            </section>


        </div>
    )}

    export default Home;