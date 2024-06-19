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


    const municipality = dataJSON.dataset.dimension.Alue.category.label
    
    let i = 0 
    Object.values(municipality).forEach((data) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        
        td1.innerText = data
        td2.innerText = dataJSON.dataset.value[i]
        td3.innerText = dataJSON2.dataset.value[i]

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        if (i%2==0) {
            tr.className = "other"
        }

        tbody.appendChild(tr)
        i++
    });

}