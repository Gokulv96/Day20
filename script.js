const formElement = document.querySelector('.btn-primary');
const divElement = document.createElement('div');
formElement.addEventListener('click',(e)=>{
    e.preventDefault();
    const data = fetch(`https://emojihub.yurace.pro/api/random`)
                 .then((response)=>response.json())
                 .then((data)=>{
                 console.log(data);
                 divElement.innerHTML= `<div class="card mb-5" style="max-width: 540px;">
                    <div class="row no-gutters">
                      <div class="col-md-8">
                        <div class="card-body">
                          <p class="card-text">${data.category}</p>
                          <p class="card-text">${data.htmlCode[0]}</p>
                          <p class="card-text"><small class="text-muted">${data.name}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>`
                  divElement.appendChild(div);
                 })
                 .catch((error)=>console.log(error));
})

document.body.append(divElement);