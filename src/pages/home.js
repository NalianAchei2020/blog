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
            <div className='main-container'>
                <div className='container-card'>
                    <div className='col1'>
                        <h1><span>Featured</span> This month</h1>
                    {firstTwoItems.map((item, key)=>{
                        return(
                            <a href='/'>
                            <div key={key} className='main-section'>
                                <div>
                                <img src={item.image} alt='photo'  />    
                                </div>
                                <div className='text-sec'>
                                <div>
                                    <span className='category'>{item.category}</span>
                                </div>
                                <div>
                                    <h1>{item.title}</h1>
                                </div>
                                <div className='info'>
                                    <span>
                                     <img className='author-pic' src={item.authorPicture} alt='photo' />   
                                    </span>
                                    <span>{item.authorName}</span>
                                    <span>{item.date}</span>
                                    <span>{item.time}</span>
                                </div>
                                <div>
                                    <p>{item.desc}</p>
                                </div>
                                </div>
                            </div>
                            </a>
                        )
                    })}
                    </div>
                    <div className='divider'></div>
                    <div className='col2'>
                        <h3><span>popular</span> Posted</h3>
                        <div className='wrapper1'>
                        {firstfourItems.map((item, key)=>{
                            return(
                                <div className='main-section2'>
                                <a href='/'>
                                <div  key={key} className='main-flex'>
                                <div>
                                <img src={item.image}  alt='photo' />  
                                </div>

                                <div className='text-sec2'>
                                <div>
                                    <span className='category'>{item.category}</span>
                                </div>
                                <div>
                                    <h5>{item.title}</h5>
                                </div>
                                <div className='info'>
                                <span> <img className='author-pic'src={item.authorPicture} alt='photo' /></span>
                                    <span>{item.authorName}</span>
                                    <span>{item.time}. To Read</span>
                                </div>  
                                </div>
                               </div>
                               </a>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>

        <div className='main-container2'>
        <div className='container-card2'>
            <div className='col01'>
                <h3><span>Recently</span> Posted</h3>
                <div className='wrapper'>
                        {Data.map((item, key)=>{
                            return(
                                <div key={key}  className='sub-col1'>
                                    <a href='/javascri'>
                                    <img src={item.image} alt='photo' />    
                                    <div className='text-sec'>
                                    <div>
                                        <span  className='category'>{item.category}</span>
                                    </div>
                                    <div>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className='info'>
                                    <span><img className='author-pic' src={item.authorPicture} alt='photo' /></span>
                                    <span>{item.authorName}</span>
                                    <span>{item.date}</span>
                                    <span>{item.time}</span>
                                    </div>
                                    <div><p className='cat'>{item.desc}</p></div>    
                                    </div>
                                    </a>
                                
                                </div>
                            )
                        })}
                        </div>

                       <div className='container number-slider'>
                      <button><a href='/prev'>Prev</a></button>
                      <button><a href='/'>1</a></button>
                      <button><a href='/'>2</a></button>
                      <button><a href='/'>3</a></button>
                      <button className='active'><a href='/next'>Next</a></button>
                     </div>
                        
            </div>

            <div className='col02'>
                <div className='sub-col1'>
                    <h3><span>top </span>authors</h3>
                    {authorData.map((item, key)=>{
                        return(
                            <div key={key} className='sub-col01'>
                                <div>
                               <img src={item.image} alt='photo' />    
                                </div>
                                <div className='sub-col03'>
                               <div>
                                <p className='name'>{item.name}</p>
                               </div>
                               <div><p className='prof'>{item.profession}</p></div>
                               <div className='sub-col02'>
                                <img src={item.facebook} alt='photo' />
                                <img src={item.instagram} alt='photo' />
                                <img src={item.twiiter} alt='photo' />
                               </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='sub-col2'>
                <span className='AD'>Ad</span>
                    <div>want to travel sikkim by car?</div>
                    <p>Did you come here for something in particular
                     or just general Riker-bashing? And blowing into</p>
                    <button className="btn-info"><a href='#btn'>Visit Us</a></button>
                </div>
                <div className='sub-col3'>
                    <h3><span>Categories</span></h3>
                    <div>
                        <div className='flex'>
                            <span><h6>lifestyle</h6></span>
                            <span><h6>09</h6></span>
                        </div>
                        <hr/>
                        <div className='flex'>
                            <span><h6>Travel</h6></span>
                            <span><h6>05</h6></span>
                        </div>
                        <hr/>
                        <div className='flex'>
                            <span><h6>Food</h6></span>
                            <span><h6>09</h6></span>
                        </div>
                        <hr/>
                        <div className='flex'>
                            <span><h6>Healthcare</h6></span>
                            <span><h6>09</h6></span>
                        </div>
                        <hr/>
                        <div className='flex'>
                            <span><h6>Technology</h6></span>
                            <span><h6>09</h6></span>
                        </div>
                    </div>
                </div>
                <div className='sub-col4'>
                    <h3><span>Today’s</span> update</h3>
                    <div className='flex-item'>
                        <div>
                            <h2>14</h2>
                            <p>New posts</p>
                        </div>
                        <div>
                            <h2>480</h2>
                            <p>Total Visistors</p>
                        </div>
                        <div>
                            <h2>29</h2>
                            <p>New Subscribers</p>
                        </div>
                        <div>
                            <h2>138</h2>
                            <p>Blog Read</p>
                        </div>
                    </div>
                </div>
                <div className='sub-col5'>
                    <h3><span>Instagram</span> posts</h3>
                    <div className='flex'>
                        <div className='flex-item'>
                        <div className='flex-item'><img src='Images/insta3.jpeg'/></div>
                        </div>
                        <div className='flex-item'><img src='Images/insta.jpeg'/></div>
                        <div className='flex-item'><img src='Images/insta1.jpeg'/></div>
                        <div className='flex-item'><img src='Images/insta2.jpeg'/></div>
                        <div className='flex-item'><img src='Images/insta3.jpeg'/></div>
                        <div className='flex-item'><img src='Images/insta4.jpeg' /></div>
                        <div className='flex-item'><img src='Images/insta1.jpeg'/></div>
                        <div className='flex-item'><img src='Images/insta4.jpeg' /></div>
                        <div className='flex-item'><img src='Images/insta1.jpeg' /></div>
                    </div>
                </div>
                <div className='sub-col6'>
                <h3><span>search</span> with tags</h3>
                <div className='flex'>
                    <div><a href='/travel'>Travel</a></div>
                    <div><a href='/travel'>Lifestyle</a></div>
                    <div><a href='/travel'>Fashion</a></div>
                    <div className='active'><a href='/travel'>Technology</a></div>
                    <div><a href='/travel'>Business</a></div>
                    <div><a href='/travel'>Design</a></div>
                    <div><a href='/travel'>Health</a></div>
                    <div><a href='/travel'>Food</a></div>
                    <div><a href='/travel'>Art</a></div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Home;
