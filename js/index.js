const linkId =async() =>{
    const url ="https://openapi.programming-hero.com/api/news/categories"
   try{
    const res =await fetch (url)
    const data = await res.json()
    newsCardId(data.data.news_category)
   }
   catch(error){
    console.log(error);
   }   
}

const AncorCallId =async id =>{
    // toggleloder(true)
    const url=(`https://openapi.programming-hero.com/api/news/category/${id}`)
    try{
      const res =await fetch (url)
      const data = await res.json()
       newsCardcarded(data.data)
     }
     catch(error){
      console.log(error);
     } 
     
  
  }
const newsCardId = callId =>{

    console.log(callId)
    
    const catagoryName = document.getElementById('catagoryId');
    callId.forEach(callDisplay=> {
     
 
        const catagoryIdCreate = document.createElement('div')
        catagoryIdCreate.classList.add('col')
        
        catagoryIdCreate.innerHTML=`
        
        <button onclick="AncorCallId('${callDisplay.category_id}')" class="ms-3 rounded btn btn-outline-primary">${callDisplay.category_name}</button>
       
        `;
        catagoryName.appendChild(catagoryIdCreate)
        
   });
   
 }


const newsCardcarded = callIdData =>{
    console.log(callIdData);
  
  
    const newsCardCallIdCarded = document.getElementById('carddisplayId');
    newsCardCallIdCarded.innerText ="";
  
    callIdData.forEach(newsCard => {
      console.log(newsCard)
      const cardIdDisplayName = document.createElement('card')
   
      cardIdDisplayName.innerHTML=`
      <div class="card mb-3" style="max-width:100%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${newsCard.thumbnail_url ? newsCard.thumbnail_url : "no image"}" class="img-fluid h-100 rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${newsCard.title ? newsCard.title : "no title"}</h5>
            <p class="card-text text-truncate" >${newsCard.details.slice(0,500)}</p>
            <div class="d-flex">
            <img style="height:40px; width:40px" class=" m-3 img-fluid rounded-circle" src="${newsCard.author.img}">
            <div>
            <span class="d-block mt-2" >${newsCard.author.callDisplay?newsCard.author.callDisplay:"No name" }</span> 
            <span class="d-block">${newsCard.author.published_date ? newsCard.author.published_date :"no date"}</span>
            </div >
              <div class="mt-3 ms-5">
              <p><i class="fa-sharp fa-solid fa-eye"></i><span>${newsCard.total_view ? newsCard.total_view :"no view" }</span></p>
              </div>
             <button onclick="dataDetailsid('${newsCard._id}')" class="btn btn-primary h-25 ms-5 mt-3"  data-bs-toggle="modal" data-bs-target="#modalId">callIdData Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      `;
      newsCardCallIdCarded.appendChild(cardIdDisplayName)
    
  
  
    });
    
  }




linkId()