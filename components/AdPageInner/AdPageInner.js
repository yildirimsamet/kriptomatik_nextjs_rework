import { useEffect } from "react";
import { useRouter } from "next/router";

const AdPageInner = () => {
  const router = useRouter();

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [router.query.url]);

  return (
    <div key={router.query.url}>
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-dm-7y+ef+h4-17n"
        data-ad-client="ca-pub-2743431608715099"
        data-ad-slot="1079298673"
      ></ins>
    </div>
  );
};
export default AdPageInner;
