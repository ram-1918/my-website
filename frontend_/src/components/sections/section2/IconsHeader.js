const styles = "text-lg font-light bg-purple-600 text-white p-1 rounded-lg";

const IconsHeader = ({setListType}) => (
  <div className={`flex justify-start items-center gap-2  small:w-full small:bg-white-100 mobile:w-full`}>
    <span className={styles} onClick={() => setListType('scroll')}>Scroll View</span>
    <span className={styles} onClick={() => setListType('list')}>List View</span>
  </div>
);

export default IconsHeader


// <div className={`${dark ? "text-black border-l-0" : "text-black border-l-4 border-l-rose-500"} text-xl font-bold px-2 small:w-full small:bg-white-100 mobile:w-full`}>
//   Scroll View | List View
// </div>