import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { StroreFunction } from "../Store/store";
import { AiOutlineFileDone } from "react-icons/ai";
import "./Style/enrollbtn.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const EnrollmentBtn = (props) => {
  const {
    apiUrl,
    user,
    token,
    setLoader,
    setDialogMessage,
    setDialogError,
    setDialogAppear,
    fetchOwnProfile,
    fetchAllCourses,
  } = StroreFunction();
  const handlePayment = () => {
    return new Promise((resolve, reject) => {
      const options = {
        key: "rzp_test_mIVjqUNPBw84f7", 
        amount: props.amount * 100, 
        currency: "INR",
        name: "Arya Studynotion",
        description: "Use success@Razorpay UPI ID to claim the course for free",
        image:
          "https://scalebranding.com/wp-content/uploads/2022/02/Thunder-Lion-Energy-Logo.jpg",
        prefill: {
          name: user.userName,
          email: user.userEmail,
          contact: user.userPhoneNumber ? user.userPhoneNumber : "0000000000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        handler: function (response) {
          resolve(response);
        },
        error: function (response) {
          reject(response);
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    });
  };

  const enrollStudent = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/course/enroll/${props.courseId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      await fetchAllCourses();
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }

      setLoader(false);
      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Failed to add to wishlist. Please try again later.");
      setDialogAppear(true);
    }
  };
  const warn = () => {
    setDialogError(true);
    setDialogMessage("Please login first");
    setDialogAppear(true);
  };

  const createOrder = async (transactionId) => {
    setLoader(true);
    try {
      const response = await fetch(`${apiUrl}/order/create/${props.courseId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ transactionId }),
      });
      const data = await response.json();
      setDialogError(!data.success);
      setDialogMessage(data.message);
      setDialogAppear(true);
      return data.order;
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Failed to create order. Your money will be refunded");
      setDialogAppear(true);
    }
  };

  const payAndEnroll = async () => {
    
    try {
      const transactionId = await handlePayment();
      if(transactionId){
        setLoader(true);
        const order = await createOrder(transactionId.razorpay_payment_id);
        console.log(order)
        if(order.purchased){
         await enrollStudent();
         generatePdfInvoice(order);
        }

      }

      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const generatePdfInvoice = (order) => {
    const doc = new jsPDF();
  
    // Set up basic invoice information
    doc.setFontSize(20);
    doc.text("Invoice", 20, 20);
    doc.text("Arya Studynotion", 30, 30);
    // Add details
    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(`User ID: ${order.userId}`, 20, 50);
    doc.text(`Course ID: ${order.courseId}`, 20, 60);
    doc.text(`Price: Rs. ${order.price}`, 20, 70);
    doc.text(`Transaction ID: ${order.transactionId}`, 20, 80);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 90);
  
    // Add optional footer
    doc.text("Thank you for your purchase!", 20, 120);
  
    // Save the PDF (downloads automatically)
    doc.save(`invoice_${order._id}.pdf`);
  };
  return (
    <>
      <button
        className="enroll-course-btn"
        id="rzp-button1"
        title="Enroll course"
        onClick={user ? payAndEnroll : warn}
        disabled={props.studentEnrolled}
      >
        {!props.studentEnrolled ? (
          <>
            <span>Enroll Yourself</span>
            <MdAssignmentAdd />{" "}
          </>
        ) : (
          <>
            <span style={{ color: "green" }}>Already Enrolled</span>{" "}
            <AiOutlineFileDone color="green" />
          </>
        )}
      </button>
    </>
  );
};

export default EnrollmentBtn;
