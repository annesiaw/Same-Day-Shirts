import Image from 'next/image'

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display text-center mb-12">About Us</h1>

        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Same Day Shirts and Transfers, we empower creatives, clothing brands, and organizations by delivering high-quality custom apparel and DTF transfers—fast. Our mission is to bring your vision to life with same-day printing, bold designs, and fresh fits that make every moment stand out.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Speed</h3>
            <p>Same-day turnaround for all orders, because we know time is valuable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quality</h3>
            <p>Premium materials and printing techniques for lasting results.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Creativity</h3>
            <p>Supporting artists and designers in bringing their visions to life.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <p className="text-lg leading-relaxed mb-8">
            Our team of experienced designers and printing specialists is dedicated to providing exceptional service and quality products. We combine traditional craftsmanship with modern technology to deliver the best results for our customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/team-placeholder-1.jpg"
                  alt="Team member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & Lead Designer</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/team-placeholder-2.jpg"
                  alt="Team member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Printing Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 