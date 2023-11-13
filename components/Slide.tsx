import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import { Post } from "@/models/Post";

interface SlideProps {
  data: Post;
}
const Slide = ({ data }: SlideProps) => {
  // const res = await fetch("/api/category");
  // const category: Array<string> = await res.json();
  const { title, subtitle, category, img, description, published, author } =
    data;

  return (
    <div className="grid md:grid-cols-2 gap-2">
      <div className="image px-5">
        <Link href={"#"}>
          <Image
            src={img || "/images/img1.png"}
            alt={""}
            width={"600"}
            height={"600"}
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            {category || "Uncategorized"}
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            {published || "Jan 1, 1970"}
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 py-3"
          >
            {title || "Unknown Title"}
          </Link>
        </div>
        <p className="description text-gray-500 py-3">
          {description ||
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas cum? Cupiditate! "}
        </p>

        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
};

export default Slide;
