document.addEventListener("DOMContentLoaded", function(){
    code()
})


async function code(){
    const tbody = document.getElementById("tbody")

    const url1 = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    const dataPromise = await fetch(url1)
    const dataJSON = await dataPromise.json()
    //console.log(dataJSON)

    const url2 ="https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065"
    const dataPromise2 = await fetch(url2)
    const dataJSON2 = await dataPromise2.json()
    console.log(dataJSON2);


    const states = dataJSON.dataset.dimension.Alue.category.label
    
    let i = 0 
    Object.values(states).forEach((stateName) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")

        let population = dataJSON.dataset.value[i]
        let employment = dataJSON2.dataset.value[i]
        let employmentPercentage = employment/population * 100
        
        td1.innerText = stateName
        td2.innerText = population
        td3.innerText = employment
        td4.innerText = employmentPercentage.toFixed(2) + "%"
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        if (i%2==0) {
            tr.className = "other"
        }
        if (employmentPercentage > 45) {
            tr.className = "high"
        }
        if (employmentPercentage < 25) {
            tr.className = "low"
        }

        tbody.appendChild(tr)
        i++
    });

}