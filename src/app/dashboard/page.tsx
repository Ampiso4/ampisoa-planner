import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div
      className="pb-8"
      style={{ background: "linear-gradient(135deg, #FFE6C9, #FCC6FF20)" }}
    >
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] mb-8 rounded-b-[32px] overflow-hidden">
        <Image
          src="https://picsum.photos/id/1058/2000/800"
          alt="Dashboard hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFE6C9]/90 via-[#FCC6FF]/60 to-[#FFA09B]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2D1810] mb-4">
                Welcome back, User!
              </h1>
              <p className="text-[#2D1810]/80 text-lg">
                Here&apos;s what&apos;s happening with your events
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Events Card */}
          <div className="card group relative overflow-hidden rounded-[24px]">
            <div className="relative h-48 rounded-t-[24px] overflow-hidden">
              <Image
                src="https://picsum.photos/id/1042/800/600"
                alt="Calendar"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFE6C9]/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-[#2D1810] mb-1">
                  Upcoming Events
                </h2>
                <p className="text-[#2D1810]/80 text-sm">Your next 7 days</p>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <p className="text-[#2D1810]/70 text-sm">
                  No upcoming events this week
                </p>
                <Link href="/events/new">
                  <Button className="button-primary w-full rounded-xl">
                    Schedule New Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pending Invitations Card */}
          <div className="card group relative overflow-hidden rounded-[24px]">
            <div className="relative h-48 rounded-t-[24px] overflow-hidden">
              <Image
                src="https://picsum.photos/id/1066/800/600"
                alt="Invitations"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFE6C9]/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-[#2D1810] mb-1">
                  Pending Invitations
                </h2>
                <p className="text-[#2D1810]/80 text-sm">
                  Events you&apos;re invited to
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#2D1810]/70 text-sm">
                No pending invitations
              </p>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="card group relative overflow-hidden rounded-[24px]">
            <div className="relative h-48 rounded-t-[24px] overflow-hidden">
              <Image
                src="https://picsum.photos/id/1059/800/600"
                alt="Activity"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFE6C9]/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-[#2D1810] mb-1">
                  Recent Activity
                </h2>
                <p className="text-[#2D1810]/80 text-sm">Latest updates</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#2D1810]/70 text-sm">No recent activity</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card p-6 text-center rounded-[20px]">
                <div className="w-12 h-12 rounded-full bg-[#FCC6FF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#FFA09B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2D1810]">0</h3>
                <p className="text-[#2D1810]/60 text-sm">Total Events</p>
              </div>

              <div className="card p-6 text-center rounded-[20px]">
                <div className="w-12 h-12 rounded-full bg-[#FCC6FF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#FFA09B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2D1810]">0</h3>
                <p className="text-[#2D1810]/60 text-sm">Participants</p>
              </div>

              <div className="card p-6 text-center rounded-[20px]">
                <div className="w-12 h-12 rounded-full bg-[#FCC6FF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#FFA09B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2D1810]">0</h3>
                <p className="text-[#2D1810]/60 text-sm">Upcoming</p>
              </div>

              <div className="card p-6 text-center rounded-[20px]">
                <div className="w-12 h-12 rounded-full bg-[#FCC6FF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#FFA09B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2D1810]">0</h3>
                <p className="text-[#2D1810]/60 text-sm">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
