import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--cream)] text-[var(--forest)] font-sans">
      <h2 className="font-cormorant text-6xl mb-4">404</h2>
      <p className="font-dmsans text-xl mb-8">Halaman Tidak Ditemukan</p>
      <Link 
        href="/"
        className="bg-[var(--gold)] text-[var(--forest)] font-dmsans uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[var(--moss)] hover:text-[var(--cream)] transition-colors duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
