import './App.css';
import './constants/inventory.js';
import './helpers/totalTvsSold.js';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getTotalTvsSold from "./helpers/totalTvsSold.js";
import getTotalTvsPurchased from "./helpers/totalTvsPurchased.js";
import getTotalTvsAvailable from "./helpers/totalTvsAvailable.js";

function App() {
    const totalTvsSold = getTotalTvsSold(inventory, bestSellingTv);
    const totalTvsPurchased = getTotalTvsPurchased(inventory, bestSellingTv);
    const totalTvsAvailable = getTotalTvsAvailable(totalTvsSold, totalTvsPurchased);
    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className="sales-block">
                <p>Aantal verkochte producten</p>
                <p>{totalTvsSold}</p>
            </div>
            <div className="purchased-block">
                <p>Aantal ingekochte producten</p>
                <p>{totalTvsPurchased}</p>
            </div>
            <div className="available-block">
                <p>Aantal te verkopen producten</p>
                <p>{totalTvsAvailable}</p>
            </div>
            <h2>Best verkochte tv</h2>

        </>
    )
}

export default App
