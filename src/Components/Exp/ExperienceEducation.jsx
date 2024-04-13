/* eslint-disable no-unused-vars */
import React from "react";

function ExperienceEducation() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Backend Developer Intern</h3>
          <p className="text-gray-600 mb-2">EnergyBae Pvt. Ltd.</p>
          <p className="text-gray-600 mb-2">February 2023 - March 2023</p>
          <ul className="list-disc list-inside">
            <li>Developed and integrated APIs for email and PDF generation using Java.</li>
            <li>Optimized API performance, resulting in a 40% reduction in email generation time.</li>
            <li>Contributed to projects like TaskMaster and Job Application Tracker.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Internshala Student Partner</h3>
          <p className="text-gray-600 mb-2">Internshala</p>
          <p className="text-gray-600 mb-2">June 2022 - August 2022</p>
          <ul className="list-disc list-inside">
            <li>Promoted Internshala's initiatives and opportunities on campus.</li>
            <li>Organized and conducted workshops and events.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Bachelor of Engineering in Electronics and Telecommunication</h3>
          <p className="text-gray-600 mb-2">Dr. D. Y. Patil Institute of Technology, Pimpri</p>
          <p className="text-gray-600 mb-2">2019 - Present</p>
          <p className="text-gray-600">CGPA: 9.32</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Higher Secondary Education (12th Grade)</h3>
          <p className="text-gray-600 mb-2">Year of Passing: 2018</p>
          <p className="text-gray-600 mb-2">Percentage: 88%</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Secondary Education (10th Grade)</h3>
          <p className="text-gray-600 mb-2">Year of Passing: 2016</p>
          <p className="text-gray-600">Percentage: 95.20%</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceEducation;
