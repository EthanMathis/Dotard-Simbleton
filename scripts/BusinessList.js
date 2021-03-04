import { getBusinesses } from "./BusinessData.js";
import { businessHTML } from "./Business.js";

const domTarget = document.querySelector("main");

export const businessList = () => {
    const allTheBusinesses = getBusinesses();
    domTarget.innerHTML = "";
    allTheBusinesses.forEach(
        (busObj) => {
            domTarget.innerHTML += businessHTML(busObj)
        }
    )
}