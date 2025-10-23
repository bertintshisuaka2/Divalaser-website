import { useState } from "react";
import { Lock } from "lucide-react";

const CORRECT_PIN = "1234"; // Change this to your desired 4-digit PIN

interface PinLoginProps {
  onLoginSuccess: () => void;
}

export default function PinLogin({ onLoginSuccess }: PinLoginProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 4) {
      setPin(value);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a brief loading state
    setTimeout(() => {
      if (pin === CORRECT_PIN) {
        // Store authentication in localStorage
        localStorage.setItem("divalaser_auth", "true");
        localStorage.setItem("divalaser_auth_time", Date.now().toString());
        onLoginSuccess();
      } else {
        setError(
          "The PIN is incorrect. For assistance, please call or TEXT The Developer BERTIN TSHISUAKA at 001-678-979-6811"
        );
        setPin("");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
              <Lock className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-yellow-400 mb-2">
              Divalaser Software Solutions
            </h1>
            <p className="text-white/80">Enter your 4-digit PIN to access</p>
          </div>

          {/* PIN Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="pin" className="block text-white font-medium mb-2">
                Security PIN
              </label>
              <input
                id="pin"
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                value={pin}
                onChange={handlePinChange}
                placeholder="••••"
                className="w-full px-4 py-3 text-center text-2xl tracking-widest bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                autoFocus
                disabled={isLoading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <p className="text-red-200 text-sm text-center leading-relaxed">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={pin.length !== 4 || isLoading}
              className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Access Website"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Empowering Africa Through Digital Innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

