import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Calendar, FileText, Target, BarChart3, Menu, X, Home, Plus, Edit2, Trash2, Eye } from 'lucide-react';
import Modal from './Modal';

function NGOManagementSystem() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Dynamic data states
  const [projects, setProjects] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [donors, setDonors] = useState([]);
  const [events, setEvents] = useState([]);
  const [reports, setReports] = useState([]);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  // Initialize data from localStorage or defaults
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem('ngo_projects');
      const savedVolunteers = localStorage.getItem('ngo_volunteers');
      const savedDonors = localStorage.getItem('ngo_donors');
      const savedEvents = localStorage.getItem('ngo_events');
      const savedReports = localStorage.getItem('ngo_reports');

      // Only set from localStorage if data exists, otherwise use defaults
      if (savedProjects && savedProjects !== 'undefined') {
        setProjects(JSON.parse(savedProjects));
      } else {
        const defaultProjects = [
          { id: 1, name: 'Clean Water Initiative', budget: 50000, spent: 32000, status: 'Active', progress: 64, startDate: '2024-01-15', endDate: '2024-12-31', manager: 'Sarah Johnson' },
          { id: 2, name: 'Education for All', budget: 75000, spent: 45000, status: 'Active', progress: 60, startDate: '2024-03-01', endDate: '2025-02-28', manager: 'Michael Chen' }
        ];
        setProjects(defaultProjects);
        localStorage.setItem('ngo_projects', JSON.stringify(defaultProjects));
      }
      
      if (savedVolunteers && savedVolunteers !== 'undefined') {
        setVolunteers(JSON.parse(savedVolunteers));
      } else {
        const defaultVolunteers = [
          { id: 1, name: 'Alice Brown', email: 'alice@email.com', skills: 'Teaching, Admin', hours: 120, projects: 3, status: 'Active' },
          { id: 2, name: 'Bob Smith', email: 'bob@email.com', skills: 'Healthcare, Training', hours: 95, projects: 2, status: 'Active' }
        ];
        setVolunteers(defaultVolunteers);
        localStorage.setItem('ngo_volunteers', JSON.stringify(defaultVolunteers));
      }
      
      if (savedDonors && savedDonors !== 'undefined') {
        setDonors(JSON.parse(savedDonors));
      } else {
        const defaultDonors = [
          { id: 1, name: 'Tech Corp Foundation', amount: 50000, frequency: 'Annual', lastDonation: '2024-01-15', type: 'Corporate' },
          { id: 2, name: 'John & Jane Doe', amount: 15000, frequency: 'Quarterly', lastDonation: '2024-10-01', type: 'Individual' }
        ];
        setDonors(defaultDonors);
        localStorage.setItem('ngo_donors', JSON.stringify(defaultDonors));
      }
      
      if (savedEvents && savedEvents !== 'undefined') {
        setEvents(JSON.parse(savedEvents));
      } else {
        const defaultEvents = [
          { id: 1, name: 'Annual Fundraising Gala', date: '2024-12-15', attendees: 200, budget: 15000, status: 'Upcoming' },
          { id: 2, name: 'Volunteer Orientation', date: '2024-11-20', attendees: 45, budget: 2000, status: 'Completed' }
        ];
        setEvents(defaultEvents);
        localStorage.setItem('ngo_events', JSON.stringify(defaultEvents));
      }
      
      if (savedReports && savedReports !== 'undefined') {
        setReports(JSON.parse(savedReports));
      } else {
        const defaultReports = [
          { id: 1, title: 'Q3 2024 Financial Report', type: 'Financial', date: '2024-09-30', status: 'Published' },
          { id: 2, title: 'Impact Assessment 2024', type: 'Impact', date: '2024-11-01', status: 'Published' }
        ];
        setReports(defaultReports);
        localStorage.setItem('ngo_reports', JSON.stringify(defaultReports));
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      // Fallback to default data if localStorage fails
      setProjects([
        { id: 1, name: 'Clean Water Initiative', budget: 50000, spent: 32000, status: 'Active', progress: 64, startDate: '2024-01-15', endDate: '2024-12-31', manager: 'Sarah Johnson' },
        { id: 2, name: 'Education for All', budget: 75000, spent: 45000, status: 'Active', progress: 60, startDate: '2024-03-01', endDate: '2025-02-28', manager: 'Michael Chen' }
      ]);
      setVolunteers([
        { id: 1, name: 'Alice Brown', email: 'alice@email.com', skills: 'Teaching, Admin', hours: 120, projects: 3, status: 'Active' },
        { id: 2, name: 'Bob Smith', email: 'bob@email.com', skills: 'Healthcare, Training', hours: 95, projects: 2, status: 'Active' }
      ]);
      setDonors([
        { id: 1, name: 'Tech Corp Foundation', amount: 50000, frequency: 'Annual', lastDonation: '2024-01-15', type: 'Corporate' },
        { id: 2, name: 'John & Jane Doe', amount: 15000, frequency: 'Quarterly', lastDonation: '2024-10-01', type: 'Individual' }
      ]);
      setEvents([
        { id: 1, name: 'Annual Fundraising Gala', date: '2024-12-15', attendees: 200, budget: 15000, status: 'Upcoming' },
        { id: 2, name: 'Volunteer Orientation', date: '2024-11-20', attendees: 45, budget: 2000, status: 'Completed' }
      ]);
      setReports([
        { id: 1, title: 'Q3 2024 Financial Report', type: 'Financial', date: '2024-09-30', status: 'Published' },
        { id: 2, title: 'Impact Assessment 2024', type: 'Impact', date: '2024-11-01', status: 'Published' }
      ]);
    }
  }, []);

  // Save to localStorage whenever data changes (only if data exists)
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('ngo_projects', JSON.stringify(projects));
    }
  }, [projects]);
  
  useEffect(() => {
    if (volunteers.length > 0) {
      localStorage.setItem('ngo_volunteers', JSON.stringify(volunteers));
    }
  }, [volunteers]);
  
  useEffect(() => {
    if (donors.length > 0) {
      localStorage.setItem('ngo_donors', JSON.stringify(donors));
    }
  }, [donors]);
  
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('ngo_events', JSON.stringify(events));
    }
  }, [events]);
  
  useEffect(() => {
    if (reports.length > 0) {
      localStorage.setItem('ngo_reports', JSON.stringify(reports));
    }
  }, [reports]);

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setFormData(item || {});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setEditingItem(null);
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = editingItem ? editingItem.id : Date.now();
    const itemData = { ...formData, id: newId };

    switch (modalType) {
      case 'project':
        if (editingItem) {
          setProjects(projects.map(p => p.id === editingItem.id ? itemData : p));
        } else {
          setProjects([...projects, itemData]);
        }
        break;
      case 'volunteer':
        if (editingItem) {
          setVolunteers(volunteers.map(v => v.id === editingItem.id ? itemData : v));
        } else {
          setVolunteers([...volunteers, itemData]);
        }
        break;
      case 'donor':
        if (editingItem) {
          setDonors(donors.map(d => d.id === editingItem.id ? itemData : d));
        } else {
          setDonors([...donors, itemData]);
        }
        break;
      case 'event':
        if (editingItem) {
          setEvents(events.map(e => e.id === editingItem.id ? itemData : e));
        } else {
          setEvents([...events, itemData]);
        }
        break;
      case 'report':
        if (editingItem) {
          setReports(reports.map(r => r.id === editingItem.id ? itemData : r));
        } else {
          setReports([...reports, itemData]);
        }
        break;
    }
    closeModal();
  };

  const handleDelete = (type, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    switch (type) {
      case 'project':
        setProjects(projects.filter(p => p.id !== id));
        break;
      case 'volunteer':
        setVolunteers(volunteers.filter(v => v.id !== id));
        break;
      case 'donor':
        setDonors(donors.filter(d => d.id !== id));
        break;
      case 'event':
        setEvents(events.filter(e => e.id !== id));
        break;
      case 'report':
        setReports(reports.filter(r => r.id !== id));
        break;
    }
  };

  const renderForm = () => {
    const fields = {
      project: [
        { name: 'name', label: 'Project Name', type: 'text', required: true },
        { name: 'manager', label: 'Manager', type: 'text' },
        { name: 'budget', label: 'Budget', type: 'number' },
        { name: 'spent', label: 'Spent', type: 'number' },
        { name: 'progress', label: 'Progress (%)', type: 'number', min: 0, max: 100 },
        { name: 'status', label: 'Status', type: 'select', options: ['Planning', 'Active', 'Completed'] },
        { name: 'startDate', label: 'Start Date', type: 'date' },
        { name: 'endDate', label: 'End Date', type: 'date' }
      ],
      volunteer: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'skills', label: 'Skills', type: 'text' },
        { name: 'hours', label: 'Hours', type: 'number' },
        { name: 'projects', label: 'Projects', type: 'number' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ],
      donor: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'type', label: 'Type', type: 'select', options: ['Individual', 'Corporate', 'Foundation', 'Organization'] },
        { name: 'amount', label: 'Amount', type: 'number' },
        { name: 'frequency', label: 'Frequency', type: 'select', options: ['One-time', 'Monthly', 'Quarterly', 'Annual'] },
        { name: 'lastDonation', label: 'Last Donation', type: 'date' }
      ],
      event: [
        { name: 'name', label: 'Event Name', type: 'text', required: true },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'attendees', label: 'Attendees', type: 'number' },
        { name: 'budget', label: 'Budget', type: 'number' },
        { name: 'status', label: 'Status', type: 'select', options: ['Planning', 'Upcoming', 'Ongoing', 'Completed'] }
      ],
      report: [
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'type', label: 'Type', type: 'select', options: ['Financial', 'Impact', 'HR', 'Progress'] },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'status', label: 'Status', type: 'select', options: ['Draft', 'Published'] }
      ]
    };

    return (
      <form onSubmit={handleSubmit}>
        {fields[modalType]?.map(field => (
          <div key={field.name} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'select' ? (
              <select
                value={formData[field.name] || ''}
                onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
                required={field.required}
              >
                <option value="">Select {field.label}</option>
                {field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={formData[field.name] || ''}
                onChange={(e) => setFormData({...formData, [field.name]: field.type === 'number' ? Number(e.target.value) : e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
                required={field.required}
                min={field.min}
                max={field.max}
              />
            )}
          </div>
        ))}
        <div className="flex gap-2 mt-6">
          <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            {editingItem ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={closeModal} className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </form>
    );
  };

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

  const Dashboard = () => {
    console.log('Dashboard rendering with:', { projects: projects.length, volunteers: volunteers.length, donors: donors.length, events: events.length });
    
    return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={Target} title="Active Projects" value={projects.length} subtitle={`${projects.filter(p => p.status === 'Active').length} active`} color="#3B82F6" />
        <StatCard icon={Users} title="Volunteers" value={volunteers.length} subtitle={`${volunteers.filter(v => v.status === 'Active').length} active`} color="#10B981" />
        <StatCard icon={DollarSign} title="Total Funding" value={`$${donors.reduce((sum, d) => sum + (d.amount || 0), 0).toLocaleString()}`} subtitle="Total donations" color="#F59E0B" />
        <StatCard icon={Calendar} title="Events" value={events.length} subtitle={`${events.filter(e => e.status === 'Upcoming').length} upcoming`} color="#8B5CF6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
          <div className="space-y-4">
            {projects.length === 0 ? (
              <p className="text-gray-500">No projects available</p>
            ) : (
              projects.slice(0, 3).map(project => (
                <div key={project.id}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{project.name}</span>
                    <span className="text-sm text-gray-500">{project.progress || 0}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress || 0}%` }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {events.filter(e => e.status === 'Upcoming').length === 0 ? (
              <p className="text-gray-500">No upcoming events</p>
            ) : (
              events.filter(e => e.status === 'Upcoming').slice(0, 3).map(event => (
                <div key={event.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{event.attendees} attendees</p>
                    <p className="text-sm text-gray-500">${event.budget?.toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
  };

  const Projects = () => {
    console.log('Projects rendering with:', projects);
    
    return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Project Management</h1>
        <button onClick={() => openModal('project')} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">No projects available. Click "New Project" to add one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map(project => (
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
                  <span className="font-medium">${project.budget?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Spent:</span>
                  <span className="font-medium">${project.spent?.toLocaleString()}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{project.progress || 0}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${project.progress || 0}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => openModal('project', project)} className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                  Edit
                </button>
                <button onClick={() => handleDelete('project', project.id)} className="border border-red-300 text-red-700 px-3 py-2 rounded text-sm hover:bg-red-50">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  };

  const Volunteers = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Volunteer Management</h1>
        <button onClick={() => openModal('volunteer')} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Add Volunteer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {volunteers.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500">No volunteers available. Click "Add Volunteer" to add one.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Skills</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {volunteers.map(volunteer => (
                <tr key={volunteer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{volunteer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{volunteer.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{volunteer.skills}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${volunteer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button onClick={() => openModal('volunteer', volunteer)} className="text-blue-600 hover:text-blue-800">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete('volunteer', volunteer.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  const Donors = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Donor Management</h1>
        <button onClick={() => openModal('donor')} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Add Donor
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {donors.map(donor => (
              <tr key={donor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{donor.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{donor.type}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">${donor.amount?.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{donor.frequency}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button onClick={() => openModal('donor', donor)} className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete('donor', donor.id)} className="text-red-600 hover:text-red-800">
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

  const Events = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Event Management</h1>
        <button onClick={() => openModal('event')} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
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
                Budget: ${event.budget?.toLocaleString()}
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => openModal('event', event)} className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                Edit Event
              </button>
              <button onClick={() => handleDelete('event', event.id)} className="border border-red-300 text-red-700 px-3 py-2 rounded text-sm hover:bg-red-50">
                Delete
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
        <button onClick={() => openModal('report')} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus size={20} className="mr-2" />
          Generate Report
        </button>
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
            {reports.map(report => (
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
                    <button onClick={() => openModal('report', report)} className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete('report', report.id)} className="text-red-600 hover:text-red-800">
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

      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal} title={`${editingItem ? 'Edit' : 'Create'} ${modalType?.charAt(0).toUpperCase() + modalType?.slice(1)}`}>
        {renderForm()}
      </Modal>
    </div>
  );
}

export default NGOManagementSystem;