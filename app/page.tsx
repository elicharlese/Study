"use client";

import { useState, useEffect, useRef } from "react";

interface Minor {
  id: string;
  name: string;
}

interface Major {
  id: string;
  name: string;
  category: string;
  minors: Minor[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: "eng", name: "Engineering", icon: "⚙️" },
  { id: "cs", name: "Computer Science", icon: "💻" },
  { id: "biz", name: "Business", icon: "💼" },
  { id: "health", name: "Health Sciences", icon: "🏥" },
  { id: "sci", name: "Sciences", icon: "🔬" },
  { id: "arts", name: "Arts", icon: "🎨" },
  { id: "social", name: "Social Sciences", icon: "🌍" },
  { id: "law", name: "Law & Government", icon: "⚖️" },
  { id: "edu", name: "Education", icon: "📚" },
  { id: "agri", name: "Agriculture", icon: "🌾" },
  { id: "hum", name: "Humanities", icon: "📜" },
  { id: "tech", name: "Engineering Tech", icon: "🔧" },
  { id: "int", name: "Interdisciplinary", icon: "🔀" },
  { id: "trades", name: "Trades & Voc", icon: "🛠️" },
  { id: "emerging", name: "Emerging", icon: "🚀" },
];

const majors: Major[] = [
  { id: "1", name: "Computer Engineering", category: "eng", minors: [{ id: "m1", name: "VLSI Design" }, { id: "m2", name: "Embedded Systems" }, { id: "m3", name: "Robotics" }, { id: "m4", name: "Computer Vision" }] },
  { id: "2", name: "Civil Engineering", category: "eng", minors: [{ id: "m5", name: "Structural" }, { id: "m6", name: "Environmental" }, { id: "m7", name: "Construction" }, { id: "m8", name: "Geotechnical" }] },
  { id: "3", name: "Mechanical Engineering", category: "eng", minors: [{ id: "m9", name: "Thermal" }, { id: "m10", name: "Automotive" }, { id: "m11", name: "Aerospace" }, { id: "m12", name: "Biomechanical" }] },
  { id: "4", name: "Electrical Engineering", category: "eng", minors: [{ id: "m13", name: "Power Systems" }, { id: "m14", name: "Electronics" }, { id: "m15", name: "Communications" }, { id: "m16", name: "Control Systems" }] },
  { id: "5", name: "Chemical Engineering", category: "eng", minors: [{ id: "m17", name: "Process Engineering" }, { id: "m18", name: "Biochemical" }, { id: "m19", name: "Materials" }, { id: "m20", name: "Environmental" }] },
  { id: "6", name: "Aerospace Engineering", category: "eng", minors: [{ id: "m21", name: "Aerodynamics" }, { id: "m22", name: "Propulsion" }, { id: "m23", name: "Structures" }, { id: "m24", name: "Avionics" }] },
  { id: "7", name: "Biomedical Engineering", category: "eng", minors: [{ id: "m25", name: "Medical Devices" }, { id: "m26", name: "Tissue Engineering" }, { id: "m27", name: "Biomechanics" }, { id: "m28", name: "Imaging" }] },
  { id: "8", name: "Environmental Engineering", category: "eng", minors: [{ id: "m29", name: "Water Resources" }, { id: "m30", name: "Air Quality" }, { id: "m31", name: "Waste Management" }, { id: "m32", name: "Sustainability" }] },
  { id: "9", name: "Industrial Engineering", category: "eng", minors: [{ id: "m33", name: "Operations Research" }, { id: "m34", name: "Supply Chain" }, { id: "m35", name: "Ergonomics" }, { id: "m36", name: "Quality Engineering" }] },
  { id: "10", name: "Materials Science", category: "eng", minors: [{ id: "m37", name: "Metallurgy" }, { id: "m38", name: "Polymers" }, { id: "m39", name: "Ceramics" }, { id: "m40", name: "Nanomaterials" }] },
  { id: "11", name: "Petroleum Engineering", category: "eng", minors: [{ id: "m41", name: "Drilling" }, { id: "m42", name: "Reservoir" }, { id: "m43", name: "Production" }, { id: "m44", name: "Natural Gas" }] },
  { id: "12", name: "Nuclear Engineering", category: "eng", minors: [{ id: "m45", name: "Reactor Physics" }, { id: "m46", name: "Radiation Protection" }, { id: "m47", name: "Nuclear Fuels" }, { id: "m48", name: "Waste Management" }] },
  { id: "13", name: "Software Engineering", category: "eng", minors: [{ id: "m49", name: "Web Development" }, { id: "m50", name: "Mobile Apps" }, { id: "m51", name: "Cloud Computing" }, { id: "m52", name: "DevOps" }] },
  { id: "14", name: "Structural Engineering", category: "eng", minors: [{ id: "m53", name: "Bridge Engineering" }, { id: "m54", name: "Earthquake" }, { id: "m55", name: "Concrete Structures" }, { id: "m56", name: "Steel Structures" }] },
  { id: "15", name: "Marine Engineering", category: "eng", minors: [{ id: "m57", name: "Naval Architecture" }, { id: "m58", name: "Ocean Engineering" }, { id: "m59", name: "Marine Propulsion" }, { id: "m60", name: "Offshore Structures" }] },
  { id: "16", name: "Agricultural Engineering", category: "eng", minors: [{ id: "m61", name: "Farm Machinery" }, { id: "m62", name: "Irrigation" }, { id: "m63", name: "Food Processing" }, { id: "m64", name: "Bioenergy" }] },
  { id: "17", name: "Mining Engineering", category: "eng", minors: [{ id: "m65", name: "Mineral Processing" }, { id: "m66", name: "Mine Design" }, { id: "m67", name: "Rock Mechanics" }, { id: "m68", name: "Mine Safety" }] },
  { id: "18", name: "Geological Engineering", category: "eng", minors: [{ id: "m69", name: "Engineering Geology" }, { id: "m70", name: "Hydrogeology" }, { id: "m71", name: "Geotechnical" }, { id: "m72", name: "Geophysics" }] },
  { id: "19", name: "Automotive Engineering", category: "eng", minors: [{ id: "m73", name: "Vehicle Design" }, { id: "m74", name: "Powertrain" }, { id: "m75", name: "Automotive Electronics" }, { id: "m76", name: "Autonomous Vehicles" }] },
  { id: "20", name: "Robotics Engineering", category: "eng", minors: [{ id: "m77", name: "Industrial Robotics" }, { id: "m78", name: "Medical Robotics" }, { id: "m79", name: "AI Robotics" }, { id: "m80", name: "Humanoid Robots" }] },
  { id: "21", name: "Mechatronics", category: "eng", minors: [{ id: "m81", name: "Smart Systems" }, { id: "m82", name: "Automation" }, { id: "m83", name: "Sensors" }, { id: "m84", name: "Actuators" }] },
  { id: "22", name: "Construction Engineering", category: "eng", minors: [{ id: "m85", name: "Project Management" }, { id: "m86", name: "Construction Technology" }, { id: "m87", name: "Building Information Modeling" }, { id: "m88", name: "Sustainable Construction" }] },
  { id: "23", name: "Optical Engineering", category: "eng", minors: [{ id: "m89", name: "Photonics" }, { id: "m90", name: "Lasers" }, { id: "m91", name: "Imaging Systems" }, { id: "m92", name: "Fiber Optics" }] },
  { id: "24", name: "Systems Engineering", category: "eng", minors: [{ id: "m93", name: "Systems Architecture" }, { id: "m94", name: "Systems Integration" }, { id: "m95", name: "Requirements Engineering" }, { id: "m96", name: "Verification" }] },
  { id: "25", name: "Biotechnical Engineering", category: "eng", minors: [{ id: "m97", name: "Bioprocessing" }, { id: "m98", name: "Genetic Engineering" }, { id: "m99", name: "Bioinformatics" }, { id: "m100", name: "Biosensors" }] },
  { id: "26", name: "Artificial Intelligence", category: "cs", minors: [{ id: "m101", name: "Machine Learning" }, { id: "m102", name: "Deep Learning" }, { id: "m103", name: "NLP" }, { id: "m104", name: "Computer Vision" }] },
  { id: "27", name: "Data Science", category: "cs", minors: [{ id: "m105", name: "Big Data" }, { id: "m106", name: "Analytics" }, { id: "m107", name: "Data Engineering" }, { id: "m108", name: "Visualization" }] },
  { id: "28", name: "Cybersecurity", category: "cs", minors: [{ id: "m109", name: "Network Security" }, { id: "m110", name: "Cryptography" }, { id: "m111", name: "Penetration Testing" }, { id: "m112", name: "Security Operations" }] },
  { id: "29", name: "Cloud Computing", category: "cs", minors: [{ id: "m113", name: "Cloud Architecture" }, { id: "m114", name: "DevOps" }, { id: "m115", name: "Cloud Security" }, { id: "m116", name: "Serverless" }] },
  { id: "30", name: "Blockchain", category: "cs", minors: [{ id: "m117", name: "Smart Contracts" }, { id: "m118", name: "DeFi" }, { id: "m119", name: "NFTs" }, { id: "m120", name: "Consensus" }] },
  { id: "31", name: "Internet of Things", category: "cs", minors: [{ id: "m121", name: "Smart Devices" }, { id: "m122", name: "Edge Computing" }, { id: "m123", name: "IoT Security" }, { id: "m124", name: "Sensor Networks" }] },
  { id: "32", name: "AR/VR Development", category: "cs", minors: [{ id: "m125", name: "Augmented Reality" }, { id: "m126", name: "Virtual Reality" }, { id: "m127", name: "Mixed Reality" }, { id: "m128", name: "3D Interaction" }] },
  { id: "33", name: "Game Development", category: "cs", minors: [{ id: "m129", name: "Game Design" }, { id: "m130", name: "Game Engine" }, { id: "m131", name: "Graphics Programming" }, { id: "m132", name: "Game AI" }] },
  { id: "34", name: "Bioinformatics", category: "cs", minors: [{ id: "m133", name: "Computational Biology" }, { id: "m134", name: "Genomics" }, { id: "m135", name: "Protein Structure" }, { id: "m136", name: "Systems Biology" }] },
  { id: "35", name: "Computational Linguistics", category: "cs", minors: [{ id: "m137", name: "NLP" }, { id: "m138", name: "Machine Translation" }, { id: "m139", name: "Speech Recognition" }, { id: "m140", name: "Text Mining" }] },
  { id: "36", name: "Quantum Computing", category: "cs", minors: [{ id: "m141", name: "Quantum Algorithms" }, { id: "m142", name: "Quantum Information" }, { id: "m143", name: "Quantum Cryptography" }, { id: "m144", name: "Quantum Simulation" }] },
  { id: "37", name: "Distributed Systems", category: "cs", minors: [{ id: "m145", name: "Distributed Computing" }, { id: "m146", name: "Consensus" }, { id: "m147", name: "Replication" }, { id: "m148", name: "Microservices" }] },
  { id: "38", name: "Computer Vision", category: "cs", minors: [{ id: "m149", name: "Image Processing" }, { id: "m150", name: "Object Detection" }, { id: "m151", name: "Scene Understanding" }, { id: "m152", name: "Video Analysis" }] },
  { id: "39", name: "Human-Computer Interaction", category: "cs", minors: [{ id: "m153", name: "UX Design" }, { id: "m154", name: "Interaction Design" }, { id: "m155", name: "User Research" }, { id: "m156", name: "Accessibility" }] },
  { id: "40", name: "Algorithms", category: "cs", minors: [{ id: "m157", name: "Theory of Computation" }, { id: "m158", name: "Optimization" }, { id: "m159", name: "Graph Theory" }, { id: "m160", name: "Complexity Theory" }] },
  { id: "41", name: "Finance", category: "biz", minors: [{ id: "m161", name: "Corporate Finance" }, { id: "m162", name: "Investment Banking" }, { id: "m163", name: "Financial Analysis" }, { id: "m164", name: "Risk Management" }] },
  { id: "42", name: "Marketing", category: "biz", minors: [{ id: "m165", name: "Digital Marketing" }, { id: "m166", name: "Brand Management" }, { id: "m167", name: "Market Research" }, { id: "m168", name: "Consumer Behavior" }] },
  { id: "43", name: "Accounting", category: "biz", minors: [{ id: "m169", name: "Financial Accounting" }, { id: "m170", name: "Managerial Accounting" }, { id: "m171", name: "Auditing" }, { id: "m172", name: "Taxation" }] },
  { id: "44", name: "Management", category: "biz", minors: [{ id: "m173", name: "Strategic Management" }, { id: "m174", name: "Organizational Behavior" }, { id: "m175", name: "Leadership" }, { id: "m176", name: "Change Management" }] },
  { id: "45", name: "Entrepreneurship", category: "biz", minors: [{ id: "m177", name: "Venture Capital" }, { id: "m178", name: "Startup Management" }, { id: "m179", name: "Innovation" }, { id: "m180", name: "Business Planning" }] },
  { id: "46", name: "Supply Chain Management", category: "biz", minors: [{ id: "m181", name: "Logistics" }, { id: "m182", name: "Operations" }, { id: "m183", name: "Procurement" }, { id: "m184", name: "Inventory Management" }] },
  { id: "47", name: "Human Resources", category: "biz", minors: [{ id: "m185", name: "Talent Acquisition" }, { id: "m186", name: "Compensation" }, { id: "m187", name: "Employee Relations" }, { id: "m188", name: "HR Analytics" }] },
  { id: "48", name: "Business Analytics", category: "biz", minors: [{ id: "m189", name: "Predictive Analytics" }, { id: "m190", name: "Business Intelligence" }, { id: "m191", name: "Data Mining" }, { id: "m192", name: "Statistical Modeling" }] },
  { id: "49", name: "International Business", category: "biz", minors: [{ id: "m193", name: "Global Trade" }, { id: "m194", name: "Cross-Cultural Management" }, { id: "m195", name: "International Finance" }, { id: "m196", name: "Export/Import" }] },
  { id: "50", name: "Economics", category: "biz", minors: [{ id: "m197", name: "Microeconomics" }, { id: "m198", name: "Macroeconomics" }, { id: "m199", name: "Econometrics" }, { id: "m200", name: "Behavioral Economics" }] },
  { id: "51", name: "Medicine", category: "health", minors: [{ id: "m201", name: "Internal Medicine" }, { id: "m202", name: "Surgery" }, { id: "m203", name: "Pediatrics" }, { id: "m204", name: "Cardiology" }] },
  { id: "52", name: "Nursing", category: "health", minors: [{ id: "m205", name: "Critical Care" }, { id: "m206", name: "Pediatric Nursing" }, { id: "m207", name: "Psychiatric Nursing" }, { id: "m208", name: "Nurse Practitioner" }] },
  { id: "53", name: "Pharmacy", category: "health", minors: [{ id: "m209", name: "Clinical Pharmacy" }, { id: "m210", name: "Pharmaceutical Chemistry" }, { id: "m211", name: "Pharmacology" }, { id: "m212", name: "Pharmacy Practice" }] },
  { id: "54", name: "Dentistry", category: "health", minors: [{ id: "m213", name: "Orthodontics" }, { id: "m214", name: "Oral Surgery" }, { id: "m215", name: "Pediatric Dentistry" }, { id: "m216", name: "Periodontics" }] },
  { id: "55", name: "Physical Therapy", category: "health", minors: [{ id: "m217", name: "Sports Rehabilitation" }, { id: "m218", name: "Neurological PT" }, { id: "m219", name: "Pediatric PT" }, { id: "m220", name: "Orthopedic PT" }] },
  { id: "56", name: "Public Health", category: "health", minors: [{ id: "m221", name: "Epidemiology" }, { id: "m222", name: "Health Policy" }, { id: "m223", name: "Biostatistics" }, { id: "m224", name: "Environmental Health" }] },
  { id: "57", name: "Psychology", category: "health", minors: [{ id: "m225", name: "Clinical Psychology" }, { id: "m226", name: "Cognitive Psychology" }, { id: "m227", name: "Developmental Psychology" }, { id: "m228", name: "Social Psychology" }] },
  { id: "58", name: "Veterinary Medicine", category: "health", minors: [{ id: "m229", name: "Large Animal Medicine" }, { id: "m230", name: "Small Animal Medicine" }, { id: "m231", name: "Exotic Animals" }, { id: "m232", name: "Surgery" }] },
  { id: "59", name: "Occupational Therapy", category: "health", minors: [{ id: "m233", name: "Pediatric OT" }, { id: "m234", name: "Geriatric OT" }, { id: "m235", name: "Mental Health OT" }, { id: "m236", name: "Rehabilitation OT" }] },
  { id: "60", name: "Nutrition", category: "health", minors: [{ id: "m237", name: "Clinical Nutrition" }, { id: "m238", name: "Sports Nutrition" }, { id: "m239", name: "Community Nutrition" }, { id: "m240", name: "Food Science" }] },
  { id: "61", name: "Physics", category: "sci", minors: [{ id: "m241", name: "Quantum Physics" }, { id: "m242", name: "Astrophysics" }, { id: "m243", name: "Condensed Matter" }, { id: "m244", name: "Particle Physics" }] },
  { id: "62", name: "Chemistry", category: "sci", minors: [{ id: "m245", name: "Organic Chemistry" }, { id: "m246", name: "Inorganic Chemistry" }, { id: "m247", name: "Physical Chemistry" }, { id: "m248", name: "Analytical Chemistry" }] },
  { id: "63", name: "Biology", category: "sci", minors: [{ id: "m249", name: "Molecular Biology" }, { id: "m250", name: "Cell Biology" }, { id: "m251", name: "Ecology" }, { id: "m252", name: "Genetics" }] },
  { id: "64", name: "Mathematics", category: "sci", minors: [{ id: "m253", name: "Pure Mathematics" }, { id: "m254", name: "Applied Mathematics" }, { id: "m255", name: "Statistics" }, { id: "m256", name: "Number Theory" }] },
  { id: "65", name: "Geology", category: "sci", minors: [{ id: "m257", name: "Mineralogy" }, { id: "m258", name: "Petrology" }, { id: "m259", name: "Paleontology" }, { id: "m260", name: "Hydrogeology" }] },
];

