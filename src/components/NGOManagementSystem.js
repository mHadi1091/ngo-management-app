import React, { useState } from 'react';
import { Users, DollarSign, Calendar, FileText, Target, BarChart3, Menu, X, Home, Plus, Edit2, Trash2, Eye } from 'lucide-react';

// Dummy Data
const DUMMY_PROJECTS = [
  { id: 1, name: 'Clean Water Initiative', budget: 50000, spent: 32000, status: 'Active', progress: 64, startDate: '2024-01-15', endDate: '2024-12-31', manager: 'Sarah Johnson' },
  { id: 2, name: 'Education for All', budget: 75000, spent: 45000, status: 'Active', progress: 60, startDate: '2024-03-01', endDate: '2025-02-28', manager: 'Michael Chen' },
  { id: 3, name: 'Healthcare Outreach', budget: 40000, spent: 40000, status: 'Completed', progress: 100, startDate: '2023-06-01', endDate: '2024-05-31', manager: 'Emily Davis' },
  { id: 4, name: 'Community Center', budget: 100000, spent: 25000, status: 'Planning', progress: 25, startDate: '2024-06-01', endDate: '2025-12-31', manager: 'David Wilson' }
];

const DUMMY_VOLUNTEERS = [
  { id: 1, name: 'Alice Brown', email: 'alice@email.com', skills: 'Teaching, Admin', hours: 120, projects: 3, status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@email.com', skills: 'Healthcare, Training', hours: 95, projects: 2, status: 'Active' },
  { id: 3, name: 'Carol White', email: 'carol@email.com', skills: 'Fundraising, Marketing', hours: 80, projects: 2, status: 'Active' },
  { id: 4, name: 'Daniel Lee', email: 'daniel@email.com', skills: 'IT, Web Design', hours: 45, projects: 1, status: 'Inactive' }
];

const DUMMY_DONORS = [
  { id: 1, name: 'Tech Corp Foundation', amount: 50000, frequency: 'Annual', lastDonation: '2024-01-15', type: 'Corporate' },
  { id: 2, name: 'John & Jane Doe', amount: 15000, frequency: 'Quarterly', lastDonation: '2024-10-01', type: 'Individual' },
  { id: 3, name: 'Community Trust', amount: 25000, frequency: 'Monthly', lastDonation: '2024-11-01', type: 'Foundation' },
  { id: 4, name: 'Global Aid Network', amount: 75000, frequency: 'Annual', lastDonation: '2024-03-20', type: 'Organization' }
];

const DUMMY_EVENTS = [
  { id: 1, name: 'Annual Fundraising Gala', date: '2024-12-15', attendees: 200, budget: 15000, status: 'Upcoming' },
  { id: 2, name: 'Volunteer Orientation', date: '2024-11-20', attendees: 45, budget: 2000, status: 'Completed' },
  { id: 3, name: 'Community Health Fair', date: '2025-01-10', attendees: 500, budget: 8000, status: 'Planning' },
  { id: 4, name: 'Education Workshop', date: '2024-10-25', attendees: 80, budget: 3000, status: 'Completed' }
];

const DUMMY_REPORTS = [
  { id: 1, title: 'Q3 2024 Financial Report', type: 'Financial', date: '2024-09-30', status: 'Published' },
  { id: 2, title: 'Impact Assessment 2024', type: 'Impact', date: '2024-11-01', status: 'Published' },
  { id: 3, title: 'Volunteer Engagement Report', type: 'HR', date: '2024-10-15', status: 'Published' },
  { id: 4, title: 'Q4 2024 Progress Report', type: 'Progress', date: '2024-12-20', status: 'Draft' }
];

function NGOManagementSystem() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [selectedProject, setSelectedProject] = useState(null);

  const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
    <div className="bg-white rounded-lg shadow p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
          <Icon size={24} color={color} />
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={Target} title="Active Projects" value="4" subtitle="2 in planning phase" color="#3B82F6" />
        <StatCard icon={Users} title="Volunteers" value="156" subtitle="45 active this month" color="#10B981" />
        <StatCard icon={DollarSign} title="Total Funding" value="$265K" subtitle="$102K spent this year" color="#F59E0B" />
        <StatCard icon={Calendar} title="Upcoming Events" value="3" subtitle="Next: Dec 15" color="#8B5CF6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Target className="mr-2" size={20} />
            Project Status Overview
          </h3>
          <div className="space-y-4">
            {DUMMY_PROJECTS.map(project => (
              <div key={project.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{project.name}</span>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart3 className="mr-2" size={20} />
            Budget Utilization
          </h3>
          <div className="space-y-4">
            {DUMMY_PROJECTS.map(project => {
              const utilization = (project.spent / project.budget) * 100;
              return (
                <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{project.name}</p>
                    <p className="text-xs text-gray-500">${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-semibold ${utilization > 90 ? 'text-red-600' : utilization > 70 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {utilization.toFixed(0)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          Upcoming Events
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attendees</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {DUMMY_EVENTS.filter(e => e.status !== 'Completed').map(event => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{event.name}</td>
                  <td className="px-4 py-3 text-sm">{event.date}</td>
                  <td className="px-4 py-3 text-sm">{event.attendees}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Projects = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Project Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {DUMMY_PROJECTS.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-500">Manager: {project.manager}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Active' ? 'bg-green-100 text-green-800' : 
                project.status === 'Completed' ? 'bg-blue-100 text-blue-800' : 
                'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget:</span>
                <span className="font-medium">${project.budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Spent:</span>
                <span className="font-medium">${project.spent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Timeline:</span>
                <span className="font-medium">{project.startDate} to {project.endDate}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50 flex items-center justify-center">
                <Eye size={16} className="mr-1" />
                View Details
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50 flex items-center justify-center">
                <Edit2 size={16} className="mr-1" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Volunteers = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Volunteer Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Add Volunteer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Skills</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projects</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {DUMMY_VOLUNTEERS.map(volunteer => (
              <tr key={volunteer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{volunteer.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{volunteer.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{volunteer.skills}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{volunteer.hours}h</td>
                <td className="px-6 py-4 text-sm text-gray-500">{volunteer.projects}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${volunteer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {volunteer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Donors = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Donor Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Add Donor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard icon={DollarSign} title="Total Donations" value="$165K" subtitle="This year" color="#10B981" />
        <StatCard icon={Users} title="Active Donors" value="24" subtitle="4 new this month" color="#3B82F6" />
        <StatCard icon={BarChart3} title="Avg Donation" value="$6,875" subtitle="+15% from last year" color="#F59E0B" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Donor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Donation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {DUMMY_DONORS.map(donor => (
              <tr key={donor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{donor.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{donor.type}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">${donor.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{donor.frequency}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{donor.lastDonation}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Events = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Event Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DUMMY_EVENTS.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 
                event.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                'bg-yellow-100 text-yellow-800'
              }`}>
                {event.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users size={16} className="mr-2" />
                {event.attendees} Expected Attendees
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign size={16} className="mr-2" />
                Budget: ${event.budget.toLocaleString()}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                View Details
              </button>
              <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50">
                <Edit2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Reports = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard icon={FileText} title="Total Reports" value="12" subtitle="3 pending review" color="#8B5CF6" />
        <StatCard icon={BarChart3} title="Impact Score" value="8.7/10" subtitle="+0.5 from last quarter" color="#10B981" />
        <StatCard icon={Target} title="Goals Met" value="85%" subtitle="17 of 20 objectives" color="#3B82F6" />
        <StatCard icon={Users} title="Beneficiaries" value="2,340" subtitle="+340 this quarter" color="#F59E0B" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Report Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {DUMMY_REPORTS.map(report => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{report.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{report.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{report.date}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${report.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'projects', icon: Target, label: 'Projects' },
    { id: 'volunteers', icon: Users, label: 'Volunteers' },
    { id: 'donors', icon: DollarSign, label: 'Donors' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'reports', icon: FileText, label: 'Reports' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h2 className="text-xl font-bold">NGO Manager</h2>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-700 rounded">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="mt-6">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                  activeTab === item.id ? 'bg-gray-700 border-l-4 border-blue-500' : ''
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'volunteers' && <Volunteers />}
          {activeTab === 'donors' && <Donors />}
          {activeTab === 'events' && <Events />}
          {activeTab === 'reports' && <Reports />}
        </div>
      </div>
    </div>
  );
}

export default NGOManagementSystem;