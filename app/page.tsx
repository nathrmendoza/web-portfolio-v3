import { getGeneralInfo } from "@/sanity/sanity.query";
import { GeneralInfoType } from "@/types";

export default async function Home() {
  const generalInfo: GeneralInfoType[] = await getGeneralInfo();

  return (
    <main>
      {generalInfo && 
        generalInfo.map((data) => (
          <div className="hero">
            <h1>{data.fullName}</h1>
          </div>
        ))
      }
    </main>
  );
}
