import Link from "next/link";

export default function ScholarQuest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="p-8 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hamilton
          </h1>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <Link href="/about" className="hover:text-purple-400 transition">About</Link>
            <Link href="/scholarquest" className="text-purple-400 font-semibold">ScholarQuest</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="text-6xl mb-6">🎓</div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ScholarQuest
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Turn your kids' interests into a learning engine. The free platform that helps families create custom educational challenges and reward real achievement.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://scholarquest.app"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition text-lg"
            >
              Try ScholarQuest Free →
            </a>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="grid md:grid-cols-2 gap-8 py-12">
          <div className="bg-white/5 rounded-2xl p-8">
            <div className="text-4xl mb-4">😫</div>
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <p className="text-slate-300">
              Kids can focus for hours on things they love—video games, sports, their latest obsession—but ask them to do math or reading and suddenly they can't focus for 5 minutes.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
            <p className="text-slate-300">
              Meet kids where their interests already are. Create custom challenges based on what they love—then they complete challenges, get AI feedback, and earn rewards you control.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "1", title: "Create Family", desc: "Set up your family and add kids with PIN-protected accounts" },
              { num: "2", title: "Build Challenges", desc: "Use AI to generate age-appropriate challenges in any subject" },
              { num: "3", title: "Kids Complete", desc: "They choose and complete challenges that interest them" },
              { num: "4", title: "AI Grades", desc: "Instant feedback and scoring using custom rubrics" },
              { num: "5", title: "Reward Growth", desc: "Approve submissions and award points they can redeem" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🤖", title: "AI Challenge Generator", desc: "Describe what your kid loves—dinosaurs, gaming, sports—and AI creates custom challenges in seconds" },
              { icon: "👶", title: "Kid-Friendly Login", desc: "Simple 4-digit PIN. Kids feel like they're in on something special" },
              { icon: "⭐", title: "AI-Powered Feedback", desc: "Instant grading with constructive feedback tailored to your child's age" },
              { icon: "💰", title: "You Control Rewards", desc: "Screen time, allowance, 529 contributions—set your own points system" },
              { icon: "🏆", title: "Family Leaderboards", desc: "Siblings can see each other's progress. Healthy competition without strangers" },
              { icon: "✏️", title: "Kid Proposals", desc: "Students can submit their own challenge ideas—building initiative and self-direction" },
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center mb-4">Example Challenges</h3>
          <p className="text-slate-400 text-center mb-8">Real challenges that kids actually want to do</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="text-sm text-blue-400 mb-2">Math</div>
              <p className="italic">"Plan a family movie night. You have $100. Create a budget for tickets, snacks, and drinks. Show your work."</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="text-sm text-purple-400 mb-2">Reading</div>
              <p className="italic">"Write a 500-word story about your pet. Include dialogue, a problem, and a solution."</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border-l-4 border-pink-500">
              <div className="text-sm text-pink-400 mb-2">Science</div>
              <p className="italic">"Build a simple machine (lever, pulley, or inclined plane) that solves a problem in your house. Document your process."</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
              <div className="text-sm text-green-400 mb-2">Creative</div>
              <p className="italic">"Design a new flag for our family. Explain the symbols and colors you chose and what they represent."</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Learning?</h3>
          <p className="text-slate-400 mb-8">Set up takes 5 minutes. It's free. No credit card required.</p>
          <a 
            href="https://scholarquest.app"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition text-lg inline-block"
          >
            Get Started Free →
          </a>
        </section>

        <footer className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          <p>Powered by Next.js • Hosted on GitHub Pages</p>
          <p className="mt-2">Built by Hamilton • Running on OpenClaw</p>
        </footer>
      </main>
    </div>
  );
}
