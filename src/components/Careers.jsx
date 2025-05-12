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

const members = [
  {
    role: "Java Developer",
    department: "Developer",
    Type: "On-Site",
    experience: 1,
    Salary: "4-5 LPA",
    JobType: "Full Time",
    qualification:
      "Bachelor’s degree in Computer Science, Engineering, or related field",
  },
  {
    role: "Java Developer",
    department: "Developer",
    Type: "Remote/On-Site",
    experience: 0,
    Salary: "4-5 LPA",
    JobType: "Internship",
    qualification:
      "Alice is a strategic thinker with experience in large-scale projects.",
  },
  {
    role: "Java Developer",
    department: "Developer",
    Type: "Remote",
    experience: 1,
    Salary: "4-5 LPA",
    JobType: "Full Time",
    qualification:
      "Alice is a strategic thinker with experience in large-scale projects.",
  },
];

const Carrers = () => {
  //const [role, setRole] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [showJobTypeOptions, setShowJobTypeOptions] = useState(false);
  const [filtered, setFiltered] = useState(members);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const handleCategoryChange = (cat) => {
    setCategory((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    // Reset roles if category is removed
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
    const result = members.filter((member) => {
      const matchesExperience = minExperience
        ? member.experience >= parseInt(minExperience)
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
    setIsModalOpen(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", resume: null });
  };

  return (
    <div className="w-screen font-['Syne',_sans-serif]   ">
      <div
        className=" min-w-screen min-h-screen   "
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="absolute inset-0 flex flex-col items-center left-5 justify-center text-white text-center px-4">
          <h1
            className={`text-2xl md:text-7xl font-extrabold font-['Syne',_sans-serif] leading-tight text-white mb-6 transition-opacity duration-2000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Careers
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-2000 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Home</span> <span className="mx-2">/</span>{" "}
            <span className="font-['Syne',_sans-serif]">Carrers</span>
          </div>
        </div>
      </div>
      <div className="relative w-screen  bg-[#091D31] ">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4">
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-2000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Optional Hero Text */}
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col max-w-8xl text-xl min-h-screen lg:flex-row gap-5  bg-white text-black p-6">
        {/* Filter Section */}
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="font-semibold text-2xl">Category</div>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={category.includes("Technical")}
                onChange={() => handleCategoryChange("Technical")}
              />
              <span>Technical</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={category.includes("Non-Technical")}
                onChange={() => handleCategoryChange("Non-Technical")}
              />
              <span>Non-Technical</span>
            </label>
          </div>

          {category.includes("Technical") && (
            <div className="mt-4">
              <div className="font-medium mb-2">Technical Roles</div>
              {["Java Developer", "React Developer", "Python Developer"].map(
                (role) => (
                  <label key={role} className="flex items-center space-x-2">
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
            <div className="mt-4">
              <div className="font-medium mb-2">Non-Technical Roles</div>
              {["HR Executive", "Business Analyst", "Content Writer"].map(
                (role) => (
                  <label key={role} className="flex items-center space-x-2">
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

          <div className="relative">
            <Clock className="absolute top-3 left-3 text-black w-5 h-5" />
            <select
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              className="pl-10 border border-gray-300 rounded px-4 py-2 w-full appearance-none bg-white cursor-pointer"
            >
              <option value="">Min Experience (Years)</option>
              <option value="0-1">0-1</option>
              <option value="1-2">1-2</option>
              <option value="2-3">2-3</option>
              <option value="3-4">3-4</option>
              <option value="4-5">4-5</option>
              <option value="5+">5+</option>
            </select>
          </div>

          <div className="relative">
            <Globe className="absolute top-3 left-3  w-5 h-5" />
            <input
              type="text"
              placeholder="Job Type"
              value={jobType}
              onClick={() => setShowJobTypeOptions(!showJobTypeOptions)}
              readOnly
              className="pl-10 border border-gray-300 rounded px-4 py-2 w-full cursor-pointer"
            />
            {showJobTypeOptions && (
              <div className="absolute z-10 bg-white border  border-gray-300 rounded mt-1 w-full shadow">
                <div
                  onClick={() => {
                    setJobType("Internship");
                    setShowJobTypeOptions(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 bg-white cursor-pointer"
                >
                  Internship
                </div>
                <div
                  onClick={() => {
                    setJobType("Full Time");
                    setShowJobTypeOptions(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 bg-white cursor-pointer"
                >
                  Full Time
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleFilter}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 w-full"
          >
            Search
          </button>
        </div>

        {/* Job Cards Section */}
        <div className="max-w-3xl lg:w-3/4 space-y-10 py-5 bg-white">
          {filtered.map((member, idx) => (
            <div
              key={idx}
              className=" border border-gray-400 p-6 rounded-lg bg-white text-black shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2"
            >
              <h2 className="text-xl font-semibold  flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-500" />
                {member.role}
              </h2>
              <p className="text-sm  flex items-center gap-2">
                <Globe className="w-4 h-4 " />
                {member.Type}
              </p>
              <p className="text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {member.department}
              </p>
              <p className="text-sm   flex items-center gap-2">
                <PiGraduationCapDuotone className="w-4 h-4" />
                {member.qualification}
              </p>
              <p className="text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 " />
                {member.experience} yrs
              </p>
              <p className="text-sm  flex items-center gap-2">
                <BadgeDollarSign className="w-4 h-4" />
                {member.Salary}
              </p>
              <p className="text-sm flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {member.JobType}
              </p>
              <button
                onClick={() => handleApplyClick(member)}
                className="w-[100px] bg-black text-white py-2 text-sm rounded hover:bg-gray-700"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
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
                <strong>Type:</strong> {selectedJob.Type}
              </p>
              <p>
                <strong>Experience:</strong> {selectedJob.experience} yrs
              </p>
              <p>
                <strong>Salary:</strong> {selectedJob.Salary}
              </p>
              <p>
                <strong>Job Type:</strong> {selectedJob.JobType}
              </p>
              <p>
                <strong>Description:</strong> {selectedJob.qualification}
              </p>

              <div className="mt-4 whitespace-pre-wrap text-justify">
                <p className="font-semibold text-xl">Job Description:</p>
                <p className="text-sm ">
                  We are looking for a skilled and passionate Java Developer to
                  join our development team. The ideal candidate will be
                  responsible for designing, implementing, and maintaining
                  Java-based applications that are high-volume and low-latency,
                  delivering high availability and performance.
                  {"\n\n"}
                  <p className=" text-xl font-semibold">
                    Key Responsibilities:
                  </p>
                  - Design, develop, and maintain efficient, reusable, and
                  reliable Java code. - Collaborate with cross-functional teams
                  to define, design, and ship new features. - Ensure
                  performance, quality, and responsiveness of applications. -
                  Identify bottlenecks and bugs, and devise solutions to them. -
                  Support continuous improvement by investigating alternatives
                  and technologies.
                  {"\n\n"}
                  <p className="font-semibold text-xl">Required Skills:</p>-
                  Strong proficiency in Java (Core and Advanced) - Experience
                  with Spring / Spring Boot framework - Familiarity with RESTful
                  APIs, JSON, and web services - Knowledge of databases (MySQL,
                  PostgreSQL, etc.) - Understanding of version control systems
                  like Git - Basic knowledge of front-end technologies (HTML,
                  CSS, JavaScript) is a plus - Strong problem-solving skills and
                  attention to detail
                  {"\n\n"}
                  <p className="font-semibold text-xl">
                    Preferred Qualifications:
                  </p>
                  - Bachelor’s degree in Computer Science, Engineering, or
                  related field - Experience with cloud platforms (AWS, Azure)
                  is a plus - Familiarity with Agile development methodologies
                  {"\n\n"}
                  <p className="font-semibold text-xl">Compensation:</p>- 4–5
                  LPA (Full-Time) / Competitive Stipend (Internship)
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
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrers;
