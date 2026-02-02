import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background relative z-50">
      <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
