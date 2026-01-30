import React from 'react';
import { LogOut, User, Mail, Phone, Users } from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
  const infoCards = [
    { icon: User, label: 'Name', value: `${user.firstName} ${user.lastName}` },
    { icon: Mail, label: 'Email', value: user.email },
    { icon: Users, label: 'Gender', value: user.gender, capitalize: true },
    { icon: Phone, label: 'Phone', value: user.phoneNumber }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600 mt-1">Welcome back, {user.firstName}!</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
        
        <div className="grid gap-4">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all transform hover:scale-[1.02] animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <card.icon className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium">{card.label}</p>
                  <p className={`text-lg font-semibold text-gray-800 ${card.capitalize ? 'capitalize' : ''}`}>
                    {card.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;