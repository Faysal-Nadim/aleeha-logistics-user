"use client";
import React, { useEffect, useState } from "react";

import ProfileInputDiv from "@components/ProfileInputDiv";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "@app/redux/actions";
import Swal from "sweetalert2";
import withAuth from "@components/withAuth";

const page = () => {
  const dispatch = useDispatch();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const handlePassword = (e) => {
    const data = {
      password: oldPass,
      newPassword: newPass,
    };
    dispatch(updatePassword(data));
    e.preventDefault();
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (newPass !== confirmPass || confirmPass !== newPass) {
      setError(true);
    } else {
      setError(false);
    }
  }, [newPass, confirmPass]);

  if (auth.loading === true) {
    Swal.showLoading();
  }

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Change Password</p>
        <form
          className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-4 sm:gap-2"
          onSubmit={handlePassword}
        >
          <ProfileInputDiv
            name={"current_password"}
            placeholder={"Enter Current Password"}
            value={oldPass}
            labelText={"Current Password"}
            errorText={""}
            onChange={(e) => setOldPass(e.target.value)}
          />
          <div></div>
          <ProfileInputDiv
            name={"new_password"}
            placeholder={"Set New Password"}
            labelText={"New Password"}
            value={newPass}
            errorText={""}
            onChange={(e) => setNewPass(e.target.value)}
          />
          <div></div>
          <ProfileInputDiv
            name={"confirm_password"}
            placeholder={"Confirm New Password"}
            labelText={"Confirm Password"}
            errorText={error ? "Password Doesn't Match" : ""}
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <div></div>

          <input
            type="submit"
            name="update"
            value="Update"
            className="btn_gray w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default withAuth(page);
