"use client";

import { useState } from "react";

interface Notebook {
  id: string;
  title: string;
  pages: Page[];
}

interface Page {
  id: string;
  title: string;
}

interface Program {
  id: string;
  title: string;
  courses: Course[];
}

interface Course {
  id: string;
  title: string;
  lessons: Lesson[];
  progress: number;
}

interface Lesson {
  id: string;
  title: string;
  type: string;
  completed: boolean;
}

const mockNotebooks: Notebook[] = [
  { id: "1", title: "Study Notes", pages: [{ id: "1-1", title: "Chapter 1" }, { id: "1-2", title: "Chapter 2" }] },
  { id: "2", title: "Research", pages: [{ id: "2-1", title: "Ideas" }, { id: "2-2", title: "Sources" }] },
  { id: "3", title: "Journal", pages: [{ id: "3-1", title: "Entry 1" }] },
];

const mockPrograms: Program[] = [
  {
    id: "1",
    title: "Web Development",
    courses: [
      { id: "1-1", title: "HTML & CSS", progress: 75, lessons: [
        { id: "1-1-1", title: "Basics", type: "video", completed: true },
        { id: "1-1-2", title: "Flexbox", type: "video", completed: true },
        { id: "1-1-3", title: "Grid", type: "test", completed: false },
      ]},
      { id: "1-2", title: "JavaScript", progress: 30, lessons: [
        { id: "1-2-1", title: "Variables", type: "video", completed: true },
        { id: "1-2-2", title: "Functions", type: "lesson", completed: false },
      ]},
    ],
  },
  {
    id: "2",
    title: "Data Science",
    courses: [
      { id: "2-1", title: "Python Basics", progress: 100, lessons: [
        { id: "2-1-1", title: "Syntax", type: "video", completed: true },
        { id: "2-1-2", title: "Data Types", type: "test", completed: true },
      ]},
    ],
  },
];

const gamification = {
  xp: 2450,
  level: 12,
  streak: 7,
  badges: ["🚀 Fast Learner", "📚 Bookworm", "🔥 7 Day Streak", "⭐ Top Scorer"],
  leaderboard: [
    { rank: 1, name: "Alex", xp: 3200 },
    { rank: 2, name: "You", xp: 2450 },
    { rank: 3, name: "Jordan", xp: 2100 },
    { rank: 4, name: "Taylor", xp: 1800 },
  ],
};

type MiddleTab = "markdown" | "image" | "video" | "3d" | "whiteboard";