type Zone = "navigate" | "communication" | "collaboration" | "orchestration";

const monokai = {
  bg: "#272822",
  bgLight: "#3e3d32",
  fg: "#f8f8f2",
  fgDim: "#a59f85",
  pink: "#f92672",
  red: "#f44747",
  orange: "#fd971f",
  yellow: "#e6db74",
  green: "#a6e22e",
  cyan: "#66d9ef",
  blue: "#66d9ef",
  purple: "#ae81ff",
  comment: "#75715e",
};

const gradients = Array.from({ length: 20 }, (_, i) => {
  const hue = (i * 18) % 360;
  return `linear-gradient(135deg, 
    hsla(${hue}, 70%, 15%, 0.95) 0%,
    hsla(${(hue + 20) % 360}, 60%, 12%, 0.9) 20%,
    hsla(${(hue + 40) % 360}, 80%, 18%, 0.85) 40%,
    hsla(${(hue + 60) % 360}, 55%, 10%, 0.9) 60%,
    hsla(${(hue + 80) % 360}, 75%, 14%, 0.88) 80%,
    hsla(${(hue + 100) % 360}, 65%, 16%, 0.92) 100%)`;
});

const mockChats = [
  { id: "1", name: "AI Study Buddy", lastMsg: "Let me explain that concept...", time: "2m" },
  { id: "2", name: "CS101 Group", lastMsg: "Anyone for study session?", time: "15m" },
  { id: "3", name: "Prof. Smith", lastMsg: "Office hours updated", time: "1h" },
];

