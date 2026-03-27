/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Globe, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface Skill {
  name: string;
  percent: number;
}

interface ProgramSkill {
  name: string;
  score: number;
}

const skills: Skill[] = [
  { name: "平面設計", percent: 85 },
  { name: "網頁設計", percent: 90 },
  { name: "UI/UX", percent: 80 },
  { name: "插畫繪製", percent: 75 },
  { name: "動態影像", percent: 70 },
  { name: "品牌識別", percent: 85 },
  { name: "排版設計", percent: 90 },
  { name: "攝影後製", percent: 65 },
  { name: "專案管理", percent: 80 },
];

const programSkills: ProgramSkill[] = [
  { name: "HTML/CSS", score: 95 },
  { name: "JavaScript", score: 90 },
  { name: "React.js", score: 85 },
  { name: "Node.js", score: 75 },
  { name: "TypeScript", score: 80 },
  { name: "Tailwind CSS", score: 90 },
];

const CircularProgress = ({ percent, name }: { percent: number; name: string; key?: React.Key }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="skill-circle-container mb-2">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="skill-circle-bg"
            cx="30"
            cy="30"
            r={radius}
          />
          <motion.circle
            className="skill-circle-progress"
            cx="30"
            cy="30"
            r={radius}
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
          {percent}%
        </div>
      </div>
      <span className="text-xs text-center font-medium text-gray-600">{name}</span>
    </div>
  );
};

const ProgressBar = ({ name, score }: { name: string; score: number; key?: React.Key }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-24 text-sm font-medium text-gray-700">{name}</div>
      <div className="flex-1 ml-4 progress-bar-bg">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="ml-3 text-xs font-bold text-gray-500">{score}</div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Panel */}
        <div className="w-full md:w-2/5 bg-slate-800 text-white p-8 left-panel">
          <div className="profile-header mb-10 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl font-bold mb-2"
            >
              李宜庭
            </motion.h1>
            <h4 className="text-slate-400 text-lg mb-4">動畫互動網頁特效入門 | 墨雨設計</h4>
            <hr className="border-slate-600 mb-6" />
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              動畫互動網頁程式入門講師、墨雨設計 Monoame Design 負責人、設計與網頁全端雙棲的工程師，為了有趣的想法赴湯蹈火。
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
                <Globe size={16} /> 作品集
              </a>
              <a href="#" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                <Github size={16} /> Github
              </a>
            </div>
          </div>

          <div className="block mb-10">
            <h4 className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-1">Skills</h4>
            <h2 className="text-xl font-bold mb-6 border-b border-slate-700 pb-2">專業技能</h2>
            <div className="grid grid-cols-4 gap-2 list-skill">
              {skills.map((skill, index) => (
                <CircularProgress key={index} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>

          <div className="block">
            <h4 className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-1">Programming</h4>
            <h2 className="text-xl font-bold mb-6 border-b border-slate-700 pb-2">程式技能</h2>
            <div className="listProgram">
              {programSkills.map((skill, index) => (
                <ProgressBar key={index} name={skill.name} score={skill.score} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-3/5 p-8 md:p-12 Right-panel bg-white">
          <div className="block mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-800">工作經歷</h2>
            </div>
            
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="relative pl-8 border-l-2 border-slate-100"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <h3 className="text-lg font-bold text-slate-800">墨雨設計 Monoame Design</h3>
                <p className="text-blue-600 text-sm font-semibold mb-2">2020 - 至今 | 負責人 / 全端工程師</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  專注於互動網頁設計與全端開發，將創意視覺轉化為高品質程式碼。帶領團隊完成多項大型品牌官網與互動展演專案。
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="relative pl-8 border-l-2 border-slate-100"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                <h3 className="text-lg font-bold text-slate-800">動畫互動網頁特效入門</h3>
                <p className="text-blue-600 text-sm font-semibold mb-2">2018 - 至今 | 講師</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  負責教學 HTML/CSS/JS 互動特效，引領超過 5000 名學員進入網頁開發領域，課程在 Hahow 好學校獲得極高評價。
                </p>
              </motion.div>
            </div>
          </div>

          <div className="block mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-800">教育背景</h2>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
              <h3 className="text-lg font-bold text-slate-800">國立大學 資訊設計學系</h3>
              <p className="text-blue-600 text-sm font-semibold mb-2">2014 - 2018 | 學士學位</p>
              <p className="text-slate-600 text-sm">主修多媒體設計與人機互動，專研網頁前端技術與視覺傳達。</p>
            </div>
          </div>

          <div className="block">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-800">聯絡資訊</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-blue-600" />
                <span className="text-sm">appleyoonki@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-blue-600" />
                <span className="text-sm">+886 912 345 678</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={18} className="text-blue-600" />
                <span className="text-sm">台北市, 台灣</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <ExternalLink size={18} className="text-blue-600" />
                <span className="text-sm">monoame.com</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
