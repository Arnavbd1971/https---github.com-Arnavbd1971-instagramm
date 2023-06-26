import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home(session) {
  return (
    <div>
      {/* header */}
      <Header />

      {/* feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
}
