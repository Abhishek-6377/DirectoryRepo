import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGlobe, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Papa from "papaparse";

const Directory = () => {
  const [data, setData] = useState([]);
  const [hoveredPerson, setHoveredPerson] = useState(null);
  const rowRefs = useRef([]);
  const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRT6mgdQZB3HW3rCU6JicoqskcD-D4ER0REXqisr2HIYh4Jk0yLD7TZgYr-ldX5a_vKnO2mUuVhDpD6/pub?output=csv&t=${Date.now()}`;

  // Helper: parse DD/MM/YYYY dates
  function parseCustomDate(str) {
    if (!str) return null;
    const [datePart] = str.split(",");
    const [day, month, year] = datePart.trim().split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(sheetURL);
        const csv = await response.text();

        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const normalized = results.data.map((row) => {
              const entry = {};
              for (const key in row) {
                if (key && typeof key === "string") {
                  const normalizedKey = key.trim().toLowerCase();
                  entry[normalizedKey] = row[key]?.trim() || "";
                }
              }
              return entry;
            });

            // Get IST current date at midnight
            const now = new Date();
            const istOffset = 5.5 * 60 * 60 * 1000;
            const utcMidnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
            const todayISTMidnight = new Date(utcMidnight + istOffset);

            const yesterdayISTMidnight = new Date(todayISTMidnight.getTime() - 24 * 60 * 60 * 1000);
            // Filter valid approved users before today IST
            const approvedUsers = normalized.filter((person) => {
              if (
                !person.approvedat ||
                person.approved?.toLowerCase() !== "yes" ||
                !person.name?.trim()
              ) return false;

              const approvedAt = parseCustomDate(person.approvedat);
              if (!approvedAt || isNaN(approvedAt.getTime())) return false;

              // Only include if approved date is before today IST
              return approvedAt < yesterdayISTMidnight;
            });

            setData(approvedUsers);
          },
        });
      } catch (err) {
        console.error("Error fetching CSV:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-row");
          }
        });
      },
      { threshold: 0.1 }
    );

    rowRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      rowRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [data]);

  return (
    <div className="relative min-h-screen bg-[#FFF3F1] overflow-x-hidden">
      <section className="top-space-padding mt-12 pb-0 relative z-10">
        {/* Background animations */}
        <div className="fixed top-[120px] ml-20 hidden xl:block animate-spin-slow z-0">
          <img src="/demo-data-analysis-bg-01.webp" alt="BG Animation 1" />
        </div>
        <div className="fixed bottom-[600px] left-80 hidden xl:block animate-float z-0">
          <img src="/demo-data-analysis-bg-03.webp" alt="BG Animation 2" />
        </div>
        <div className="fixed bottom-[50px] left-0 hidden xl:block animate-float z-0">
          <img src="/demo-data-analysis-bg-02.webp" alt="BG Animation 3" />
        </div>

        <div className="relative z-10 p-6 md:px-8 mx-auto">
          <h1 className="text-3xl text-center font-bold text-black mb-6">Member Directory</h1>

          {hoveredPerson && (
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-5 rounded-xl bg-neutral-800 text-white border border-gray-700 shadow-lg max-w-xs w-[90%] md:w-auto">
              <h3 className="font-semibold text-xl mb-3">{hoveredPerson.name || "N/A"}</h3>
              <p className="text-gray-300 mb-2">{hoveredPerson.company || "N/A"}, {hoveredPerson.city || "N/A"}</p>
              {hoveredPerson.linkedin && (
                <a href={hoveredPerson.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline text-sm mb-1">
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
              )}
              {hoveredPerson.website && (
                <a href={hoveredPerson.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:underline text-sm">
                  <FaGlobe className="mr-1" />
                  {hoveredPerson.website.replace(/^https?:\/\//, "")}
                </a>
              )}
            </div>
          )}

          {/* Header row */}
          <div className="hidden md:grid grid-cols-7 gap-6 font-semibold text-sm mb-6 border-b border-gray-400 pb-2 text-gray-700">
            <div>Name</div>
            <div>Company</div>
            <div>LinkedIn</div>
            <div>Website</div>
            <div>City</div>
            <div>WhatsApp</div>
            <div>Email</div>
          </div>

          {/* Directory list */}
          <div className="space-y-4">
            {data.map((person, index) => (
              <div
                key={index}
                ref={(el) => (rowRefs.current[index] = el)}
                className="opacity-0 transform translate-y-8 transition duration-700 ease-out border border-gray-300 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 hover:bg-pink-100"
                onMouseEnter={() => setHoveredPerson(person)}
                onMouseLeave={() => setHoveredPerson(null)}
              >
                <p className="text-black font-medium">{person.name || "N/A"}</p>
                <p>{person.company || "N/A"}</p>
                <a href={person.linkedin || "#"} target="_blank" rel="noopener noreferrer" className={`text-blue-600 truncate hover:underline ${!person.linkedin ? "pointer-events-none opacity-50" : ""}`}>
                  <FaLinkedin className="inline mr-1" /> LinkedIn
                </a>
                <a href={person.website || "#"} target="_blank" rel="noopener noreferrer" className={`text-green-600 truncate hover:underline ${!person.website ? "pointer-events-none opacity-50" : ""}`}>
                  <FaGlobe className="inline mr-1" />
                  {person.website ? person.website.replace(/^https?:\/\//, "") : "N/A"}
                </a>
                <p>{person.city || "N/A"}</p>
                <a href={`https://wa.me/6377022509?text=Hello%20${encodeURIComponent(person.name || "")}%20from%20${encodeURIComponent(person.company || "")}%20👋`} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 text-center">
                  <FaWhatsapp className="inline mr-1" />Request For Number
                </a>
                <a href={`mailto:${person.email}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-500 text-center">
                  <FaEnvelope className="inline mr-1" />Request For Mail ID
                  {/* {person.email || "N/A"} */}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Background visuals */}
        <div className="fixed -right-40 bottom-[20px] md:bottom-[-150px] lg:w-[65%] md:w-full z-0">
          <img src="/demo-data-analysis-bg-05.webp" alt="Floating Visual" />
        </div>
        <div className="fixed -right-40 bottom-[-330px] z-0 animate-float">
          <img src="/demo-data-analysis-bg-04.webp" alt="Floating Visual" />
        </div>
      </section>

      <style>{`
        .animate-row {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Directory;
