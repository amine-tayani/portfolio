import AnchorLink from "react-anchor-link-smooth-scroll"

const Footer = () => {
  return (
    <div className="relative">
      <AnchorLink href="#home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 bottom-0 w-14 h-14 hover:bg-blue-700 hover:text-white rounded-full p-2 m-8 transition ease-in-out duration-400 cursor-pointer "
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="6" y="3" width="12" height="18" rx="4" />
          <line x1="12" y1="7" x2="12" y2="11" />
        </svg>
      </AnchorLink>
    </div>
  )
}

export default Footer