const mockForums = [
  { id: "1", title: "Calculus II Help", replies: 23, category: "Math" },
  { id: "2", title: "Research Opportunities", replies: 45, category: "Academic" },
  { id: "3", title: "Campus Events", replies: 12, category: "General" },
];

const mockCollab = [
  { id: "1", name: "Physics Project", members: 4, type: "group" },
  { id: "2", name: "Code Review", members: 2, type: "peer" },
  { id: "3", name: "Thesis Draft", members: 1, type: "personal" },
];

const mockTasks = [
  { id: "1", title: "Essay Submission", due: "Today", priority: "high" },
  { id: "2", title: "Video Lecture", due: "Tomorrow", priority: "medium" },
  { id: "3", title: "Quiz Review", due: "Fri", priority: "low" },
];

export default function Home() {
  const [zone, setZone] = useState<Zone>("navigate");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [search, setSearch] = useState("");
  const [xp, setXp] = useState(2450);
  const [animating, setAnimating] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);

  const filteredMajors = majors.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    categories.find(c => c.id === m.category)?.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleGradChange = () => {
    setAnimating(true);
    setGradientIndex((prev) => (prev + 1) % gradients.length);
    setTimeout(() => setAnimating(false), 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleGradChange();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const gainXp = (amount: number) => setXp(prev => prev + amount);

  return (
    <div className="h-screen w-screen flex overflow-hidden" style={{ background: gradients[gradientIndex], transition: animating ? 'background 0.5s ease' : 'none' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 5px ${monokai.purple}40; } 50% { box-shadow: 0 0 20px ${monokai.purple}60; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-fade { animation: fadeIn 0.4s ease forwards; }
        .animate-pulse { animation: pulse 2s infinite; }
        .animate-slide { animation: slideIn 0.3s ease forwards; }
        .animate-glow { animation: glow 3s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .hover-lift:hover { transform: translateY(-2px); transition: all 0.2s ease; }
        .text-glow { text-shadow: 0 0 10px ${monokai.cyan}50; }
        .scroll-thin::-webkit-scrollbar { width: 4px; }
        .scroll-thin::-webkit-scrollbar-track { background: transparent; }
        .scroll-thin::-webkit-scrollbar-thumb { background: ${monokai.comment}; border-radius: 2px; }
        * { scrollbar-width: thin; scrollbar-color: ${monokai.comment} transparent; }
      `}</style>

      {/* LEFT PANEL - Navigation */}
      <div className="w-72 h-full flex flex-col p-4 gap-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl animate-glow flex items-center justify-center" style={{ background: monokai.purple }}>
            <span className="text-lg">🎓</span>
          </div>
          <span className="text-lg font-light text-white tracking-wide">Academy</span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search majors, minors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-purple-500/50"
          style={{ background: `${monokai.bgLight}80`, color: monokai.fg, border: 'none' }}
        />

        {/* Zone Tabs */}
        <div className="flex gap-1 p-1 rounded-lg" style={{ background: `${monokai.bg}40` }}>
          {(["navigate", "communication", "collaboration", "orchestration"] as Zone[]).map((z) => (
            <button
              key={z}
              onClick={() => setZone(z)}
              className="flex-1 py-1.5 px-2 rounded text-xs font-medium transition-all"
              style={{ 
                background: zone === z ? monokai.purple : 'transparent', 
                color: zone === z ? '#fff' : monokai.fgDim 
              }}
            >
              {z.charAt(0).toUpperCase() + z.slice(1,4)}
            </button>
          ))}
        </div>

        {/* Content based on zone */}
        <div className="flex-1 overflow-y-auto scroll-thin space-y-2">
          {zone === "navigate" && (
            <>
              <div className="text-xs font-medium mb-2" style={{ color: monokai.fgDim }}>Categories</div>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="w-full px-3 py-2 rounded-lg text-left text-sm hover-lift flex items-center gap-2 transition-all"
                  style={{ 
                    background: selectedCategory === cat.id ? `${monokai.green}20` : 'transparent',
                    color: selectedCategory === cat.id ? monokai.green : monokai.fg
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="ml-auto text-xs" style={{ color: monokai.fgDim }}>
                    {majors.filter(m => m.category === cat.id).length}
                  </span>
                </button>
              ))}

              <div className="text-xs font-medium mt-4 mb-2" style={{ color: monokai.fgDim }}>
                {selectedCategory ? "Majors" : "All Majors"}
              </div>
              {filteredMajors
                .filter(m => !selectedCategory || m.category === selectedCategory)
                .slice(0, 30)
                .map((major, i) => (
                  <button
                    key={major.id}
                    onClick={() => setSelectedMajor(major)}
                    className="w-full px-3 py-2 rounded-lg text-left text-sm hover-lift animate-fade"
                    style={{ 
                      background: selectedMajor?.id === major.id ? `${monokai.cyan}20` : `${monokai.bg}30`,
                      color: selectedMajor?.id === major.id ? monokai.cyan : monokai.fg,
                      animationDelay: `${i * 30}ms`
                    }}
                  >
                    <div className="font-medium">{major.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: monokai.fgDim }}>
                      {major.minors.slice(0,2).map(m=>m.name).join(" • ")}
                    </div>
                  </button>
                ))}
            </>
          )}

          {zone === "communication" && (
            <>
              <div className="text-xs font-medium mb-2" style={{ color: monokai.fgDim }}>Chats</div>
              {mockChats.map((chat) => (
                <div key={chat.id} className="px-3 py-2 rounded-lg cursor-pointer hover-lift" style={{ background: `${monokai.bg}30` }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: monokai.pink }}>
                      {chat.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate" style={{ color: monokai.fg }}>{chat.name}</div>
                      <div className="text-xs truncate" style={{ color: monokai.fgDim }}>{chat.lastMsg}</div>
                    </div>
                    <span className="text-xs" style={{ color: monokai.fgDim }}>{chat.time}</span>
                  </div>
                </div>
              ))}

              <div className="text-xs font-medium mt-4 mb-2" style={{ color: monokai.fgDim }}>Forums</div>
              {mockForums.map((forum) => (
                <div key={forum.id} className="px-3 py-2 rounded-lg cursor-pointer hover-lift" style={{ background: `${monokai.bg}30` }}>
                  <div className="text-sm" style={{ color: monokai.fg }}>{forum.title}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded" style={{ background: `${monokai.green}30`, color: monokai.green }}>{forum.category}</span>
                    <span className="text-xs" style={{ color: monokai.fgDim }}>{forum.replies} replies</span>
                  </div>
                </div>
              ))}

              <button 
                onClick={() => gainXp(5)}
                className="w-full mt-4 py-2 rounded-lg text-sm hover-lift"
                style={{ background: `${monokai.green}20`, color: monokai.green }}
              >
                + New Chat (+5 XP)
              </button>
            </>
          )}

          {zone === "collaboration" && (
            <>
              <div className="text-xs font-medium mb-2" style={{ color: monokai.fgDim }}>Study Groups</div>
              {mockCollab.map((collab) => (
                <div key={collab.id} className="px-3 py-2 rounded-lg cursor-pointer hover-lift" style={{ background: `${monokai.bg}30` }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm" style={{ color: monokai.fg }}>{collab.name}</div>
                      <div className="text-xs" style={{ color: monokai.fgDim }}>{collab.members} members</div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded" style={{ background: `${monokai.orange}30`, color: monokai.orange }}>
                      {collab.type}
                    </span>
                  </div>
                </div>
              ))}

              <div className="text-xs font-medium mt-4 mb-2" style={{ color: monokai.fgDim }}>Whiteboard</div>
              <div className="aspect-video rounded-lg overflow-hidden" style={{ background: '#fff' }}>
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Collaborative Canvas
                </div>
              </div>

              <button 
                onClick={() => gainXp(15)}
                className="w-full mt-4 py-2 rounded-lg text-sm hover-lift"
                style={{ background: `${monokai.blue}20`, color: monokai.blue }}
              >
                + Create Group (+15 XP)
              </button>
            </>
          )}

          {zone === "orchestration" && (
            <>
              <div className="text-xs font-medium mb-2" style={{ color: monokai.fgDim }}>Tasks</div>
              {mockTasks.map((task) => (
                <div key={task.id} className="px-3 py-2 rounded-lg cursor-pointer hover-lift" style={{ background: `${monokai.bg}30` }}>
                  <div className="flex items-center justify-between">
                    <div className="text-sm" style={{ color: monokai.fg }}>{task.title}</div>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      task.priority === 'high' ? 'bg-red-500/30 text-red-400' :
                      task.priority === 'medium' ? 'bg-yellow-500/30 text-yellow-400' :
                      'bg-gray-500/30 text-gray-400'
                    }`}>{task.due}</span>
                  </div>
                </div>
              ))}

              <div className="text-xs font-medium mt-4 mb-2" style={{ color: monokai.fgDim }}>Schedule</div>
              <div className="space-y-2">
                {["9:00 AM - Calculus", "11:00 AM - Physics Lab", "2:00 PM - Study Hall"].map((slot, i) => (
                  <div key={i} className="px-3 py-2 rounded-lg text-sm" style={{ background: `${monokai.bg}30`, color: monokai.fg }}>
                    {slot}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => gainXp(10)}
                className="w-full mt-4 py-2 rounded-lg text-sm hover-lift"
                style={{ background: `${monokai.purple}20`, color: monokai.purple }}
              >
                + Add Task (+10 XP)
              </button>
            </>
          )}
        </div>

        {/* User Stats */}
        <div className="mt-auto pt-3 border-t" style={{ borderColor: `${monokai.comment}40` }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold" style={{ color: monokai.yellow }}>{xp} XP</div>
              <div className="text-xs" style={{ color: monokai.fgDim }}>Level 12 • 7 day streak</div>
            </div>
            <div className="flex -space-x-2">
              {["🏆", "🔥", "⭐", "🚀"].map((badge, i) => (
                <span key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-sm border-2" style={{ background: monokai.bg, borderColor: monokai.bg }}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE PANEL - Workspace */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-14 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-light text-white">
              {selectedMajor ? selectedMajor.name : "Welcome Back"}
            </h1>
            {selectedMajor && (
              <span className="text-sm px-3 py-1 rounded-full" style={{ background: `${monokai.green}30`, color: monokai.green }}>
                {categories.find(c => c.id === selectedMajor.category)?.name}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => gainXp(20)} className="px-4 py-1.5 rounded-lg text-sm hover-lift" style={{ background: `${monokai.green}30`, color: monokai.green }}>
              Save Notes (+20 XP)
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 flex gap-2">
          {["Markdown", "Image", "Video", "3D", "Whiteboard"].map((tab, i) => (
            <button
              key={tab}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover-lift"
              style={{ 
                background: i === 0 ? monokai.bg : 'transparent', 
                color: i === 0 ? monokai.fg : monokai.fgDim 
              }}
            >
              {["📝", "🖼️", "🎬", "🎲", "🎨"][i]} {tab}
            </button>
          ))}
        </div>

        {/* Workspace Content */}
        <div className="flex-1 p-6 overflow-hidden">
          {selectedMajor ? (
            <div className="h-full flex gap-4">
              {/* Major Details */}
              <div className="flex-1 space-y-4">
                <div className="p-4 rounded-xl" style={{ background: `${monokai.bg}40` }}>
                  <h2 className="text-lg font-medium text-white mb-2">{selectedMajor.name}</h2>
                  <p className="text-sm" style={{ color: monokai.fgDim }}>
                    Explore the depths of {selectedMajor.name} with our comprehensive curriculum designed by industry experts.
                  </p>
                </div>

                <div className="text-sm font-medium mb-2" style={{ color: monokai.fgDim }}>Available Minors</div>
                <div className="grid grid-cols-2 gap-2">
                  {selectedMajor.minors.map((minor, i) => (
                    <button
                      key={minor.id}
                      className="p-3 rounded-lg text-left hover-lift animate-fade"
                      style={{ 
                        background: `${monokai.bg}40`, 
                        color: monokai.fg,
                        animationDelay: `${i * 100}ms`
                      }}
                    >
                      <div className="font-medium">{minor.name}</div>
                      <div className="text-xs mt-1" style={{ color: monokai.fgDim }}>12 courses available</div>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => gainXp(25)}
                  className="w-full py-3 rounded-lg text-sm font-medium hover-lift"
                  style={{ background: monokai.purple, color: '#fff' }}
                >
                  Enroll Now (+25 XP)
                </button>
              </div>

              {/* Notes Panel */}
              <div className="w-1/2 rounded-xl overflow-hidden flex flex-col" style={{ background: `${monokai.bg}60` }}>
                <div className="px-4 py-3 border-b" style={{ borderColor: `${monokai.comment}30` }}>
                  <span className="text-sm font-medium" style={{ color: monokai.fg }}>Study Notes</span>
                </div>
                <textarea
                  className="flex-1 p-4 text-sm resize-none outline-none"
                  style={{ background: 'transparent', color: monokai.fg }}
                  placeholder="Start typing your markdown notes..."
                  defaultValue={`# ${selectedMajor.name}\n\n## Key Concepts\n\n- Introduction to ${selectedMajor.name}\n- Core principles and fundamentals\n- Practical applications\n\n## Study Goals\n\n1. Complete all required courses\n2. Pass certification exams\n3. Build portfolio projects`}
                />
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 animate-float">🎓</div>
              <h2 className="text-2xl font-light text-white mb-2">Select a Major</h2>
              <p className="text-sm max-w-md text-center" style={{ color: monokai.fgDim }}>
                Choose from {majors.length}+ majors across {categories.length} categories to begin your academic journey
              </p>
              <div className="flex gap-2 mt-6">
                {categories.slice(0,5).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="px-4 py-2 rounded-full text-sm hover-lift"
                    style={{ background: `${monokai.bg}40`, color: monokai.fg }}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL - Learning Progress */}
      <div className="w-80 h-full p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">📚</span>
          <span className="text-lg font-light text-white">Learning</span>
        </div>

        {/* Progress */}
        <div className="p-4 rounded-xl" style={{ background: `${monokai.bg}40` }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm" style={{ color: monokai.fg }}>Current Course</span>
            <span className="text-sm font-medium" style={{ color: monokai.green }}>75%</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: `${monokai.bg}` }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: '75%', background: monokai.green }} />
          </div>
          <div className="text-xs mt-2" style={{ color: monokai.fgDim }}>Computer Science Fundamentals</div>
        </div>

        {/* Courses */}
        <div className="flex-1 overflow-y-auto scroll-thin space-y-2">
          <div className="text-xs font-medium mb-2" style={{ color: monokai.fgDim }}>Your Courses</div>
          {[
            { name: "Data Structures", progress: 100, color: monokai.green },
            { name: "Algorithms", progress: 75, color: monokai.yellow },
            { name: "Database Systems", progress: 45, color: monokai.orange },
            { name: "Computer Networks", progress: 20, color: monokai.pink },
          ].map((course, i) => (
            <div key={i} className="p-3 rounded-lg hover-lift" style={{ background: `${monokai.bg}30` }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm" style={{ color: monokai.fg }}>{course.name}</span>
                <span className="text-xs" style={{ color: course.color }}>{course.progress}%</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: `${monokai.bg}` }}>
                <div className="h-full rounded-full" style={{ width: `${course.progress}%`, background: course.color }} />
              </div>
            </div>
          ))}

          <div className="text-xs font-medium mt-4 mb-2" style={{ color: monokai.fgDim }}>Tests & Quizzes</div>
          <div className="space-y-2">
            <div className="p-3 rounded-lg flex items-center justify-between" style={{ background: `${monokai.orange}20` }}>
              <div>
                <div className="text-sm" style={{ color: monokai.fg }}>Midterm Exam</div>
                <div className="text-xs" style={{ color: monokai.fgDim }}>50 questions • 2 hours</div>
              </div>
              <button 
                onClick={() => gainXp(50)}
                className="px-3 py-1 rounded text-xs font-medium"
                style={{ background: monokai.orange, color: '#fff' }}
              >
                Start (+50 XP)
              </button>
            </div>
            <div className="p-3 rounded-lg flex items-center justify-between" style={{ background: `${monokai.cyan}20` }}>
              <div>
                <div className="text-sm" style={{ color: monokai.fg }}>Quick Quiz</div>
                <div className="text-xs" style={{ color: monokai.fgDim }}>10 questions • 15 min</div>
              </div>
              <button 
                onClick={() => gainXp(20)}
                className="px-3 py-1 rounded text-xs font-medium"
                style={{ background: monokai.cyan, color: '#000' }}
              >
                Start (+20 XP)
              </button>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="text-xs font-medium mt-4 mb-2" style={{ color: monokai.fgDim }}>Leaderboard</div>
          <div className="space-y-1">
            {[
              { rank: 1, name: "Alex", xp: 3200, color: monokai.yellow },
              { rank: 2, name: "You", xp: 2450, color: monokai.green },
              { rank: 3, name: "Jordan", xp: 2100, color: monokai.fg },
              { rank: 4, name: "Taylor", xp: 1800, color: monokai.fgDim },
            ].map((user) => (
              <div key={user.rank} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ background: user.name === "You" ? `${user.color}20` : 'transparent' }}>
                <span className="w-6 text-center font-medium" style={{ color: user.rank <= 3 ? user.color : monokai.fgDim }}>{user.rank}</span>
                <span className="flex-1" style={{ color: user.color }}>{user.name}</span>
                <span className="text-xs" style={{ color: monokai.fgDim }}>{user.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
