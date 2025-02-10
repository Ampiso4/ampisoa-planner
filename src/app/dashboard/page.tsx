import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="py-8 px-4">
      {/* Header Section */}
      <div className="container mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, User!</h1>
        <p className="text-gray-600">
          Here&apos;s what&apos;s happening with your events
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Events Card */}
          <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://picsum.photos/id/1042/800/600"
                alt="Calendar"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-white mb-1">
                  Upcoming Events
                </h2>
                <p className="text-gray-200 text-sm">Your next 7 days</p>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  No upcoming events this week
                </p>
                <Link href="/events/new">
                  <Button variant="outline" className="w-full">
                    Schedule New Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pending Invitations Card */}
          <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://picsum.photos/id/1066/800/600"
                alt="Invitations"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-white mb-1">
                  Pending Invitations
                </h2>
                <p className="text-gray-200 text-sm">
                  Events you&apos;re invited to
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">No pending invitations</p>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://picsum.photos/id/1059/800/600"
                alt="Activity"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-white mb-1">
                  Recent Activity
                </h2>
                <p className="text-gray-200 text-sm">Latest updates</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">No recent activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
