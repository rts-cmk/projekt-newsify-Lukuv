import { useEffect, useState } from "react";
import "./onboarding.sass";

function Onboarding() {
  const [showGuide, setShowGuide] = useState(false);
  const [step, setStep] = useState(1);

  // Tjek om brugeren har gennemført guiden
  useEffect(() => {
    const hasCompletedGuide = localStorage.getItem("hasCompletedGuide");
    if (!hasCompletedGuide) {
      setShowGuide(true);
    }
  }, []);

  // Gå til næste trin
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      localStorage.setItem("hasCompletedGuide", "true");
      setShowGuide(false);
    }
  };

  // Spring guiden over
  const skipGuide = () => {
    localStorage.setItem("hasCompletedGuide", "true");
    setShowGuide(false);
  };

  return (
    <div className="OnboardingDiv">
      {showGuide && (
        <div className="OnboardingModal">
          <div className="OnboardingContent">
            {step === 1 && (
              <>
                <h2>Stay Connected, Everywhere, Anytime</h2>
                <p>
                  Welcome to Newsify, your ultimate destination for breaking
                  news, exclusive stories, and tailored content.
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Trin 2</h2>
                <p>Sådan bruger du hovedfunktionerne i appen.</p>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Trin 3</h2>
                <p>Sådan får du mest ud af din oplevelse!</p>
              </>
            )}

            <div className="OnboardingButtons">
              <button onClick={skipGuide} className="skipButton">
                Spring over
              </button>
              <button onClick={nextStep} className="nextButton">
                {step < 3 ? "Næste" : "Afslut"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
