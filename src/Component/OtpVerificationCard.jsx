import React, { useState } from "react";
import { Card, Button, Input, Form, message } from "antd";
import { MdVerified } from "react-icons/md";
import { StroreFunction } from "../Store/store";

const OTPVerificationCard = (props) => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifiedOtp, setVerifiedOtp] = useState(false);
  const {
    apiUrl,
    token,
    updateBoxTag,
    setUpdateInputValue,
    setDialogAppear,
    setDialogMessage,
    setLoader,
    setDialogError,
  } = StroreFunction();
  const handleSendOtp = async () => {
    setLoader(true);
    try {
      const response = await fetch(`${apiUrl}/otp/sendotp`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setLoader(false);
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }
      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (e) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }

    setOtpVisible(true);
  };

  const verifyOtp = async (value) => {
    try {
      const response = await fetch(`${apiUrl}/otp/verify?otp=${value}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setVerifiedOtp(data.success);
      setDialogError(data.success);
      setDialogMessage(data.message);
      setDialogAppear(data.success);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };
  const handleOtpChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
    if (e.target.value.length === 6) {
      setLoader(true);
      verifyOtp(value);
      setLoader(false);
    }
  };

  return (
    <Card
      className="otp-card"
      title={props.email}
      style={{ width: 300, margin: "auto", marginTop: 50 }}
    >
      <Form>
        {!verifiedOtp && !otpVisible && (
          <Form.Item>
            <Button
              type="primary"
              onClick={handleSendOtp}
              style={{ backgroundColor: "transparent" }}
            >
              Send OTP
            </Button>
          </Form.Item>
        )}
        {otpVisible && !verifiedOtp && (
          <Form.Item>
            <Input
              onChange={handleOtpChange}
              maxLength={6}
              minLength={6}
              placeholder="Enter OTP"
              style={{
                backgroundColor: "rgb(110 216 223)",
                color: "black",
                fontWeight: "bolder",
              }}
            />
          </Form.Item>
        )}

        {verifiedOtp && (
          <>
            {updateBoxTag === "password" && (
              <Form.Item>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  style={{
                    backgroundColor: "rgb(110 216 223)",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                />
              </Form.Item>
            )}

            {updateBoxTag === "email" && (
              <Form.Item>
                <Input
                  type="email"
                  placeholder="Enter updated value"
                  style={{
                    backgroundColor: "rgb(110 216 223)",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                />
              </Form.Item>
            )}
            {updateBoxTag === "phoneNumber" && (
              <Form.Item>
                <Input
                  type="number"
                  min={10}
                  max={10}
                  placeholder="Enter new phone number"
                  style={{
                    backgroundColor: "rgb(110 216 223)",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                />
              </Form.Item>
            )}
          </>
        )}
      </Form>
    </Card>
  );
};

export default OTPVerificationCard;
