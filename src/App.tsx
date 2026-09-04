/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Statement } from "./components/Statement";
import { BentoGrid } from "./components/BentoGrid";
import { Performance } from "./components/Performance";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-neutral-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <main>
        <Hero />
        <Statement />
        <BentoGrid />
        <Performance />
      </main>
      <Footer />
    </div>
  );
}
