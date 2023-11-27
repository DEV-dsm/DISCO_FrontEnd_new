import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import UserLeave from "../pages/auth/UserLeave";
import FindId from "../pages/auth/FindId";
import FindPw from "../pages/auth/FindPw";
import CheckID from "../pages/auth/CheckID";
import CheckPW from "../pages/auth/CheckPW";
import ChangePassWord from "../pages/auth/ChangePassWord";
import Error from "../pages/auth/Error";
import MainPage from "../pages/main/MainPage";
import DiaryPage from "../pages/auth/DiaryPage";
import MyPage from "../pages/auth/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserLeave" element={<UserLeave />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/CheckId" element={<CheckID />} />
        <Route path="/CheckPw" element={<CheckPW />} />
        <Route path="/ChangePw" element={<ChangePassWord />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/DiaryPage" element={<DiaryPage />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
