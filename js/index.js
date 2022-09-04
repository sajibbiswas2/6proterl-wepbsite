const linkId =async() =>{
    const url ="https://openapi.programming-hero.com/api/news/categories"
   try{
    const res =await fetch (url)
    const data = await res.json()
    displayId(data.data.news_category)
   }
   catch(error){
    console.log(error);
   }   
}
const displayId= async (data)=>{
    console.log(data)
    const categoryContainer =document.getElementById('catagoryId');
    data.forEach(category => {
        const {category_name,category_id} =category;
        const categoriesDiv =document.createElement('div');
        categoriesDiv.classList.add("col");
        categoriesDiv.innerHTML=`
        <a onclick="loadCard(${category_id})">${category_name}</a>
        `;
        categoryContainer.appendChild(categoriesDiv)
        
    });
}
linkId()