document.addEventListener("DOMContentLoaded", function(){
    code()
})


async function code(){
    const tbody = document.getElementById("tbody")

    const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    const dataPromise = await fetch(url)
    const dataJSON = await dataPromise.json()
    //console.log(dataJSON)

    const municipality = dataJSON.dataset.dimension.Alue.category.label
    
    let i = 0 
    Object.values(municipality).forEach((data) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        
        td1.innerText = data
        td2.innerText = dataJSON.dataset.value[i]

        tr.appendChild(td1)
        tr.appendChild(td2)
        tbody.appendChild(tr)
        i++
    });

}