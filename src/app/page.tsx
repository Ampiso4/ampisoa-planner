import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/id/1076/2000/1000"
            alt="Hero background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE6C9]/90 via-[#FCC6FF]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight gradient-text">
              Plan Events With Friends, Effortlessly
            </h1>
            <p className="text-xl mb-8 text-[#2D1810]">
              Stop struggling with scheduling conflicts. Find the perfect time
              for everyone with our smart event planning tools.
            </p>
            <div className="flex gap-4">
              <Link href="/events/new">
                <Button className="button-primary px-8 py-3 text-lg">
                  Create Event
                </Button>
              </Link>
              <Link href="/login">
                <Button className="button-secondary px-8 py-3 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #FFE6C9, #FCC6FF20)" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Everything You Need to Plan Perfect Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="card relative h-60 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1006/800/600"
                  alt="Smart Scheduling"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFE6C9]/90 to-transparent group-hover:from-[#FFC785]/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-[#2D1810]">
                    Smart Scheduling
                  </h3>
                  <p className="text-[#2D1810]/80">
                    Find the perfect time that works for everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="card relative h-60 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1045/800/600"
                  alt="Real-time Updates"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFE6C9]/90 to-transparent group-hover:from-[#FFC785]/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-[#2D1810]">
                    Real-time Updates
                  </h3>
                  <p className="text-[#2D1810]/80">
                    Stay synchronized with instant notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="card relative h-60 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1081/800/600"
                  alt="Calendar Integration"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFE6C9]/90 to-transparent group-hover:from-[#FFC785]/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-[#2D1810]">
                    Calendar Integration
                  </h3>
                  <p className="text-[#2D1810]/80">
                    Sync seamlessly with your favorite calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/id/1070/2000/1000"
            alt="CTA background"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE6C9]/90 via-[#FCC6FF]/70 to-[#FFA09B]/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-[#2D1810] mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-[#2D1810]/80 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already using Ampisoa Planner to
            organize better events.
          </p>
          <Link href="/register">
            <Button className="button-primary px-8 py-3 text-lg">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
