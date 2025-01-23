import './App.css';
import './constants/inventory.js';
import './helpers/totalTvsSold.js';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getTotalTvsSold from "./helpers/totalTvsSold.js";
import getTotalTvsPurchased from "./helpers/totalTvsPurchased.js";
import getTotalTvsAvailable from "./helpers/totalTvsAvailable.js";
import {generateTvName} from "./helpers/tvNameGenerator.js";
import {generateTvPrice} from "./helpers/tvPriceGenerator.js";
import {generateTvScreenSize} from "./helpers/tvScreenSizeGenerator.js";

function App() {
    const totalTvsSold = getTotalTvsSold(inventory, bestSellingTv);
    const totalTvsPurchased = getTotalTvsPurchased(inventory, bestSellingTv);
    const totalTvsAvailable = getTotalTvsAvailable(totalTvsSold, totalTvsPurchased);
    const bestSellingTvName = generateTvName(bestSellingTv);
    const bestSellingTvPrice = generateTvPrice(bestSellingTv);
    const bestSellingTvScreenSizes = generateTvScreenSize(bestSellingTv);
    return (
        <>
            <main>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
                <div className="sales-overview">
                    <div className="sales-block">
                        <p>Aantal verkochte producten</p>
                        <p className="counter-text">{totalTvsSold}</p>
                    </div>
                    <div className="purchased-block">
                        <p>Aantal ingekochte producten</p>
                        <p className="counter-text">{totalTvsPurchased}</p>
                    </div>
                    <div className="available-block">
                        <p>Aantal te verkopen producten</p>
                        <p className="counter-text">{totalTvsAvailable}</p>
                    </div>
                </div>
                <h2>Best verkochte tv</h2>
                <div className="most-sold-block">
                    <div className="bestseller-image-wrapper">
                        <img className="bestseller-image" src={bestSellingTv.sourceImg} alt="Best verkochte tv"/>
                    </div>
                    <div className="bestseller-information">
                        <p>{bestSellingTvName}</p>
                        <p className="bestseller-price">{bestSellingTvPrice}</p>
                        <p className="bestseller-sizes">{bestSellingTvScreenSizes}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
