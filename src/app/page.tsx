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
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Plan Events With Friends, Effortlessly
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Stop struggling with scheduling conflicts. Find the perfect time
              for everyone with our smart event planning tools.
            </p>
            <div className="flex gap-4">
              <Link href="/events/new">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Create Event
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Plan Perfect Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative h-60 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1006/800/600"
                  alt="Smart Scheduling"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
              <p className="text-gray-600">
                Automatically find the best time that works for everyone with
                our intelligent scheduling system.
              </p>
            </div>

            <div className="group">
              <div className="relative h-60 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1045/800/600"
                  alt="Real-time Updates"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications about event changes and keep everyone
                in sync.
              </p>
            </div>

            <div className="group">
              <div className="relative h-60 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1081/800/600"
                  alt="Calendar Integration"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Calendar Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly sync with your favorite calendar apps to avoid
                scheduling conflicts.
              </p>
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already using Ampisoa Planner to
            organize better events.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
