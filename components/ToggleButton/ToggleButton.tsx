import { useContext } from "react";
import { Context } from "utils/context";

const ToggleButton: React.VFC<any> = () => {
  const { state, dispatch }: any = useContext(Context);
  const { isDarkMode } = state;
  const toggleMenu = () => {
    if (isDarkMode) {
      dispatch({
        type: "TOGGLE_LIGHT_MODE",
      });
    } else if (!isDarkMode) {
      dispatch({
        type: "TOGGLE_DARK_MODE",
      });
    }
  };
  return (
    <div
      className="absolute top-1 left-3 z-50 rounded-full border border-[#f4ab03] p-2 md:top-5 lg:fixed"
      onClick={() => toggleMenu()}
    >
      <button
        id="toggle_mode"
        aria-label="toggle_mode"
        className="flex h-5 w-5 items-center justify-center"
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f4ab03"
            className="h-8 w-8"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f4ab03"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
export default ToggleButton;
