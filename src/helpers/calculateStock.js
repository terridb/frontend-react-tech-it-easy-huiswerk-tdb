export function getTotalTvsSold(getInventory, getBestsellingTv) {
    let total = 0;
    for (let i = 0; i < getInventory.length; i++) {
        total += getInventory[i].sold;
    }
    total += getBestsellingTv.sold;
    return total;
}

export function getTotalTvsPurchased(getInventory, getBestsellingTv) {
    let total = 0;
    for (let i = 0; i < getInventory.length; i++) {
        total += getInventory[i].originalStock;
    }
    total += getBestsellingTv.originalStock;
    return total;
}

function getTotalTvsAvailable(getTvsSold, getTvsPurchased) {
    return getTvsPurchased - getTvsSold;
}

export default getTotalTvsAvailable;