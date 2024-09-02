import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./screen/component/Dashboard";
import Sidebar from "./screen/component/Sidebar";
import Logout from "./screen/pages/Logout";
import Dealer from "./screen/pages/Dealer";
import Dealerdetail from "./screen/pages/Dealerdetail";
import Order from "./screen/pages/Order";
import Pricelist from "./screen/pages/Pricelist";
import Report from "./screen/pages/Report";
import Booking from "./screen/pages/Booking";
import Notification from "./screen/pages/Notification";
import Payment from "./screen/pages/Payment";
import Rating from "./screen/pages/Rating";
import Setting from "./screen/pages/Setting";
import User from "./screen/pages/User";
import Orderdetail from "./screen/pages/Orderdetail";
import Userdetail from "./screen/pages/Userdetail";
import Paymentdetail from "./screen/pages/Paymentdetail";
import Settinguser from "./screen/pages/Settinguser";
import Settingdealer from "./screen/pages/Settingdealer";
import Settingpromotion from "./screen/pages/Settingpromotion";
import Settingpriceupload from "./screen/pages/Settingpriceupload";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dealer />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Pricelist" element={<Pricelist />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Settinguser" element={<Settinguser />} />
        <Route path="/Settingdealer" element={<Settingdealer />} />
        <Route path="/Settingpromotion" element={<Settingpromotion />} />
        <Route path="/Settingpriceupload" element={<Settingpriceupload />} />
        <Route path="/User" element={<User />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Dealerdetail" element={<Dealerdetail />} />
        <Route path="/Orderdetail" element={<Orderdetail />} />
        <Route path="/Userdetail" element={<Userdetail />} />
        <Route path="/Paymentdetail" element={<Paymentdetail />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
