"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailOnInquiry: true,
    emailOnReply: true,
    emailOnBoostExpiring: true,
    smsOnInquiry: false,
    smsOnReply: false,
    weeklyDigest: true,
    marketingEmails: false,
  });

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof settings],
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/settings/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        alert("Notification settings saved!");
      }
    } catch (err) {
      console.error("Failed to save settings:", err);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-[#0A1A2F] mb-6">
        Notification Settings
      </h1>

      <div className="bg-white p-8 rounded-lg shadow space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[#0A1A2F]">
            Email Notifications
          </h2>

          <div className="space-y-4">
            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                Email me when I receive a new inquiry
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.emailOnInquiry}
                onChange={() => handleToggle("emailOnInquiry")}
              />
            </label>

            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                Email me when someone replies to a message
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.emailOnReply}
                onChange={() => handleToggle("emailOnReply")}
              />
            </label>

            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                Email me when my boosts are expiring
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.emailOnBoostExpiring}
                onChange={() => handleToggle("emailOnBoostExpiring")}
              />
            </label>

            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                Send me a weekly activity digest
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.weeklyDigest}
                onChange={() => handleToggle("weeklyDigest")}
              />
            </label>

            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                Marketing and promotional emails
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.marketingEmails}
                onChange={() => handleToggle("marketingEmails")}
              />
            </label>
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-xl font-semibold mb-4 text-[#0A1A2F]">
            SMS Notifications (Optional)
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Receive text message alerts for urgent notifications. Standard
            message rates may apply.
          </p>

          <div className="space-y-4">
            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                SMS alert for new inquiries
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.smsOnInquiry}
                onChange={() => handleToggle("smsOnInquiry")}
              />
            </label>

            <label className="flex items-center justify-between py-3 border-b">
              <span className="text-gray-700">
                SMS alert for message replies
              </span>
              <input
                type="checkbox"
                className="h-5 w-5 text-[#0A1A2F] rounded"
                checked={settings.smsOnReply}
                onChange={() => handleToggle("smsOnReply")}
              />
            </label>
          </div>
        </section>

        <div className="pt-6 flex gap-4">
          <button
            onClick={handleSave}
            className="bg-[#0A1A2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
          >
            Save Settings
          </button>

          <button
            onClick={() =>
              setSettings({
                emailOnInquiry: true,
                emailOnReply: true,
                emailOnBoostExpiring: true,
                smsOnInquiry: false,
                smsOnReply: false,
                weeklyDigest: true,
                marketingEmails: false,
              })
            }
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
