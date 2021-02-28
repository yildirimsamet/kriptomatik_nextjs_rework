import { useEffect } from "react";
import { useRouter } from "next/router";

const AdBanner = () => {
  const router = useRouter();

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [router.query.url]);

  return (
    <div key={router.query.url}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2743431608715099"
        data-ad-slot="7649943435"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
export default AdBanner;
