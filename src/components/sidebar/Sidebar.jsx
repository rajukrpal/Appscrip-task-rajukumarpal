import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Card from "../card/Card";
import { GetProducts } from "../../productApi/data";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 768);
  const [countProduct, setCountProduct] = useState([]);

  const handleResize = () => {
    setIsVisible(window.innerWidth > 768);
  };

  useEffect(() => {
    const GetProductItem = async () => {
      const countItem = await GetProducts();
      setCountProduct(countItem);
    };
    GetProductItem();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="px-10">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="py-10"
            style={{ display: "flex", gap: isVisible ? 30 : 10 }}
          >
            <p className="uppercase" style={{ fontWeight: 600 }}>
              {countProduct.length} Items
            </p>
            <button style={{ cursor: "pointer" }} onClick={toggleSidebar}>
              {isVisible ? (
                <span> &#11164; Hide Filter </span>
              ) : (
                <span> &#11166; Show Filter </span>
              )}
            </button>
          </div>
          <div>
            <select>
              <option className="uppercase" value="">
                RECOMMENDED
              </option>
              <option className="uppercase" value="">
                Newest first
              </option>
              <option className="uppercase" value="">
                Popular
              </option>
              <option className="uppercase" value="">
                Price: high to low
              </option>
              <option className="uppercase" value="">
                Price: low to high
              </option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {isVisible && (
          <div style={{ width: 250 }}>
            <div
              className="px-10 p-sideBar"
              style={{ display: "flex", gap: 10 }}
            >
              <input type="checkbox" />
              <h3 className="uppercase py-10" style={{ fontWeight: 600 }}>
                Customizable
              </h3>
            </div>
            <Accordion allowMultiple className="px-10 py-10">
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="IDEAL FOR"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                  <span style={{ fontWeight: 200, fontSize: 12 }}>
                    Unselect all
                  </span>
                  <div>
                    <ul style={{ listStyle: "none", fontWeight: 400 }}>
                      <li
                        style={{ gap: 10, display: "flex" }}
                        className="py-10"
                      >
                        <input type="checkbox" /> Men
                      </li>
                      <li
                        style={{ gap: 10, display: "flex" }}
                        className="py-10"
                      >
                        <input type="checkbox" />
                        Women
                      </li>
                      <li
                        style={{ gap: 10, display: "flex" }}
                        className="py-10"
                      >
                        <input type="checkbox" />
                        Baby & Kids
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="OCCASION"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="WORK"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="FABRIC"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="SEGMENT"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="SUITABLE FOR"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem
                className="py-10"
                initialEntered
                style={{ fontWeight: 600 }}
                header="PATTERN"
              >
                <div>
                  <h4
                    className="py-10"
                    style={{ fontWeight: 500, fontSize: 13 }}
                  >
                    ALL
                  </h4>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        )}
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
