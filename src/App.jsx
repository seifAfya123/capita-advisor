import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import ServicesPage from "./pages/client/ServicesPage";
import ServiceDetails from "./pages/client/ServiceDetails";
import Home from "./pages/client/Home";
import RegisterCompanyPage from "./pages/client/RegisterCompanyPage";
import RegisterFormPage from "./pages/client/RegisterFormPage";
import ContactUsPage from "./pages/client/ContactUsPage";
import { links } from "./utils/paths";
import BlogDetailsPage from "./pages/client/BlogDetailsPage";
import BlogsPage from "./pages/client/BlogsPage";
import LoginPage from "./pages/admin/LoginPage";
import DashbordContactReqs from "./pages/admin/DashbordContactReqs";
import DashbordOurServices from "./pages/admin/DashbordOurServices";
import DashbordInfo from "./pages/admin/DashbordInfo";
import DashbordOurBlogs from "./pages/admin/DashbordOurBlogs";
import DashbordCompanyReg from "./pages/admin/DashbordCompanyReg";
import CreateOrEditService from "./pages/admin/CreateOrEditService";
import CreateFormPage from "./pages/admin/CreateFormPage";
import FormRequests from "./pages/admin/FormRequests";
import DashboardCreateEditBlog from "./pages/admin/DashboardCreateEditBlog";

export default function App() {
  return (
    <Router>
      <div className="text-[#191970]">
        <Routes>
          {/* *** Client URLs *** */}
          <Route path="/" element={<Home />} />
          <Route path={links.ourService} element={<ServicesPage />} />
          <Route
            path={`${links.serviceDetails}/:id`}
            element={<ServiceDetails />}
          />
          <Route
            path={links.registerCompany}
            element={<RegisterCompanyPage />}
          />
          <Route path={links.registerForm} element={<RegisterFormPage />} />
          <Route path={links.contactUs} element={<ContactUsPage />} />
          <Route
            path={`${links.blogDetails}/:id`}
            element={<BlogDetailsPage />}
          />
          <Route path={links.blogs} element={<BlogsPage />} />
          {/* *** Dashbaord URLs *** */}
          <Route path={links.dashboardLogin} element={<LoginPage />} />
          <Route
            path={links.dashboard_ourContactRequests}
            element={<DashbordContactReqs />}
          />
          {/* Our services and its requests and its form */}
          <Route
            path={links.dashboard_ourServices}
            element={<DashbordOurServices />}
          />
          <Route
            path={`${links.dashboard_serivce_details}/:id`}
            element={<CreateOrEditService />}
          />
          <Route
            path={`${links.dashboard_blog_details}/:id`}
            element={<DashboardCreateEditBlog />}
          />

          {/* Our counteries and its requests and its form */}
          <Route
            path={links.dashboard_companyRegiseration}
            element={<DashbordCompanyReg />}
          />
          <Route
            path={links.dashboard_copmany_form}
            element={<CreateFormPage />}
          />
          <Route
            path={links.dashboard_copmany_requests}
            element={<FormRequests />}
          />
          {/* Our counteries and its requests and its form */}
          <Route path={links.dashboard_info} element={<DashbordInfo />} />
          {/* Our Blogs and its requests and its form */}
          <Route
            path={links.dashboard_ourBlogs}
            element={<DashbordOurBlogs />}
          />
          <Route
            path="/dashboard/contact-requests"
            element={<ContactUsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}
