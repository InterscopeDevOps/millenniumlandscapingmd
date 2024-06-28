interface ButtonContent2Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
  }
  
  const ButtonContent_2: React.FC<ButtonContent2Props> = ({
    titleBtn,
    linkBtn,
    btnstyle,
    gmbUrl,
  }) => {
    return (
      <div>
        <a
          href={`${linkBtn ? linkBtn : "/contact"}`}
          className="capitalize"
          target={linkBtn && gmbUrl ? "_blank" : "_self"}
          aria-label={titleBtn ? titleBtn : "Free Estimate"}
        >
          <button className={btnstyle ? btnstyle : "cssbuttons-io-button"}>
            {titleBtn ? titleBtn : "Free Estimate"}
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
    );
  };
  export default ButtonContent_2;
  