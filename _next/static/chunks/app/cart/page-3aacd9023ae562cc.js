(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{3280:function(e,s,a){Promise.resolve().then(a.bind(a,16))},16:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return t}});var i=a(3827),l=a(4090);function t(){let[e,s]=(0,l.useState)([{id:1,name:"Custom T-Shirt",size:"Large",color:"Black",price:19.99,quantity:1,image:"/placeholder-tshirt.jpg"},{id:2,name:"Custom Hoodie",size:"Medium",color:"Navy",price:39.99,quantity:1,image:"/placeholder-hoodie.jpg"}]),a=(a,i)=>{i<1||s(e.map(e=>e.id===a?{...e,quantity:i}:e))},t=a=>{s(e.filter(e=>e.id!==a))},c=e.reduce((e,s)=>e+s.price*s.quantity,0);return(0,i.jsx)("main",{className:"py-12",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto px-4",children:[(0,i.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"Your Cart"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,i.jsx)("div",{className:"md:col-span-2",children:e.map(e=>(0,i.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-lg mb-4",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("img",{src:e.image,alt:e.name,className:"w-24 h-24 object-cover rounded-lg"}),(0,i.jsxs)("div",{className:"ml-4 flex-grow",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold",children:e.name}),(0,i.jsxs)("p",{className:"text-gray-600",children:[e.size," - ",e.color]}),(0,i.jsxs)("div",{className:"flex items-center mt-2",children:[(0,i.jsx)("button",{onClick:()=>a(e.id,e.quantity-1),className:"text-gray-600 hover:text-gray-900",children:"-"}),(0,i.jsx)("span",{className:"mx-4",children:e.quantity}),(0,i.jsx)("button",{onClick:()=>a(e.id,e.quantity+1),className:"text-gray-600 hover:text-gray-900",children:"+"})]})]}),(0,i.jsxs)("div",{className:"text-right",children:[(0,i.jsxs)("p",{className:"text-xl font-bold",children:["$",(e.price*e.quantity).toFixed(2)]}),(0,i.jsx)("button",{onClick:()=>t(e.id),className:"text-red-600 hover:text-red-800 mt-2",children:"Remove"})]})]})},e.id))}),(0,i.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg h-fit",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Order Summary"}),(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("span",{children:"Subtotal"}),(0,i.jsxs)("span",{children:["$",c.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("span",{children:"Shipping"}),(0,i.jsxs)("span",{children:["$","5.99"]})]}),(0,i.jsx)("div",{className:"border-t pt-2 mt-2",children:(0,i.jsxs)("div",{className:"flex justify-between font-bold",children:[(0,i.jsx)("span",{children:"Total"}),(0,i.jsxs)("span",{children:["$",(c+5.99).toFixed(2)]})]})})]}),(0,i.jsxs)("div",{className:"mt-6",children:[(0,i.jsxs)("div",{className:"flex items-center mb-4",children:[(0,i.jsx)("input",{type:"checkbox",id:"same-day",className:"mr-2"}),(0,i.jsx)("label",{htmlFor:"same-day",className:"text-gray-600",children:"Same-day production (+$10.00)"})]}),(0,i.jsx)("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700",children:"Proceed to Checkout"})]})]})]})]})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3280)}),_N_E=e.O()}]);