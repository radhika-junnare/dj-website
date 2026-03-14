export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Dnyanesh Dattatraya Junnare. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-1">Pune, India</p>
    </footer>
  );
}
