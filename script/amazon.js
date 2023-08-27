let HTML='';
products.forEach(product=>{
    const html=`<div class="product">
            <img src=${product.image} class="product-image">
            <p class="product-information">${product.name}</p>
            <div class="review">
                <img src="images/rating-${product.rating.stars}.png" class="product-rating">
                <span class="product-review">${product.rating.count}</span>
            </div>
            <p class="product-price">$${(product.price/100).toFixed(2)}</p>
            <select class="product-quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <button class="add-button js-add-button" data-product-name="${product.name}">Add to Cart</button>
        </div>`;
        HTML=HTML+html;   
        document.getElementById('product-grid').innerHTML=HTML;
        console.log(HTML);
})
document.querySelectorAll(".js-add-button").forEach((button,i)=>{
    button.addEventListener('click',()=>{
       let p=button.dataset.productName;
        let toaddproduct={
            name:p,
            quantity:1
        }
        const index=cproduct.findIndex((item)=>{
           return item.name==p
        })
        if(index>=0){
            cproduct[index].quantity+=1;
        }
        else{
            cproduct.push(toaddproduct);
        }
        console.log(cproduct);
        // cproduct.forEach((item)=>{
        //     if(p==item.name){
        //         item.quantity+=item.quantity;
        //     }
        //     else{
        //         cproduct.push(toaddproduct);
        //         console.log("add");
        //     }
        // })

    })
});