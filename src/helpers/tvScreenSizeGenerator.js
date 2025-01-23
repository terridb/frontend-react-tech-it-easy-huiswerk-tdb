import {inchToCm} from "./inchToCm.js";

function generateTvScreenSize(bestSellingTv) {
    return bestSellingTv.availableSizes.map(size =>
        `${size} inch (${inchToCm(size)} cm)`).join(' | ');
}

export {generateTvScreenSize};