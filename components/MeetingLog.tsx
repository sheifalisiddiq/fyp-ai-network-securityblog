
import React from 'react';
import { MeetingLogEntry } from '../types.ts';

const LOGS: MeetingLogEntry[] = [
  {
    id: '1',
    date: 'Sep 10, 2024',
    supervisor: 'Mr. Roshan Renji',
    discussion: 'Initial proposal review. Discussed the feasibility of using Scapy for real-time packet parsing and selected Python for its robust ML ecosystem.',
    actionItems: [
      'Draft detailed architecture diagram',
      'Research existing datasets (CIC-IDS2017)',
      'Set up Git repository for version control'
    ]
  },
  {
    id: '2',
    date: 'Sep 17, 2024',
    supervisor: 'Mr. Roshan Renji',
    discussion: 'Data collection methodology. Explored the difference between raw PCAP analysis vs. streaming flow metadata.',
    actionItems: [
      'Install Scapy and verify packet capturing',
      'Identify critical features for anomaly detection',
      'Define project timeline milestones'
    ]
  }
];

const MeetingLog: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Supervisor Meeting Log</h2>
        <p className="text-slate-400">Official record of progress reviews and guidance from <span className="text-cyan-400 font-medium">Mr. Roshan Renji</span>.</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl">
        <table className="w-full text-left border-collapse bg-slate-900/50">
          <thead>
            <tr className="bg-slate-800/50 border-b border-slate-800">
              <th className="px-6 py-4 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Discussion Points</th>
              <th className="px-6 py-4 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Action Items</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {LOGS.map((log) => (
              <tr key={log.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-6 align-top">
                  <span className="text-slate-200 font-medium whitespace-nowrap">{log.date}</span>
                </td>
                <td className="px-6 py-6 align-top">
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    {log.discussion}
                  </p>
                </td>
                <td className="px-6 py-6 align-top">
                  <ul className="space-y-2">
                    {log.actionItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl flex gap-4 items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-blue-200/80 text-sm">
          Logs are updated every Tuesday following the weekly sync with the project supervisor.
        </p>
      </div>
    </div>
  );
};

export default MeetingLog;
