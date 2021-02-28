import { useEffect } from "react";
import { useRouter } from "next/router";

const AdNewsRecommed = () => {
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
        data-ad-format="fluid"
        data-ad-layout-key="-i6+4-s-8j+kv"
        data-ad-client="ca-pub-2743431608715099"
        data-ad-slot="8735068042"
      ></ins>
    </div>
  );
};
export default AdNewsRecommed;
