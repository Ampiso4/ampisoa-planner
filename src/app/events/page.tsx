import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="py-8 px-4">
      {/* Header Section with Background */}
      <div className="relative mb-8 rounded-xl overflow-hidden">
        <div className="relative h-64">
          <Image
            src="https://picsum.photos/id/1057/2000/800"
            alt="Events header"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-4">Events</h1>
                <p className="text-gray-200 text-lg mb-6">
                  Create and manage your events, or join ones you&apos;re
                  invited to.
                </p>
                <Link href="/events/new">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100"
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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Event Card */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
                <h3 className="text-lg font-semibold mb-2">Create New Event</h3>
                <p className="text-gray-500 mb-4">
                  Start planning your next gathering
                </p>
                <Link href="/events/new">
                  <Button variant="outline">Get Started</Button>
                </Link>
              </div>
            </div>

            {/* Empty State Card */}
            <div className="relative overflow-hidden rounded-xl border bg-white p-4">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
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
                <h3 className="text-lg font-semibold mb-2">No Events Yet</h3>
                <p className="text-gray-500">
                  Create your first event to get started
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Invitations</h2>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
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
            <h3 className="text-lg font-semibold mb-2">No Invitations</h3>
            <p className="text-gray-500">
              When someone invites you to an event, it will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
