import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateEventPage() {
  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-white via-purple-50/30 to-fuchsia-50/30">
      {/* Header Section */}
      <div className="container mx-auto mb-8">
        <Link
          href="/events"
          className="text-fuchsia-500 hover:text-fuchsia-600 mb-4 inline-flex items-center group"
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-fuchsia-600 bg-clip-text text-transparent mb-2">
          Create New Event
        </h1>
        <p className="text-purple-700">
          Let&apos;s plan something amazing together
        </p>
      </div>

      {/* Event Form */}
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* Basic Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-6 text-purple-900">
                Event Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-purple-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent placeholder-purple-400"
                    placeholder="Give your event a catchy name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-purple-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent min-h-[100px] placeholder-purple-400"
                    placeholder="What's this celebration about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-purple-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent placeholder-purple-400"
                    placeholder="Where's the party?"
                  />
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-6 text-purple-900">
                Date & Time Options
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-lg border border-purple-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-purple-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 rounded-lg border border-purple-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-purple-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-5 w-5 border-2 border-purple-200 rounded bg-white/70 peer-checked:bg-fuchsia-500 peer-checked:border-fuchsia-500 transition-colors"></div>
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
                    <span className="text-sm text-purple-900 group-hover:text-purple-700 transition-colors">
                      Add alternative dates for voting
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-6 text-purple-900">
                Participants
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-2">
                    Invite Participants
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-purple-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent placeholder-purple-400"
                    placeholder="Enter email addresses (separated by commas)"
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-5 w-5 border-2 border-purple-200 rounded bg-white/70 peer-checked:bg-fuchsia-500 peer-checked:border-fuchsia-500 transition-colors"></div>
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
                    <span className="text-sm text-purple-900 group-hover:text-purple-700 transition-colors">
                      Allow participants to invite others
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
