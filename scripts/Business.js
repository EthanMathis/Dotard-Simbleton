export const businessHTML = (businessObj) => {
    return `
        <article class="business">
            <h2>${businessObj.companyName}</h3>
            <p><strong>Purchasing Agent</strong>: ${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}</p>
            <p><strong>Industry</strong>: ${businessObj.companyIndustry}</p>
            <p><strong>Phone Number</strong>: ${businessObj.phoneWork}</p>
            <p><strong>Address</strong>: ${businessObj.addressFullStreet} ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
        </article> <hr>
        `
}

export const agentHTML = (businessObj) => {
    return `
        <article class="agentBusiness">
            <h3>${businessObj.name}</h3>
            <p><strong>Company</strong>: ${businessObj.company}</p>
            <p><strong>Phone Number</strong>: ${businessObj.phoneNumber}</p>
        </article><hr>
        `
}       