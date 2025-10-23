import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ELearning from "./pages/ELearning";
import PinLogin from "./pages/PinLogin";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/elearning"} component={ELearning} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("divalaser_auth");
    const authTime = localStorage.getItem("divalaser_auth_time");

    if (authStatus === "true" && authTime) {
      const timeSinceAuth = Date.now() - parseInt(authTime);
      // Session expires after 24 hours
      if (timeSinceAuth < 24 * 60 * 60 * 1000) {
        setIsAuthenticated(true);
      } else {
        // Clear expired session
        localStorage.removeItem("divalaser_auth");
        localStorage.removeItem("divalaser_auth_time");
      }
    }
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // Export logout function to window for use in components
  useEffect(() => {
    (window as any).divalaser_logout = () => {
      localStorage.removeItem("divalaser_auth");
      localStorage.removeItem("divalaser_auth_time");
      setIsAuthenticated(false);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="text-yellow-400 text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PinLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

