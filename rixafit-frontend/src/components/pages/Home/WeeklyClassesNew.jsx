// WEEKLY CLASS SCHEDULE – React + Tailwind
// Matches the screenshot: 7 weekdays columns + time slots at left
// Usage: <WeeklySchedule days={days} slots={slots} events={events} />
// Tailwind required.

export default function WeeklyClassesNew({
  days = defaultDays,
  slots = defaultSlots,
  events = defaultEvents,
}) {
  // fast lookup: key = `${day}|${slotId}`
  const map = new Map(events.map((e) => [`${e.day}|${e.slot}`, e]));

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* horizontal scroll for small screens */}
        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Header row */}
            <div className="grid grid-cols-[160px_repeat(7,1fr)] border-y border-gray-200">
              <div className="py-5" />
              {days.map((d) => (
                <div
                  key={d}
                  className="py-5 text-center font-black uppercase tracking-wide text-gray-800"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Time rows */}
            {slots.map((slot, rIdx) => (
              <div
                key={slot.id}
                className="grid grid-cols-[160px_repeat(7,1fr)] border-b border-gray-200"
              >
                {/* time label */}
                <div className="py-6 pr-4 text-right text-sm font-extrabold tracking-wide text-gray-700">
                  {slot.label}
                </div>

                {/* day cells */}
                {days.map((day, cIdx) => {
                  const e = map.get(`${day}|${slot.id}`);
                  return (
                    <div key={`${day}-${slot.id}`} className="p-3">
                      {e ? <EventCard {...e} /> : <div className="h-16" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ title, coach }) {
  return (
    <div className="h-16 grid place-content-center rounded-sm bg-[#ceb494] text-gray-900 shadow-sm ring-1 ring-black/10">
      <div className="text-center leading-tight">
        <div className="text-[15px] md:text-base font-black uppercase tracking-wide">
          {title}
        </div>
        <div className="text-xs md:text-sm text-gray-800">{coach}</div>
      </div>
    </div>
  );
}

// --- Defaults to match screenshot content ---
const defaultDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const defaultSlots = [
  { id: "06-08", label: "06.00 - 08.00" },
  { id: "08-10", label: "08.00 - 10.00" },
  { id: "10-12", label: "10.00 - 12.00" },
  { id: "12-14", label: "12.00 - 02.00" },
  { id: "14-16", label: "02.00 - 04.00" },
  { id: "16-18", label: "04.00 - 06.00" },
  { id: "18-20", label: "06.00 - 08.00" },
];

const defaultEvents = [
  { day: "Monday", slot: "06-08", title: "Boxing", coach: "Professor Smith" },
  { day: "Wednesday", slot: "06-08", title: "Cardio", coach: "Robert Cage" },
  { day: "Thursday", slot: "06-08", title: "Boxing", coach: "Robert Cage" },
  { day: "Saturday", slot: "06-08", title: "Craze", coach: "Robert Cage" },
  { day: "Saturday", slot: "08-10", title: "Bootcamp", coach: "Robert Cage" },
  { day: "Sunday", slot: "08-10", title: "Boxing", coach: "Ms. Garcia" },
  { day: "Monday", slot: "10-12", title: "Yoga", coach: "Robert Cage" },
  { day: "Wednesday", slot: "10-12", title: "Zumba", coach: "Mrs. Johnson" },
  { day: "Thursday", slot: "10-12", title: "Boxing", coach: "Ms. Garcia" },
  { day: "Friday", slot: "10-12", title: "Sculpt", coach: "Robert Cage" },
  { day: "Friday", slot: "12-14", title: "Spin", coach: "Robert Cage" },
  { day: "Saturday", slot: "12-14", title: "Tone Up", coach: "Mrs. Johnson" },
  { day: "Monday", slot: "14-16", title: "Cardio", coach: "Robert Cage" },
  { day: "Wednesday", slot: "14-16", title: "Mr. Rodriguez", coach: "Robert Cage" },
  { day: "Thursday", slot: "14-16", title: "Boxing", coach: "Robert Cage" },
  { day: "Friday", slot: "14-16", title: "HIIT", coach: "Mrs. White" },
  { day: "Wednesday", slot: "16-18", title: "Workout", coach: "Ms. Thompson" },
  { day: "Thursday", slot: "16-18", title: "Cardio", coach: "Robert Cage" },
  { day: "Friday", slot: "18-20", title: "Power", coach: "Ms. Wilson" },
  { day: "Saturday", slot: "18-20", title: "Fitness", coach: "Mr. Clark" },
  { day: "Sunday", slot: "18-20", title: "Mayhem", coach: "Coach Taylor" },
  { day: "Sunday", slot: "14-16", title: "Stretch", coach: "Ms. Garcia" },
  { day: "Tuesday", slot: "12-14", title: "Boxing", coach: "Robert Cage" },
  { day: "Tuesday", slot: "08-10", title: "Boxing", coach: "Robert Cage" },
  { day: "Wednesday", slot: "08-10", title: "Boxing", coach: "Robert Cage" },
  { day: "Tuesday", slot: "18-20", title: "Rhythm", coach: "Dr. Patel" },
  { day: "Wednesday", slot: "18-20", title: "Sculpt", coach: "Mrs. Khan" },
  { day: "Saturday", slot: "14-16", title: "Muscle", coach: "Mrs. Johnson" },
];