export default function Home() {
  const [selectedNotebook, setSelectedNotebook] = useState(mockNotebooks[0]);
  const [selectedPage, setSelectedPage] = useState(mockNotebooks[0].pages[0]);
  const [selectedProgram, setSelectedProgram] = useState(mockPrograms[0]);
  const [selectedCourse, setSelectedCourse] = useState(mockPrograms[0].courses[0]);
  const [middleTab, setMiddleTab] = useState<MiddleTab>("markdown");
  const [markdownContent, setMarkdownContent] = useState("# Welcome to your notes\n\nStart typing here...");
  const [whiteboardColor, setWhiteboardColor] = useState("#3b82f6");
  const [xp, setXp] = useState(gamification.xp);

  const gainXp = (amount: number) => setXp(prev => prev + amount);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gray-900 text-gray-100">
      {/* LEFT PANEL - Notebooks & Pages */}
      <div className="w-64 flex-shrink-0 border-r border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Notebooks
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {mockNotebooks.map((notebook) => (
            <div key={notebook.id} className="mb-2">
              <button
                onClick={() => { setSelectedNotebook(notebook); setSelectedPage(notebook.pages[0]); }}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  selectedNotebook.id === notebook.id ? "bg-blue-600" : "hover:bg-gray-800"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Mbooks3 21h9m-3-3v12m0 0l-3-3m3 3l3-3M3 10h18M3 10l3-3m-3 3l3 3" />
                </svg>
                {notebook.title}
              </button>
              {selectedNotebook.id === notebook.id && (
                <div className="ml-6 mt-1 space-y-1">
                  {notebook.pages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => setSelectedPage(page)}
                      className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                        selectedPage.id === page.id ? "bg-gray-700 text-blue-400" : "hover:bg-gray-800 text-gray-400"
                      }`}
                    >
                      📄 {page.title}
                    </button>
                  ))}
                  <button className="w-full text-left px-3 py-1.5 rounded text-sm text-gray-500 hover:text-gray-300 hover:bg-gray-800">
                    + Add Page
                  </button>
                </div>
              )}
            </div>
          ))}
          <button className="w-full mt-4 px-3 py-2 rounded-lg border border-dashed border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300 transition-colors">
            + New Notebook
          </button>
        </div>
      </div>

      {/* MIDDLE PANEL - Notes Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-14 border-b border-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center gap-1">
            {[
              { id: "markdown", icon: "📝", label: "Markdown" },
              { id: "image", icon: "🖼️", label: "Image" },
              { id: "video", icon: "🎬", label: "Video" },
              { id: "3d", icon: "🎲", label: "3D" },
              { id: "whiteboard", icon: "🎨", label: "Whiteboard" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMiddleTab(tab.id as MiddleTab)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  middleTab === tab.id ? "bg-blue-600" : "hover:bg-gray-800 text-gray-400"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">{selectedNotebook.title} / {selectedPage.title}</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          {middleTab === "markdown" && (
            <div className="h-full flex">
              <textarea
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                className="flex-1 h-full bg-gray-800 p-6 resize-none focus:outline-none font-mono text-sm leading-relaxed"
                placeholder="Start typing your markdown notes..."
              />
              <div className="w-1/2 h-full bg-gray-900 p-6 overflow-y-auto border-l border-gray-700">
                <div className="prose prose-invert max-w-none">
                  <h1 className="text-2xl font-bold mb-4">{markdownContent.split('\n')[0].replace(/^#+\s*/, '')}</h1>
                  <div className="text-gray-300 whitespace-pre-wrap">{markdownContent.slice(markdownContent.indexOf('\n') + 1)}</div>
                </div>
              </div>
            </div>
          )}
          
          {middleTab === "image" && (
            <div className="h-full flex flex-col items-center justify-center bg-gray-800">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 mb-4">Drag and drop images here</p>
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Browse Files
                </button>
              </div>
            </div>
          )}
          
          {middleTab === "video" && (
            <div className="h-full flex flex-col items-center justify-center bg-gray-800">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 mb-4">Upload or embed videos</p>
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Add Video
                </button>
              </div>
            </div>
          )}
          
          {middleTab === "3d" && (
            <div className="h-full flex flex-col items-center justify-center bg-gray-800">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-gray-400 mb-4">3D Models Viewer</p>
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Load 3D Model
                </button>
              </div>
            </div>
          )}
          
          {middleTab === "whiteboard" && (
            <div className="h-full flex flex-col">
              <div className="p-2 border-b border-gray-700 flex items-center gap-2">
                {["#3b82f6", "#ef4444", "#22c55e", "#eab308", "#8b5cf6", "#000000"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setWhiteboardColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${
                      whiteboardColor === color ? "border-white scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <div className="flex-1" />
                <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-sm">Clear</button>
                <button onClick={() => gainXp(10)} className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 text-sm">Save (+10 XP)</button>
              </div>
              <div className="flex-1 bg-white cursor-crosshair relative">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                  <rect width="800" height="600" fill="white" />
                  <text x="400" y="300" textAnchor="middle" fill="#ccc" fontSize="24">Click and drag to draw</text>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL - Programs, Courses, Lessons, Tests, Gamification */}
      <div className="w-80 flex-shrink-0 border-l border-gray-700 flex flex-col bg-gray-900">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Learning
          </h2>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {/* Programs */}
          <div className="p-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">Programs</h3>
            {mockPrograms.map((program) => (
              <button
                key={program.id}
                onClick={() => { setSelectedProgram(program); setSelectedCourse(program.courses[0]); }}
                className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition-colors ${
                  selectedProgram.id === program.id ? "bg-purple-600" : "hover:bg-gray-800"
                }`}
              >
                🎓 {program.title}
              </button>
            ))}
          </div>

          {/* Courses */}
          <div className="p-2 border-t border-gray-800">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">Courses</h3>
            {selectedProgram.courses.map((course) => (
              <div key={course.id} className="mb-2">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    selectedCourse.id === course.id ? "bg-indigo-600" : "hover:bg-gray-800"
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium">📚 {course.title}</div>
                    <div className="mt-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{course.progress}%</span>
                </button>
                
                {selectedCourse.id === course.id && (
                  <div className="ml-4 mt-1 space-y-1">
                    {course.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        className={`w-full text-left px-3 py-1.5 rounded text-sm flex items-center gap-2 transition-colors ${
                          lesson.completed ? "text-green-400" : "text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        {lesson.completed ? "✅" : lesson.type === "test" ? "📋" : lesson.type === "video" ? "🎬" : "📖"} {lesson.title}
                      </button>
                    ))}
                    <button className="w-full text-left px-3 py-1.5 rounded text-sm text-blue-400 hover:text-blue-300">
                      + Add Lesson
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tests */}
          <div className="p-2 border-t border-gray-800">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">Tests</h3>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Quick Quiz</span>
                <span className="text-xs text-gray-400">5 questions</span>
              </div>
              <button onClick={() => gainXp(50)} className="w-full py-2 bg-orange-600 rounded hover:bg-orange-700 transition-colors text-sm">
                Start Test (+50 XP)
              </button>
            </div>
          </div>

          {/* Gamification */}
          <div className="p-2 border-t border-gray-800">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">🎮 Gamification</h3>
            <div className="bg-gray-800 rounded-lg p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">{xp} XP</div>
                  <div className="text-xs text-gray-400">Level {gamification.level}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl">🔥 {gamification.streak}</div>
                  <div className="text-xs text-gray-400">day streak</div>
                </div>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: "65%" }} />
              </div>
              <div className="flex flex-wrap gap-1">
                {gamification.badges.map((badge, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs">{badge}</span>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-3">
                <div className="text-xs text-gray-500 mb-2">Leaderboard</div>
                {gamification.leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center justify-between py-1 ${user.name === "You" ? "text-yellow-400" : "text-gray-400"}`}>
                    <span className="flex items-center gap-2">
                      <span className="w-4 text-center">{user.rank}</span>
                      {user.name}
                    </span>
                    <span>{user.xp} XP</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
