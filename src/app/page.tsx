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
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-fuchsia-200/40 to-purple-300/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-900 to-fuchsia-600 bg-clip-text text-transparent">
              Plan Events With Friends, Effortlessly
            </h1>
            <p className="text-xl mb-8 text-purple-900">
              Stop struggling with scheduling conflicts. Find the perfect time
              for everyone with our smart event planning tools.
            </p>
            <div className="flex gap-4">
              <Link href="/events/new">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Create Event
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Everything You Need to Plan Perfect Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative h-60 mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1006/800/600"
                  alt="Smart Scheduling"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-hover:from-fuchsia-100/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-purple-900">
                    Smart Scheduling
                  </h3>
                  <p className="text-purple-700">
                    Find the perfect time that works for everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative h-60 mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1045/800/600"
                  alt="Real-time Updates"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-hover:from-fuchsia-100/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-purple-900">
                    Real-time Updates
                  </h3>
                  <p className="text-purple-700">
                    Stay synchronized with instant notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative h-60 mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1081/800/600"
                  alt="Calendar Integration"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-hover:from-fuchsia-100/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-purple-900">
                    Calendar Integration
                  </h3>
                  <p className="text-purple-700">
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
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-fuchsia-100/60 to-purple-200/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already using Ampisoa Planner to
            organize better events.
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
