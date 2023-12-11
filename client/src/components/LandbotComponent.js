// LandbotComponent.js
import React, { useEffect } from "react";

const LandbotComponent = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;

        script.addEventListener("load", () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-1789396-7BRGKHDHRYUFRJ9Q/index.json",
          });
        });

        script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";

        const existingScript = document.getElementsByTagName("script")[0];
        existingScript.parentNode.insertBefore(script, existingScript);
      }
    };

    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    // Cleanup function
    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  return <div></div>;
};

export default LandbotComponent;
