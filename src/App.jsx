import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import ServicesPage from "./pages/client/ServicesPage";
import ServiceDetails from "./pages/client/ServiceDetails";
import Home from "./pages/client/Home";
import RegisterCompanyPage from "./pages/client/RegisterCompanyPage";
import RegisterFormPage from "./pages/client/RegisterFormPage";
import ContactUsPage from "./pages/client/ContactUsPage";
import LoginPage from "./pages/admin/LoginPage";
import { links } from "./utils/paths";


export default function App() {
  return (
    <Router>
      <div className="text-[#191970]">
        <Routes>
          {/* *** Client URLs *** */}
          <Route path="/" element={<Home />} />
          <Route path={links.ourService} element={<ServicesPage />} />
          <Route path={links.serviceDetails} element={<ServiceDetails />} />
          <Route path={links.registerCompany} element={<RegisterCompanyPage />} />
          <Route path={links.registerForm} element={<RegisterFormPage />} />
          <Route path={links.contactUs} element={<ContactUsPage />} />
          <Route path={links.blog} element={<ContactUsPage />} />
          {/* *** Dashbaord URLs *** */}
          <Route path="/dashbaord/login" element={<LoginPage />} />
          <Route path="/dashboard/our-services" element={<ServicesPage />} />
          <Route path="/dashboard/service/details" element={<ServiceDetails />} />
          <Route path="/dashboard/register/countries" element={<RegisterCompanyPage />} />
          <Route path="/dashboard/register/form" element={<RegisterFormPage />} />
          <Route path="/dashboard/register/requests" element={<RegisterFormPage />} />
          <Route path="/dashboard/contact-requests" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
