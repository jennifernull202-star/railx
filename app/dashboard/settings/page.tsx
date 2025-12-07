"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    weeklyDigest: true,
  });

  const handleToggle = (key: string) => {
    setForm({ ...form, [key]: !form[key as keyof typeof form] });
  };

  const saveSettings = async () => {
    // TODO: Implement API call
    alert("Settings saved successfully!");
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-railBlue">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account preferences and notifications.</p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Notifications</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive email alerts for new messages and inquiries</p>
            </div>
            <button
              onClick={() => handleToggle("emailNotifications")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                form.emailNotifications ? "bg-railBlue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  form.emailNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">SMS Notifications</p>
              <p className="text-sm text-gray-600">Get text messages for urgent inquiries</p>
            </div>
            <button
              onClick={() => handleToggle("smsNotifications")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                form.smsNotifications ? "bg-railBlue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  form.smsNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Marketing Emails</p>
              <p className="text-sm text-gray-600">Receive updates about new features and promotions</p>
            </div>
            <button
              onClick={() => handleToggle("marketingEmails")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                form.marketingEmails ? "bg-railBlue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  form.marketingEmails ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Weekly Digest</p>
              <p className="text-sm text-gray-600">Get a weekly summary of your activity</p>
            </div>
            <button
              onClick={() => handleToggle("weeklyDigest")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                form.weeklyDigest ? "bg-railBlue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  form.weeklyDigest ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy</h2>
        <div className="space-y-4">
          <button className="text-railBlue hover:underline text-sm">
            Download my data
          </button>
          <br />
          <button className="text-red-600 hover:underline text-sm">
            Delete my account
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={saveSettings}
        className="bg-railBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-railBlue/90 transition"
      >
        Save Settings
      </button>
    </div>
  );
}
