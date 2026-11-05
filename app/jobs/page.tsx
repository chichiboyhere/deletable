"use client";

import React, { useState } from "react";
import {
  Shield,
  UploadCloud,
  CheckCircle,
  UserCheck,
  FileText,
  Award,
  PhoneCall,
  Briefcase,
  AlertCircle,
  Clock,
  Send,
  Sparkles,
} from "lucide-react";

export default function App() {
  const [selectedRole, setSelectedRole] = useState("Security Guards");
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "1-2 years",
    bio: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  // Job categories with details
  const roles = [
    {
      id: "Security Guards",
      title: "Security Guards",
      desc: "Static & mobile property protection, perimeter access control & vigilance.",
      badge: "High Demand",
      icon: Shield,
    },
    {
      id: "Event Bouncers",
      title: "Event Bouncers",
      desc: "Crowd management, VIP gatekeeping, and conflict de-escalation for events.",
      badge: "Popular",
      icon: UserCheck,
    },
    {
      id: "Body Guards",
      title: "Body Guards",
      desc: "Close protection for high-profile individuals, executives, and VIP guests.",
      badge: "Specialized",
      icon: Award,
    },
    {
      id: "Ushers",
      title: "Ushers",
      desc: "Guest relations, seating management, and event hospitality oversight.",
      badge: "Flexible",
      icon: Briefcase,
    },
  ];

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (uploadedFile) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (
      allowedTypes.includes(uploadedFile.type) ||
      uploadedFile.name.match(/\.(pdf|doc|docx)$/i)
    ) {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid PDF or DOC/DOCX document.");
    }
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Client-side submit handling (Simulated submission or real Formspree handling)
  const handleSubmit = async (e) => {
    // If Formspree endpoint is set in action attribute, regular form submit can handle it,
    // but we add AJAX intercept for smooth UX feedback without page redirection if desired.
    e.preventDefault();
    setSubmissionStatus("submitting");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const endpoint = form.action || "https://formspree.io/f/xnnzknqp";

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormState({
          fullName: "",
          email: "",
          phone: "",
          experience: "1-2 years",
          bio: "",
        });
        setFile(null);
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased dark:bg-gray-800 dark:text-white">
      {/* Top Banner Notice */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>
            Official Career Portal — Direct Application for Security & Event
            Personnel
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 shadow-sm">
            <Shield className="w-3.5 h-3.5" /> Direct Recruitment
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight leading-tight">
            Join Our Elite Security Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Are you a disciplined security professional, usher, or bouncer?
            Submit your details and CV directly to our HR team through this
            portal for priority placement in upcoming assignments.
          </p>
        </div>

        {/* Success Modal / Banner */}
        {submissionStatus === "success" && (
          <div className="mb-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm text-center max-w-3xl mx-auto transform transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950">
              Application Received!
            </h3>
            <p className="text-emerald-800 mt-2 text-sm sm:text-base">
              Thank you for applying. Our recruitment management team will
              review your application and CV. If your profile matches our
              requirements, we will contact you directly via phone or email.
            </p>
            <button
              onClick={() => setSubmissionStatus("idle")}
              className="mt-4 px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Submit Another Application
            </button>
          </div>
        )}

        {/* Error Notification */}
        {submissionStatus === "error" && (
          <div className="mb-10 p-4 bg-rose-50 border border-rose-200 rounded-xl text-center max-w-3xl mx-auto flex items-center justify-center gap-3 text-rose-800">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="text-sm font-medium">
              There was an issue submitting your application. Please check your
              connection and try again.
            </span>
            <button
              onClick={() => setSubmissionStatus("idle")}
              className="text-xs underline font-bold ml-2 hover:text-rose-950"
            >
              Retry
            </button>
          </div>
        )}

        {/* Application Form */}
        <form
          action="https://formspree.io/f/xnnzknqp"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl shadow-blue-950/5 border border-slate-200 overflow-hidden"
        >
          <div className="p-6 sm:p-10 md:p-12 space-y-10 dark:bg-gray-800">
            {/* Step 1: Role Selection */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-150">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold">
                    1
                  </span>
                  Select Desired Role
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  Required *
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <label
                      key={role.id}
                      className={`relative flex flex-col p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 select-none ${
                        isSelected
                          ? "border-blue-900 bg-blue-50/50 shadow-md ring-2 ring-blue-900/10"
                          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="job_role"
                        value={role.id}
                        checked={isSelected}
                        onChange={() => setSelectedRole(role.id)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`p-2.5 rounded-xl ${isSelected ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-600"}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-blue-200 text-blue-950"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {role.badge}
                        </span>
                      </div>
                      <span className="font-bold text-blue-950 text-base mb-1">
                        {role.title}
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {role.desc}
                      </p>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Personal Information */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-150">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold dark:bg-gray-800">
                    2
                  </span>
                  Personal Details
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  All fields required *
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formState.fullName}
                    onChange={handleInputChange}
                    placeholder="Emeka Kadri"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-800 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="emeka.kadri@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-800 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Phone Number (WhatsApp Preferred) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="+234 703 000 0000"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-800 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Years of Relevant Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formState.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-800 text-sm outline-none transition bg-white"
                  >
                    <option value="Entry Level (< 1 year)">
                      Entry Level (&lt; 1 year)
                    </option>
                    <option value="1-2 years">1 - 2 years</option>
                    <option value="3-5 years">3 - 5 years</option>
                    <option value="5+ years">5+ years (Experienced)</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="bio"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Brief Profile / Cover Summary
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={formState.bio}
                  onChange={handleInputChange}
                  placeholder="Mention any physical fitness level, certifications (e.g., First Aid, Martial Arts, SIA license), or past notable security assignments..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-800 text-sm outline-none transition resize-y"
                ></textarea>
              </div>
            </div>

            {/* Step 3: CV Upload */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-150">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold">
                    3
                  </span>
                  Upload Curriculum Vitae (CV)
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  PDF, DOC, DOCX up to 10MB
                </span>
              </div>

              {/* File Dropzone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ${
                  dragActive
                    ? "border-blue-900 bg-blue-50/70 scale-[1.005]"
                    : file
                      ? "border-emerald-500 bg-emerald-50/30"
                      : "border-slate-300 hover:border-blue-400 bg-slate-50/50"
                }`}
              >
                <input
                  type="file"
                  id="cv_upload"
                  name="attachment"
                  required={!file}
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                {!file ? (
                  <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
                    <div className="p-4 rounded-full bg-blue-100 text-blue-900">
                      <UploadCloud className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        <span className="text-blue-900 underline">
                          Click to upload
                        </span>{" "}
                        or drag and drop your CV here
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Supported formats: PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 bg-white border border-emerald-200 rounded-xl max-w-lg mx-auto shadow-sm">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="text-left truncate">
                        <p className="text-sm font-bold text-slate-800 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                      }}
                      className="text-xs font-semibold text-rose-600 hover:text-rose-800 px-3 py-1.5 rounded-md hover:bg-rose-50 transition z-20"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Action Area */}
            <div className="pt-4 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-blue-900" />
                <span>
                  Applications are reviewed within 24–48 working hours.
                </span>
              </div>

              <button
                type="submit"
                disabled={submissionStatus === "submitting"}
                className="w-full sm:w-auto px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submissionStatus === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Informational Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Vetted Deployment
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Successful candidates undergo criminal background verification
                and physical fitness assessment.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                No WhatsApp Spam
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Submissions through this form are logged directly into
                management email for priority review.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Event & Corporate Roles
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                We recruit both temporary event personnel (bouncers/ushers) and
                permanent security guards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
