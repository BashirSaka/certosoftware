import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

export default function TermsAndPrivacy({ defaultTab = "privacy" }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes("terms") ? "terms" : defaultTab
  );

  useEffect(() => {
    if (location.pathname.includes("terms")) {
      setActiveTab("terms");
    } else if (location.pathname.includes("privacy")) {
      setActiveTab("privacy");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="bg-[#F3F8FF] min-h-screen py-10 px-6 min-[769px]:px-20 min-[769px]:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#02033B]/70 mb-6">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#4335DE] transition-colors"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-[#02033B]">
            {activeTab === "privacy" ? "Privacy Policy" : "Terms of Service"}
          </span>
        </div>

        {/* Header Hero */}
        <div className="bg-white rounded-3xl p-8 min-[769px]:p-12 shadow-sm border border-gray-100 mb-8">
          <div className="inline-flex items-center gap-2 bg-[#F3F8FF] text-[#4335DE] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            <ShieldCheck size={16} /> Legal & Security Compliance
          </div>
          <h1 className="text-3xl min-[769px]:text-4xl font-bold text-[#02033B] tracking-tight mb-4">
            {activeTab === "privacy"
              ? "Privacy Policy & Data Protection"
              : "Terms of Service & User Agreement"}
          </h1>
          <p className="text-[#02033B]/80 text-base min-[769px]:text-lg leading-relaxed max-w-2xl">
            Learn how Certo Software works, how we protect your personal mobile
            environment, and the exact protocols we follow to safeguard your
            data with zero compromise.
          </p>
          <div className="text-xs font-medium text-gray-500 mt-4">
            Last Updated: September 2026 • Effective for all Certo mobile apps & services
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-3 mt-8 border-b border-gray-100 pb-2">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`cursor-pointer px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === "privacy"
                  ? "bg-[#4335DE] text-white shadow-xs"
                  : "bg-gray-100 text-[#02033B] hover:bg-gray-200"
              }`}
            >
              <Lock size={16} /> Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`cursor-pointer px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === "terms"
                  ? "bg-[#4335DE] text-white shadow-xs"
                  : "bg-gray-100 text-[#02033B] hover:bg-gray-200"
              }`}
            >
              <FileText size={16} /> Terms of Service
            </button>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-3 shadow-xs">
            <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#02033B] text-sm">100% Local Scanning</h4>
              <p className="text-xs text-gray-600 mt-1 leading-normal">
                Files and system states are analyzed directly on your device. We never upload your personal contents.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-3 shadow-xs">
            <div className="bg-blue-50 text-[#4335DE] p-2.5 rounded-xl shrink-0">
              <Lock size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#02033B] text-sm">Zero Data Selling</h4>
              <p className="text-xs text-gray-600 mt-1 leading-normal">
                We never monetize, rent, or sell your personal data, scan logs, or device metrics to advertisers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-3 shadow-xs">
            <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl shrink-0">
              <AlertCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#02033B] text-sm">Strict Encryption</h4>
              <p className="text-xs text-gray-600 mt-1 leading-normal">
                Any communication with our threat database uses industry-standard TLS 1.3 encryption.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Document Content */}
        <div className="bg-white rounded-3xl p-8 min-[769px]:p-12 shadow-sm border border-gray-100 prose max-w-none text-[#02033B]">
          {activeTab === "privacy" ? (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  1. How Certo Software Works
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  Certo Software develops specialized mobile security technologies designed
                  to detect and neutralize unauthorized monitoring tools, spyware, commercial
                  surveillance utilities, keyloggers, and operating system vulnerabilities. Our core
                  engineering philosophy is rooted in local, on-device analysis. When you initiate a
                  security audit on your iPhone or Android device, our scanner examines system
                  configurations, installed package manifests, application permissions, and signature
                  anomalies directly within your device’s sandbox memory.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base">
                  Unlike conventional cloud antivirus solutions that upload snapshots of your entire
                  device storage to remote data centers, Certo evaluates threat indicators locally. This
                  ensures your personal files, conversations, and multimedia never leave the confines
                  of your mobile device during routine scans.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  2. What Data We Collect & What We Never Touch
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  To provide our security services, licensing validation, and product updates, Certo
                  collects the minimum necessary data required for operation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm min-[769px]:text-base">
                  <li>
                    <strong>Account and Authentication Credentials:</strong> When you register or sign in,
                    we store your email address, hashed password, and subscription validity status.
                  </li>
                  <li>
                    <strong>Anonymized Telemetry & Threat Signatures:</strong> In the event that a novel
                    malicious package or tracking configuration is detected, an anonymized cryptographic
                    hash of the threat signature may be cross-checked with our cloud threat database.
                  </li>
                  <li>
                    <strong>Device Specifications:</strong> Basic hardware model, operating system
                    version (e.g., iOS 17.4 or Android 14), and application build version to ensure
                    accurate vulnerability detection.
                  </li>
                </ul>
                <div className="mt-4 p-4 rounded-xl bg-[#F3F8FF] border border-blue-100 text-sm text-[#02033B]">
                  <strong>What we NEVER access or collect:</strong> We strictly do not access your
                  photos, videos, contacts, SMS messages, private chat transcripts, microphone recordings,
                  browsing history, keystrokes, or location coordinates. Your private digital life remains
                  entirely private.
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  3. How We Use and Protect Your Data
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  Any information gathered by Certo is strictly utilized for the following authorized purposes:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-sm min-[769px]:text-base">
                  <li>
                    <strong>Delivering Detection Services:</strong> Validating system integrity, alerting
                    you to active surveillance software, and providing step-by-step threat removal instructions.
                  </li>
                  <li>
                    <strong>Subscription Management:</strong> Verifying entitlement to premium scans,
                    breach alerts, and real-time monitoring features.
                  </li>
                  <li>
                    <strong>System Improvements:</strong> Evaluating anonymous crash reports and scanner
                    execution speeds to improve device compatibility and detection accuracy across manufacturers.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mt-4">
                  All communications between our applications and servers are secured using TLS 1.3
                  encryption. Account data and subscription records are retained in ISO 27001-certified
                  data centers with strict role-based access control and end-to-end encryption at rest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  4. Third-Party Sharing and Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base">
                  Certo maintains a strict zero-sale policy. We do not sell, barter, or distribute your
                  personal data to advertising agencies, data brokers, or marketing networks. We only
                  engage reputable third-party processors necessary for core functionality (such as Stripe
                  for PCI-compliant payment handling and certified email delivery partners for security notices).
                  All partners are bound by rigorous data processing agreements compliant with GDPR and CCPA standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  5. Your Legal Rights and Privacy Controls
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  Under global privacy legislation including the General Data Protection Regulation (GDPR)
                  and the California Consumer Privacy Act (CCPA), you retain the following enforceable rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm min-[769px]:text-base">
                  <li>Right to access all personal account information stored by Certo.</li>
                  <li>Right to request immediate and permanent deletion of your account and related records.</li>
                  <li>Right to export your data in a structured, portable electronic format.</li>
                  <li>Right to withdraw consent for marketing newsletters at any time.</li>
                </ul>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  1. Agreement and Permitted Use
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  By accessing, installing, or utilizing software applications, web portals, or tools
                  provided by Certo Software Limited ("Certo", "we", "us"), you agree to be bound by these
                  Terms of Service. If you do not agree with any provision herein, you must immediately
                  discontinue use and uninstall our applications from all devices.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base">
                  Certo grants you a personal, non-exclusive, non-transferable, and revocable license to
                  use our mobile applications strictly for safeguarding personal devices that you own or
                  for which you possess explicit, lawful authorization to audit and inspect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  2. Restrictions on Software Usage
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  To protect the integrity of our software ecosystem, you expressly agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm min-[769px]:text-base">
                  <li>Reverse engineer, decompile, disassemble, or derive the source code of Certo applications.</li>
                  <li>Modify, circumvent, or disable any security features, licensing mechanisms, or scan limits.</li>
                  <li>Deploy our software to perform unlawful surveillance, unauthorized audits, or malicious penetration.</li>
                  <li>Resell, sublicense, or distribute Certo products as part of an unauthorized commercial service bureau.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  3. Subscriptions, Payments & Cancellations
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  Select premium features of Certo Software are provided on a recurring subscription basis
                  (monthly or annual billing). Subscriptions renew automatically unless canceled at least 24
                  hours prior to the end of the active billing cycle.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base">
                  You may manage or cancel your subscription at any time through your account settings or
                  via the respective platform store (Apple App Store or Google Play Store) through which your
                  purchase was completed. Refunds are governed by the relevant store policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  4. Disclaimer of Warranties and Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base mb-4">
                  Certo Software provides diagnostic and security tools on an "as-is" and "as-available"
                  basis. While our detection algorithms are continually updated against emerging spyware and
                  monitoring technologies, no security solution can guarantee absolute detection of all
                  imaginable threats or hardware-level compromises.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base">
                  In no event shall Certo Software Limited, its directors, or affiliates be liable for any
                  indirect, incidental, consequential, or punitive damages resulting from the use or inability
                  to use our software, or from actions taken based upon scanning recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#02033B] mb-3">
                  5. Governing Law and Amendments
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm min-[769px]:text-base">
                  These Terms are governed by and construed in accordance with the laws of England and Wales.
                  We reserve the right to revise these Terms periodically. Notice of material changes will be
                  communicated through application notifications or via our official web portal.
                </p>
              </section>
            </div>
          )}

          {/* Contact Box at bottom of document */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col min-[769px]:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-[#02033B] text-lg">Have questions about your privacy?</h3>
              <p className="text-sm text-gray-600">Our security compliance team is available to assist.</p>
            </div>
            <Link
              to="/help"
              className="bg-[#02033B] hover:bg-[#1a1c6a] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
