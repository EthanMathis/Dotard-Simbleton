import { getBusinesses, agentName } from "./BusinessData.js";
import { businessHTML, agentHTML } from "./Business.js";

const allDomTarget = document.getElementById("all-bus")
const nyDomTarget = document.getElementById("ny-bus")
const manuDomTarget = document.getElementById("businessList--manufacturing")
const agentDomTarget = document.getElementById("agents")

export const businessList = () => {
    const allTheBusinesses = getBusinesses();
    let allHTMLRep = "<h2>Business List</h2><hr>";
    allDomTarget.innerHTML = allHTMLRep;
    allTheBusinesses.forEach(
        (busObj) => {
            allDomTarget.innerHTML += businessHTML(busObj)
        }
    )
}

export const nyBusinessList = () => {
    const allTheBusinesses = getBusinesses();
    const nyBusinesses = allTheBusinesses.filter(business => 
        business.addressStateCode === "NY");
    let nyHTMLRep = "<h2>New York Businesses</h2><hr>";
    nyDomTarget.innerHTML = nyHTMLRep;
    nyBusinesses.forEach(
        (busObj) => {
           nyDomTarget.innerHTML += businessHTML(busObj)
        }
    )
}

export const manufacturingBusinessList = () => {
    const allTheBusinesses = getBusinesses();
    const manuBusinesses = allTheBusinesses.filter(business => 
        business.companyIndustry === "Manufacturing");
    manuDomTarget.innerHTML = "<h2>Manufacturing Businesses</h2><hr>";
    manuBusinesses.forEach(
        (busObj) => {
            manuDomTarget.innerHTML += businessHTML(busObj)
        }
    )
}

export const filteredByName = () => {
    agentDomTarget.innerHTML = "<h2>Purchasing Agents</h2><hr>";
    agentName.forEach(
        (busObj) => {
            agentDomTarget.innerHTML += agentHTML(busObj)
        }
    )
}
export const searchBar = () => {
const companySearchResultArticle = document.querySelector(".foundCompanies");
document
    .querySelector("#companySearch")
    .addEventListener("keydown", event => {
        if (event.key === "Enter") {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundBusiness = getBusinesses().find((business) => 
            business.companyName.startsWith(event.target.value))

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section><hr>
            `;
        }
    });
}