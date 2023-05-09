import React from "react";
import "../CSS/LandingPage.css";
import Navbar from "../Components/Navbar";
import { BoarderGreenBtn, GreenBtn } from "../Components/Btns";
import Heroo from "../Images/heroo.png";
import Hero5 from "../Images/hero5.png";
import x1 from "../Images/x1.png";
import x2 from "../Images/x2.png";
import x3 from "../Images/x3.png";
import pallet1 from "../Images/pallet1.png";
import pallet2 from "../Images/pallet2.png";
import pallet3 from "../Images/pallet3.png";
import Card1 from "../Components/Card1";
import Card1list from "../card1list";
import ListingCard from "../Components/ListingCard";
import Footer from "../Components/Footer";

function createCard1(card) {
  return <Card1 img={card.img} head={card.head} text={card.text} />;
}

function LandingPage() {
  return (
    <div>
      <Navbar />
      {/* HERO SECTION */}
      <div className="Hero-section">
        <div className="Hero-section-a">
          <div className="Hero-section-h1">
            <h1>
              A Digital Marketplace that Enables the
              <span> Buying & Selling</span> of pallets globally.
            </h1>
          </div>
          <div className="Hero-section-p">
            <p>
              Our online marketplace simplifies pallet trading worldwide.
              Browse, compare, and transact securely in a few clicks. Join us in
              revolutionizing the industry by saving time and money for all.
            </p>
          </div>
          <div className="Hero-section-btns">
            <a href="#">
              <GreenBtn text="Sell" />
            </a>
            <a>
              <BoarderGreenBtn text="Buy" />
            </a>
          </div>
          <div className="Hero-section-imgs">
            <img src={Heroo} />
          </div>
          <div className="trusted">
            <p>Trusted by 5,000+ Customers</p>
          </div>
        </div>
        <div className="Hero-section-b">
          <div>
            <img src={Hero5}></img>
          </div>
        </div>
      </div>

      <div className="Section1">
        <div className="Section1a">
          <h1>Our Benefits</h1>
          <p>
            Discover the benefits of our online marketplace for <br /> buying
            and selling pallets.
          </p>
        </div>
        <div className="Section1b">{Card1list.map(createCard1)}</div>
      </div>

      <div className="Section2">
        <div className="Section1a">
          <h1>How it works</h1>
          <p>
            By using our marketplace, you can save time, access a wide selection
            of pallets, and enjoy a reliable and efficient way to buy and sell
            pallets.
          </p>
        </div>
        <div className="Section2b">
          <div className="card2 card2a">
            <div classname="card2-top-div">
              <img src={x1} />
            </div>
            <div>
              <h1>Sign Up</h1>
              <p>
                First, you'll need to sign up for an account on our website.
                This is a quick and easy process that only takes a few minutes.
              </p>
              <GreenBtn text="Sign up" />
            </div>
          </div>
          <div className="card2 card2b">
            <div classname="card2-top-div">
              <img src={x2} />
            </div>
            <div>
              <h1>Sign Up</h1>
              <p>
                First, you'll need to sign up for an account on our website.
                This is a quick and easy process that only takes a few minutes.
              </p>
              <GreenBtn text="Browse" />
            </div>
          </div>
          <div className="card2 card2c">
            <div classname="card2-top-div">
              <img src={x3} />
            </div>
            <div>
              <h1>Sign Up</h1>
              <p>
                First, you'll need to sign up for an account on our website.
                This is a quick and easy process that only takes a few minutes.
              </p>
              <GreenBtn text="Start Buying" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="Section3">
        <h1>Discover listings around you</h1>
        <div className="listdiv">
          <ListingCard
            img={pallet1}
            head="Brand new wood pallets"
            price="12.00"
            location="Sweden"
            material="Wood"
            quantity="100"
            condition="New"
            note="These pallets are made of high-quality wood and have never been used. They are ideal for transporting goods or storing items. Please contact us if you have any questions or would like to place an order."
            rating="4.9"
            star="⭐⭐⭐⭐"
          />
          <ListingCard
            img={pallet2}
            head="Brand new wood pallets"
            price="12.00"
            location="Sweden"
            material="Wood"
            quantity="100"
            condition="New"
            note="These pallets are made of high-quality wood and have never been used. They are ideal for transporting goods or storing items. Please contact us if you have any questions or would like to place an order."
            rating="4.9"
            star="⭐⭐⭐⭐"
          />
          <ListingCard
            img={pallet3}
            head="Brand new wood pallets"
            price="12.00"
            location="Sweden"
            material="Wood"
            quantity="100"
            condition="New"
            note="These pallets are made of high-quality wood and have never been used. They are ideal for transporting goods or storing items. Please contact us if you have any questions or would like to place an order."
            rating="4.9"
            star="⭐⭐⭐⭐"
          />
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
