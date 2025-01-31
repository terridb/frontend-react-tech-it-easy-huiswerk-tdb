import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getTotalTvsAvailable, {getTotalTvsPurchased, getTotalTvsSold} from "./helpers/calculateStock.js";
import {generateTvName, generateTvPrice, generateTvScreenSize} from "./helpers/tvDetails.js";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png";
import {sortCheapestFirst, sortMostSoldFirst, sortRefreshrate} from "./helpers/tvSorting.js";

function App() {
    // Deel 1 van de opdracht, vervangen & samengevoegd met deel 2
    // function sayButtonTitle(title) {
    //     console.log(title);
    // }

    return (
        <>
            <main>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
                <div className="sales-overview">
                    <div className="sales-block">
                        <p>Aantal verkochte producten</p>
                        <p className="counter-text">{getTotalTvsSold(inventory, bestSellingTv)}</p>
                    </div>
                    <div className="purchased-block">
                        <p>Aantal ingekochte producten</p>
                        <p className="counter-text">{getTotalTvsPurchased(inventory, bestSellingTv)}</p>
                    </div>
                    <div className="available-block">
                        <p>Aantal te verkopen producten</p>
                        <p className="counter-text">{getTotalTvsAvailable(getTotalTvsSold(inventory, bestSellingTv), getTotalTvsPurchased(inventory, bestSellingTv))}</p>
                    </div>
                </div>
                <h2>Best verkochte tv</h2>
                <div className="most-sold-block">
                    <div className="tv-image-wrapper">
                        <img className="tv-image" src={bestSellingTv.sourceImg} alt="Best verkochte tv"/>
                    </div>
                    <div className="tv-information">
                        <p>{generateTvName(bestSellingTv)}</p>
                        <p className="tv-price">{generateTvPrice(bestSellingTv)}</p>
                        <p className="tv-sizes">{generateTvScreenSize(bestSellingTv)}</p>
                        <div className="bestseller-usps">
                            <img className="usp-icon" src={checkIcon} alt="Check icon"/>
                            <p>wifi</p>
                            <img className="usp-icon" src={minusIcon} alt="Minus icon"/>
                            <p>speech</p>
                            <img className="usp-icon" src={checkIcon} alt="Check icon"/>
                            <p>hdr</p>
                            <img className="usp-icon" src={checkIcon} alt="Check icon"/>
                            <p>bluetooth</p>
                            <img className="usp-icon" src={minusIcon} alt="Minus icon"/>
                            <p>ambilight</p>
                        </div>
                    </div>
                </div>
                <h2>Alle tvs</h2>
                <div className="filter-buttons">
                    <button type="button" onClick={() => sortMostSoldFirst(inventory)}>
                        Meest verkocht eerst
                    </button>
                    <button type="button" onClick={() => sortCheapestFirst(inventory)}>
                        Goedkoopste eerst
                    </button>
                    <button type="button" onClick={() => sortRefreshrate(inventory)}>
                        Meest geschikt voor sport eerst
                    </button>
                </div>
                <ul>
                    {inventory.map((tv) => {
                        return <li key={tv.type}>{
                            <div className="tv-block">
                                <div className="tv-image-wrapper">
                                    <img className="tv-image" src={tv.sourceImg} alt="Afbeelding tv"/>
                                </div>
                                <div className="tv-information">
                                    <p>{generateTvName(tv)}</p>
                                    <p className="tv-price">{generateTvPrice(tv)}</p>
                                    <p className="tv-sizes">{generateTvScreenSize(tv)}</p>
                                    <div className="tv-usps">
                                        {tv.options.map((option) => {
                                            if (option.applicable === true) {
                                                return (
                                                    <div key={option.name} className="tv-usp">
                                                        <img className="usp-icon" src={checkIcon} alt="Check icon"/>
                                                        <p>{option.name}</p>
                                                    </div>
                                                )
                                            } else return (
                                                <div key={option.name} className="tv-usp">
                                                    <img className="usp-icon" src={minusIcon} alt="Minus icon"/>
                                                    <p>{option.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }</li>;
                    })}
                </ul>
            </main>
        </>
    )
}

export default App
