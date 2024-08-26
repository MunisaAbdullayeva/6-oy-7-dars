let name = document.querySelector('#Name')
let coment = document.querySelector('#comment')

let loadingWrapper = document.querySelector("#loadingWrapper");
let loading = true;
console.log(loadingWrapper)

function showLoading() {
    if (loading) {
        loadingWrapper.className = "flex items-center text-primary"
    } else {
        loadingWrapper.className = "hidden"
    }
}


showLoading()

async function requestData() {
    try {
        let request = await fetch("https://jsonplaceholder.typicode.com/comments");
        let response = await request.json();
        console.log(response);
        response.map(item => {
            let card = document.createElement('div')
            card.className = 'card bg-primary text-primary-content min-w-96 flex-1'
            card.innerHTML = `
                <div class="card-body">
                    <h2 id="Name">Card Name</h2>
                    <p id="coment">If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            `

            coment.append(card)
        })
    } catch (e) {
        console.error(e, "Error requesting");
    } finally {
        console.log("Request completed");
        loading = false;
        showLoading()
    }
}

requestData();