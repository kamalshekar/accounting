import React, { Component } from "react";
import { ProductConsumer } from "../../../contextAPI/Context";
import { Drawer, Button } from "antd";
import "./navdrawer.css";
import "antd/dist/antd.css";
import arrow from "../../../Images/drawer/leftarrow.svg";
import GxRegistration from "./GxRegistration";
import { Input } from "antd";
import back from "../../../Images/drawer/back.svg";
import dp from "../../../Images/drawer/profile.svg";
import { LoadingOutlined } from "@ant-design/icons";

export default class NavDrawer extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            gxUYesDetails,
            gxUNoDetails,
            visibleDrawer,
            GxCheckVisibleDrawer,
            GxCheckclose,
            navDrawerclose,
            navDraweropen,
            drawerCards,
            UTListingHead,
            GxCheckopen,
            UserTypesDrawerOpen,
            UserTypesDrawerClose,
            UserTypesDrawer,
            getUsersList,
            CheckLoad,
            allUsersList,
            allBusinessList,
            checkforGX,
            gxUserYN,
            inputChange,
            GxRegistrationopen,
            GxRegistrationDrawer,
            GxRegistrationclose,
            GxRegCreatePassword,
            GxRegUserName,
            GxRegConfirmPassword,
            GxRegAPIpage,
            GxRegOtp,
            GxRegAPIpageTwo,
            GxRegCreatePasswordFun,
            GxRegConfirmPasswordFun,
            GxRegAPIpageFun,
            GxRegOtpFun,
            GxRegAPIpageTwoFun,
            GxRegUserNameFun,
            backToGxCheck,
            submitMailCodeGxRegistration,
            submitGxRegistration,
            RegGxUsername,
            RegUserInfo,
            gxRegUsername,
            RegGxEmail,
            RegGxCreate,
            gxRegEmailCode,
            gxRegEmail,
            gxCheckEmail,
            gxRegCreatepass,
            RegGxCreatepass,
            RegGxConfirmpass,
            gxRegConfirmpass
          } = value;
          const gxcheckEnable = gxCheckEmail.length > 2;
          const gxRegUsernameEnable = gxRegUsername.length > 1;
          const gxRegEmailEnable = gxRegEmail.length > 2;
          const gxRegCreatepassEnable = gxRegCreatepass.length > 2;
          const gxRegConfirmpassEnable = gxRegCreatepass === gxRegConfirmpass;
          const gxRegEmailCodeEnable = gxRegEmailCode.length > 2;
          return (
            <div>
              <div onClick={navDraweropen} className="addStyle">
                ADD
              </div>

              <Drawer
                className="antDrawerheight"
                width={642}
                placement="right"
                closable={false}
                visible={visibleDrawer}
                style={{
                  zIndex: "2",
                  marginTop: "4rem"
                }}
              >
                <div className="container">
                  <div className="TractionHead mb-3">
                    <img
                      onClick={navDrawerclose}
                      style={{ cursor: "pointer" }}
                      src={arrow}
                      className="img-fluid mr-3"
                    ></img>
                    <span>User Types</span>
                  </div>
                  <div>
                    <div className="user-Types">
                      {drawerCards.map(showcards => {
                        return (
                          <div className="drawerCards p-4 mb-3">
                            <div className="firstRow">
                              <div>
                                <img
                                  src={showcards.profile}
                                  className="img-fluid mr-3"
                                />
                                <span>{showcards.cardHeader}</span>
                              </div>
                              <div>
                                <span>{showcards.price}</span>
                              </div>
                            </div>
                            <div className="secRow mt-4">
                              {showcards.cardPara}
                            </div>
                            <div className="thirdRow mt-4">
                              <span className="inviteBtn pt-2 pb-2 pr-3 pl-3 mr-3">
                                {showcards.btnOne}
                              </span>
                              <span
                                className="inviteBtn pt-2 pb-2 pr-3 pl-3 mr-3"
                                onClick={() => GxCheckopen(showcards)}
                              >
                                {showcards.btnTwo}
                              </span>
                              <span
                                className="inviteBtn pt-2 pb-2 pr-3 pl-3"
                                onClick={() => UserTypesDrawerOpen(showcards)}
                              >
                                {showcards.btnThree}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Drawer>
              {/* ----------------------------------------Gx Check Drawer ------------------------------------------- */}

              <Drawer
                className="antDrawerheight gxCheckdrawer"
                width={642}
                placement="right"
                closable={false}
                visible={GxCheckVisibleDrawer}
                style={{
                  zIndex: "2",
                  marginTop: "4rem"
                }}
              >
                {gxUserYN ? null : (
                  <div className="gxCheckCenter">
                    <div className="container-fluid p-0">
                      <div className="pl-5 pr-5">
                        <div className="gxCheckhead">
                          New *Enter {UTListingHead} Type*
                        </div>
                        <div className="gxChecksub">Step 1: GX Check</div>
                        <div className="mt-5 emailContainer">
                          <p className="emailHead">Email Of New User</p>
                          <Input
                            placeholder="Ex.shorupan@gmail.com"
                            className="inputStyle"
                            name="gxCheckEmail"
                            onChange={inputChange}
                          />
                        </div>
                      </div>
                      <div>
                        <img
                          onClick={GxCheckclose}
                          src={back}
                          className="img-fluid gxCheckback"
                        />
                        <button
                          disabled={!gxcheckEnable}
                          onClick={checkforGX}
                          className="btn accountBtn "
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          Continue{" "}
                          {CheckLoad ? (
                            <LoadingOutlined style={{ fontSize: 22 }} spin />
                          ) : null}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {gxUYesDetails === true ? (
                  <div className="gxCheckCenter">
                    <div className="container-fluid p-0">
                      <div className="pl-5 pr-5">
                        <div className="gxCheckhead">
                          New *Enter {UTListingHead} Type*
                        </div>
                        <div className="gxChecksub">
                          Step 3: AccountingGroup Registration
                        </div>
                        <div className="mt-5 emailContainer">
                          <p className="emailHead">Enter Phone Number</p>
                          <Input
                            placeholder="Ex.9876543210"
                            className="inputStyle"
                            name=""
                            onChange={inputChange}
                          />
                        </div>
                      </div>
                      <div>
                        <img
                          onClick={GxCheckclose}
                          src={back}
                          className="img-fluid gxCheckback"
                        />
                        <button
                          className="btn accountBtn "
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                {gxUNoDetails === true ? (
                  <>
                    {RegUserInfo === "Username" ? (
                      <div className="gxCheckCenter">
                        <div className="container-fluid  p-0">
                          <div className="pl-5 pr-5 containerAnimation">
                            <div className="gxCheckhead">
                              New *Enter {UTListingHead} Type*
                            </div>
                            <div className="gxChecksub">
                              Step 2: GX Registration
                            </div>
                            <div className="mt-5 emailContainer">
                              <p className="emailHead">Assign Username</p>
                              <Input
                                type="text"
                                name="gxRegUsername"
                                onChange={inputChange}
                                placeholder="Ex.shorupan"
                                className="inputStyle"
                              />
                            </div>
                          </div>
                          <div>
                            <img
                              src={back}
                              className="img-fluid gxCheckback"
                              onClick={backToGxCheck}
                            />
                            <button
                              disabled={!gxRegUsernameEnable}
                              onClick={RegGxEmail}
                              className="btn accountBtn "
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              Continue{" "}
                              {CheckLoad ? (
                                <LoadingOutlined
                                  style={{ fontSize: 22 }}
                                  spin
                                />
                              ) : null}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {RegUserInfo === "Email" ? (
                      <div className="gxCheckCenter">
                        <div className="container-fluid  p-0">
                          <div className="pl-5 pr-5 containerAnimation">
                            <div className="gxCheckhead">
                              New *Enter {UTListingHead} Type*
                            </div>
                            <div className="gxChecksub">
                              Step 2: GX Registration
                            </div>
                            <div className="mt-5 emailContainer">
                              <p className="emailHead">Assign Email</p>
                              <Input
                                name="gxRegEmail"
                                onChange={inputChange}
                                placeholder="Ex.shorupan"
                                className="inputStyle"
                              />
                            </div>
                          </div>
                          <div>
                            <img
                              onClick={RegGxUsername}
                              src={back}
                              className="img-fluid gxCheckback"
                            />
                            <button
                              disabled={!gxRegEmailEnable}
                              onClick={RegGxCreatepass}
                              className="btn accountBtn "
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {RegUserInfo === "Createpass" ? (
                      <div className="gxCheckCenter">
                        <div className="container-fluid  p-0">
                          <div className="pl-5 pr-5 containerAnimation">
                            <div className="gxCheckhead">
                              New *Enter {UTListingHead} Type*
                            </div>
                            <div className="gxChecksub">
                              Step 2: GX Registration
                            </div>
                            <div className="mt-5 emailContainer">
                              <p className="emailHead">Assign Password</p>
                              <Input
                                type="password"
                                name="gxRegCreatepass"
                                onChange={inputChange}
                                placeholder="Ex, abc123!@#"
                                className="inputStyle"
                              />
                            </div>
                          </div>
                          <div>
                            <img
                              onClick={RegGxEmail}
                              src={back}
                              className="img-fluid gxCheckback"
                            />
                            <button
                              disabled={!gxRegCreatepassEnable}
                              onClick={RegGxConfirmpass}
                              className="btn accountBtn "
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              Continue{" "}
                              {CheckLoad ? (
                                <LoadingOutlined
                                  style={{ fontSize: 22 }}
                                  spin
                                />
                              ) : null}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {RegUserInfo === "Confirmpass" ? (
                      <div className="gxCheckCenter">
                        <div className="container-fluid  p-0">
                          <div className="pl-5 pr-5 containerAnimation">
                            <div className="gxCheckhead">
                              New *Enter {UTListingHead} Type*
                            </div>
                            <div className="gxChecksub">
                              Step 2: GX Registration
                            </div>
                            <div className="mt-5 emailContainer">
                              <p className="emailHead">Confirm Password</p>
                              <Input
                                type="password"
                                name="gxRegConfirmpass"
                                onChange={inputChange}
                                placeholder="Ex, abc123!@#"
                                className="inputStyle"
                              />
                            </div>
                          </div>
                          <div>
                            <img
                              onClick={RegGxCreatepass}
                              src={back}
                              className="img-fluid gxCheckback"
                            />
                            <button
                              disabled={!gxRegConfirmpassEnable}
                              onClick={submitGxRegistration}
                              className="btn accountBtn "
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              Continue{" "}
                              {CheckLoad ? (
                                <LoadingOutlined
                                  style={{ fontSize: 22 }}
                                  spin
                                />
                              ) : null}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {RegUserInfo === "EmailCode" ? (
                      <div className="gxCheckCenter">
                        <div className="container-fluid  p-0">
                          <div className="pl-5 pr-5 containerAnimation">
                            <div className="gxCheckhead">
                              New *Enter {UTListingHead} Type*
                            </div>
                            <div className="gxChecksub">
                              Step 2: GX Registration
                            </div>
                            <div className="mt-5 emailContainer">
                              <p className="emailHead">Verify Code</p>
                              <Input
                                type="number"
                                name="gxRegEmailCode"
                                onChange={inputChange}
                                placeholder="Ex, 123456"
                                className="inputStyle"
                              />
                            </div>
                          </div>
                          <div>
                            <img
                              onClick={RegGxUsername}
                              src={back}
                              className="img-fluid gxCheckback"
                            />
                            <button
                              disabled={!gxRegEmailCodeEnable}
                              onClick={submitMailCodeGxRegistration}
                              className="btn accountBtn "
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              Continue{" "}
                              {CheckLoad ? (
                                <LoadingOutlined
                                  style={{ fontSize: 22 }}
                                  spin
                                />
                              ) : null}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </Drawer>
              {/* ----------------------------------------Gx Check Drawer End --------------------------------------- */}
              {/* ----------------------------------------Gx  User Types --------------------------------------- */}
              <Drawer
                className="antDrawerheight gxCheckdrawer"
                width={642}
                placement="right"
                closable={false}
                visible={UserTypesDrawer}
                style={{
                  zIndex: "2",
                  marginTop: "4rem"
                }}
              >
                <div className="container">
                  <h2 className="TractionHead mb-3 mt-3">
                    <img
                      onClick={UserTypesDrawerClose}
                      style={{ cursor: "pointer" }}
                      src={arrow}
                      className="img-fluid mr-3"
                    ></img>
                    <span>All {UTListingHead}</span>
                  </h2>
                  <div className="searchBox mb-3">
                    <Input type="text" placeholder="Search" />
                    <Button>All Users</Button>
                    <i class="searchIcon fas fa-search"></i>
                  </div>
                  {UTListingHead === "User" ? (
                    <div className="user-list-dt">
                      {allUsersList.map(ULdtl => {
                        return (
                          <div className="drawerCards p-4 mb-3" key={ULdtl._id}>
                            <div className="d-flex">
                              <img
                                src={dp}
                                width="32px"
                                className="mr-3"
                                alt="no_img"
                              />
                              <div>
                                <h6
                                  className="mb-0"
                                  style={{
                                    lineHeight: "0.4",
                                    fontWeight: "700"
                                  }}
                                >
                                  {ULdtl.name}
                                </h6>
                                <small>{ULdtl.email}</small>
                              </div>
                              <div className="ml-auto text-right">
                                <h6
                                  className="mb-0"
                                  style={{
                                    lineHeight: "0.4",
                                    fontWeight: "700"
                                  }}
                                >
                                  {ULdtl.preferred_currency}
                                </h6>
                                <small>Total Balance</small>
                              </div>
                            </div>
                            <div className="mt-3">
                              <small>
                                User ID:{" "}
                                <span style={{ fontWeight: "700" }}>
                                  {ULdtl.profile_id}
                                </span>
                              </small>{" "}
                              <br />
                              <small>
                                User Type:{" "}
                                <span style={{ fontWeight: "700" }}>
                                  {UTListingHead}
                                </span>
                              </small>
                            </div>
                            <div className="mt-4">
                              <span className="inviteBtnInvert pt-2 pb-2 pr-3 pl-3 mr-3">
                                Interact
                              </span>
                              <span className="inviteBtnInvert pt-2 pb-2 pr-3 pl-3 mr-3">
                                Add Profile
                              </span>
                              <span className="inviteBtnInvert pt-2 pb-2 pr-3 pl-3 mr-3">
                                Full User Profile
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                  {UTListingHead === "Business" ? (
                    <div className="user-list-dt">
                      {allBusinessList.map(ULdtl => {
                        return (
                          <div className="drawerCards p-4 mb-3" key={ULdtl._id}>
                            <div className="d-flex">
                              <img
                                src={dp}
                                width="32px"
                                className="mr-3"
                                alt="no_img"
                              />
                              <div>
                                <h6
                                  className="mb-0"
                                  style={{
                                    lineHeight: "0.4",
                                    fontWeight: "700"
                                  }}
                                >
                                  {ULdtl.name}
                                </h6>
                                <small>{ULdtl.email}</small>
                              </div>
                              <div className="ml-auto text-right">
                                <h6
                                  className="mb-0"
                                  style={{
                                    lineHeight: "0.4",
                                    fontWeight: "700"
                                  }}
                                >
                                  {ULdtl.preferred_currency}
                                </h6>
                                <small>Total Balance</small>
                              </div>
                            </div>
                            <div className="mt-3">
                              <small>
                                User ID:{" "}
                                <span style={{ fontWeight: "700" }}>
                                  {ULdtl.profile_id}
                                </span>
                              </small>{" "}
                              <br />
                              <small>
                                User Type:{" "}
                                <span style={{ fontWeight: "700" }}>
                                  {UTListingHead}
                                </span>
                              </small>
                            </div>
                            <div className="mt-4">
                              <span className="inviteBtnInvert pt-2 pb-2 pr-3 pl-3 mr-3">
                                Interact
                              </span>
                              <span className="inviteBtnInvert pt-2 pb-2 pr-3 pl-3 mr-3">
                                Add Profile
                              </span>
                              <span className="inviteBtnInvert pt-2 pb-2 pr-3 pl-3 mr-3">
                                Full User Profile
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <div>
                  <img
                    onClick={UserTypesDrawerClose}
                    src={back}
                    className="img-fluid gxCheckback"
                  />
                  <button
                    className="btn accountBtn "
                    style={{ position: "absolute", bottom: "0" }}
                  >
                    Add User
                  </button>
                </div>
              </Drawer>
              {/* ----------------------------------------Gx  User Types End --------------------------------------- */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
