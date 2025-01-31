export function sortMostSoldFirst(tvInventory) {
    tvInventory.sort((a, b) => {
        if (a.sold > b.sold) {
            return -1;
        }
        if (a.sold < b.sold) {
            return 1;
        }
        return 0;
    })
    console.log("Meest verkocht eerst");
    console.log(tvInventory);
}

export function sortCheapestFirst(tvInventory) {
    tvInventory.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    })
    console.log("Goedkoopste eerst");
    console.log(tvInventory);
}

export function sortRefreshrate(tvInventory) {
    tvInventory.sort((a, b) => {
        if (a.refreshRate > b.refreshRate) {
            return -1;
        }
        if (a.refreshRate < b.refreshRate) {
            return 1;
        }
        return 0;
    })
    console.log("Meest geschikt voor sport eerst");
    console.log(tvInventory);
}

export function sortBiggestScreensize(tvInventory) {
    const bigToSmall = tvInventory.map((size) => {
        return size.availableSizes.reverse();
    })
    bigToSmall.sort((a, b) => {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    })
    console.log("Grootste schermgrootte eerst");
    console.log(bigToSmall);
}

