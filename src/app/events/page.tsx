import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div
      className="py-8 px-4"
      style={{ background: "linear-gradient(135deg, #FFE6C9, #FCC6FF20)" }}
    >
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFE6C9]/90 via-[#FCC6FF]/60 to-[#FFA09B]/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 gradient-text">
                  Your Events
                </h1>
                <p className="text-lg text-[#2D1810] mb-6">
                  Create, manage, and join events that bring people together
                </p>
                <Link href="/events/new">
                  <Button className="button-primary px-6 py-2 text-lg">
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
          <h2 className="text-2xl font-semibold mb-6 text-[#2D1810]">
            Your Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Event Card */}
            <div className="card group relative overflow-hidden rounded-xl border-2 border-dashed border-[#FCC6FF] p-6 hover:border-[#FFA09B] transition-all">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FCC6FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#FFA09B]/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-[#FFA09B] group-hover:text-[#FF8E88] transition-colors"
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
                <h3 className="text-lg font-semibold mb-2 text-[#2D1810]">
                  Create New Event
                </h3>
                <p className="text-[#2D1810]/70 mb-4">
                  Start planning your next gathering
                </p>
                <Link href="/events/new">
                  <Button className="button-secondary">Get Started</Button>
                </Link>
              </div>
            </div>

            {/* Empty State Card */}
            <div className="card relative overflow-hidden rounded-xl p-6">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFE6C9] flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#FFC785]"
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
                <h3 className="text-lg font-semibold mb-2 text-[#2D1810]">
                  No Events Yet
                </h3>
                <p className="text-[#2D1810]/70">
                  Create your first event to get started
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#2D1810]">
            Invitations
          </h2>
          <div className="card rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FCC6FF]/30 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#FFA09B]"
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
            <h3 className="text-lg font-semibold mb-2 text-[#2D1810]">
              No Invitations Yet
            </h3>
            <p className="text-[#2D1810]/70">
              When someone invites you to an event, it will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
