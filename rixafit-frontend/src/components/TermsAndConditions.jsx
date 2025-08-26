import { useState } from "react";
import { CheckCircle2, Printer, Download, ChevronDown } from "lucide-react";

// RIXA Fit – Membership Terms & Conditions & Guidelines
// Drop this component anywhere in your React app. Tailwind CSS required.
// Optional: Wrap on a route like /terms. Includes: sticky header, collapsible sections, print, accept checkbox.

export default function RixaTerms() {
  const [accepted, setAccepted] = useState(false);
  const [open, setOpen] = useState({
    tnc: true,
    guidelines: true,
  });

  const Section = ({ id, title, children }) => (
    <section id={id} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
      <button
        onClick={() => setOpen((s) => ({ ...s, [id]: !s[id] }))}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left"
        aria-expanded={open[id]}
        aria-controls={`${id}-content`}
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>
        <ChevronDown className={`h-5 w-5 transition-transform ${open[id] ? "rotate-180" : "rotate-0"}`} />
      </button>
      <div id={`${id}-content`} className={`${open[id] ? "block" : "hidden"} border-t border-gray-200 px-4 sm:px-6 py-5`}>{children}</div>
    </section>
  );

  const Bullet = ({ children }) => (
    <li className="flex gap-3 leading-relaxed text-gray-700">
      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[#971b1e]"></span>
      <span>{children}</span>
    </li>
  );

  const SubTitle = ({ children }) => (
    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">{children}</h3>
  );

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs tracking-widest text-gray-500">RIXA FIT</p>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Membership Terms & Guidelines</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-[.99]"
            >
              <Printer className="h-4 w-4" /> Print / Save PDF
            </button>
            <a
              href="#accept"
              className="inline-flex items-center gap-2 rounded-xl bg-[#971b1e] px-3 py-2 text-sm font-semibold text-white hover:bg-[#7f1517] active:scale-[.99]"
            >
              <Download className="h-4 w-4" /> Review & Accept
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 print:py-0">
        <div className="mb-6 text-sm text-gray-600">
          <div className="h-[1px] w-full bg-gray-200 mb-3" />
          <p className="italic">Please read carefully. By continuing, you acknowledge and agree to the following terms.</p>
        </div>

        <div className="grid gap-6">
          {/* Terms & Conditions */}
          <Section id="tnc" title="1. Membership Terms & Conditions">
            <SubTitle>1.1 Membership & Fees</SubTitle>
            <ul className="space-y-3">
              <Bullet>Membership is non-transferable and non-refundable.</Bullet>
              <Bullet>Fees must be paid in advance as per the chosen plan (Monthly, Quarterly, Half-Yearly, Yearly).</Bullet>
              <Bullet>Membership will expire automatically at the end of the plan unless renewed.</Bullet>
              <Bullet>Management reserves the right to revise membership fees.</Bullet>
            </ul>

            <SubTitle>1.2 Access & Timings</SubTitle>
            <ul className="space-y-3">
              <Bullet>Entry is allowed only with a valid membership.</Bullet>
              <Bullet>Members may use the gym during official working hours only.</Bullet>
              <Bullet>Timings, holidays, or class schedules may change with prior notice.</Bullet>
            </ul>

            <SubTitle>1.3 Health & Safety</SubTitle>
            <ul className="space-y-3">
              <Bullet>Members are advised to consult a doctor before starting workouts.</Bullet>
              <Bullet>RIXA Fit is not responsible for injuries, illness, or health conditions arising during workouts.</Bullet>
              <Bullet>All exercises must be performed under trainer guidance and with safe usage of equipment.</Bullet>
            </ul>

            <SubTitle>1.4 Code of Conduct</SubTitle>
            <ul className="space-y-3">
              <Bullet>Members must wear proper gym attire and clean shoes.</Bullet>
              <Bullet>Misbehavior, offensive language, or harassment will lead to membership cancellation.</Bullet>
              <Bullet>Smoking, alcohol, or drugs are strictly prohibited.</Bullet>
            </ul>

            <SubTitle>1.5 Facilities & Services</SubTitle>
            <ul className="space-y-3">
              <Bullet>Lockers are for temporary use only; management is not responsible for lost items.</Bullet>
              <Bullet>Group classes, PT sessions, or special programs may have extra charges.</Bullet>
            </ul>

            <SubTitle>1.6 Suspension & Termination</SubTitle>
            <ul className="space-y-3">
              <Bullet>Management can suspend or cancel membership without refund for violation of rules.</Bullet>
              <Bullet>Members may request temporary holds (freeze) only in genuine cases (medical/travel) – subject to management approval.</Bullet>
            </ul>

            <SubTitle>1.7 Liability Waiver</SubTitle>
            <ul className="space-y-3">
              <Bullet>Members participate in workouts at their own risk.</Bullet>
              <Bullet>RIXA Fit, its owners, or staff are not liable for accidents, injuries, or health issues caused during workouts.</Bullet>
            </ul>

            <SubTitle>1.8 Legal</SubTitle>
            <ul className="space-y-3">
              <Bullet>CCTV surveillance is maintained for safety.</Bullet>
              <Bullet>Any disputes are subject to Mahabubnagar jurisdiction.</Bullet>
            </ul>
          </Section>

          {/* Member Guidelines */}
          <Section id="guidelines" title="2. Member Guidelines">
            <p className="text-gray-700 mb-4">To ensure a safe and enjoyable environment for everyone:</p>
            <ul className="space-y-3">
              <Bullet><span className="mr-1" role="img" aria-label="dumbbell">🏋</span> Use equipment safely – return weights and wipe down machines after use.</Bullet>
              <Bullet><span className="mr-1" role="img" aria-label="clock">⏰</span> Be on time – respect gym timings and class schedules.</Bullet>
              <Bullet><span className="mr-1" role="img" aria-label="shirt">👕</span> Dress code – sportswear & clean gym shoes only.</Bullet>
              <Bullet><span className="mr-1" role="img" aria-label="no">🚫</span> Avoid prohibited items – no smoking, alcohol, or drugs.</Bullet>
              <Bullet><span className="mr-1" role="img" aria-label="bulb">💡</span> Health first – warm up, cool down, and inform trainers of medical issues.</Bullet>
              <Bullet><span className="mr-1" role="img" aria-label="shield">🛡</span> Personal belongings – use lockers for temporary storage only.</Bullet>
              <Bullet><span className="mr-1" role="img" aria-label="hands">🙌</span> Respect others – share equipment, minimize mobile use, and maintain discipline.</Bullet>
            </ul>
          </Section>

          {/* Accept Section */}
          <section id="accept" className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-start gap-3">
              <input
                id="accept-terms"
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[#971b1e] focus:ring-[#971b1e]"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <label htmlFor="accept-terms" className="text-gray-800">
                I have read and agree to the <strong>RIXA Fit Membership Terms & Guidelines</strong>.
              </label>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Member Name</label>
                <input type="text" placeholder="Your full name" className="mt-1 rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#971b1e]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Date</label>
                <input type="date" className="mt-1 rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#971b1e]" />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label className="text-sm text-gray-600">Location</label>
                <input type="text" defaultValue="Mahabubnagar" className="mt-1 rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#971b1e]" />
              </div>
            </div>

            <button
              disabled={!accepted}
              className={`mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all ${
                accepted ? "bg-[#1e2124] text-white hover:bg-black" : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              <CheckCircle2 className="h-5 w-5" /> Submit / Continue
            </button>

            <p className="mt-3 text-xs text-gray-500">By submitting, you confirm your consent and acknowledge the liability waiver.</p>
          </section>
        </div>

        {/* Footer note */}
        <footer className="mt-10 mb-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RIXA Fit. All rights reserved.</p>
        </footer>
      </main>

      {/* Print styles */}
      <style>{`
        @media print {
          header, #accept, .print\:py-0 { display: none !important; }
          main { padding: 0 !important; }
          section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
