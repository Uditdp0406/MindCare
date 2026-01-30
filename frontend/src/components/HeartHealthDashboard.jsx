import React, { useState, useEffect } from 'react';
import { Heart, Activity, Droplet, Wind, TrendingUp, User, LogOut, Bell, Calendar, Target } from 'lucide-react';

const HeartHealthDashboard = ({ user, onLogout, loggingOut }) => {
  const [heartbeat, setHeartbeat] = useState(false);
  const [stats, setStats] = useState({
    heartRate: 0,
    bloodPressure: '0/0',
    oxygen: 0,
    steps: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        heartRate: 72,
        bloodPressure: '120/80',
        oxygen: 98,
        steps: 8542
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat(true);
      setTimeout(() => setHeartbeat(false), 200);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const healthMetrics = [
    { 
      icon: Activity, 
      label: 'Heart Rate', 
      value: `${stats.heartRate} bpm`, 
      status: 'normal',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    },
    { 
      icon: Droplet, 
      label: 'Blood Pressure', 
      value: stats.bloodPressure, 
      status: 'normal',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    { 
      icon: Wind, 
      label: 'Oxygen Level', 
      value: `${stats.oxygen}%`, 
      status: 'excellent',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    { 
      icon: TrendingUp, 
      label: 'Daily Steps', 
      value: stats.steps.toLocaleString(), 
      status: 'good',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    }
  ];

  const healthTips = [
    { icon: '🏃', title: 'Stay Active', desc: '30 minutes of exercise daily' },
    { icon: '🥗', title: 'Eat Healthy', desc: 'Balanced diet with fruits & veggies' },
    { icon: '💧', title: 'Stay Hydrated', desc: 'Drink 8 glasses of water daily' },
    { icon: '😴', title: 'Good Sleep', desc: '7-8 hours of quality sleep' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6 animate-slideInUp">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={32} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="text-gray-600">Your heart health is looking great today</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all transform hover:scale-105">
                <Bell size={20} className="text-gray-700" />
              </button>
              <button
                onClick={onLogout}
                disabled={loggingOut}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loggingOut ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut size={18} />
                    Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Heart Animation Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-ripple"></div>
              <div className={`relative ${heartbeat ? 'animate-heartbeat' : ''}`}>
                <Heart 
                  size={120} 
                  className="text-red-500 fill-red-500 drop-shadow-lg"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Heart Health Monitor</h2>
            <p className="text-gray-600 text-center max-w-2xl">
              Track your cardiovascular health in real-time. Stay informed about your vital signs and maintain a healthy lifestyle.
            </p>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {healthMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${metric.bgColor} rounded-2xl p-4 mb-4`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-3`}>
                  <metric.icon className="text-white" size={24} />
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-1">{metric.label}</h3>
                <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  metric.status === 'excellent' ? 'bg-green-500' :
                  metric.status === 'good' ? 'bg-blue-500' :
                  'bg-yellow-500'
                } animate-pulse`}></div>
                <span className="text-sm text-gray-600 capitalize">{metric.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Health Tips */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-red-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Daily Health Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthTips.map((tip, index) => (
              <div
                key={index}
                className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-red-50 hover:to-pink-50 transition-all transform hover:scale-105 cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideInUp" style={{ animationDelay: '0.7s' }}>
          <button className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Book Checkup</h3>
            <p className="text-sm text-gray-600">Schedule your next health screening</p>
          </button>

          <button className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
              <Activity className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">View Reports</h3>
            <p className="text-sm text-gray-600">Access your health history and reports</p>
          </button>

          <button className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Health Goals</h3>
            <p className="text-sm text-gray-600">Set and track your wellness goals</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeartHealthDashboard;