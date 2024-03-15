import { Fragment } from 'react'
export default function Home() {
    return (
        <Fragment>

            <section>
                <div className="video-container">
                    <video autoPlay loop muted>
                        <source src="img/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="content first-head">
                    <h1>Rockinghamlive is your Destination for Business and Leisure</h1>
                    <p>Browse from more than 1,000 listings</p>
                    <div className="columns" id="search-box">
                        <form id="search-content">
                            <div className="column is-half">
                                <label className="label-bar1" htmlFor="keyword">Keyword</label>
                                <div>
                                    <input className="keyword-input" type="text" name="keyword" placeholder="Search For..." />
                                </div>
                            </div>
                            <div className="column is-half">
                                <label className="label-bar2" htmlFor="location">Location</label>
                                <div>
                                    <input className="keyword-input" type="text" name="location" placeholder="Located In" />
                                </div>
                            </div>
                            <div className="column is-half">
                                <label className="label-bar3" htmlFor="category">Category</label>
                                <div>
                                    <select name="category" className="keyword-input" id="category-select">
                                        <option className="category-optn" disabled>In Category</option>
                                        <option className="category-optn">In Category</option>
                                        <option value="Electronics" className="category-optn">Electronics</option>
                                        <option value="Photography" className="category-optn">Photography</option>
                                        <option value="In Real Estate" className="category-optn">Real Estate</option>
                                        <option value="Services" className="category-optn">Services</option>
                                        <option value="Automotive" className="category-optn">Automotive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="column is-half">
                                <input id="input-btn" className="button is-info" type="submit" value="SEARCH" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="card-container">
                    <div className="card" id="card-reviews">
                        <div className="card-image" id="card-img">
                            <h2 className="card-header-title is-centered">
                                Business Of the Month
                            </h2>
                            <figure>
                                <img style={{ borderRadius: '50px 50px 0 0' }}
                                    src="https://rockinghamlive.com.au/wp-content/uploads/2023/02/business-of-the-month-1.jpg"
                                    alt="Placeholder image" />
                            </figure>
                            <div className="card-content">
                                <h4>Business Of the Month</h4><br />
                                <p>Focusing on businesses which have performed exceptionally well amongst the community in
                                    various platforms, for the betterment of</p>
                                <br /><br /><br /><br />
                                <a href="#">Read more <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-reviews">
                        <div className="card-image" id="card-img">
                            <h2 className="card-header-title is-centered">
                                Outstanding Person
                            </h2>
                            <figure>
                                <img style={{ borderRadius: '50px 50px 0 0' }}
                                    src="https://rockinghamlive.com.au/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-07-at-19.37.17-1200x800.jpg"
                                    alt="Placeholder image" />
                            </figure>
                            <div className="card-content">
                                <h4>Gillian Peebles</h4><br />
                                <b>
                                    <p style={{ color: 'black' }}>Gillian Kay Peebles</p>
                                </b>
                                <p>The purpose of life, for outstanding people, is always about service. A
                                    Personnel who have stood</p>
                                <br /><br /><br /><br />
                                <a href="#">Read more <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-reviews">
                        <div className="card-image" id="card-img">
                            <h2 className="card-header-title is-centered">
                                Local Hero
                            </h2>
                            <figure>
                                <img style={{ borderRadius: '50px 50px 0 0' }} id="local-hero-img"
                                    src="https://rockinghamlive.com.au/wp-content/uploads/2023/09/erin-osborn-8-1200x847.jpg"
                                    alt="Placeholder image" />
                            </figure>
                            <div className="card-content">
                                <h4 style={{ fontFamily: 'noto sans' }}>Erin Osborn: Empowering Change Through Rockingham Beach
                                    Clean Ups</h4><br />
                                <p>A remarkable story of environmental advocacy unfolds through the efforts of Erin Osborn.</p>
                                <br /><br />
                                <a href="#">Read more <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div id="slider">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-covered">
                                <img src="img/ppic1.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-covered">
                                <img src="img/ppic1.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-covered">
                                <img src="img/ppic1.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="pop-cat-sec">
                <div className="popular-head">
                    <span>
                        Popular Categories
                    </span>
                    <p>Select one of the popular categories and start browsing</p>
                </div>
                <div className="popular-cat">
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                </div>
                <div className="popular-cat">
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                    <div className="popular-cat-box">
                        <a href="">
                            <img src="icons/1.png" alt="" />
                            <h4>Electronics</h4>
                            <p>2 ads</p>
                        </a>
                    </div>
                </div>
                <div id="cat-btn">
                    <button className="button is-rounded">All Categories</button>
                </div>
            </section>
            <section>
                <div className="popular-head">
                    <span>
                        Featured Ads
                    </span>
                </div>
            </section>
            <section>
                <div id="ad-contents">
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ad-contents">
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card full-ad" style={{ width: '18rem' }}>
                        <img src="img/ad.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" id="ad-box">
                            <div className="card-text">
                                <br />
                                <ul className="custom-list">
                                    <li>Rockingam</li>
                                </ul>
                                <br />
                                <p className="ad-owner">Rentals Rockingam</p>
                                <div className="contact-ad">
                                    <div>
                                        <p className="ad-no">0418 946 993</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-retweet fa-lg" style={{ color: '#74C0FC' }}></i>
                                        <i className="fa-regular fa-heart fa-lg" style={{ color: '#74C0FC' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="event-sec">
                    <span>
                        Events
                    </span>
                    <br /><br />
                    <p>Select one of the popular categories and start browsing</p>
                    <p style={{ fontWeight: 400 }}>Well explore us to discover all the happening fun filled exciting events in
                        your city and outer suburbs</p>
                </div>

                <section>
                    <div className="card-container">
                        <div className="card" id="event-reviews">
                            <div className="card-image" id="card-img">
                                <figure>
                                    <img style={{ borderRadius: '50px 50px 0 0' }}
                                        src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                        alt="Placeholder image" />
                                </figure>
                                <div className="card-content event-cards-info">
                                    <h4> Dismantling the Land Exhibition</h4><br />
                                    <p>Leonie Mansbridge’s exhibition, Dismantling the Land, promises to be a thought-provoking
                                        and visually stunning exploration of cultural identity.</p>
                                    <br />
                                    <a href="#">Read more</a> <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card" id="event-reviews">
                            <div className="card-image" id="card-img">
                                <figure>
                                    <img style={{ borderRadius: '50px 50px 0 0' }}
                                        src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                        alt="Placeholder image" />
                                </figure>
                                <div className="card-content event-cards-info">
                                    <h4> Dismantling the Land Exhibition</h4><br />
                                    <p>Leonie Mansbridge’s exhibition, Dismantling the Land, promises to be a thought-provoking
                                        and visually stunning exploration of cultural identity.</p>
                                    <br />
                                    <a href="#">Read more</a> <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card" id="event-reviews">
                            <div className="card-image" id="card-img">
                                <figure>
                                    <img style={{ borderRadius: '50px 50px 0 0' }}
                                        src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                        alt="Placeholder image" />
                                </figure>
                                <div className="card-content event-cards-info">
                                    <h4> Dismantling the Land Exhibition</h4><br />
                                    <p>Leonie Mansbridge’s exhibition, Dismantling the Land, promises to be a thought-provoking
                                        and visually stunning exploration of cultural identity.</p>
                                    <br />
                                    <a href="#">Read more</a> <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-container">
                        <div className="card" id="event-reviews">
                            <div className="card-image" id="card-img">
                                <figure>
                                    <img style={{ borderRadius: '50px 50px 0 0' }}
                                        src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                        alt="Placeholder image" />
                                </figure>
                                <div className="card-content event-cards-info">
                                    <h4> Dismantling the Land Exhibition</h4><br />
                                    <p>Leonie Mansbridge’s exhibition, Dismantling the Land, promises to be a thought-provoking
                                        and visually stunning exploration of cultural identity.</p>
                                    <br />
                                    <a href="#">Read more</a> <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card" id="event-reviews">
                            <div className="card-image" id="card-img">
                                <figure>
                                    <img style={{ borderRadius: '50px 50px 0 0' }}
                                        src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                        alt="Placeholder image" />
                                </figure>
                                <div className="card-content event-cards-info">
                                    <h4> Dismantling the Land Exhibition</h4><br />
                                    <p>Leonie Mansbridge’s exhibition, Dismantling the Land, promises to be a thought-provoking
                                        and visually stunning exploration of cultural identity.</p>
                                    <br />
                                    <a href="#">Read more</a> <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card" id="event-reviews">
                            <div className="card-image" id="card-img">
                                <figure>
                                    <img style={{ borderRadius: '50px 50px 0 0' }}
                                        src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                        alt="Placeholder image" />
                                </figure>
                                <div className="card-content event-cards-info">
                                    <h4> Dismantling the Land Exhibition</h4><br />
                                    <p>Leonie Mansbridge’s exhibition, Dismantling the Land, promises to be a thought-provoking
                                        and visually stunning exploration of cultural identity.</p>
                                    <br />
                                    <a href="#">Read more</a> <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="cat-btn">
                        <button className="button is-rounded">More Events</button>
                    </div>
                </section>
            </section>
            <section>
                <div className="community-wall">
                    <div className="cw-text">
                        <h2>Community Wall</h2>
                        <p>As humans we always have thoughts and ideas running in our heads all the time.. So why not put them
                            down on paper with a touch of creativity and a sense of humor. At Community wall we have dedicated
                            space to all you wonderful people to share your creative side with the world. Be it a verse, story,
                            photography, meme's, joke of the day or anything you feel adds on to this wall. Share with us today.
                        </p>
                    </div>
                    <div className="cw-content-cards">
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4> Underwater Photography Competition - Entries</h4><br />
                                        <p>The breathtaking views in deep water captured by competitors form Underwater
                                            Photography Competition.</p>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4> Underwater Photography Competition - Entries</h4><br />
                                        <p>The breathtaking views in deep water captured by competitors form Underwater
                                            Photography Competition.</p>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4> Underwater Photography Competition - Entries</h4><br />
                                        <p>The breathtaking views in deep water captured by competitors form Underwater
                                            Photography Competition.</p>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4> Underwater Photography Competition - Entries</h4><br />
                                        <p>The breathtaking views in deep water captured by competitors form Underwater
                                            Photography Competition.</p>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cw-btns">
                        <div id="cat-btn">
                            <button className="button is-rounded">More Community Posts</button>
                        </div>
                        <div id="cat-btn">
                            <button className="button is-rounded">Add Posts Yourself</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="popular-head best">
                    <span>
                        5 Best Things
                    </span>
                </div>
                <div className="card-container">
                    <div className="card" id="card-reviews">
                        <div className="card-image" id="card-img">
                            <figure>
                                <img style={{ borderRadius: '50px 50px 0 0' }}
                                    src="https://rockinghamlive.com.au/wp-content/uploads/2024/01/5-Best-Shopping-Centers-in-Rockingham-1200x774.webp"
                                    alt="Placeholder image" />
                            </figure>
                            <div className="card-content">
                                <h4 style={{ fontWeight: 400, fontFamily: 'noto sans' }}>Into the Wild: Top 5 Wildlife
                                    Destinations in Rockingham</h4><br />
                                <p style={{ fontWeight: 400, fontFamily: 'poppins', fontSize: '16px', color: 'rgb(122, 122, 122)' }}> We delve into the heart of Rockingham’s diverse ecosystems, revealing
                                    the reasons why
                                    these destinations are a must-visit for anyone.
                                </p>
                                <br /><br />
                                <a href="#" style={{ textDecoration: 'none', color: 'rgb(18, 105, 211)', fontWeight: 500, fontSize: '15px', fontFamily: 'poppins' }}>Read more <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-reviews">
                        <div className="card-image" id="card-img">
                            <figure>
                                <img style={{ borderRadius: '50px 50px 0 0' }}
                                    src="https://rockinghamlive.com.au/wp-content/uploads/2024/01/5-Best-Shopping-Centers-in-Rockingham-1200x774.webp"
                                    alt="Placeholder image" />
                            </figure>
                            <div className="card-content">
                                <h4 style={{ fontWeight: 400, fontFamily: 'noto sans' }}>Into the Wild: Top 5 Wildlife
                                    Destinations in Rockingham</h4><br />
                                <p style={{ fontWeight: 400, fontFamily: 'poppins', fontSize: '16px', color: 'rgb(122, 122, 122)' }}> We delve into the heart of Rockingham’s diverse ecosystems, revealing
                                    the reasons why
                                    these destinations are a must-visit for anyone.
                                </p>
                                <br /><br />
                                <a href="#" style={{ textDecoration: 'none', color: 'rgb(18, 105, 211)', fontWeight: 500, fontSize: '15px', fontFamily: 'poppins' }}>Read more <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-reviews">
                        <div className="card-image" id="card-img">
                            <figure>
                                <img style={{ borderRadius: '50px 50px 0 0' }}
                                    src="https://rockinghamlive.com.au/wp-content/uploads/2024/01/5-Best-Shopping-Centers-in-Rockingham-1200x774.webp"
                                    alt="Placeholder image" />
                            </figure>
                            <div className="card-content">
                                <h4 style={{ fontWeight: 400, fontFamily: 'noto sans' }}>Into the Wild: Top 5 Wildlife
                                    Destinations in Rockingham</h4><br />
                                <p style={{ fontWeight: 400, fontFamily: 'poppins', fontSize: '16px', color: 'rgb(122, 122, 122)' }}> We delve into the heart of Rockingham’s diverse ecosystems, revealing
                                    the reasons why
                                    these destinations are a must-visit for anyone.
                                </p>
                                <br /><br />
                                <a href="#" style={{ textDecoration: 'none', color: 'rgb(18, 105, 211)', fontWeight: 500, fontSize: '15px', fontFamily: 'poppins' }}>Read more <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="suburbs">
                    <div className="suburbs-head">
                        <h2>Explore Rockingham Suburbs</h2>
                    </div>
                    <div id="slider-cards">
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0', width: '290px', height: '220px' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4 style={{ fontWeight: 400, fontFamily: 'poppins', fontSize: '20px' }}> Singleton</h4>
                                        <br />
                                        <ul className="li-parts">
                                            <li>Size: 3.6km</li>
                                            <li style={{ marginBottom: '5px' }}>Population: 5,682</li>
                                            <li style={{ marginBottom: '8px' }}>Post code: 6169</li>
                                        </ul>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0', width: '290px', height: '220px' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4 style={{ fontWeight: 400, fontFamily: 'poppins', fontSize: '20px' }}> Singleton</h4>
                                        <br />
                                        <ul className="li-parts">
                                            <li>Size: 3.6km</li>
                                            <li style={{ marginBottom: '5px' }}>Population: 5,682</li>
                                            <li style={{ marginBottom: '8px' }}>Post code: 6169</li>
                                        </ul>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container cw-cards">
                            <div className="card" id="cw-reviews">
                                <div className="card-image" id="card-img">
                                    <figure className="cw-img">
                                        <img style={{ borderRadius: '50px 50px 0 0', width: '290px', height: '220px' }}
                                            src="https://rockinghamlive.com.au/wp-content/uploads/2024/03/Connect-and-Create-SBY-750x460-1.jpg"
                                            alt="Placeholder image" />
                                    </figure>
                                    <div className="card-content event-cards-info cw-info">
                                        <h4 style={{ fontWeight: 400, fontFamily: 'poppins', fontSize: '20px' }}> Singleton</h4>
                                        <br />
                                        <ul className="li-parts">
                                            <li>Size: 3.6km</li>
                                            <li style={{ marginBottom: '5px' }}>Population: 5,682</li>
                                            <li style={{ marginBottom: '8px' }}>Post code: 6169</li>
                                        </ul>
                                        <br />
                                        <a href="#"><span>Read more</span> <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className="columns cols">
                    <div className="column cols-1">
                        <h3>I am a buyer!</h3>
                        <p>Benefit with creating account which will allow you to store favorite ads, participate in auctions, have chat with the seller, review the seller / be reviewed and after a while if you decide to sell something it will be ready for it.</p>
                        <div id="cat-btn">
                            <button className="button is-rounded">Create Account & Buy</button>
                        </div>
                    </div>
                    <div className="column cols-2">
                        <h3>I am a seller!</h3>
                        <p>In order to list your product/services and start earning you need to create your account. Account has all the tools you need and multiple payment gateways will make it more convenient for you to purchase subscription / ads.</p>
                        <div id="cat-btn">
                            <button className="button is-rounded">Create Account & Sell</button>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
