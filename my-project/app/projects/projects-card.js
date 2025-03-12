import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function ProjectCard({ title, image, description, tags = [], href }) {
  return (
    <div
      className="
        bg-[#1c1c1c]
        rounded
        shadow
        overflow-hidden
        group
        transition-all
        duration-500
        hover:shadow-lg
      "
    >
      <div
        className="
          relative
          overflow-hidden
          h-40
          group-hover:h-50
          transition-all
          duration-300
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            object-top
            transition-transform
            duration-300
            group-hover:scale-105
          "
          
        />
      </div>

      <div className="p-4 relative">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-[#2f2f2f] text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute
              bottom-4
              right-4
              text-gray-300
              hover:text-white
              transition-colors
              hover:scale-105
            "
          >
            <MdArrowOutward className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
