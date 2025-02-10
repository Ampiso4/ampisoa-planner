import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="py-8 px-4">
      {/* Header Section with Background */}
      <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-64">
          <Image
            src="https://picsum.photos/id/1057/2000/800"
            alt="Events header"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-fuchsia-200/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-900 to-fuchsia-600 bg-clip-text text-transparent">
                  Your Events
                </h1>
                <p className="text-lg text-purple-700 mb-6">
                  Create, manage, and join events that bring people together
                </p>
                <Link href="/events/new">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Create New Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900">
            Your Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Event Card */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-white to-purple-50 p-6 hover:border-fuchsia-300 transition-all hover:shadow-lg">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 group-hover:bg-fuchsia-50 transition-colors shadow-inner">
                  <svg
                    className="w-8 h-8 text-fuchsia-500 group-hover:text-purple-500 transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-purple-900">
                  Create New Event
                </h3>
                <p className="text-purple-700 mb-4">
                  Start planning your next gathering
                </p>
                <Link href="/events/new">
                  <Button
                    variant="outline"
                    className="border-purple-200 text-purple-700 hover:bg-white/50"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Empty State Card */}
            <div className="relative overflow-hidden rounded-xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4 shadow-inner">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-purple-900">
                  No Events Yet
                </h3>
                <p className="text-purple-600">
                  Create your first event to get started
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900">
            Invitations
          </h2>
          <div className="bg-gradient-to-br from-white via-fuchsia-50 to-purple-50 rounded-xl p-8 text-center border border-purple-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-inner">
              <svg
                className="w-8 h-8 text-purple-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-900">
              No Invitations Yet
            </h3>
            <p className="text-purple-600">
              When someone invites you to an event, it will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
