import React, { Component } from "react";
import axios from "axios";
import btc from "../Images/exchanges/btc.png";
import eth from "../Images/exchanges/eth.png";
import kick from "../Images/exchanges/kick.png";
import dp from "../Images/round.png";
import wl1 from "../Images/wl1.png";
import wl2 from "../Images/wl2.png";
import wl3 from "../Images/wl3.png";
import wl4 from "../Images/wl4.png";
import profile from "../Images/drawer/profile.svg";
import { message } from "antd";
import "antd/dist/antd.css";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    // liquidity report
    changeBalance: false,
    changeBalancelib: false,
    totalasset: "",
    totalliabilities: "",
    cashposition: "",
    assetbreakdown: [],
    liabilitiesbreakdown: [],
    usdbalance: "",
    defusdbalanceAsset: "",
    defusdbalanceLiabilities: "",
    percentage: "",
    accountbal: "",
    currency: "",
    usdbalancelib: "",
    percentagelib: "",
    accountballib: "",
    currencylib: "",
    timetoliquidity: [
      { id: "0", name: "0" },
      { id: "0", name: "7" },
      { id: "0", name: "30" },
      { id: "0", name: "90" }
    ],
    selectdpdown: "0",
    liquidityDpdown: "",
    switchAsset: true,
    switchLiabilities: false,
    switchcashposition: false,
    // calculator
    daysValue: "",
    enterCurZero: "",
    enterCurSeven: "",
    enterCurThirty: "",
    enterCurNinety: "",
    usdprefix: "USD",
    assetcurrency: [
      { name: "US Dollars", short: "USD" },
      { name: "Bitcoin", short: "BTC" },
      { name: "Ethereum", short: "ETH" },
      { name: "Rupees", short: "INR" },
      { name: "Canadian Dollors", short: "CAD" },
      { name: "Britih Pounds", short: "GBP" }
    ],
    addZeroAssets: [
      {
        id: "FDSA",
        namezero: "",
        api_balance: null,
        dropdown1: "Currency",
        dropdown1_sht: "",
        balance1: null,
        balance2: null
      }
    ],
    addSevenAssets: [
      {
        id: "cjbv",
        nameseven: "",
        api_balance: null,
        dropdown1seven: "Currency",
        dropdown1seven_sht: "",
        balance1seven: null,
        balance2seven: null
      }
    ],
    addThirtyAssets: [
      {
        id: "cjbv",
        namethirty: "",
        api_balance: null,
        dropdown1thirty: "Currency",
        dropdown1thirty_sht: "",
        balance1thirty: null,
        balance2thirty: null
      }
    ],
    addNinetyAssets: [
      {
        id: "cjbv",
        nameninety: "",
        api_balance: null,
        dropdown1ninety: "Currency",
        dropdown1ninety_sht: "",
        balance1ninety: null,
        balance2ninety: null
      }
    ],

    //tractio
    radiocheck: 1,
    // login page
    logemail: "",
    logpassword: "",
    loader: false,
    searchedR: [],
    searchingResult: "",
    accountdp: dp,
    accountname: "Shorupan P",
    accountamount: "Super Admin",
    myaccwallet: [
      { id: "1", walletname: wl1, amount: "$13,424.04" },
      { id: "2", walletname: wl2, amount: "$424.01" },
      { id: "3", walletname: wl3, amount: "$424.01" },
      { id: "4", walletname: wl4, amount: "$424.01" }
    ],

    toggle: true,
    showDivBox: false,
    portfolio: true,

    // Registaration page
    reset: true,
    loginwithgx: true,

    // Registaration page end

    // Email Autofill
    email: "",
    // Email Autofill end

    // Navbar
    selectflag:
      "https://apimachine-s3.s3.us-east-2.amazonaws.com/GeneralStorage/5ec98fc1b952a32857146676276.png",
    top: false,
    right: false,
    submenu: true,

    //sticky bar
    marketvalue: 0.0,
    costbasis: 0.0,
    netfiat: 0.0,
    pastday: 0.0,
    alltimereturn: 0.0,
    switchcolor: true,

    // Drawer cards
    gxUYesDetails: false,
    gxUNoDetails: false,
    gxRegEmailCode: "",
    gxRegEmail: "",
    gxRegCreatepass: "",
    gxRegConfirmpass: "",
    gxRegUsername: "",
    RegUserInfo: "Username",
    gxUserYN: false,
    gxUserYNDetails: [],
    gxCheckEmail: "",
    allUsersList: [],
    allBusinessList: [],
    UTListingHead: "",
    GxCheckVisibleDrawer: false,
    visibleDrawer: false,
    GxRegistrationDrawer: false,
    GxRegUserName: true,
    GxRegCreatePassword: false,
    GxRegConfirmPassword: false,
    GxRegAPIpage: false,
    GxRegOtp: false,
    GxRegAPIpageTwo: false,
    UserTypesDrawer: false,
    CheckLoad: false,
    drawerCards: [
      {
        profile: profile,
        cardHeader: "User",
        cardPara:
          "An accounting professional is a user who provides a service to AccountingTool Users.",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List",
        price: "1,467"
      },
      {
        profile: profile,
        cardHeader: "Business",
        price: "467",
        cardPara:
          "A business is a AccountingTool user who has added one or more business profiles.",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List"
      },
      {
        profile: profile,
        cardHeader: "Accountant",
        price: "467",
        cardPara:
          "An Accounting Firm is a Accounting Tool Business User who has upgraded their account by adding one of more Accountant users as employees.",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List"
      },
      {
        profile: profile,
        cardHeader: "Tax Department",
        price: "467",
        cardPara:
          "A Tax Departnment is an AccountingTool Business User who has upgraded their account to a Tax Department.",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List"
      },
      {
        profile: profile,
        cardHeader: "Admin",
        price: "467",
        cardPara:
          "An Admin is a AccountingTool user that is given administrative priveldges by a Super Admin",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List"
      },
      {
        profile: profile,
        cardHeader: "Support Agent",
        price: "467",
        cardPara:
          "A Support Agent is an AccountingTool user that is given Support Agent privledges by an Admin user.",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List"
      },
      {
        profile: profile,
        cardHeader: "Support Admin",
        price: "1",
        cardPara: "There is only one Super Agent. #TheDon",
        btnOne: "Invite Link",
        btnTwo: "Manual",
        btnThree: "User List"
      }
    ],
    // preloader spinner
    spinner: false,
    open: false,
    currencydrawer: false,
    // navbar
    traction: "Traction",
    subToggleMain: "Sub Menu 1",
    subTogglemanagement: "Sub Menu 1",
    subToggleApps: "Sub Menu 1"
  };
  // calculator -----------------------------------------------------------------------------
  makeid = length => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  // Zero days------------------------------------------------------------------------------------
  addZeroAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      namezero: "",
      dropdown1: "Currency",
      dropdown1_sht: "",
      balance1: null,
      api_balance: null,
      balance2: null
    };
    this.setState({
      addZeroAssets: [...this.state.addZeroAssets, formData]
    });
  };
  currncyConvert = async (e, id) => {
    let n1 = this.state.addZeroAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1 = parseInt(e.target.value);
    n1[0].balance2 = e.target.value * n1[0].api_balance;
    this.setState({
      [e.target.name]: e.target.value,
      addZeroAssets: [...this.state.addZeroAssets]
    });
  };
  selectassetCurrency = async (printCur, id) => {
    let n1 = this.state.addZeroAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1 = printCur.name;
    n1[0].dropdown1_sht = printCur.short;
    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balance = res.data[
          `${printCur.short.toLowerCase()}_usd`
        ].toFixed(2);
      });
    this.setState({
      addZeroAssets: [...this.state.addZeroAssets]
    });
  };

  inputChangezero = async (e, id) => {
    let n1 = this.state.addZeroAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].namezero = e.target.value;

    this.setState({
      addZeroAssets: [...this.state.addZeroAssets]
    });
  };
  // sevendays----------------------------------------------------------------------------
  addSevenAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      nameseven: "",
      dropdown1seven: "Currency",
      dropdown1seven_sht: "",
      balance1seven: null,
      api_balanceseven: null,
      balance2seven: null
    };
    this.setState({
      addSevenAssets: [...this.state.addSevenAssets, formData]
    });
  };
  currncyConvertseven = async (e, id) => {
    let n1 = this.state.addSevenAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1seven = parseInt(e.target.value);
    n1[0].balance2seven = e.target.value * n1[0].api_balanceseven;

    this.setState({
      [e.target.name]: e.target.value,
      addSevenAssets: [...this.state.addSevenAssets]
    });
  };
  selectassetCurrencyseven = async (printCur, id) => {
    let n1 = this.state.addSevenAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1seven = printCur.name;
    n1[0].dropdown1seven_sht = printCur.short;
    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balanceseven = res.data[
          `${printCur.short.toLowerCase()}_usd`
        ].toFixed(2);
      });
    this.setState({ addSevenAssets: [...this.state.addSevenAssets] });
  };
  inputChangeseven = async (e, id) => {
    let n1 = this.state.addSevenAssets.filter(ele => {
      return ele.id == id;
    });

    n1[0].nameseven = e.target.value;

    this.setState({
      addSevenAssets: [...this.state.addSevenAssets]
    });
  };
  // Thirtydays----------------------------------------------------------------------------
  addThirtyAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      namethirty: "",
      dropdown1thirty: "Currency",
      dropdown1thirty_sht: "",
      balance1thirty: null,
      api_balancethirty: null,
      balance2thirty: null
    };
    this.setState({
      addThirtyAssets: [...this.state.addThirtyAssets, formData]
    });
  };
  currncyConvertthirty = async (e, id) => {
    let n1 = this.state.addThirtyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1thirty = parseInt(e.target.value);
    n1[0].balance2thirty = e.target.value * n1[0].api_balancethirty;
    // n1[0].namethirty = this.state.namethirty;

    this.setState({
      [e.target.name]: e.target.value,
      addThirtyAssets: [...this.state.addThirtyAssets]
    });
  };
  selectassetCurrencythirty = async (printCur, id) => {
    let n1 = this.state.addThirtyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1thirty = printCur.name;
    n1[0].dropdown1thirty_sht = printCur.short;

    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balancethirty = res.data[
          `${printCur.short.toLowerCase()}_usd`
        ].toFixed(2);
      });
    this.setState({ addThirtyAssets: [...this.state.addThirtyAssets] });
  };
  inputChangethirty = async (e, id) => {
    let n1 = this.state.addThirtyAssets.filter(ele => {
      return ele.id == id;
    });

    n1[0].namethirty = e.target.value;

    this.setState({
      addThirtyAssets: [...this.state.addThirtyAssets]
    });
  };

  // Ninetytdays----------------------------------------------------------------------------
  addNinetyAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      nameninety: "",
      dropdown1ninety: "Currency",
      dropdown1ninety_sht: "",
      balance1ninety: null,
      api_balanceninety: null,
      balance2ninety: null
    };
    this.setState({
      addNinetyAssets: [...this.state.addNinetyAssets, formData]
    });
  };
  currncyConvertninety = async (e, id) => {
    let n1 = this.state.addNinetyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1ninety = parseInt(e.target.value);
    n1[0].balance2ninety = e.target.value * n1[0].api_balanceninety;

    this.setState({
      [e.target.name]: e.target.value,
      addNinetyAssets: [...this.state.addNinetyAssets]
    });
  };
  selectassetCurrencyninety = async (printCur, id) => {
    let n1 = this.state.addNinetyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1ninety = printCur.name;
    n1[0].dropdown1ninety_sht = printCur.short;
    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balanceninety = res.data[
          `${printCur.short.toLowerCase()}_usd`
        ].toFixed(2);
      });
    this.setState({
      addNinetyAssets: [...this.state.addNinetyAssets]
    });
  };
  inputChangeninety = async (e, id) => {
    let n1 = this.state.addNinetyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].nameninety = e.target.value;

    this.setState({
      addNinetyAssets: [...this.state.addNinetyAssets]
    });
  };
  // liquidity report
  liquidityDpdown = async printdpdown => {
    this.setState({ selectdpdown: printdpdown.name });
    await axios
      .get(
        `https://accountingtool.apimachine.com/get-cash-position?email=${this.state.logemail}&tol_type=${this.state.selectdpdown}`
      )
      .then(res => {
        console.log("Liquidity", this.state.assetbreakdown);

        this.setState({
          totalasset: res.data.data.Total_Asset.toFixed(2),
          totalliabilities: res.data.data.Total_Liability.toFixed(2),
          cashposition: res.data.data.Cash_Position.toFixed(2),
          assetbreakdown: res.data.data.Asset_Breakdown,
          liabilitiesbreakdown: res.data.data.Liability_Breakdown
        });
      });
  };
  liquidityReport = async () => {
    await axios
      .get(
        `https://accountingtool.apimachine.com/get-cash-position?email=${this.state.logemail}&tol_type=${this.state.selectdpdown}`
      )
      .then(res => {
        console.log("Liquidity", this.state.assetbreakdown);

        this.setState({
          defusdbalanceAsset: res.data.data.Asset_Breakdown[0],
          defusdbalanceLiabilities: res.data.data.Liability_Breakdown[0],
          totalasset: res.data.data.Total_Asset.toFixed(2),
          totalliabilities: res.data.data.Total_Liability.toFixed(2),
          cashposition: res.data.data.Cash_Position.toFixed(2),
          assetbreakdown: res.data.data.Asset_Breakdown,
          liabilitiesbreakdown: res.data.data.Liability_Breakdown
        });
      });

    console.log("defbal", this.state.defusdbalanceAsset);
  };

  accountBalanceAsset = accountBalanceAsset => {
    this.setState({
      changeBalance: true,
      usdbalance: accountBalanceAsset.usd_balance.toFixed(2),
      percentage: accountBalanceAsset.percentage.toFixed(2),
      currency: accountBalanceAsset.currency_type,
      accountbal: accountBalanceAsset.account_balance.toFixed(2)
    });
  };
  accountBalanceLiabilities = accountBalanceLiabilities => {
    this.setState({
      changeBalancelib: true,
      usdbalancelib: accountBalanceLiabilities.usd_balance.toFixed(2),
      percentagelib: accountBalanceLiabilities.percentage.toFixed(2),
      currencylib: accountBalanceLiabilities.currency_type,
      accountballib: accountBalanceLiabilities.account_balance.toFixed(2)
    });
  };

  switchAssetFun = () => {
    this.setState({
      switchAsset: true,
      switchLiabilities: false,
      switchCashposition: false
    });
  };
  switchLiabilitiesFun = () => {
    this.setState({
      switchAsset: false,
      switchLiabilities: true,
      switchCashposition: false
    });
  };
  switchCashpositionFun = () => {
    this.setState({
      switchAsset: false,
      switchLiabilities: false,
      switchCashposition: true
    });
  };
  inputChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  calculatorAssetPost = e => {
    e.preventDefault();

    let body = {
      email: this.state.logemail,
      asset: true,
      asset_detail: [
        {
          tol_type: 0,
          asset_data: []
        },
        {
          tol_type: 7,
          asset_data: []
        },
        {
          tol_type: 30,
          asset_data: []
        },
        {
          tol_type: 90,
          asset_data: []
        }
      ]
    };
    this.state.addZeroAssets.forEach(ele => {
      let arr1 = {
        account_name: ele.namezero,
        currency_type: ele.dropdown1_sht,
        account_balance: ele.balance1
      };
      body.asset_detail[0].asset_data.push(arr1);
    });
    this.state.addSevenAssets.forEach(ele => {
      let arr2 = {
        account_name: ele.nameseven,
        currency_type: ele.dropdown1seven_sht,
        account_balance: ele.balance1seven
      };
      body.asset_detail[1].asset_data.push(arr2);
    });
    this.state.addThirtyAssets.forEach(ele => {
      let arr3 = {
        account_name: ele.namethirty,
        currency_type: ele.dropdown1thirty_sht,
        account_balance: ele.balance1thirty
      };
      body.asset_detail[2].asset_data.push(arr3);
    });
    this.state.addNinetyAssets.forEach(ele => {
      let arr4 = {
        account_name: ele.nameninety,
        currency_type: ele.dropdown1ninety_sht,
        account_balance: ele.balance1ninety
      };
      body.asset_detail[3].asset_data.push(arr4);
    });
    console.log(body);

    axios
      .post(
        "https://accountingtool.apimachine.com/calculate-assests-and-liabilities",
        body
      )
      .then(res => {
        console.log("Asset calculator post", res.data);
        console.log("Asset  post", this.state.balance1);
      });
    window.location.href = "/calculator1";
  };
  calculatorLiabilitiesPost = async e => {
    let body = {
      email: this.state.logemail,
      liability: true,
      liability_detail: [
        {
          tol_type: 0,
          liability_data: []
        },
        {
          tol_type: 7,
          liability_data: []
        },
        {
          tol_type: 30,
          liability_data: []
        },
        {
          tol_type: 90,
          liability_data: []
        }
      ]
    };
    this.state.addZeroAssets.forEach(ele => {
      let arr1 = {
        account_name: ele.namezero,
        currency_type: ele.dropdown1_sht,
        account_balance: ele.balance1
      };
      body.liability_detail[0].liability_data.push(arr1);
    });
    this.state.addSevenAssets.forEach(ele => {
      let arr2 = {
        account_name: ele.nameseven,
        currency_type: ele.dropdown1seven_sht,
        account_balance: ele.balance1seven
      };
      body.liability_detail[1].liability_data.push(arr2);
    });
    this.state.addThirtyAssets.forEach(ele => {
      let arr3 = {
        account_name: ele.namethirty,
        currency_type: ele.dropdown1thirty_sht,
        account_balance: ele.balance1thirty
      };
      body.liability_detail[2].liability_data.push(arr3);
    });
    this.state.addNinetyAssets.forEach(ele => {
      let arr4 = {
        account_name: ele.nameninety,
        currency_type: ele.dropdown1ninety_sht,
        account_balance: ele.balance1ninety
      };
      body.liability_detail[3].liability_data.push(arr4);
    });
    console.log(body);
    axios
      .post(
        "https://accountingtool.apimachine.com/calculate-assests-and-liabilities",
        body
      )
      .then(res => {
        console.log("Liabilitiees calculator post", res.data);
        console.log("selectedCurrecny", this.state.addZeroAssets);
      });

    this.liquidityReport();
  };
  // calculator end-----------------------------------------------------------------------------

  // navbar drawerfunction
  navTraction = () => {
    this.setState({
      traction: "Traction"
    });
  };
  navTraining = () => {
    this.setState({
      traction: "Training"
    });
  };
  navAt = () => {
    this.setState({
      traction: "At"
    });
  };
  subToggleMainOne = () => {
    this.setState({
      subToggleMain: "Sub Menu 1"
    });
  };
  subToggleMainTwo = () => {
    this.setState({
      subToggleMain: "Sub Menu 2"
    });
  };
  subToggleMainThree = () => {
    this.setState({
      subToggleMain: "Sub Menu 3"
    });
  };
  subToggleMgmtOne = () => {
    this.setState({
      subTogglemanagement: "Sub Menu 1"
    });
  };
  subToggleMgmtTwo = () => {
    this.setState({
      subTogglemanagement: "Sub Menu 2"
    });
  };
  subToggleMgmtThree = () => {
    this.setState({
      subTogglemanagement: "Sub Menu 3"
    });
  };
  subToggleAppsOne = () => {
    this.setState({
      subToggleApps: "Sub Menu 1"
    });
  };
  subToggleAppsTwo = () => {
    this.setState({
      subToggleApps: "Sub Menu 2"
    });
  };
  subToggleAppsThree = () => {
    this.setState({
      subToggleApps: "Sub Menu 3"
    });
  };

  handleClick = () => {
    this.setState({ open: prev => !prev });
  };
  handleClickAway = () => {
    this.setState({ open: false });
  };
  // Main -> Add
  navDraweropen = () => {
    this.setState({ visibleDrawer: true });
  };
  navDrawerclose = () => {
    this.setState({ visibleDrawer: false });
  };
  GxCheckopen = drawerCards => {
    this.setState({
      GxCheckVisibleDrawer: true,
      UTListingHead: drawerCards.cardHeader
    });
  };
  GxCheckclose = () => {
    this.setState({ GxCheckVisibleDrawer: false });
  };
  UserTypesDrawerOpen = drawerCards => {
    this.setState({
      UserTypesDrawer: true,
      UTListingHead: drawerCards.cardHeader
    });
  };
  UserTypesDrawerClose = () => {
    this.setState({
      UserTypesDrawer: false
    });
  };
  GxRegistrationopen = () => {
    this.setState({ GxRegistrationDrawer: true });
  };
  GxRegistrationclose = () => {
    this.setState({ GxRegistrationDrawer: false });
  };
  getUsersList = async () => {
    await axios
      .get("https://accountingtool.apimachine.com/accountingtooluserslist")
      .then(res => {
        this.setState({ allUsersList: res.data.data });
      });
  };
  getBusinessList = async () => {
    await axios
      .get(
        "https://accountingtool.apimachine.com/allAtCorporateUsersList?atCorporate_account=true"
      )
      .then(res => {
        this.setState({ allBusinessList: res.data.data });
      });
  };
  RegGxUsername = () => {
    this.setState({
      RegUserInfo: "Username",
      gxRegUsername: "",
      gxRegEmail: "",
      gxRegCreatepass: "",
      gxRegConfirmpass: "",
      gxRegEmailCode: ""
    });
  };
  submitGxRegistration = e => {
    e.preventDefault();
    this.setState({ CheckLoad: true });
    let body = {
      username: this.state.gxRegUsername,
      email: this.state.gxRegEmail,
      password: this.state.gxRegCreatepass,
      ref_affiliate: "1",
      account_type: "Personal",
      signedup_app: "AT"
    };
    axios
      .post("https://gxauth.apimachine.com/gx/user/signup", body)
      .then(res => {
        console.log("submit", res);
        if (res.data.status === true) {
          message.success(res.data.message, 8);
          this.setState({
            CheckLoad: false,
            RegUserInfo: "EmailCode"
          });
        } else {
          this.setState({ CheckLoad: false });
          message.error(res.data.message, 8);
        }
      });
  };
  submitMailCodeGxRegistration = e => {
    e.preventDefault();
    this.setState({ CheckLoad: true });
    let body = {
      username: this.state.gxRegUsername,
      email: this.state.gxRegEmail,
      password: this.state.gxRegCreatepass,
      ref_affiliate: "1",
      account_type: "Personal",
      signedup_app: "BOS",
      code: this.state.gxRegEmailCode
    };
    axios
      .post("https://gxauth.apimachine.com/gx/user/confirm", body)
      .then(res => {
        // console.log(res)
        if (res.data.status === true) {
          message.success(res.data.message, 8);
          this.setState({
            CheckLoad: false,
            gxUYesDetails: true,
            gxUNoDetails: false
          });
        } else {
          message.error(res.data.message, 8);
          this.setState({ CheckLoad: false });
        }
      });
  };
  RegGxEmail = () => {
    this.setState({ RegUserInfo: "Email" });
  };
  RegGxCreatepass = () => {
    this.setState({ RegUserInfo: "Createpass" });
  };
  RegGxConfirmpass = () => {
    this.setState({ RegUserInfo: "Confirmpass" });
  };
  GxRegUserNameFun = () => {
    this.setState({
      GxRegUserName: true,
      GxRegCreatePassword: false,
      GxRegConfirmPassword: false,
      GxRegAPIpage: false,
      GxRegOtp: false,
      GxRegAPIpageTwo: false
    });
  };
  GxRegCreatePasswordFun = () => {
    this.setState({
      GxRegUserName: false,
      GxRegCreatePassword: true,
      GxRegConfirmPassword: false,
      GxRegAPIpage: false,
      GxRegOtp: false,
      GxRegAPIpageTwo: false
    });
  };
  GxRegConfirmPasswordFun = () => {
    this.setState({
      GxRegUserName: false,
      GxRegCreatePassword: false,
      GxRegConfirmPassword: true,
      GxRegAPIpage: false,
      GxRegOtp: false,
      GxRegAPIpageTwo: false
    });
  };
  GxRegAPIpageFun = () => {
    this.setState({
      GxRegUserName: false,
      GxRegCreatePassword: false,
      GxRegConfirmPassword: false,
      GxRegAPIpage: true,
      GxRegOtp: false,
      GxRegAPIpageTwo: false
    });
  };
  GxRegOtpFun = () => {
    this.setState({
      GxRegUserName: false,
      GxRegCreatePassword: false,
      GxRegConfirmPassword: false,
      GxRegAPIpage: false,
      GxRegOtp: true,
      GxRegAPIpageTwo: false
    });
  };
  GxRegAPIpageTwoFun = () => {
    this.setState({
      GxRegUserName: false,
      GxRegCreatePassword: false,
      GxRegConfirmPassword: false,
      GxRegAPIpage: false,
      GxRegOtp: false,
      GxRegAPIpageTwo: true
    });
  };
  checkforGX = async e => {
    this.setState({ CheckLoad: true });
    await axios
      .get(
        `https://comms.globalxchange.com/user/details/get?email=${this.state.gxCheckEmail}`
      )
      .then(res => {
        console.log("gxCheckEmail", res);
        this.setState({ gxUserYNDetails: res.data, CheckLoad: false });
        if (res.data.status === true) {
          message.success("GX User Verified, Register To Bos", 10);
          this.setState({ gxUYesDetails: true });
        } else {
          message.error("Not GX User, Register To GX", 10);
          this.setState({ gxUNoDetails: true });
        }
      });
    this.setState({ gxUserYN: true });
  };

  backToGxCheck = () => {
    this.setState({
      gxUserYN: false,
      gxUserYNDetails: [],
      gxCheckEmail: "",
      gxUYesDetails: false,
      gxUNoDetails: false
    });
  };
  // liquidity report
  liquidityDpdown = printdpdown => {
    this.setState({ selectdpdown: printdpdown.name });
  };
  switchAssetFun = () => {
    this.setState({
      switchAsset: true,
      switchLiabilities: false
    });
  };
  switchLiabilitiesFun = () => {
    this.setState({
      switchAsset: false,
      switchLiabilities: true
    });
  };

  //Traction
  onChangeRadio = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      radiocheck: e.target.value
    });
  };
  // calculator
  switchCalculatorFunction = () => {
    this.setState({
      swithcalculator: true
    });
  };

  // login page
  loginVerify = e => {
    e.preventDefault();
    this.setState({ loader: true });
    let body = {
      email: this.state.logemail
      // password: this.state.logpassword
    };
    axios
      .post("https://accountingtool.apimachine.com/registeruser", body)
      .then(res => {
        console.log("email", res);
        if (res.data.message === " logged in as accounting tool user!") {
          window.location.href = "/traction";
          localStorage.setItem("logemail", this.state.logemail);
          // message.success(res.data.message, 8);
        } else {
          this.setState({ loader: false });
          // message.error(res.data.message, 8);
        }
      });
  };
  //login page end

  // Registaration page

  toReset = () => {
    this.setState({
      reset: false
    });
  };

  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  inputChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value,
      convertedResultZero: this.state.enterCurZero * this.state.storecurrency,
      convertedResultSeven: this.state.enterCurSeven * this.state.storecurrency,
      convertedResultThirty:
        this.state.enterCurThirty * this.state.storecurrency,
      convertedResultNinety:
        this.state.enterCurNinety * this.state.storecurrency
    });
  };

  toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ [side]: open });
  };
  toggleDrawerCurrency = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ ...this.state.currencydrawer, [side]: open });
  };
  // spinner preloader
  spinnerFunction = () => {
    this.setState({ spinner: true });
  };

  myAccount = async showprofile => {
    await this.setState({
      accountdp: showprofile.dp,
      accountname: showprofile.profilename,
      accountamount: showprofile.amount
    });
    console.log("myaccount", this.state.accountdp);
  };

  onExchange = async addexchange => {
    await this.setState({
      exlistdetail: addexchange.formData.Name,
      exlistdetailWeb: addexchange.formData.Website,
      exlistdetailInfo: addexchange.formData.Instructions,
      exlistdetaillogo: addexchange.formData.logo
    });
    console.log("exdet", this.state.exlistdetail);
  };

  getFlagCountry = async () => {
    await axios
      .get(
        "https://storeapi.apimachine.com/dynamic/InstaCryptoPurchase/Countrydem?key=b6459026-2535-434e-bc4c-893fae5fc87d"
      )
      .then(response => {
        this.setState({
          flagcountry: response.data.data
        });
      });
  };

  settingCountryFlag = async country => {
    await this.setState({
      selectflag: country.formData.Flag
    });
    console.log("countryflag", this.state.selectflag);
  };
  // calculator
  selectassetCurrency = async printCur => {
    await this.setState({
      selectCurname: printCur.name,
      selectCurshort: printCur.short
    });
    await axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${this.state.selectCurshort}`
      )
      .then(res => {
        console.log(
          "api",
          res.data,
          `${this.state.selectCurshort.toLowerCase()}_usd`
        );
        this.setState({
          storecurrency:
            res.data[`${this.state.selectCurshort.toLowerCase(1)}_usd`]
        });
      });
  };

  // search function
  searchAccount = async e => {
    e.preventDefault();
    let typeval = e.target.value;
    let cryptoList = this.state.account;
    cryptoList = cryptoList.filter(crypto => {
      return (
        crypto.profilename.toLowerCase().search(typeval.toLowerCase()) !== -1
      );
    });
    await this.setState({ searchedR: cryptoList });
  };
  componentWillMount() {
    this.setState({ searchedR: this.state.account });
  }

  componentDidMount() {
    this.getFlagCountry();
    window.scrollTo(0, 0);
    this.setState({ logemail: localStorage.getItem("logemail") });
    this.getUsersList();
    this.getBusinessList();
  }
  render() {
    console.log("sdc", this.state.enterCurZero);
    console.log("Convertedresult", this.state.convertedResultZero);

    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          loginVerify: this.loginVerify,
          toReset: this.toReset,
          // Email Autofill
          inputChange: this.inputChange,
          // Email Autofill end

          //Navbar
          subToggleAppsThree: this.subToggleAppsThree,
          subToggleAppsTwo: this.subToggleAppsThree,
          subToggleAppsOne: this.subToggleAppsOne,
          subToggleMgmtThree: this.subToggleMgmtThree,
          subToggleMgmtTwo: this.subToggleMgmtTwo,
          subToggleMgmtOne: this.subToggleMgmtOne,
          subToggleMainOne: this.subToggleMainOne,
          subToggleMainTwo: this.subToggleMainTwo,
          subToggleMainThree: this.subToggleMainThree,
          navTraining: this.navTraining,
          navTraction: this.navTraction,
          navAt: this.navAt,
          getFlagCountry: this.getFlagCountry,
          settingCountryFlag: this.settingCountryFlag,
          toggleDrawer: this.toggleDrawer,
          toggleDrawerCurrency: this.toggleDrawerCurrency,
          // Add
          RegGxCreatepass: this.RegGxCreatepass,
          RegGxConfirmpass: this.RegGxConfirmpass,
          RegGxEmail: this.RegGxEmail,
          RegGxUsername: this.RegGxUsername,
          submitMailCodeGxRegistration: this.submitMailCodeGxRegistration,
          submitGxRegistration: this.submitGxRegistration,
          backToGxCheck: this.backToGxCheck,
          checkforGX: this.checkforGX,
          getUsersList: this.getUsersList,
          navDraweropen: this.navDraweropen,
          navDrawerclose: this.navDrawerclose,
          UserTypesDrawerOpen: this.UserTypesDrawerOpen,
          UserTypesDrawerClose: this.UserTypesDrawerClose,
          GxCheckopen: this.GxCheckopen,
          GxCheckclose: this.GxCheckclose,
          GxRegistrationopen: this.GxRegistrationopen,
          GxRegistrationclose: this.GxRegistrationclose,
          GxRegUserNameFun: this.GxRegUserNameFun,
          GxRegCreatePasswordFun: this.GxRegCreatePasswordFun,
          GxRegConfirmPasswordFun: this.GxRegConfirmPasswordFun,
          GxRegAPIpageFun: this.GxRegAPIpageFun,
          GxRegOtpFun: this.GxRegOtpFun,
          GxRegAPIpageTwoFun: this.GxRegAPIpageTwoFun,

          // spinner preloader
          spinnerFunction: this.spinnerFunction,
          // tax
          handleClick: this.handleClick,
          handleClickAway: this.handleClickAway,
          onExchange: this.onExchange,
          myAccount: this.myAccount,
          // search
          searchAccount: this.searchAccount,
          //traction
          onChangeRadio: this.onChangeRadio,
          switchCalculatorFunction: this.switchCalculatorFunction,
          selectassetCurrency: this.selectassetCurrency,
          liquidityDpdown: this.liquidityDpdown,
          switchAssetFun: this.switchAssetFun,
          switchLiabilitiesFun: this.switchLiabilitiesFun,
          // calculator
          makeid: this.makeid,
          inputChange: this.inputChange,
          inputChangeseven: this.inputChangeseven,
          inputChangethirty: this.inputChangethirty,
          inputChangeninety: this.inputChangeninety,
          inputChangezero: this.inputChangezero,

          currncyConvert: this.currncyConvert,
          currncyConvertseven: this.currncyConvertseven,
          currncyConvertthirty: this.currncyConvertthirty,
          currncyConvertninety: this.currncyConvertninety,
          selectassetCurrencyseven: this.selectassetCurrencyseven,
          selectassetCurrencythirty: this.selectassetCurrencythirty,
          selectassetCurrencyninety: this.selectassetCurrencyninety,

          addZeroAssetsFun: this.addZeroAssetsFun,
          addSevenAssetsFun: this.addSevenAssetsFun,

          addThirtyAssetsFun: this.addThirtyAssetsFun,
          addNinetyAssetsFun: this.addNinetyAssetsFun,

          selectassetCurrency: this.selectassetCurrency,
          liquidityDpdown: this.liquidityDpdown,
          switchAssetFun: this.switchAssetFun,
          switchLiabilitiesFun: this.switchLiabilitiesFun,
          switchCashpositionFun: this.switchCashpositionFun,
          accountBalanceAsset: this.accountBalanceAsset,
          accountBalanceLiabilities: this.accountBalanceLiabilities,
          liquidityReport: this.liquidityReport,
          calculatorLiabilitiesPost: this.calculatorLiabilitiesPost,

          calculatorAssetPost: this.calculatorAssetPost
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
