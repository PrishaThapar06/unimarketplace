
// import { Button } from '@mui/material';
// import TextField from '@mui/material/TextField';

// import React, { useContext, useState } from 'react';

// import { MyContext } from '../../App';

// import { useNavigate } from 'react-router-dom';

// import axios from 'axios';

// const Checkout = () => {

//     const [formFields, setformFields] = useState({
//         name: '',
//         pincode: '',
//         address: '',
//         phoneNumber: ''
//     })

//     const context = useContext(MyContext);
//     const history = useNavigate();



//     const placeOrder = () => {

//         if (formFields.name === "" || formFields.address == "" || formFields.pincode == "" || formFields.phoneNumber == "") {
//             alert("All fields Required");
//             return false;
//         }



//         const addressInfo = {
//             name: formFields.name,
//             phoneNumber: formFields.phoneNumber,
//             address: formFields.address,
//             pincode: formFields.pincode,
//             date: new Date().toLocaleString(
//                 "en-US",
//                 {
//                     month: "short",
//                     day: "2-digit",
//                     year: "numeric",
//                 }
//             )
//         }



//         var options = {
//             key: "",
//             key_secret: "",
//             amount: parseInt(context.cartTotalAmount * 100),
//             currency: "INR",
//             order_receipt: 'order_rcptid_' + formFields.name,
//             name: "E-Bharat",
//             description: "for testing purpose",
//             handler: function (response) {

//                 // console.log(response)


//                 const paymentId = response.razorpay_payment_id
//                 // store in firebase 
//                 const orderInfo = {
//                     cartItems: context.cartItems,
//                     addressInfo: addressInfo,
//                     date: new Date().toLocaleString(
//                         "en-US",
//                         {
//                             month: "short",
//                             day: "2-digit",
//                             year: "numeric",
//                         }
//                     ),
//                     email: localStorage.getItem("userEmail"),
//                     userid:localStorage.getItem("userId"),
//                     paymentId
//                 }
                  
                


//                 history('/')


//             },

//             theme: {
//                 color: "#3399cc"
//             }
//         };


//         var pay = new window.Razorpay(options);
//         pay.open();
//     }





//     const changeInput = (e) => {
//         const { name, value } = e.target;

//         setformFields(() => ({
//             ...formFields,
//             [name]: value
//         }))

//     }



//     return (
//         <section className='cartSection mb-5 checkoutPage'>
//             <div className='container'>
//                 <form>
//                     <div className='row'>
//                         <div className='col-md-8'>
//                             <div className='form w-75 mt-4 shadow'>
//                                 <h3>Shopping Address</h3>
//                                 <div className='form-group mb-3 mt-4'>
//                                     <TextField id="outlined-basic" label="Enter Full Name" variant="outlined" className='w-100' value={formFields.name} onChange={changeInput} name="name" />
//                                 </div>
//                                 <div className='form-group mb-3'>
//                                     <TextField id="outlined-basic" label="Enter Pincode" variant="outlined" className='w-100' value={formFields.pincode} onChange={changeInput} name="pincode" />
//                                 </div>
//                                 <div className='form-group mb-3'>
//                                     <TextField id="outlined-basic" label="Enter Phone Number." variant="outlined" className='w-100' value={formFields.phoneNumber} onChange={changeInput} name="phoneNumber" />
//                                 </div>
//                                 <div className='form-group'>
//                                     <TextField id="outlined-basic" label="Enter Full Address" variant="outlined" className='w-100' multiline
//                                         rows={4} value={formFields.address} onChange={changeInput} name="address" />
//                                 </div>

//                             </div>

//                         </div>




//                         <div className='col-md-4 cartRightBox pt-4'>
//                             <div className='card p-4 '>
//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Subtotal</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>
//                                         {context.cartTotalAmount}
//                                     </span></h3>
//                                 </div>

//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Shipping</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
//                                 </div>




//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Total</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>
//                                         {context.cartTotalAmount}
//                                     </span></h3>
//                                 </div>


//                                 <br />
//                                 <Button className='btn-g btn-lg' onClick={placeOrder}>Place Order</Button>


//                             </div>
//                         </div>



//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default Checkout;

import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [showBill, setShowBill] = useState(false);

  const purchasedItems = [
    { name: 'Item 1', quantity: 2, price: 10 },
    { name: 'Item 2', quantity: 1, price: 20 },
  ];

  const calculateTotal = () => {
    return purchasedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CHECKOUT</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address Line 1</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="123 Main St"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address Line 2</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Apt, Suite, etc. (optional)"
              />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Postal Code"
              />
            </div>
          </form>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Purchased Items</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            {purchasedItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>

          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showBill}
                onChange={() => setShowBill(!showBill)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Show Detailed Bill</span>
            </label>
          </div>

          {showBill && (
            <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Detailed Bill</h2>
              {purchasedItems.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          )}

          <h2 className="text-xl font-semibold mt-6 mb-2">Payment Method</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Select Payment Method:</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === 'online'}
                  onChange={() => setPaymentMethod('online')}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Online Payment</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Cash on Delivery (COD)</span>
              </label>
            </div>
          </div>

          {paymentMethod === 'online' && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Online Payment Details</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Card Number</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">CVV</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          {paymentMethod === 'cod' && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Cash on Delivery Details</h2>
              <p className="text-gray-700">You have selected Cash on Delivery. Please keep the exact amount ready at the time of delivery.</p>
            </div>
          )}

          <div className="mt-4">
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-800">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
