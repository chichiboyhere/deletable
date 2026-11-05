"use client";

import React, { useState, ChangeEvent, FormEvent, DragEvent } from "react";
import {
  Shield,
  UploadCloud,
  CheckCircle,
  UserCheck,
  FileText,
  Award,
  Briefcase,
  AlertCircle,
  Clock,
  Send,
  Sparkles,
} from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  bio: string;
}

export default function App() {
  const [selectedRole, setSelectedRole] = useState<string>("Security Guards");
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    experience: "1-2 years",
    bio: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (uploadedFile: File) => {
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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    const form = e.currentTarget;
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
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased dark:bg-gray-800 dark:text-white">
      <div className="bg-blue-900 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>
            Official Career Portal — Direct Application for Security & Event
            Personnel
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 shadow-sm">
            <Shield className="w-3.5 h-3.5" /> Direct Recruitment
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight leading-tight dark:text-white">
            Join Our Elite Security Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Are you a disciplined security professional, usher, or bouncer?
            Submit your details and CV directly to our HR team through this
            portal for priority placement in upcoming assignments.
          </p>
        </div>

        {submissionStatus === "success" && (
          <div className="mb-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950">
              Application Received!
            </h3>
            <p className="text-emerald-800 mt-2 text-sm sm:text-base">
              Thank you for applying. Our recruitment management team will
              review your application and CV.
            </p>
            <button
              onClick={() => setSubmissionStatus("idle")}
              className="mt-4 px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Submit Another Application
            </button>
          </div>
        )}

        {submissionStatus === "error" && (
          <div className="mb-10 p-4 bg-rose-50 border border-rose-200 rounded-xl text-center max-w-3xl mx-auto flex items-center justify-center gap-3 text-rose-800">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="text-sm font-medium">
              There was an issue submitting your application. Please try again.
            </span>
          </div>
        )}

        <form
          action="https://formspree.io/f/xnnzknqp"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-blue-950/5 border border-slate-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-6 sm:p-10 md:p-12 space-y-10">
            {/* Step 1 */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-gray-700">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold">
                    1
                  </span>
                  Select Desired Role
                </h2>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
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
                          ? "border-blue-900 bg-blue-50/50 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-900/10"
                          : "border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300"
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
                          className={`p-2.5 rounded-xl ${
                            isSelected
                              ? "bg-blue-900 text-white"
                              : "bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-blue-200 text-blue-950"
                              : "bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          {role.badge}
                        </span>
                      </div>
                      <span className="font-bold text-blue-950 dark:text-white text-base mb-1">
                        {role.title}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {role.desc}
                      </p>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-gray-700">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold">
                    2
                  </span>
                  Personal Details
                </h2>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  All fields required *
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
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
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-800 dark:text-white text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
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
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-800 dark:text-white text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
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
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-800 dark:text-white text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Years of Relevant Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formState.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-800 dark:text-white text-sm outline-none transition"
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
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                >
                  Brief Profile / Cover Summary
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={formState.bio}
                  onChange={handleInputChange}
                  placeholder="Mention any physical fitness level, certifications, or past security assignments..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-800 dark:text-white text-sm outline-none transition resize-y"
                ></textarea>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-gray-700">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold">
                    3
                  </span>
                  Upload Curriculum Vitae (CV)
                </h2>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  PDF, DOC, DOCX up to 10MB
                </span>
              </div>

              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ${
                  dragActive
                    ? "border-blue-900 bg-blue-50/70"
                    : file
                      ? "border-emerald-500 bg-emerald-50/30"
                      : "border-slate-300 dark:border-gray-700 hover:border-blue-400 bg-slate-50/50 dark:bg-gray-900/50"
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
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <span className="text-blue-900 dark:text-blue-400 underline">
                          Click to upload
                        </span>{" "}
                        or drag and drop your CV here
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Supported formats: PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-emerald-200 rounded-xl max-w-lg mx-auto shadow-sm z-20 relative">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="text-left truncate">
                        <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
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
                      className="text-xs font-semibold text-rose-600 hover:text-rose-800 px-3 py-1.5 rounded-md hover:bg-rose-50 transition"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-blue-900 dark:text-blue-400" />
                <span>
                  Applications are reviewed within 24–48 working hours.
                </span>
              </div>

              <button
                type="submit"
                disabled={submissionStatus === "submitting"}
                className="w-full sm:w-auto px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submissionStatus === "submitting" ? (
                  <>
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
      </div>
    </div>
  );
}
