import { useEffect, useState } from "react";
import "../styles/MainBody.css";

const MainBody = () => {

  const [pageviews, setPageviews] = useState("100K");
  const [price, setPrice] = useState(16);
  const [year, setYear] = useState(false);
  console.log(year);

  const handleStep = () => {
    
    if (year == false) {
      if (price < 16) {
        return 4
      } else {
        return 8
      }
    } else {
      if (price < 12) {
        return 3
      } else {
        return 6
      }
    }
  }

  useEffect(() => {
  
    if (price == 6) {
      setPageviews("10K")
    } else if (price == 8){
      setPageviews("10K")
    } else if (price == 9) {
      setPageviews("50K")
    } else if (price == 12) {
      if (year == false) {
        setPageviews("50K")
      } else {
        setPageviews("100K")
      }
    } else if (price == 16) {
      setPageviews("100K")
    } else if (price == 18) {
      setPageviews("500K")
    } else if (price == 24) {
      setPageviews("500K")
    } else if (price == 32) {
      setPageviews("1M")
    }
  }, [price, pageviews])

  
  return (
    <div>
      <div className="top">
        <p className="pageview">{pageviews}  Pageviews</p>
        <p><span className="precio">${price}.00</span> /month</p>
      </div>
      <div>
        <input 
          className="slider"
          type="range" 
          min={year == false ? "8" : "6"} 
          max={year == false ? "32" : "24"} 
          step={handleStep()} 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="bottom">
        <p className="left">Monthly Billing</p>
        <div className="boton1">
          <input 
            id="btn-switch"
            className="discount"
            onChange={() => {
              setYear((prev) => !prev)
            }} 
            type="checkbox"
          />
          <label for="btn-switch" className="lbl-switch"></label>
        </div>
        <p className="right">Yearly Billing</p>
        <p className="rebaja">25% discount</p>
      </div>
    </div>
  )
}

export default MainBody;