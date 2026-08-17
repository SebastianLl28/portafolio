import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LockIcon,
} from "@/components/icons";
import { Project } from "../data/data";

interface CardProps extends Project {
  index: number;
}

const Card = ({
  index,
  title,
  context,
  description,
  github,
  demo,
  image,
  tags,
  isPrivate,
  imageZoomOutOnHover,
}: CardProps) => {
  return (
    <article
      className={`flex w-full flex-col gap-6 lg:items-center lg:gap-14 ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="group relative overflow-hidden rounded-xl border border-line lg:w-1/2">
        <Image
          src={image}
          alt={`Captura de pantalla: ${title}`}
          className={`aspect-[16/10] w-full object-cover transition-transform duration-500 ${
            imageZoomOutOnHover
              ? "scale-110 object-left-top group-hover:scale-100"
              : "object-top group-hover:scale-[1.03]"
          }`}
        />
      </div>
      <div className="lg:w-1/2">
        <p className="eyebrow">{context}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4 text-sm">
          {isPrivate ? (
            <span className="flex items-center gap-1.5 text-muted">
              <LockIcon />
              Código privado — desarrollado para la empresa
            </span>
          ) : (
            <>
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="flex items-center gap-1.5 text-white transition-colors hover:text-primary"
                >
                  <GitHubIcon size={16} />
                  Ver código
                </Link>
              )}
              {demo && (
                <Link
                  href={demo}
                  target="_blank"
                  className="flex items-center gap-1.5 text-white transition-colors hover:text-primary"
                >
                  Ver demo
                  <ArrowUpRightIcon size={14} />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
