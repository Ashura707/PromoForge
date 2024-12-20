import Header from "@/app/components/Header";
import UploadSection from "@/app/components/UploadSection";
import PreviewModal from "@/app/components/PreviewModal";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-black text-white p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header Component */}
      <Header />

      {/* Main Content - Upload Section and Preview Modal */}
      <main className="flex flex-col sm:flex-row items-start justify-center gap-8 w-full max-w-6xl">
        <section className="flex-1">
          <UploadSection />
        </section>
        <aside className="w-full max-w-sm">
          <PreviewModal />
        </aside>
      </main>
    </div>
  );
}
