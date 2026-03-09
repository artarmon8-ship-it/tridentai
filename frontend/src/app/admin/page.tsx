"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Download, Activity, Clock, ShieldCheck } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  service: string | null;
  createdAt: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/admin/leads`);
        if (!res.ok) throw new Error('Failed to fetch leads');
        const data = await res.json();
        setLeads(data);
      } catch (err) {
        setError('Failed to load leads from the server.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const exportCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['Date', 'Name', 'Email', 'Company', 'Phone', 'Service', 'Message'];
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + leads.map(l => {
          return [
            new Date(l.createdAt).toLocaleDateString(),
            `"${l.name.replace(/"/g, '""')}"`,
            `"${l.email.replace(/"/g, '""')}"`,
            `"${(l.company || '').replace(/"/g, '""')}"`,
            `"${(l.phone || '').replace(/"/g, '""')}"`,
            `"${(l.service || '').replace(/"/g, '""')}"`,
            `"${l.message.replace(/"/g, '""')}"`
          ].join(",");
        }).join("\n");
        
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tridentai_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <ShieldCheck className="text-primary" /> Admin Portal
            </h1>
            <p className="text-gray-400">Lead management and system analytics.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={exportCSV}
              className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" /> Export to CSV
            </button>
          </div>
        </div>

        {/* Top Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="glass p-6 rounded-xl border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-400 font-medium">Total Leads</h3>
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-white">{leads.length}</div>
            <div className="text-sm text-green-400 mt-2">+12% from last week</div>
          </motion.div>

          <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}} className="glass p-6 rounded-xl border border-white/5">
             <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-400 font-medium">Conversion Rate</h3>
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white">4.2%</div>
            <div className="text-sm text-gray-500 mt-2">Visits to Lead</div>
          </motion.div>

          <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}} className="glass p-6 rounded-xl border border-white/5">
             <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-400 font-medium">System Status</h3>
              <Clock className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-xl font-bold text-green-400">Stable</div>
            <div className="text-sm text-gray-500 mt-2">All services operational</div>
          </motion.div>
        </div>

        {/* Leads Table */}
        <div className="glass rounded-xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-bold">Recent Form Submissions</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-sm font-semibold text-gray-300">Date</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Name / Company</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Contact</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Interest</th>
                  <th className="p-4 text-sm font-semibold text-gray-300 max-w-sm">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">Loading leads...</td>
                  </tr>
                )}
                {!loading && error && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-red-400">{error}</td>
                  </tr>
                )}
                {!loading && !error && leads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">No leads found.</td>
                  </tr>
                )}
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-sm text-gray-400 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-medium text-white">{lead.name}</div>
                      <div className="text-xs text-gray-500">{lead.company || '-'}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-blue-400"><a href={`mailto:${lead.email}`}>{lead.email}</a></div>
                      <div className="text-xs text-gray-500">{lead.phone || '-'}</div>
                    </td>
                    <td className="p-4 text-sm text-gray-300">
                      <span className="px-2 py-1 bg-white/5 rounded text-xs">
                        {lead.service || 'General Inquiry'}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-400 max-w-xs truncate">
                      {lead.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
