import React from "react"
import group1 from "../images/group1.svg"
import group2 from "../images/group2.svg"
import group3 from "../images/group3.svg"
import group4 from "../images/group4.svg"

const FAQ = () => {
  return (
    <div className="main-faq">
      <div class="custom-accordions">
        <div class="accordion">
          <input type="checkbox" id="chck1" />
          <label class="tab-label" for="chck1">
            <div>
              <h3>01</h3>
              <h2>UnderStanding your objectives and your needs</h2>
            </div>
            <div class="acc-icon">
              <img src={group1} />
            </div>
          </label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            reiciendis!
          </div>
        </div>
        <div class="accordion">
          <input type="checkbox" id="chck2" />
          <label class="tab-label" for="chck2">
            <div>
              <h3>02</h3>
              <h2>Developing Recommended strategy</h2>
            </div>
            <div class="acc-icon">
              <img src={group2} />
            </div>
          </label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div class="accordion">
          <input type="checkbox" id="chck3" />
          <label class="tab-label" for="chck3">
            <div>
              <h3>03</h3>
              <h2>Points of Interest</h2>
            </div>
            <div class="acc-icon">
              <img src={group3} />
            </div>
          </label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
