import React, { useContext, useState } from "react";

import { Store } from "./Store";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Header/Navbar";

function Hollywood() {
  const [data] = useContext(Store);
  const [article, setarticle] = useState(4);

  const handleloading = (e) => {
    if (article <= 11) setarticle(article + 4);
    else e.target.style.display = "none";
  };

  return (
    <>
      <Navbar />
      <div className="main-block">
        <div className="data-main-bock">
          <h2>Hollywood</h2>
          <hr className="hr-top" />
          {data
            .filter((data) => data.categories === "Hollywood")
            .map((item, index) => {
              return (
                <>
                  <div className="data-block" key={index}>
                    <NavLink
                      className="dynamic-links"
                      to={`/details/${item.id}`}
                    >
                      <div className="data-block-img-block">
                        <img
                          src={item.images}
                          alt="pic"
                          height={100}
                          width={150}
                        />
                      </div>
                      <div className="data-block-text">
                        <h3>{item.heading}</h3>
                        <p id="data-block-text-p">{item.description}</p>
                        <p>Travel {item.date}</p>
                      </div>
                    </NavLink>
                  </div>
                  <hr className="hr" />
                </>
              );
            })
            .slice(0, article)}
          <button className="load-more" onClick={handleloading}>
            ⬇ load more
          </button>
        </div>
        <div className="story-block">
          <h2>Top story</h2>
          <hr className="hr-top" />
          {data
            .filter((data) => data.story === "hollytop")
            .map((item, index) => {
              return (
                <>
                  <div className="data-block mainstory" key={index}>
                    <div className="story-inner-block">
                      <img id="story1-img" src={item.images} alt="pic" />
                      <div className="topstory">
                        <div className="data-block-text topstory-text">
                          <h3>{item.heading}</h3>
                          <p>Bollywood {item.date}</p>
                        </div>
                        <div className="div-num">{item.storynum}</div>
                      </div>
                    </div>
                  </div>
                  <hr className="hr" />
                </>
              );
            })}
          <div className="data-main-bock belowtop-main">
            {data
              .filter((data) => data.story === "hollybelowtop")
              .map((item, index) => {
                return (
                  <>
                    <div children="beloptop-main" key={index}>
                      <div className="belowtop-block">
                        <div className="data-block belowtop">
                          <img
                            id="belowtop-img"
                            src={item.images}
                            alt="pic"
                            height={100}
                            width={150}
                          />
                          <div className="data-block-text belowtop-text">
                            <h3>{item.heading}</h3>

                            <p>Bollywood {item.date}</p>
                          </div>
                        </div>
                        <div className="div-num">{item.storynum}</div>
                      </div>
                    </div>
                    <hr className="hr" />
                  </>
                );
              })}
          </div>
          <div className="ad">
            {data
              .filter((data) => data.type === "holly-ad")
              .map((item, index) => {
                return (
                  <>
                    <div className="ad-data" key={index}>
                      <img
                        src={item.adimg}
                        alt="pic"
                        height={100}
                        width={150}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hollywood;
