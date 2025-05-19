// Carrers.jsx
import React, { useState, useRef, useEffect } from "react";
import Image from "../assets/image3.png";
import {
  Briefcase,
  Building2,
  Globe,
  Clock,
  BadgeDollarSign,
  FileText,
  User,
  Mail,
  Phone,
  Upload,
} from "lucide-react";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

let members = [];

(async () => {
  try {
    const res = await fetch("https://86uwf9gt5m.execute-api.us-east-1.amazonaws.com/fetchjobs");
    const result = await res.json();
    members = result.body || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
})();

const Carrers = () => {
  const [minExperience, setMinExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [showJobTypeOptions, setShowJobTypeOptions] = useState(false);
  const [filtered, setFiltered] = useState(members);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat) => {
    setCategory((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    if (category.includes(cat)) {
      const relatedRoles =
        cat === "Technical"
          ? ["Java Developer", "React Developer", "Python Developer"]
          : ["HR Executive", "Business Analyst", "Content Writer"];
      setSelectedRoles((prev) =>
        prev.filter((role) => !relatedRoles.includes(role))
      );
    }
  };

  const handleRoleCheckboxChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleFilter = () => {
    const experienceValue = parseInt(minExperience);
    const result = members.filter((member) => {
      const matchesExperience = minExperience
        ? member.experience >= experienceValue
        : true;
      const matchesJobType = jobType
        ? member.JobType?.toLowerCase() === jobType.toLowerCase()
        : true;
      const matchesRole =
        selectedRoles.length > 0 ? selectedRoles.includes(member.role) : true;
      return matchesRole && matchesExperience && matchesJobType;
    });
    setFiltered(result);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
      });

    try {
      const base64Resume = await toBase64(formData.resume);

      const jsonData = {
        type: "application",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: selectedJob.role,
        resumeBase64: base64Resume,
      };
      console.log(jsonData);
      const res = await fetch(
        "https://86uwf9gt5m.execute-api.us-east-1.amazonaws.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      const result = await res.json();

      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ name: "", email: "", phone: "",role: "", resume: null });
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 3000);
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting application: " + err.message);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="w-full font-['Syne',_sans-serif]">
     
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1
            className={`text-3xl md:text-6xl font-extrabold mb-4 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Careers
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-1000 bg-white/10 backdrop-blur-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </span>
            <span className="mx-2">/</span>
            <span
              onClick={() => navigate("/carrers")}
              className="font-['Syne',_sans-serif] cursor-pointer text-white hover:text-blue-500 transition-colors duration-300"
            >
              Careers
            </span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-10">
        {/* Filters */}
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="text-xl font-semibold">Filter by</div>

          {/* Categories */}
          {["Technical", "Non-Technical"].map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={category.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}

          {/* Roles */}
          {category.includes("Technical") && (
            <div>
              <div className="font-medium mt-2">Technical Roles</div>
              {["Java Developer", "React Developer", "Python Developer"].map(
                (role) => (
                  <label key={role} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleCheckboxChange(role)}
                    />
                    <span>{role}</span>
                  </label>
                )
              )}
            </div>
          )}

          {category.includes("Non-Technical") && (
            <div>
              <div className="font-medium mt-2">Non-Technical Roles</div>
              {["HR Executive", "Business Analyst", "Content Writer"].map(
                (role) => (
                  <label key={role} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleCheckboxChange(role)}
                    />
                    <span>{role}</span>
                  </label>
                )
              )}
            </div>
          )}

          {/* Experience Dropdown */}
          <div className="relative ">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
            <select
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              className="pl-10 border border-gray-300 rounded px-4 py-2 w-full cursor-pointer"
            >
              <option value="">Min Experience</option>
              {[0, 1, 2, 3, 4, 5].map((val) => (
                <option key={val} value={val}>
                  {val}+
                </option>
              ))}
            </select>
          </div>

          {/* Job Type Dropdown */}
          <div className="relative ">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
            <input
              type="text"
              value={jobType}
              placeholder="Job Type"
              readOnly
              onClick={() => setShowJobTypeOptions(!showJobTypeOptions)}
              className="pl-10 placeholder-black border border-gray-300 text-black rounded px-4 py-2 w-full cursor-pointer"
            />
            {showJobTypeOptions && (
              <div className="absolute bg-white border border-gray-300 rounded mt-1 w-full shadow z-10">
                {["Internship", "Full Time"].map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setJobType(type);
                      setShowJobTypeOptions(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleFilter}
            className="bg-black text-white py-2 rounded w-full hover:bg-gray-700 mt-2"
          >
            Search
          </button>
        </div>

        {/* Job Listings */}
        <div className="w-full lg:w-3/4 space-y-6">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold mt-10">
              No jobs found as per your selection.
            </div>
          ) : (
            filtered.map((job, idx) => (
              <div
                key={idx}
                className="border border-gray-300 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  {job.role}
                </h2>
                <div className="text-sm space-y-1 mt-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" /> {job.role}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> {job.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <PiGraduationCapDuotone className="w-4 h-4" />{" "}
                    {job.qualification}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {job.experience} 
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeDollarSign className="w-4 h-4" /> {job.package}
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" /> {job.job_type}
                  </div>
                </div>
                <button
                  onClick={() => handleApplyClick(job)}
                  className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>

        {/* Modal */}
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 bg-white bg-opacity-40  w-screen z-50 flex items-start justify-center overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-5xl relative max-h-screen  max-w-20xl overflow-y-auto">
              <h2 className="text-4xl font-bold mb-4">
                Apply for {selectedJob.role}
              </h2>

              <div className="mb-6 space-y-2 text-sm ">
                <p>
                  <strong>Department:</strong> {selectedJob.department}
                </p>
                <p>
                  <strong>Type:</strong> {selectedJob.site}
                </p>
                <p>
                  <strong>Experience:</strong> {selectedJob.experience} 
                </p>
                <p>
                  <strong>Salary:</strong> {selectedJob.package}
                </p>
                <p>
                  <strong>Job Type:</strong> {selectedJob.job_type}
                </p>
                <p>
                  <strong>Qualification</strong> {selectedJob.qualification}
                </p>

                <div className="mt-4 whitespace-pre-wrap text-justify">
                  <p className="font-semibold text-xl">Job Description:</p>
                  <p className="text-sm ">
                    {selectedJob.description}
                    {"\n\n"}
                    <p className=" text-xl font-semibold">
                      Key Responsibilities:
                    </p>
                    {selectedJob.responsibility}
                    {"\n\n"}
                    <p className="font-semibold text-xl">Required Skills:</p>-
                    {selectedJob.skills}
                    {"\n\n"}
                    <p className="font-semibold text-xl">
                      Preferred Qualifications:
                    </p>
                    {selectedJob.qualification}
                    {"\n\n"}
                    <p className="font-semibold text-xl"></p>
                   
                  </p>
                </div>
              </div>

              {/* Application Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="pl-10 w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="pl-10 w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="pl-10 w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="role"
                    placeholder="Job Role"
                    value={selectedJob.role}
                    readOnly
                    className="pl-10 w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div className="relative">
                  <Upload className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFormChange}
                    className="pl-10 w-full border border-gray-300 rounded px-4 py-2"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showSuccessPopup && (
          <div className="fixed bottom-6 right-6 z-50 bg-black-500 text-black px-6 py-3 rounded shadow-lg animate-slide-up">
            Applied Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrers;