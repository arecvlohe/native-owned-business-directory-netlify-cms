import { Card } from "./Card"

export default function Business({
  name,
  address,
  slug,
  description,
  links,
  tags,
  thumbnail,
}) {
  const imgSrc = thumbnail.startsWith("http") ? thumbnail : `/${thumbnail}`

  return (
    <Card>
      <div className="flex flex-row flex-shrink overflow-hidden border-b rounded-t border-slate-600 lg:border-0 lg:rounded-none lg:border-r lg:w-1/2 h-80">
        <img
          className="self-center object-cover w-full h-full max-w-full"
          src={imgSrc}
        />
      </div>
      <div className="flex flex-col flex-1 flex-grow w-full p-6">
        <header>
          <div className="flex flex-row justify-between w-full mb-1 text-sm text-slate-800">
            <div className="flex justify-between flex-grow w-100">
              <div className="affiliation">Osage</div>
            </div>
            <div className="location">
              <a href="https://www.google.com/maps/place/36.1555805,-95.992789">
                {address}
              </a>
            </div>
          </div>
          <a
            href={`/businesses/${slug}`}
            className="block pb-1 mb-1 text-xl font-bold border-b router-link-exact-active router-link-active"
          >
            {name}
          </a>
        </header>
        <div className="flex-grow mb-6 text-sm lg:mb-0">
          <div>{description}</div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end">
          <div className="flex flex-row flex-grow mb-6 text-sm align-baseline lg:mb-0">
            {tags?.map((tag) => (
              <span
                className={`box-border whitespace-no-wrap text-gray-500 pr-2 flex-end tag-${tag.name}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-3 text-sm align-baseline flex-end">
            {links?.map((link) => (
              <a
                href={link.url}
                title={link.url}
                target="_blank"
                className="inline-block px-6 py-2 rounded button-knockout"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
