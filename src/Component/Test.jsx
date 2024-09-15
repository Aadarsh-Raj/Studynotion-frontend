import React, { useEffect } from "react";

const Test = () => {
  // useEffect(() => {
  //   // Dynamically load the Razorpay script
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // Cleanup to remove the script when the component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    const options = {
      key: "rzp_test_mIVjqUNPBw84f7", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount in currency subunits. Default currency is INR.
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_IluGWxBm9U8zJ8", // This is a sample Order ID.
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <button id="rzp-button1" onClick={handlePayment}>
        Pay with Razorpay
      </button>
    </>
  );
};

export default Test;
