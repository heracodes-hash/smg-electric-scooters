import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PlaceholderPage() {
  const location = useLocation();

  const pageName = location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{pageName}</h1>
          <p className="text-muted-foreground mt-2">
            This page is coming soon!
          </p>
        </div>
      </div>

      <Card className="p-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
            <span className="text-3xl">🚀</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Ready to build {pageName}?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              This section is waiting for you to ask me to build it. Describe what
              you'd like to see here!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
