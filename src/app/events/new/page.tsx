import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateEventPage() {
  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ background: "linear-gradient(135deg, #FFE6C9, #FCC6FF20)" }}
    >
      {/* Header Section */}
      <div className="container mx-auto mb-8">
        <Link
          href="/events"
          className="text-[#FFA09B] hover:text-[#FF8E88] mb-4 inline-flex items-center group"
        >
          <svg
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Events
        </Link>
        <h1 className="text-4xl font-bold gradient-text mb-2">
          Create New Event
        </h1>
        <p className="text-[#2D1810]/80">
          Let&apos;s create something amazing together
        </p>
      </div>

      {/* Event Form */}
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* Basic Information */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-6 text-[#2D1810]">
                Event Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2D1810] mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-[#FCC6FF] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent placeholder-[#2D1810]/40"
                    placeholder="Give your event a catchy name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D1810] mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-[#FCC6FF] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent min-h-[100px] placeholder-[#2D1810]/40"
                    placeholder="What's this celebration about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D1810] mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-[#FCC6FF] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent placeholder-[#2D1810]/40"
                    placeholder="Where's the party?"
                  />
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-6 text-[#2D1810]">
                Date & Time Options
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2D1810] mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-lg border border-[#FCC6FF] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent text-[#2D1810]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D1810] mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 rounded-lg border border-[#FCC6FF] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent text-[#2D1810]"
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-5 w-5 border-2 border-[#FCC6FF] rounded bg-white/70 peer-checked:bg-[#FFA09B] peer-checked:border-[#FFA09B] transition-colors"></div>
                      <svg
                        className="absolute top-1 left-1 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-[#2D1810] group-hover:text-[#2D1810]/70 transition-colors">
                      Add alternative dates for voting
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-6 text-[#2D1810]">
                Participants
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2D1810] mb-2">
                    Invite Participants
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-[#FCC6FF] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent placeholder-[#2D1810]/40"
                    placeholder="Enter email addresses (separated by commas)"
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-5 w-5 border-2 border-[#FCC6FF] rounded bg-white/70 peer-checked:bg-[#FFA09B] peer-checked:border-[#FFA09B] transition-colors"></div>
                      <svg
                        className="absolute top-1 left-1 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-[#2D1810] group-hover:text-[#2D1810]/70 transition-colors">
                      Allow participants to invite others
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <Link href="/events">
                <Button className="button-secondary">Cancel</Button>
              </Link>
              <Button type="submit" className="button-primary">
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
